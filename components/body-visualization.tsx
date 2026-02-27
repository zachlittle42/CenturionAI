"use client"

import { useState } from "react"
import type { DexaRegionComposition } from "@/lib/types/dexa-scan"

interface BodyVisualizationProps {
  regions: DexaRegionComposition[]
  totalBodyFat: number
}

function getFatColor(percentFat: number): string {
  if (percentFat >= 32) return "#ef4444" // red
  if (percentFat >= 28) return "#f97316" // orange
  if (percentFat >= 24) return "#eab308" // yellow
  if (percentFat >= 18) return "#22c55e" // green
  return "#3b82f6" // blue (very lean)
}

function getFatColorClass(percentFat: number): string {
  if (percentFat >= 32) return "text-red-400"
  if (percentFat >= 28) return "text-orange-400"
  if (percentFat >= 24) return "text-yellow-400"
  if (percentFat >= 18) return "text-green-400"
  return "text-blue-400"
}

export default function BodyVisualization({ regions, totalBodyFat }: BodyVisualizationProps) {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null)

  const regionMap: Record<string, DexaRegionComposition | undefined> = {}
  for (const r of regions) {
    regionMap[r.region] = r
  }

  const lArm = regionMap["L Arm"]
  const rArm = regionMap["R Arm"]
  const trunk = regionMap["Trunk"]
  const lLeg = regionMap["L Leg"]
  const rLeg = regionMap["R Leg"]

  const hoveredData = hoveredRegion
    ? regions.find((r) => r.region === hoveredRegion)
    : null

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Tooltip */}
      <div className="h-16 flex items-center justify-center">
        {hoveredData ? (
          <div className="bg-slate-900 border border-slate-600 rounded-lg px-4 py-2 text-center">
            <p className="text-sm font-semibold text-white">{hoveredData.region}</p>
            <div className="flex items-center gap-4 text-xs text-slate-400">
              <span>Fat: <span className={getFatColorClass(hoveredData.percentFat)}>{hoveredData.percentFat}%</span></span>
              <span>Fat: {hoveredData.fatMass} lb</span>
              <span>Lean: {hoveredData.leanPlusBmc} lb</span>
              <span>Total: {hoveredData.totalMass} lb</span>
            </div>
          </div>
        ) : (
          <p className="text-xs text-slate-500">Hover over a body region to see details</p>
        )}
      </div>

      {/* SVG Body Map */}
      <svg viewBox="0 0 200 420" className="w-48 md:w-56" xmlns="http://www.w3.org/2000/svg">
        {/* Head */}
        <ellipse cx="100" cy="30" rx="22" ry="26" fill="#475569" stroke="#64748b" strokeWidth="1" />

        {/* Neck */}
        <rect x="90" y="54" width="20" height="16" rx="4" fill="#475569" stroke="#64748b" strokeWidth="1" />

        {/* Left Arm (viewer's right) */}
        <g
          onMouseEnter={() => setHoveredRegion("L Arm")}
          onMouseLeave={() => setHoveredRegion(null)}
          className="cursor-pointer transition-opacity"
          opacity={hoveredRegion && hoveredRegion !== "L Arm" ? 0.5 : 1}
        >
          {/* Shoulder */}
          <ellipse cx="148" cy="82" rx="12" ry="10" fill={getFatColor(lArm?.percentFat ?? 25)} stroke="#64748b" strokeWidth="1" />
          {/* Upper arm */}
          <rect x="144" y="88" width="18" height="50" rx="8" fill={getFatColor(lArm?.percentFat ?? 25)} stroke="#64748b" strokeWidth="1" />
          {/* Forearm */}
          <rect x="146" y="136" width="14" height="50" rx="6" fill={getFatColor(lArm?.percentFat ?? 25)} stroke="#64748b" strokeWidth="1" />
          {/* Hand */}
          <ellipse cx="153" cy="192" rx="8" ry="10" fill={getFatColor(lArm?.percentFat ?? 25)} stroke="#64748b" strokeWidth="1" />
          {/* Label */}
          <text x="172" y="120" className="text-[9px]" fill="#94a3b8" textAnchor="start">{lArm?.percentFat ?? "—"}%</text>
        </g>

        {/* Right Arm (viewer's left) */}
        <g
          onMouseEnter={() => setHoveredRegion("R Arm")}
          onMouseLeave={() => setHoveredRegion(null)}
          className="cursor-pointer transition-opacity"
          opacity={hoveredRegion && hoveredRegion !== "R Arm" ? 0.5 : 1}
        >
          <ellipse cx="52" cy="82" rx="12" ry="10" fill={getFatColor(rArm?.percentFat ?? 25)} stroke="#64748b" strokeWidth="1" />
          <rect x="38" y="88" width="18" height="50" rx="8" fill={getFatColor(rArm?.percentFat ?? 25)} stroke="#64748b" strokeWidth="1" />
          <rect x="40" y="136" width="14" height="50" rx="6" fill={getFatColor(rArm?.percentFat ?? 25)} stroke="#64748b" strokeWidth="1" />
          <ellipse cx="47" cy="192" rx="8" ry="10" fill={getFatColor(rArm?.percentFat ?? 25)} stroke="#64748b" strokeWidth="1" />
          <text x="28" y="120" className="text-[9px]" fill="#94a3b8" textAnchor="end">{rArm?.percentFat ?? "—"}%</text>
        </g>

        {/* Trunk */}
        <g
          onMouseEnter={() => setHoveredRegion("Trunk")}
          onMouseLeave={() => setHoveredRegion(null)}
          className="cursor-pointer transition-opacity"
          opacity={hoveredRegion && hoveredRegion !== "Trunk" ? 0.5 : 1}
        >
          {/* Chest / upper trunk */}
          <path
            d="M 68 70 Q 68 68 72 68 L 128 68 Q 132 68 132 70 L 136 110 Q 136 114 132 114 L 68 114 Q 64 114 64 110 Z"
            fill={getFatColor(trunk?.percentFat ?? 28)}
            stroke="#64748b"
            strokeWidth="1"
          />
          {/* Lower trunk / abdomen */}
          <path
            d="M 68 114 L 132 114 Q 134 114 134 116 L 130 190 Q 128 196 120 198 L 80 198 Q 72 196 70 190 L 66 116 Q 66 114 68 114 Z"
            fill={getFatColor(trunk?.percentFat ?? 28)}
            stroke="#64748b"
            strokeWidth="1"
          />
          <text x="100" y="150" className="text-[10px] font-semibold" fill="white" textAnchor="middle">{trunk?.percentFat ?? "—"}%</text>
        </g>

        {/* Left Leg (viewer's right) */}
        <g
          onMouseEnter={() => setHoveredRegion("L Leg")}
          onMouseLeave={() => setHoveredRegion(null)}
          className="cursor-pointer transition-opacity"
          opacity={hoveredRegion && hoveredRegion !== "L Leg" ? 0.5 : 1}
        >
          {/* Upper leg */}
          <path
            d="M 104 198 L 126 198 Q 130 200 130 206 L 126 290 Q 124 296 118 296 L 108 296 Q 104 296 104 290 Z"
            fill={getFatColor(lLeg?.percentFat ?? 26)}
            stroke="#64748b"
            strokeWidth="1"
          />
          {/* Lower leg */}
          <rect x="106" y="296" width="16" height="70" rx="7" fill={getFatColor(lLeg?.percentFat ?? 26)} stroke="#64748b" strokeWidth="1" />
          {/* Foot */}
          <path
            d="M 106 362 L 122 362 Q 128 364 130 370 L 130 378 Q 130 382 126 382 L 106 382 Q 102 382 102 378 L 102 370 Q 102 364 106 362 Z"
            fill={getFatColor(lLeg?.percentFat ?? 26)}
            stroke="#64748b"
            strokeWidth="1"
          />
          <text x="138" y="250" className="text-[9px]" fill="#94a3b8" textAnchor="start">{lLeg?.percentFat ?? "—"}%</text>
        </g>

        {/* Right Leg (viewer's left) */}
        <g
          onMouseEnter={() => setHoveredRegion("R Leg")}
          onMouseLeave={() => setHoveredRegion(null)}
          className="cursor-pointer transition-opacity"
          opacity={hoveredRegion && hoveredRegion !== "R Leg" ? 0.5 : 1}
        >
          <path
            d="M 74 198 L 96 198 L 96 290 Q 96 296 92 296 L 82 296 Q 76 296 74 290 L 70 206 Q 70 200 74 198 Z"
            fill={getFatColor(rLeg?.percentFat ?? 26)}
            stroke="#64748b"
            strokeWidth="1"
          />
          <rect x="78" y="296" width="16" height="70" rx="7" fill={getFatColor(rLeg?.percentFat ?? 26)} stroke="#64748b" strokeWidth="1" />
          <path
            d="M 78 362 L 94 362 Q 98 364 98 370 L 98 378 Q 98 382 94 382 L 70 382 Q 66 382 66 378 L 66 370 Q 68 364 72 362 Z"
            fill={getFatColor(rLeg?.percentFat ?? 26)}
            stroke="#64748b"
            strokeWidth="1"
          />
          <text x="62" y="250" className="text-[9px]" fill="#94a3b8" textAnchor="end">{rLeg?.percentFat ?? "—"}%</text>
        </g>
      </svg>

      {/* Color Legend */}
      <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400">
        <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-blue-500" />{"<18%"}</span>
        <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-green-500" />18-24%</span>
        <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />24-28%</span>
        <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-orange-500" />28-32%</span>
        <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-red-500" />32%+</span>
      </div>

      {/* Total body fat summary */}
      <div className="text-center">
        <p className="text-2xl font-bold text-white">{totalBodyFat}%</p>
        <p className="text-xs text-slate-500">Total Body Fat</p>
      </div>
    </div>
  )
}
