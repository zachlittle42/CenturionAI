import { NextResponse } from "next/server"
import type { WeeklyReviewData, CoachReviewResponse } from "@/lib/types/weekly-review"

export async function POST(request: Request) {
  try {
    const data: WeeklyReviewData = await request.json()
    const apiKey = process.env.ANTHROPIC_API_KEY

    if (!apiKey) {
      // Return a reasonable fallback when no API key is configured
      return NextResponse.json(generateFallbackReview(data))
    }

    const prompt = buildCoachingPrompt(data)

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1024,
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      }),
    })

    if (!response.ok) {
      console.error("Anthropic API error:", response.status)
      return NextResponse.json(generateFallbackReview(data))
    }

    const result = await response.json()
    const text = result.content?.[0]?.text || ""

    try {
      const parsed: CoachReviewResponse = JSON.parse(text)
      return NextResponse.json(parsed)
    } catch {
      // If Claude didn't return valid JSON, use fallback
      return NextResponse.json(generateFallbackReview(data))
    }
  } catch (error) {
    console.error("Weekly review API error:", error)
    return NextResponse.json(
      { error: "Failed to generate weekly review" },
      { status: 500 }
    )
  }
}

function buildCoachingPrompt(data: WeeklyReviewData): string {
  const goalsText = data.goals
    .map((g) => `- ${g.name}: ${g.actual}/${g.target} ${g.unit}`)
    .join("\n")

  const habitsText = data.habits
    .map((h) => `- ${h.name}: ${h.daysCompleted}/${h.daysTarget} days`)
    .join("\n")

  const dailyText = data.dailyScores
    .map((d) => `${d.day}: ${d.score}/100`)
    .join(", ")

  const metricsText = data.metrics
    .map((m) => {
      let line = `- ${m.label}: ${m.value}${m.unit}`
      if (m.target) line += ` (target: ${m.target}${m.unit})`
      if (m.prevWeek !== undefined) line += ` (prev week: ${m.prevWeek}${m.unit})`
      return line
    })
    .join("\n")

  return `You are an elite performance coach reviewing a client's weekly data. Be direct, specific, and actionable. No fluff.

Week: ${data.weekStart} to ${data.weekEnd}

GOALS:
${goalsText}

HABITS:
${habitsText}

DAILY OUTPUT SCORES: ${dailyText}

KEY METRICS:
${metricsText}

Respond with ONLY valid JSON in this exact format, no other text:
{
  "grade": "A letter grade A through F based on overall performance",
  "summary": "One sentence capturing the week - direct and honest",
  "wins": ["2-4 specific wins based on the data"],
  "areasToWatch": ["2-3 specific areas that underperformed with pattern observations"],
  "actionPlan": ["3 specific, concrete action items for next week - not vague advice, actual tactics"]
}`
}

function generateFallbackReview(data: WeeklyReviewData): CoachReviewResponse {
  const goalsHit = data.goals.filter((g) => g.actual >= g.target).length
  const goalsTotal = data.goals.length
  const hitRate = goalsTotal > 0 ? Math.round((goalsHit / goalsTotal) * 100) : 0

  const avgDailyScore =
    data.dailyScores.length > 0
      ? Math.round(
          data.dailyScores.reduce((sum, d) => sum + d.score, 0) /
            data.dailyScores.length
        )
      : 0

  let grade = "C"
  if (hitRate >= 80 && avgDailyScore >= 75) grade = "A"
  else if (hitRate >= 60 && avgDailyScore >= 65) grade = "B"
  else if (hitRate >= 40 && avgDailyScore >= 50) grade = "C"
  else grade = "D"

  const wins: string[] = []
  const areasToWatch: string[] = []
  const actionPlan: string[] = []

  // Identify wins
  for (const goal of data.goals) {
    if (goal.actual >= goal.target) {
      wins.push(`Hit ${goal.name} target: ${goal.actual}/${goal.target} ${goal.unit}`)
    }
  }
  for (const habit of data.habits) {
    if (habit.daysCompleted >= habit.daysTarget) {
      wins.push(`Completed ${habit.name} every target day`)
    }
  }
  if (wins.length === 0) wins.push("Showed up and tracked data all week - that's the foundation")

  // Identify areas to watch
  for (const goal of data.goals) {
    if (goal.actual < goal.target * 0.7) {
      areasToWatch.push(
        `${goal.name} fell short at ${goal.actual}/${goal.target} ${goal.unit}`
      )
    }
  }
  const weekendDrop = data.dailyScores.filter(
    (d) => (d.day === "Sat" || d.day === "Sun") && d.score < 50
  )
  if (weekendDrop.length > 0) {
    areasToWatch.push("Weekend output dropped significantly - review if intentional rest or lost momentum")
  }
  if (areasToWatch.length === 0) areasToWatch.push("No major red flags - focus on consistency")

  // Generate action items
  const lowHabits = data.habits.filter(
    (h) => h.daysCompleted < h.daysTarget * 0.6
  )
  if (lowHabits.length > 0) {
    actionPlan.push(
      `Prioritize ${lowHabits[0].name} - set a specific time block and don't negotiate with yourself`
    )
  }

  const belowTargetMetrics = data.metrics.filter(
    (m) => m.target && m.value < m.target
  )
  if (belowTargetMetrics.length > 0) {
    actionPlan.push(
      `${belowTargetMetrics[0].label} is ${belowTargetMetrics[0].value}${belowTargetMetrics[0].unit} vs ${belowTargetMetrics[0].target}${belowTargetMetrics[0].unit} target - identify the bottleneck and remove it`
    )
  }

  actionPlan.push("Review this card every Monday morning before planning the new week")
  if (actionPlan.length < 3) {
    actionPlan.push("Pick your #1 underperforming goal and double your effort there this week")
  }

  return {
    grade,
    summary: `${goalsHit}/${goalsTotal} goals hit with a ${avgDailyScore}/100 average daily score. ${hitRate >= 60 ? "Solid foundation to build on." : "Room for improvement across the board."}`,
    wins: wins.slice(0, 4),
    areasToWatch: areasToWatch.slice(0, 3),
    actionPlan: actionPlan.slice(0, 3),
  }
}
