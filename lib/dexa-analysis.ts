import type {
  DexaScanData,
  BodyImbalance,
  WeightLossPlan,
  TrainingRecommendation,
  DexaAnalysis,
} from "@/lib/types/dexa-scan"

function getSeverity(pctDiff: number): "minor" | "moderate" | "significant" {
  if (pctDiff >= 15) return "significant"
  if (pctDiff >= 8) return "moderate"
  return "minor"
}

export function detectImbalances(scan: DexaScanData): BodyImbalance[] {
  const imbalances: BodyImbalance[] = []
  const regions = scan.regions

  const lArm = regions.find((r) => r.region === "L Arm")
  const rArm = regions.find((r) => r.region === "R Arm")
  const lLeg = regions.find((r) => r.region === "L Leg")
  const rLeg = regions.find((r) => r.region === "R Leg")

  // Fat mass imbalances
  if (lArm && rArm) {
    const diff = Math.abs(lArm.fatMass - rArm.fatMass)
    const avg = (lArm.fatMass + rArm.fatMass) / 2
    const pctDiff = (diff / avg) * 100
    if (pctDiff > 5) {
      imbalances.push({
        type: "fat",
        leftRegion: "L Arm",
        rightRegion: "R Arm",
        leftValue: lArm.fatMass,
        rightValue: rArm.fatMass,
        percentDifference: Math.round(pctDiff * 10) / 10,
        severity: getSeverity(pctDiff),
        description: `Right arm carries ${(rArm.fatMass - lArm.fatMass).toFixed(1)} lb more fat than the left (${rArm.percentFat}% vs ${lArm.percentFat}%)`,
      })
    }
  }

  if (lLeg && rLeg) {
    const diff = Math.abs(lLeg.fatMass - rLeg.fatMass)
    const avg = (lLeg.fatMass + rLeg.fatMass) / 2
    const pctDiff = (diff / avg) * 100
    if (pctDiff > 3) {
      imbalances.push({
        type: "fat",
        leftRegion: "L Leg",
        rightRegion: "R Leg",
        leftValue: lLeg.fatMass,
        rightValue: rLeg.fatMass,
        percentDifference: Math.round(pctDiff * 10) / 10,
        severity: getSeverity(pctDiff),
        description: `Right leg carries ${(rLeg.fatMass - lLeg.fatMass).toFixed(1)} lb more fat than the left (${rLeg.percentFat}% vs ${lLeg.percentFat}%)`,
      })
    }
  }

  // Lean mass imbalances
  if (lArm && rArm) {
    const diff = Math.abs(lArm.leanPlusBmc - rArm.leanPlusBmc)
    const avg = (lArm.leanPlusBmc + rArm.leanPlusBmc) / 2
    const pctDiff = (diff / avg) * 100
    if (pctDiff > 3) {
      const stronger = rArm.leanPlusBmc > lArm.leanPlusBmc ? "Right" : "Left"
      imbalances.push({
        type: "lean",
        leftRegion: "L Arm",
        rightRegion: "R Arm",
        leftValue: lArm.leanPlusBmc,
        rightValue: rArm.leanPlusBmc,
        percentDifference: Math.round(pctDiff * 10) / 10,
        severity: getSeverity(pctDiff),
        description: `${stronger} arm has ${diff.toFixed(1)} lb more lean mass — likely dominant arm advantage`,
      })
    }
  }

  if (lLeg && rLeg) {
    const diff = Math.abs(lLeg.leanPlusBmc - rLeg.leanPlusBmc)
    const avg = (lLeg.leanPlusBmc + rLeg.leanPlusBmc) / 2
    const pctDiff = (diff / avg) * 100
    if (pctDiff > 3) {
      const stronger = rLeg.leanPlusBmc > lLeg.leanPlusBmc ? "Right" : "Left"
      imbalances.push({
        type: "lean",
        leftRegion: "L Leg",
        rightRegion: "R Leg",
        leftValue: lLeg.leanPlusBmc,
        rightValue: rLeg.leanPlusBmc,
        percentDifference: Math.round(pctDiff * 10) / 10,
        severity: getSeverity(pctDiff),
        description: `${stronger} leg has ${diff.toFixed(1)} lb more lean mass`,
      })
    }
  }

  // Bone density imbalances
  const lArmBone = scan.boneDensity.find((r) => r.region === "L Arm")
  const rArmBone = scan.boneDensity.find((r) => r.region === "R Arm")
  const lLegBone = scan.boneDensity.find((r) => r.region === "L Leg")
  const rLegBone = scan.boneDensity.find((r) => r.region === "R Leg")

  if (lLegBone && rLegBone) {
    const diff = Math.abs(lLegBone.bmd - rLegBone.bmd)
    const avg = (lLegBone.bmd + rLegBone.bmd) / 2
    const pctDiff = (diff / avg) * 100
    if (pctDiff > 5) {
      const denser = rLegBone.bmd > lLegBone.bmd ? "Right" : "Left"
      imbalances.push({
        type: "bone",
        leftRegion: "L Leg",
        rightRegion: "R Leg",
        leftValue: lLegBone.bmd,
        rightValue: rLegBone.bmd,
        percentDifference: Math.round(pctDiff * 10) / 10,
        severity: getSeverity(pctDiff),
        description: `${denser} leg has higher bone density (${rLegBone.bmd} vs ${lLegBone.bmd} g/cm²) — may indicate loading asymmetry`,
      })
    }
  }

  if (lArmBone && rArmBone) {
    const diff = Math.abs(lArmBone.bmd - rArmBone.bmd)
    const avg = (lArmBone.bmd + rArmBone.bmd) / 2
    const pctDiff = (diff / avg) * 100
    if (pctDiff > 3) {
      imbalances.push({
        type: "bone",
        leftRegion: "L Arm",
        rightRegion: "R Arm",
        leftValue: lArmBone.bmd,
        rightValue: rArmBone.bmd,
        percentDifference: Math.round(pctDiff * 10) / 10,
        severity: getSeverity(pctDiff),
        description: `Right arm bone density is ${((rArmBone.bmd - lArmBone.bmd) / lArmBone.bmd * 100).toFixed(1)}% higher — consistent with right-hand dominance`,
      })
    }
  }

  return imbalances.sort((a, b) => {
    const severityOrder = { significant: 0, moderate: 1, minor: 2 }
    return severityOrder[a.severity] - severityOrder[b.severity]
  })
}

