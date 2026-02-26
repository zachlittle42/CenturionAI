"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Flame } from "lucide-react"
import type { EnergyBalanceData } from "@/lib/types/energy-balance"

interface EnergyBalanceCardProps {
  data: EnergyBalanceData
}

function getRingColor(eaten: number, targetMax: number): string {
  if (eaten > targetMax) return "#ef4444" // red — over target
  return "#22c55e" // green — within target
}

function getStatusText(
  eaten: number,
  targetMin: number,
  targetMax: number
): { label: string; value: number; color: string } {
  // FIX: Both the ring and bar chart must use the same reference point
  // (targetMax) to calculate the overage amount. Previously the ring
  // computed overage against a different value, producing an incorrect
  // "+588 over" instead of the correct "+530 over".
  if (eaten > targetMax) {
    return {
      label: "over",
      value: eaten - targetMax,
      color: "text-red-400",
    }
  }
  if (eaten < targetMin) {
    return {
      label: "under",
      value: targetMin - eaten,
      color: "text-yellow-400",
    }
  }
  return { label: "on target", value: 0, color: "text-green-400" }
}

export default function EnergyBalanceCard({ data }: EnergyBalanceCardProps) {
  const { eaten, targetMin, targetMax, tdee } = data

  // Shared calculation used by BOTH the ring and the bar chart.
  // This ensures the displayed overage is always consistent.
  const status = getStatusText(eaten, targetMin, targetMax)
  const deficit = tdee - eaten

  // Ring chart geometry
  const radius = 70
  const strokeWidth = 12
  const circumference = 2 * Math.PI * radius
  const maxValue = Math.max(tdee, eaten) * 1.1 // ring scale
  const fillFraction = Math.min(eaten / maxValue, 1)
  const strokeDashoffset = circumference * (1 - fillFraction)
  const ringColor = getRingColor(eaten, targetMax)

  // Target arc on the ring (shows the target zone)
  const targetStartFraction = targetMin / maxValue
  const targetEndFraction = targetMax / maxValue
  const targetArcOffset = circumference * (1 - targetEndFraction)
  const targetArcLength = circumference * (targetEndFraction - targetStartFraction)

  // Bar chart scale
  const barMax = Math.max(tdee, eaten) * 1.05
  const eatenPct = (eaten / barMax) * 100
  const targetMinPct = (targetMin / barMax) * 100
  const targetMaxPct = (targetMax / barMax) * 100
  const tdeePct = (tdee / barMax) * 100

  return (
    <Card className="bg-slate-800/50 border-slate-700/50 text-white overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-gradient-to-br from-orange-500 to-red-600 p-2.5">
            <Flame size={20} className="text-white" />
          </div>
          <CardTitle className="text-lg font-bold text-white">
            Energy Balance
          </CardTitle>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Ring Chart */}
          <div className="flex flex-col items-center">
            <svg
              width={2 * (radius + strokeWidth)}
              height={2 * (radius + strokeWidth)}
              className="-rotate-90"
            >
              {/* Background ring */}
              <circle
                cx={radius + strokeWidth}
                cy={radius + strokeWidth}
                r={radius}
                fill="none"
                stroke="#334155"
                strokeWidth={strokeWidth}
              />
              {/* Target zone arc */}
              <circle
                cx={radius + strokeWidth}
                cy={radius + strokeWidth}
                r={radius}
                fill="none"
                stroke="#475569"
                strokeWidth={strokeWidth}
                strokeDasharray={`${targetArcLength} ${circumference - targetArcLength}`}
                strokeDashoffset={targetArcOffset}
                strokeLinecap="round"
              />
              {/* Eaten fill arc */}
              <circle
                cx={radius + strokeWidth}
                cy={radius + strokeWidth}
                r={radius}
                fill="none"
                stroke={ringColor}
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                className="transition-all duration-500"
              />
            </svg>
            {/* Center text — overlaid on the ring */}
            <div className="flex flex-col items-center -mt-[calc(50%+16px)]  mb-4 pointer-events-none" style={{ marginTop: -(radius + strokeWidth + 20) }}>
              <div style={{ height: 2 * (radius + strokeWidth) }} className="flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-white">
                  {eaten.toLocaleString()}
                </span>
                <span className="text-xs text-slate-400">cal eaten</span>
                {status.value > 0 && (
                  <span className={`text-sm font-semibold ${status.color} mt-1`}>
                    +{status.value} {status.label}
                  </span>
                )}
                {status.value === 0 && (
                  <span className={`text-sm font-semibold ${status.color} mt-1`}>
                    {status.label}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Bar Chart + Legend */}
          <div className="flex-1 w-full space-y-4">
            {/* Horizontal bar */}
            <div className="relative h-10 bg-slate-900/60 rounded-lg overflow-visible border border-slate-700/30">
              {/* Eaten bar */}
              <div
                className="absolute inset-y-0 left-0 rounded-lg transition-all duration-500"
                style={{
                  width: `${eatenPct}%`,
                  background:
                    eaten > targetMax
                      ? "linear-gradient(90deg, #22c55e, #ef4444)"
                      : "linear-gradient(90deg, #22c55e, #22c55e)",
                }}
              />
              {/* Target range markers */}
              <div
                className="absolute top-0 bottom-0 border-l-2 border-dashed border-blue-400/60"
                style={{ left: `${targetMinPct}%` }}
              />
              <div
                className="absolute top-0 bottom-0 border-l-2 border-dashed border-blue-400/60"
                style={{ left: `${targetMaxPct}%` }}
              />
              {/* TDEE marker */}
              <div
                className="absolute top-0 bottom-0 border-l-2 border-yellow-400/60"
                style={{ left: `${tdeePct}%` }}
              />
            </div>

            {/* Legend */}
            <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-gradient-to-r from-green-500 to-green-500 shrink-0" />
                <span className="text-slate-400">Eaten</span>
                <span className="text-white font-semibold ml-auto">
                  {eaten.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm border-2 border-dashed border-blue-400 shrink-0" />
                <span className="text-slate-400">Target</span>
                <span className="text-white font-semibold ml-auto">
                  {targetMin.toLocaleString()}-{targetMax.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm border-2 border-yellow-400 shrink-0" />
                <span className="text-slate-400">TDEE</span>
                <span className="text-white font-semibold ml-auto">
                  {tdee.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-slate-600 shrink-0" />
                <span className="text-slate-400">Deficit</span>
                <span className="text-white font-semibold ml-auto">{deficit}</span>
              </div>
            </div>

            {/* Over target annotation — uses the SAME status.value as the ring */}
            {status.value > 0 && (
              <div className={`text-sm font-medium ${status.color}`}>
                {status.value} {status.label} target
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
