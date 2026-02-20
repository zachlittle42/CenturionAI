import type { WeeklyReviewData } from "@/lib/types/weekly-review"

// Mock data representing "last week" - a realistic week of personal performance tracking
export function getLastWeekReviewData(): WeeklyReviewData {
  const now = new Date()
  const lastSunday = new Date(now)
  lastSunday.setDate(now.getDate() - now.getDay())
  const lastMonday = new Date(lastSunday)
  lastMonday.setDate(lastSunday.getDate() - 6)

  return {
    weekStart: lastMonday.toISOString().split("T")[0],
    weekEnd: lastSunday.toISOString().split("T")[0],
    goals: [
      { name: "Close new client deals", target: 2, actual: 1, unit: "deals" },
      { name: "Publish content pieces", target: 3, actual: 3, unit: "posts" },
      { name: "Complete project milestones", target: 4, actual: 3, unit: "milestones" },
      { name: "Prospecting outreach", target: 25, actual: 18, unit: "contacts" },
      { name: "Deep work blocks", target: 10, actual: 7, unit: "sessions" },
    ],
    habits: [
      { name: "Morning workout", daysCompleted: 4, daysTarget: 5 },
      { name: "Read 30 min", daysCompleted: 5, daysTarget: 7 },
      { name: "Daily outreach", daysCompleted: 3, daysTarget: 5 },
      { name: "Journal/reflection", daysCompleted: 2, daysTarget: 7 },
      { name: "No phone first hour", daysCompleted: 6, daysTarget: 7 },
    ],
    dailyScores: [
      { day: "Mon", score: 85 },
      { day: "Tue", score: 72 },
      { day: "Wed", score: 90 },
      { day: "Thu", score: 65 },
      { day: "Fri", score: 78 },
      { day: "Sat", score: 40 },
      { day: "Sun", score: 30 },
    ],
    metrics: [
      { label: "Goals Hit Rate", value: 60, unit: "%", target: 80, prevWeek: 70 },
      { label: "Focus Hours", value: 22, unit: "hrs", target: 30, prevWeek: 26 },
      { label: "Workouts", value: 4, unit: "days", target: 5, prevWeek: 3 },
      { label: "Outreach", value: 18, unit: "contacts", target: 25, prevWeek: 22 },
      { label: "Habit Completion", value: 67, unit: "%", target: 80, prevWeek: 60 },
      { label: "Revenue Pipeline", value: 8500, unit: "$", target: 12000, prevWeek: 6000 },
    ],
  }
}