export function generateWeightLossPlan(scan: DexaScanData): WeightLossPlan {
  const currentWeight = scan.weightLbs
  const currentFatMass = scan.totalFatMass
  const currentLeanMass = scan.totalLeanPlusBmc
  const currentBodyFat = scan.totalBodyFatPercent

  // Target: 18% body fat while preserving lean mass (add ~2 lb muscle)
  const targetBodyFat = 18
  const targetLeanMass = currentLeanMass + 2 // modest muscle gain
  const targetFatMass = (targetBodyFat / 100) * (targetLeanMass / (1 - targetBodyFat / 100))
  const targetWeight = targetLeanMass + targetFatMass

  const fatToLose = currentFatMass - targetFatMass
  const weeklyFatLossRate = 1.5 // lb per week — aggressive but sustainable at his size
  const estimatedWeeks = Math.ceil(fatToLose / weeklyFatLossRate)

  // TDEE estimate for 6'1", 244lb, 28yo male, moderately active
  // Mifflin-St Jeor: 10 * (kg) + 6.25 * (cm) - 5 * age - 5
  const weightKg = currentWeight * 0.4536
  const heightCm = scan.heightInches * 2.54
  const bmr = 10 * weightKg + 6.25 * heightCm - 5 * scan.age + 5
  const tdee = Math.round(bmr * 1.55) // moderately active
  const dailyDeficit = Math.round((weeklyFatLossRate * 3500) / 7) // 3500 cal per lb fat
  const dailyCalorieTarget = tdee - dailyDeficit

  // Protein: 1g per lb lean mass
  const proteinTarget = Math.round(currentLeanMass)

  const phases: WeightLossPlan["phases"] = [
    {
      name: "Phase 1: Aggressive Cut",
      durationWeeks: 8,
      description: "High deficit with high protein to maximize initial fat loss while preserving muscle. Focus on compound lifts to maintain strength.",
      targetWeeklyLoss: 2.0,
      calorieTarget: tdee - 1000,
      proteinTarget: Math.round(currentLeanMass * 1.1),
      focusAreas: [
        "Hit protein target daily — non-negotiable",
        "4x/week strength training (compound lifts)",
        "10k+ steps daily for NEAT",
        "Reduce android/trunk fat with caloric deficit",
        "Track everything — weigh food for accuracy",
      ],
    },
    {
      name: "Phase 2: Moderate Cut",
      durationWeeks: 10,
      description: "Reduce deficit slightly to prevent metabolic adaptation. Introduce unilateral work to address L/R imbalances identified in DEXA.",
      targetWeeklyLoss: 1.5,
      calorieTarget: tdee - 750,
      proteinTarget: Math.round(currentLeanMass),
      focusAreas: [
        "Unilateral exercises to fix arm and leg imbalances",
        "Add 2 LISS cardio sessions (walking, cycling)",
        "One refeed day per week at maintenance",
        "Focus on sleep quality — 7-8 hours minimum",
        "Reduce visceral fat (VAT currently 555g)",
      ],
    },
    {
      name: "Phase 3: Lean Out & Recomp",
      durationWeeks: 8,
      description: "Small deficit with increased training volume. Body recomposition phase — maintain lean mass while losing remaining fat to reach target.",
      targetWeeklyLoss: 1.0,
      calorieTarget: tdee - 500,
      proteinTarget: Math.round(currentLeanMass),
      focusAreas: [
        "Increase training volume — 5x/week",
        "Body recomposition focus",
        "Two refeed days per week",
        "Follow-up DEXA scan to track progress",
        "Maintain appendicular lean mass (currently 83rd percentile)",
      ],
    },
  ]

  return {
    currentWeight,
    targetWeight: Math.round(targetWeight),
    currentFatMass,
    targetFatMass: Math.round(targetFatMass * 10) / 10,
    currentLeanMass,
    targetLeanMass,
    currentBodyFat,
    targetBodyFat,
    weeklyFatLossRate,
    estimatedWeeks,
    dailyCalorieTarget,
    proteinTarget,
    phases,
  }
}

