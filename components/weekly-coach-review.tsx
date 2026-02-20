"use client"

import { useEffect, useState, useCallback } from "react"
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
} from "recharts"
import {
  Trophy,
  AlertTriangle,
  Target,
  TrendingUp,
  TrendingDown,
  Minus,
  RefreshCw,
  Loader2,
  CheckCircle2,
  Flame,
  Calendar,
} from "lucide-react"
import type {
  WeeklyReviewData,
  CoachReviewResponse,
} from "@/lib/types/weekly-review"

interface WeeklyCoachReviewProps {
  data: WeeklyReviewData
}

function formatDateRange(start: string, end: string): string {
  const s = new Date(start + "T00:00:00")
  const e = new Date(end + "T00:00:00")
  const opts: Intl.DateTimeFormatOptions = { month: "short", day: "numeric" }
  const startStr = s.toLocaleDateString("en-US", opts)
  const endStr = e.toLocaleDateString("en-US", { ...opts, year: "numeric" })
  return `${startStr} - ${endStr}`
}

function getGradeColor(grade: string): string {
  switch (grade.charAt(0).toUpperCase()) {
    case "A":
      return "text-green-400"
    case "B":
      return "text-blue-400"
    case "C":
      return "text-yellow-400"
    case "D":
      return "text-orange-400"
    case "F":
      return "text-red-400"
    default:
      return "text-slate-400"
  }
}

function getGradeBg(grade: string): string {
  switch (grade.charAt(0).toUpperCase()) {
    case "A":
      return "bg-green-500/10 border-green-500/20"
    case "B":
      return "bg-blue-500/10 border-blue-500/20"
    case "C":
      return "bg-yellow-500/10 border-yellow-500/20"
    case "D":
      return "bg-orange-500/10 border-orange-500/20"
    case "F":
      return "bg-red-500/10 border-red-500/20"
    default:
      return "bg-slate-500/10 border-slate-500/20"
  }
}

function getTrendIcon(current: number, previous?: number) {
  if (previous === undefined) return <Minus size={14} className="text-slate-500" />
  if (current > previous) return <TrendingUp size={14} className="text-green-400" />
  if (current < previous) return <TrendingDown size={14} className="text-red-400" />
  return <Minus size={14} className="text-slate-500" />
}

function getBarColor(score: number): string {
  if (score >= 80) return "#22c55e"
  if (score >= 60) return "#3b82f6"
  if (score >= 40) return "#eab308"
  return "#ef4444"
}

