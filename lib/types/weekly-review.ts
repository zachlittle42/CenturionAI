export interface WeeklyGoal {
  name: string
  target: number
  actual: number
  unit: string
}

export interface WeeklyHabit {
  name: string
  daysCompleted: number
  daysTarget: number
}

export interface DailyScore {
  day: string
  score: number
}

export interface WeeklyMetric {
  label: string
  value: number
  unit: string
  target?: number
  prevWeek?: number
}

export interface WeeklyReviewData {
  weekStart: string
  weekEnd: string
  goals: WeeklyGoal[]
  habits: WeeklyHabit[]
  dailyScores: DailyScore[]
  metrics: WeeklyMetric[]
}

export interface CoachReviewResponse {
  grade: string
  summary: string
  wins: string[]
  areasToWatch: string[]
  actionPlan: string[]
}
