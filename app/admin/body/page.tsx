"use client"

import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { signOut } from "next-auth/react"
import Link from "next/link"
import {
  LogOut,
  Settings,
  Activity,
  Scale,
  Bone,
  AlertTriangle,
  Target,
  Dumbbell,
  TrendingDown,
  Flame,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Users,
  Zap,
  Heart,
} from "lucide-react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
  Legend,
  Tooltip,
} from "recharts"
import BodyVisualization from "@/components/body-visualization"
import { getDexaScanData } from "@/lib/mock/dexa-scan-data"
import { analyzeDexaScan } from "@/lib/dexa-analysis"
import type { DexaAnalysis } from "@/lib/types/dexa-scan"

function getSeverityColor(severity: string) {
  switch (severity) {
    case "significant": return "text-red-400 bg-red-500/10 border-red-500/20"
    case "moderate": return "text-orange-400 bg-orange-500/10 border-orange-500/20"
    case "minor": return "text-yellow-400 bg-yellow-500/10 border-yellow-500/20"
    default: return "text-slate-400 bg-slate-500/10 border-slate-500/20"
  }
}

function getSeverityBadge(severity: string) {
  switch (severity) {
    case "significant": return "bg-red-500/20 text-red-400"
    case "moderate": return "bg-orange-500/20 text-orange-400"
    case "minor": return "bg-yellow-500/20 text-yellow-400"
    default: return "bg-slate-500/20 text-slate-400"
  }
}

function getPriorityColor(priority: string) {
  switch (priority) {
    case "high": return "bg-red-500/10 border-red-500/20"
    case "medium": return "bg-blue-500/10 border-blue-500/20"
    case "low": return "bg-slate-500/10 border-slate-500/20"
    default: return "bg-slate-500/10 border-slate-500/20"
  }
}

function getPriorityBadge(priority: string) {
  switch (priority) {
    case "high": return "bg-red-500/20 text-red-400"
    case "medium": return "bg-blue-500/20 text-blue-400"
    case "low": return "bg-slate-500/20 text-slate-400"
    default: return "bg-slate-500/20 text-slate-400"
  }
}