export default function WeeklyCoachReview({ data }: WeeklyCoachReviewProps) {
  const [review, setReview] = useState<CoachReviewResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchReview = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch("/api/weekly-review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error("Failed to fetch review")
      const result: CoachReviewResponse = await res.json()
      setReview(result)
    } catch {
      setError("Could not generate review. Try again.")
    } finally {
      setLoading(false)
    }
  }, [data])

  useEffect(() => {
    fetchReview()
  }, [fetchReview])

  return (
    <Card className="bg-slate-800/50 border-slate-700/50 text-white overflow-hidden">
      {/* Header */}
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 p-2.5">
              <Calendar size={20} className="text-white" />
            </div>
            <div>
              <CardTitle className="text-lg font-bold text-white">
                Weekly Coach Review
              </CardTitle>
              <p className="text-sm text-slate-400">
                {formatDateRange(data.weekStart, data.weekEnd)}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {review && (
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-xl border text-2xl font-bold ${getGradeBg(review.grade)} ${getGradeColor(review.grade)}`}
              >
                {review.grade}
              </div>
            )}
            <button
              onClick={fetchReview}
              disabled={loading}
              className="p-2 text-slate-500 hover:text-white transition-colors rounded-lg hover:bg-slate-700/50"
              title="Regenerate review"
            >
              <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
            </button>
          </div>
        </div>
        {/* AI Summary */}
        {loading ? (
          <div className="flex items-center gap-2 mt-3 text-slate-400 text-sm">
            <Loader2 size={14} className="animate-spin" />
            Analyzing your week...
          </div>
        ) : review ? (
          <p className="text-sm text-slate-300 mt-3 leading-relaxed italic">
            &ldquo;{review.summary}&rdquo;
          </p>
        ) : null}
        {error && (
          <p className="text-sm text-red-400 mt-3">{error}</p>
        )}
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Section 1: Key Metrics Scorecard */}
        <div>
          <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
            Key Metrics
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {data.metrics.map((metric) => {
              const atTarget = metric.target ? metric.value >= metric.target : true
              return (
                <div
                  key={metric.label}
                  className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/30"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-slate-500 truncate">
                      {metric.label}
                    </span>
                    {getTrendIcon(metric.value, metric.prevWeek)}
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xl font-bold text-white">
                      {metric.unit === "$"
                        ? `$${metric.value.toLocaleString()}`
                        : metric.value}
                    </span>
                    {metric.unit !== "$" && (
                      <span className="text-xs text-slate-500">{metric.unit}</span>
                    )}
                  </div>
                  {metric.target && (
                    <div className="mt-1.5">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className={atTarget ? "text-green-400" : "text-slate-500"}>
                          {atTarget ? "On target" : `Target: ${metric.unit === "$" ? "$" : ""}${metric.target}${metric.unit === "$" ? "" : metric.unit}`}
                        </span>
                      </div>
                      <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all ${atTarget ? "bg-green-500" : "bg-blue-500"}`}
                          style={{
                            width: `${Math.min(100, (metric.value / metric.target) * 100)}%`,
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Section 2: Daily Consistency Chart */}
        <div>
          <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
            Daily Output
          </h4>
          <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/30">
            <div className="h-32">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data.dailyScores} barCategoryGap="20%">
                  <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#64748b", fontSize: 12 }}
                  />
                  <YAxis hide domain={[0, 100]} />
                  <Bar dataKey="score" radius={[4, 4, 0, 0]}>
                    {data.dailyScores.map((entry, index) => (
                      <Cell key={index} fill={getBarColor(entry.score)} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center justify-between mt-2 text-xs text-slate-500">
              <span>
                Avg:{" "}
                {Math.round(
                  data.dailyScores.reduce((s, d) => s + d.score, 0) /
                    data.dailyScores.length
                )}
                /100
              </span>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  80+
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  60+
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-yellow-500" />
                  40+
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  &lt;40
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Goals & Habits */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Goals */}
          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Target size={12} />
              Goals
            </h4>
            <div className="space-y-2">
              {data.goals.map((goal) => {
                const pct = goal.target > 0 ? Math.round((goal.actual / goal.target) * 100) : 0
                const hit = goal.actual >= goal.target
                return (
                  <div
                    key={goal.name}
                    className="bg-slate-900/50 rounded-lg p-2.5 border border-slate-700/30"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-slate-300 truncate pr-2">
                        {goal.name}
                      </span>
                      <span
                        className={`text-xs font-medium ${hit ? "text-green-400" : "text-slate-400"}`}
                      >
                        {goal.actual}/{goal.target}
                      </span>
                    </div>
                    <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${hit ? "bg-green-500" : "bg-blue-500"}`}
                        style={{ width: `${Math.min(100, pct)}%` }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Habits */}
          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Flame size={12} />
              Habits
            </h4>
            <div className="space-y-2">
              {data.habits.map((habit) => {
                const pct =
                  habit.daysTarget > 0
                    ? Math.round((habit.daysCompleted / habit.daysTarget) * 100)
                    : 0
                const hit = habit.daysCompleted >= habit.daysTarget
                return (
                  <div
                    key={habit.name}
                    className="bg-slate-900/50 rounded-lg p-2.5 border border-slate-700/30"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-slate-300 truncate pr-2">
                        {habit.name}
                      </span>
                      <span
                        className={`text-xs font-medium ${hit ? "text-green-400" : "text-slate-400"}`}
                      >
                        {habit.daysCompleted}/{habit.daysTarget}d
                      </span>
                    </div>
                    <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${hit ? "bg-green-500" : "bg-purple-500"}`}
                        style={{ width: `${Math.min(100, pct)}%` }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Section 4: AI Coach Insights */}
        {!loading && review && (
          <div className="space-y-4">
            {/* Wins */}
            <div>
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Trophy size={12} className="text-green-400" />
                Wins
              </h4>
              <div className="space-y-2">
                {review.wins.map((win, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 bg-green-500/5 border border-green-500/10 rounded-lg p-3"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-green-400 mt-0.5 shrink-0"
                    />
                    <span className="text-sm text-slate-300">{win}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Areas to Watch */}
            <div>
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <AlertTriangle size={12} className="text-yellow-400" />
                Areas to Watch
              </h4>
              <div className="space-y-2">
                {review.areasToWatch.map((area, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 bg-yellow-500/5 border border-yellow-500/10 rounded-lg p-3"
                  >
                    <AlertTriangle
                      size={16}
                      className="text-yellow-400 mt-0.5 shrink-0"
                    />
                    <span className="text-sm text-slate-300">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Plan */}
            <div>
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Target size={12} className="text-blue-400" />
                Action Plan for Next Week
              </h4>
              <div className="space-y-2">
                {review.actionPlan.map((action, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 bg-blue-500/5 border border-blue-500/10 rounded-lg p-3"
                  >
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-sm text-slate-300">{action}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Loading skeleton for AI sections */}
        {loading && (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-2">
                <div className="h-3 w-24 bg-slate-700 rounded animate-pulse" />
                <div className="h-12 bg-slate-700/50 rounded-lg animate-pulse" />
                <div className="h-12 bg-slate-700/50 rounded-lg animate-pulse" />
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