export function generateTrainingRecommendations(
  scan: DexaScanData,
  imbalances: BodyImbalance[]
): TrainingRecommendation[] {
  const recs: TrainingRecommendation[] = []

  // Check for arm imbalances
  const armLeanImbalance = imbalances.find(
    (i) => i.type === "lean" && i.leftRegion === "L Arm"
  )
  if (armLeanImbalance) {
    recs.push({
      priority: "high",
      category: "Corrective — Upper Body",
      title: "Address Arm Lean Mass Asymmetry",
      description: `Your ${armLeanImbalance.rightValue > armLeanImbalance.leftValue ? "right" : "left"} arm has ${armLeanImbalance.percentDifference}% more lean mass. Use unilateral work starting with the weaker side.`,
      exercises: [
        "Single-arm dumbbell rows (start with left)",
        "Single-arm dumbbell press",
        "Single-arm cable curls",
        "Single-arm overhead tricep extension",
      ],
      frequencyPerWeek: 3,
    })
  }

  // Check for leg imbalances
  const legLeanImbalance = imbalances.find(
    (i) => i.type === "lean" && i.leftRegion === "L Leg"
  )
  if (legLeanImbalance) {
    recs.push({
      priority: "high",
      category: "Corrective — Lower Body",
      title: "Address Leg Lean Mass Asymmetry",
      description: `Your ${legLeanImbalance.rightValue > legLeanImbalance.leftValue ? "right" : "left"} leg has ${legLeanImbalance.percentDifference}% more lean mass. Prioritize single-leg work.`,
      exercises: [
        "Bulgarian split squats (extra set on weak side)",
        "Single-leg Romanian deadlifts",
        "Single-leg press",
        "Step-ups with pause at top",
      ],
      frequencyPerWeek: 3,
    })
  }

  // Android fat (central adiposity)
  if (scan.adiposeIndices.androidGynoidRatio > 1.0) {
    recs.push({
      priority: "high",
      category: "Fat Loss — Metabolic",
      title: "Reduce Central Adiposity",
      description: `Your android/gynoid ratio is ${scan.adiposeIndices.androidGynoidRatio} with 34.4% android fat. Visceral fat at 555g. High-intensity metabolic work paired with caloric deficit is most effective.`,
      exercises: [
        "HIIT intervals: 30s on / 60s off x 8-10 rounds",
        "Kettlebell swings (sets of 20-30)",
        "Rowing machine intervals",
        "Burpee + deadlift complexes",
      ],
      frequencyPerWeek: 2,
    })
  }

  // Maintain strong bone density
  recs.push({
    priority: "medium",
    category: "Strength — Foundation",
    title: "Compound Strength Training",
    description: `Your bone density is excellent (T-score ${scan.tScore}). Maintain and build on this with heavy compound lifts. Your ${scan.leanIndices.appendicularLeanHeightSquared} kg/m² appendicular lean index (83rd percentile) shows strong muscle foundation.`,
    exercises: [
      "Back squat (3x5 heavy)",
      "Conventional deadlift (3x5 heavy)",
      "Bench press (3x5 heavy)",
      "Overhead press (3x5 heavy)",
      "Barbell row (3x5 heavy)",
    ],
    frequencyPerWeek: 4,
  })

  // Trunk strengthening (largest fat depot)
  const trunk = scan.regions.find((r) => r.region === "Trunk")
  if (trunk && trunk.percentFat > 25) {
    recs.push({
      priority: "medium",
      category: "Core & Stability",
      title: "Core Strengthening for Trunk Composition",
      description: `Trunk carries ${trunk.fatMass.toFixed(1)} lb of fat (${trunk.percentFat}%). While spot reduction isn't possible, strong core musculature improves posture, performance, and total-body metabolic demand.`,
      exercises: [
        "Hanging leg raises (3x10-15)",
        "Ab wheel rollouts (3x8-12)",
        "Pallof press (3x12 each side)",
        "Farmer carries (3x40m heavy)",
      ],
      frequencyPerWeek: 3,
    })
  }

  // NEAT / daily movement
  recs.push({
    priority: "low",
    category: "Daily Movement — NEAT",
    title: "Non-Exercise Activity for Fat Oxidation",
    description: "At 244 lb with 27% body fat, maximizing daily movement (NEAT) is a major lever. Walking burns fat preferentially and doesn't impede recovery.",
    exercises: [
      "Morning walk: 20-30 min fasted",
      "Post-meal walks: 10-15 min after lunch and dinner",
      "Target 10,000+ steps daily",
      "Stand/walk during calls and meetings",
    ],
    frequencyPerWeek: 7,
  })

  return recs
}

export function analyzeDexaScan(scan: DexaScanData): DexaAnalysis {
  const imbalances = detectImbalances(scan)
  const weightLossPlan = generateWeightLossPlan(scan)
  const trainingRecommendations = generateTrainingRecommendations(scan, imbalances)

  return {
    scan,
    imbalances,
    weightLossPlan,
    trainingRecommendations,
  }
}