export default function BodyCompositionPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [analysis, setAnalysis] = useState<DexaAnalysis | null>(null)
  const [expandedPhase, setExpandedPhase] = useState<number>(0)
  const [expandedRec, setExpandedRec] = useState<number>(0)

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login")
    }
  }, [status, router])

  useEffect(() => {
    const scan = getDexaScanData()
    const result = analyzeDexaScan(scan)
    setAnalysis(result)
  }, [])

  if (status === "loading" || !analysis) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-400">Loading body composition data...</p>
      </div>
    )
  }

  if (status === "unauthenticated") return null

  const { scan, imbalances, weightLossPlan, trainingRecommendations } = analysis

  // Data for composition pie chart
  const compositionData = [
    { name: "Fat Mass", value: scan.totalFatMass, fill: "#f97316" },
    { name: "Lean Mass", value: scan.totalLeanPlusBmc, fill: "#3b82f6" },
  ]

  // Data for regional bar chart
  const regionalBarData = scan.regions
    .filter((r) => !["Android", "Gynoid"].includes(r.region))
    .map((r) => ({
      region: r.region,
      fatPercent: r.percentFat,
      fatMass: r.fatMass,
      leanMass: r.leanPlusBmc,
    }))

  // Data for regional fat comparison
  const fatComparisonData = scan.regions
    .filter((r) => !["Android", "Gynoid"].includes(r.region))
    .map((r) => ({
      region: r.region,
      "% Fat": r.percentFat,
    }))

  return (
    <div className="min-h-screen bg-[#0B1120]">
      {/* Header */}
      <header className="border-b border-slate-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">Body Composition</h1>
              <p className="text-xs text-slate-500">{session?.user?.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/admin/dashboard"
              className="flex items-center gap-2 px-3 py-2 text-slate-400 hover:text-white text-sm transition-colors"
            >
              <Users size={16} />
              Contacts
            </Link>
            <Link
              href="/admin/settings"
              className="flex items-center gap-2 px-3 py-2 text-slate-400 hover:text-white text-sm transition-colors"
            >
              <Settings size={16} />
            </Link>
            <button
              onClick={() => signOut({ callbackUrl: "/admin/login" })}
              className="flex items-center gap-2 px-3 py-2 text-slate-400 hover:text-white text-sm transition-colors"
            >
              <LogOut size={16} />
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8 space-y-8">
        {/* Scan Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white">DEXA Scan Results</h2>
            <p className="text-slate-400 text-sm mt-1">
              {scan.patientName} &middot; {scan.sex}, Age {scan.age} &middot; {scan.heightInches}&quot; / {scan.weightLbs} lb &middot; Scanned {new Date(scan.scanDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-center px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg">
              <p className="text-xl font-bold text-white">{scan.bmi}</p>
              <p className="text-xs text-slate-500">BMI</p>
            </div>
            <div className="text-center px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg">
              <p className="text-xl font-bold text-orange-400">{scan.totalBodyFatPercent}%</p>
              <p className="text-xs text-slate-500">Body Fat</p>
            </div>
            <div className="text-center px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg">
              <p className="text-xl font-bold text-green-400">{scan.tScore}</p>
              <p className="text-xs text-slate-500">T-Score</p>
            </div>
          </div>
        </div>

        {/* Top Row: Body Map + Composition Overview */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Body Visualization */}
          <Card className="bg-slate-800/50 border-slate-700/50 text-white">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-gradient-to-br from-orange-500 to-red-600 p-2">
                  <Activity size={18} className="text-white" />
                </div>
                <CardTitle className="text-lg font-bold">Body Map</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <BodyVisualization
                regions={scan.regions}
                totalBodyFat={scan.totalBodyFatPercent}
              />
            </CardContent>
          </Card>

          {/* Composition Overview */}
          <Card className="bg-slate-800/50 border-slate-700/50 text-white">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 p-2">
                  <Scale size={18} className="text-white" />
                </div>
                <CardTitle className="text-lg font-bold">Composition Overview</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Pie Chart */}
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={compositionData}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={3}
                      dataKey="value"
                      stroke="none"
                    >
                      {compositionData.map((entry, index) => (
                        <Cell key={index} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #475569", borderRadius: "8px" }}
                      itemStyle={{ color: "#e2e8f0" }}
                      formatter={(value: number) => [`${value.toFixed(1)} lb`, ""]}
                    />
                    <Legend
                      wrapperStyle={{ fontSize: "12px" }}
                      formatter={(value) => <span className="text-slate-300">{value}</span>}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/30">
                  <p className="text-xs text-slate-500">Fat Mass</p>
                  <p className="text-lg font-bold text-orange-400">{scan.totalFatMass} lb</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/30">
                  <p className="text-xs text-slate-500">Lean + BMC</p>
                  <p className="text-lg font-bold text-blue-400">{scan.totalLeanPlusBmc} lb</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/30">
                  <p className="text-xs text-slate-500">Lean Index</p>
                  <p className="text-lg font-bold text-white">{scan.leanIndices.leanHeightSquared} <span className="text-xs text-slate-500">kg/m²</span></p>
                  <p className="text-xs text-green-400 mt-0.5">{scan.leanIndices.percentileYN}th percentile</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/30">
                  <p className="text-xs text-slate-500">Appendicular Lean</p>
                  <p className="text-lg font-bold text-white">{scan.leanIndices.appendicularLeanHeightSquared} <span className="text-xs text-slate-500">kg/m²</span></p>
                  <p className="text-xs text-green-400 mt-0.5">{scan.leanIndices.percentileAM}th percentile</p>
                </div>
              </div>

              {/* Adipose Indices */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Adipose Indices</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex justify-between bg-slate-900/30 rounded px-3 py-2">
                    <span className="text-slate-400">A/G Ratio</span>
                    <span className="text-white font-medium">{scan.adiposeIndices.androidGynoidRatio}</span>
                  </div>
                  <div className="flex justify-between bg-slate-900/30 rounded px-3 py-2">
                    <span className="text-slate-400">Trunk/Legs</span>
                    <span className="text-white font-medium">{scan.adiposeIndices.trunkLegsFatRatio}</span>
                  </div>
                  <div className="flex justify-between bg-slate-900/30 rounded px-3 py-2">
                    <span className="text-slate-400">VAT Mass</span>
                    <span className="text-white font-medium">{scan.adiposeIndices.estVatMass}g</span>
                  </div>
                  <div className="flex justify-between bg-slate-900/30 rounded px-3 py-2">
                    <span className="text-slate-400">VAT Area</span>
                    <span className="text-white font-medium">{scan.adiposeIndices.estVatArea} cm²</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Regional Breakdown Chart */}
        <Card className="bg-slate-800/50 border-slate-700/50 text-white">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 p-2">
                <Activity size={18} className="text-white" />
              </div>
              <CardTitle className="text-lg font-bold">Regional Body Fat %</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={fatComparisonData} barCategoryGap="20%">
                  <XAxis
                    dataKey="region"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#94a3b8", fontSize: 12 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#64748b", fontSize: 11 }}
                    domain={[0, 35]}
                    tickFormatter={(v) => `${v}%`}
                  />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #475569", borderRadius: "8px" }}
                    itemStyle={{ color: "#e2e8f0" }}
                    formatter={(value: number) => [`${value}%`, "Body Fat"]}
                  />
                  <Bar dataKey="% Fat" radius={[4, 4, 0, 0]}>
                    {fatComparisonData.map((entry, index) => (
                      <Cell
                        key={index}
                        fill={
                          entry["% Fat"] >= 28 ? "#f97316" :
                          entry["% Fat"] >= 24 ? "#eab308" :
                          "#22c55e"
                        }
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Regional table */}
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-slate-500 border-b border-slate-700/50">
                    <th className="text-left py-2 pr-4 font-medium">Region</th>
                    <th className="text-right py-2 px-3 font-medium">Fat (lb)</th>
                    <th className="text-right py-2 px-3 font-medium">Lean (lb)</th>
                    <th className="text-right py-2 px-3 font-medium">Total (lb)</th>
                    <th className="text-right py-2 px-3 font-medium">% Fat</th>
                    <th className="text-right py-2 pl-3 font-medium">Percentile</th>
                  </tr>
                </thead>
                <tbody>
                  {scan.regions.filter(r => !["Android", "Gynoid"].includes(r.region)).map((r) => (
                    <tr key={r.region} className="border-b border-slate-700/30">
                      <td className="py-2.5 pr-4 text-slate-300 font-medium">{r.region}</td>
                      <td className="py-2.5 px-3 text-right text-orange-400">{r.fatMass}</td>
                      <td className="py-2.5 px-3 text-right text-blue-400">{r.leanPlusBmc}</td>
                      <td className="py-2.5 px-3 text-right text-slate-300">{r.totalMass}</td>
                      <td className="py-2.5 px-3 text-right">
                        <span className={
                          r.percentFat >= 28 ? "text-orange-400" :
                          r.percentFat >= 24 ? "text-yellow-400" :
                          "text-green-400"
                        }>
                          {r.percentFat}%
                        </span>
                      </td>
                      <td className="py-2.5 pl-3 text-right text-slate-400">
                        {r.percentileYN ? `${r.percentileYN}th` : "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Bone Density */}
        <Card className="bg-slate-800/50 border-slate-700/50 text-white">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 p-2">
                <Bone size={18} className="text-white" />
              </div>
              <div>
                <CardTitle className="text-lg font-bold">Bone Density</CardTitle>
                <p className="text-xs text-slate-400 mt-0.5">T-Score: {scan.tScore} &middot; Z-Score: {scan.zScore} &middot; Total BMD: {scan.totalBmd} g/cm²</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-slate-500 border-b border-slate-700/50">
                    <th className="text-left py-2 pr-4 font-medium">Region</th>
                    <th className="text-right py-2 px-3 font-medium">Area (cm²)</th>
                    <th className="text-right py-2 px-3 font-medium">BMC (g)</th>
                    <th className="text-right py-2 pl-3 font-medium">BMD (g/cm²)</th>
                  </tr>
                </thead>
                <tbody>
                  {scan.boneDensity.map((r) => (
                    <tr key={r.region} className="border-b border-slate-700/30">
                      <td className="py-2.5 pr-4 text-slate-300 font-medium">{r.region}</td>
                      <td className="py-2.5 px-3 text-right text-slate-400">{r.area}</td>
                      <td className="py-2.5 px-3 text-right text-slate-400">{r.bmc}</td>
                      <td className="py-2.5 pl-3 text-right">
                        <span className={
                          r.bmd >= 1.2 ? "text-green-400" :
                          r.bmd >= 0.9 ? "text-blue-400" :
                          "text-yellow-400"
                        }>
                          {r.bmd}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Imbalances */}
        {imbalances.length > 0 && (
          <Card className="bg-slate-800/50 border-slate-700/50 text-white">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-gradient-to-br from-yellow-500 to-orange-600 p-2">
                  <AlertTriangle size={18} className="text-white" />
                </div>
                <div>
                  <CardTitle className="text-lg font-bold">Detected Imbalances</CardTitle>
                  <p className="text-xs text-slate-400 mt-0.5">{imbalances.length} asymmetr{imbalances.length === 1 ? "y" : "ies"} detected between left and right sides</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {imbalances.map((imb, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 rounded-lg p-4 border ${getSeverityColor(imb.severity)}`}
                >
                  <div className="mt-0.5">
                    {imb.type === "fat" && <Flame size={16} />}
                    {imb.type === "lean" && <Dumbbell size={16} />}
                    {imb.type === "bone" && <Bone size={16} />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${getSeverityBadge(imb.severity)}`}>
                        {imb.severity}
                      </span>
                      <span className="text-xs text-slate-500 uppercase">{imb.type} mass</span>
                      <span className="text-xs text-slate-500">&middot; {imb.percentDifference}% difference</span>
                    </div>
                    <p className="text-sm text-slate-300">{imb.description}</p>
                    <div className="flex items-center gap-6 mt-2 text-xs text-slate-500">
                      <span>{imb.leftRegion}: <span className="text-white">{imb.leftValue} {imb.type === "bone" ? "g/cm²" : "lb"}</span></span>
                      <span>{imb.rightRegion}: <span className="text-white">{imb.rightValue} {imb.type === "bone" ? "g/cm²" : "lb"}</span></span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Weight Loss Plan */}
        <Card className="bg-slate-800/50 border-slate-700/50 text-white">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 p-2">
                <TrendingDown size={18} className="text-white" />
              </div>
              <div>
                <CardTitle className="text-lg font-bold">Weight Loss Plan</CardTitle>
                <p className="text-xs text-slate-400 mt-0.5">DEXA-calibrated recomposition plan targeting {weightLossPlan.targetBodyFat}% body fat</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Current vs Target */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/30 text-center">
                <p className="text-xs text-slate-500">Current Weight</p>
                <p className="text-xl font-bold text-white">{weightLossPlan.currentWeight} lb</p>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-3 border border-green-500/20 text-center">
                <p className="text-xs text-green-400">Target Weight</p>
                <p className="text-xl font-bold text-green-400">{weightLossPlan.targetWeight} lb</p>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/30 text-center">
                <p className="text-xs text-slate-500">Fat to Lose</p>
                <p className="text-xl font-bold text-orange-400">{(weightLossPlan.currentFatMass - weightLossPlan.targetFatMass).toFixed(1)} lb</p>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/30 text-center">
                <p className="text-xs text-slate-500">Timeline</p>
                <p className="text-xl font-bold text-white">{weightLossPlan.estimatedWeeks} wks</p>
                <p className="text-xs text-slate-500">{(weightLossPlan.estimatedWeeks / 4.3).toFixed(1)} months</p>
              </div>
            </div>

            {/* Composition Targets */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <Target size={12} />
                  Body Fat Journey
                </h4>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/30">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-slate-400">Current</span>
                    <span className="text-sm text-slate-400">Target</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-bold text-orange-400">{weightLossPlan.currentBodyFat}%</span>
                    <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden relative">
                      <div
                        className="h-full bg-gradient-to-r from-orange-500 to-green-500 rounded-full"
                        style={{ width: `${100 - ((weightLossPlan.targetBodyFat / weightLossPlan.currentBodyFat) * 100)}%` }}
                      />
                      <div
                        className="absolute top-0 h-full w-0.5 bg-green-400"
                        style={{ left: `${(weightLossPlan.targetBodyFat / 35) * 100}%` }}
                      />
                    </div>
                    <span className="text-lg font-bold text-green-400">{weightLossPlan.targetBodyFat}%</span>
                  </div>
                  <div className="flex items-center justify-between mt-3 text-xs text-slate-500">
                    <span>Fat: {weightLossPlan.currentFatMass} lb <ArrowRight size={10} className="inline" /> {weightLossPlan.targetFatMass} lb</span>
                    <span>Lean: {weightLossPlan.currentLeanMass} lb <ArrowRight size={10} className="inline" /> {weightLossPlan.targetLeanMass} lb</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <Flame size={12} />
                  Daily Targets
                </h4>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/30 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">Calories</span>
                    <span className="text-lg font-bold text-white">{weightLossPlan.dailyCalorieTarget.toLocaleString()} kcal</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">Protein</span>
                    <span className="text-lg font-bold text-blue-400">{weightLossPlan.proteinTarget}g</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">Weekly Loss Rate</span>
                    <span className="text-lg font-bold text-green-400">{weightLossPlan.weeklyFatLossRate} lb/wk</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Phases */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Plan Phases</h4>
              {weightLossPlan.phases.map((phase, i) => (
                <div key={i} className="bg-slate-900/50 rounded-lg border border-slate-700/30 overflow-hidden">
                  <button
                    onClick={() => setExpandedPhase(expandedPhase === i ? -1 : i)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-800/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold shrink-0">
                        {i + 1}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white">{phase.name}</p>
                        <p className="text-xs text-slate-500">{phase.durationWeeks} weeks &middot; {phase.calorieTarget} kcal &middot; {phase.targetWeeklyLoss} lb/wk</p>
                      </div>
                    </div>
                    {expandedPhase === i ? <ChevronUp size={16} className="text-slate-500" /> : <ChevronDown size={16} className="text-slate-500" />}
                  </button>
                  {expandedPhase === i && (
                    <div className="px-4 pb-4 space-y-3 border-t border-slate-700/30 pt-3">
                      <p className="text-sm text-slate-300">{phase.description}</p>
                      <div className="grid grid-cols-3 gap-3 text-center">
                        <div className="bg-slate-800/50 rounded p-2">
                          <p className="text-xs text-slate-500">Calories</p>
                          <p className="text-sm font-bold text-white">{phase.calorieTarget}</p>
                        </div>
                        <div className="bg-slate-800/50 rounded p-2">
                          <p className="text-xs text-slate-500">Protein</p>
                          <p className="text-sm font-bold text-blue-400">{phase.proteinTarget}g</p>
                        </div>
                        <div className="bg-slate-800/50 rounded p-2">
                          <p className="text-xs text-slate-500">Loss/wk</p>
                          <p className="text-sm font-bold text-green-400">{phase.targetWeeklyLoss} lb</p>
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        {phase.focusAreas.map((focus, j) => (
                          <div key={j} className="flex items-start gap-2 text-sm text-slate-400">
                            <ArrowRight size={14} className="text-blue-400 mt-0.5 shrink-0" />
                            <span>{focus}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Training Recommendations */}
        <Card className="bg-slate-800/50 border-slate-700/50 text-white">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-gradient-to-br from-red-500 to-pink-600 p-2">
                <Dumbbell size={18} className="text-white" />
              </div>
              <div>
                <CardTitle className="text-lg font-bold">Training Recommendations</CardTitle>
                <p className="text-xs text-slate-400 mt-0.5">Based on your DEXA results and detected imbalances</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {trainingRecommendations.map((rec, i) => (
              <div key={i} className={`rounded-lg border overflow-hidden ${getPriorityColor(rec.priority)}`}>
                <button
                  onClick={() => setExpandedRec(expandedRec === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-800/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div>
                      {rec.priority === "high" && <Zap size={18} className="text-red-400" />}
                      {rec.priority === "medium" && <Dumbbell size={18} className="text-blue-400" />}
                      {rec.priority === "low" && <Heart size={18} className="text-slate-400" />}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-semibold text-white">{rec.title}</p>
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${getPriorityBadge(rec.priority)}`}>
                          {rec.priority}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500">{rec.category} &middot; {rec.frequencyPerWeek}x/week</p>
                    </div>
                  </div>
                  {expandedRec === i ? <ChevronUp size={16} className="text-slate-500" /> : <ChevronDown size={16} className="text-slate-500" />}
                </button>
                {expandedRec === i && (
                  <div className="px-4 pb-4 space-y-3 border-t border-slate-700/30 pt-3">
                    <p className="text-sm text-slate-300">{rec.description}</p>
                    <div className="space-y-1.5">
                      <h5 className="text-xs font-semibold text-slate-500 uppercase">Exercises</h5>
                      {rec.exercises.map((ex, j) => (
                        <div key={j} className="flex items-start gap-2 text-sm text-slate-400">
                          <span className="text-blue-400 mt-0.5 shrink-0">&bull;</span>
                          <span>{ex}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
