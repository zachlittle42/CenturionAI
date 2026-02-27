export interface DexaRegionComposition {
  region: string
  fatMass: number      // lb
  leanPlusBmc: number  // lb
  totalMass: number    // lb
  percentFat: number
  percentileYN?: number
  percentileAM?: number
}

export interface DexaBoneDensityRegion {
  region: string
  area: number    // cm²
  bmc: number     // g
  bmd: number     // g/cm²
}

export interface DexaAdiposeIndices {
  totalBodyFatPercent: number
  fatMassHeightSquared: number   // kg/m²
  androidGynoidRatio: number
  trunkLegsFatRatio: number
  trunkLimbFatMassRatio: number
  estVatMass: number             // g
  estVatVolume: number           // cm³
  estVatArea: number             // cm²
  percentileYN?: number
  percentileAM?: number
}

export interface DexaLeanIndices {
  leanHeightSquared: number           // kg/m²
  appendicularLeanHeightSquared: number // kg/m²
  percentileYN?: number
  percentileAM?: number
}

export interface DexaScanData {
  scanDate: string
  patientName: string
  sex: "Male" | "Female"
  age: number
  heightInches: number
  weightLbs: number
  bmi: number

  // Summary metrics
  totalBodyFatPercent: number
  totalFatMass: number        // lb
  totalLeanPlusBmc: number    // lb
  totalMass: number           // lb
  tScore: number
  zScore: number
  totalBmd: number            // g/cm²

  // Regional composition
  regions: DexaRegionComposition[]

  // Bone density by region
  boneDensity: DexaBoneDensityRegion[]

  // Indices
  adiposeIndices: DexaAdiposeIndices
  leanIndices: DexaLeanIndices
}

export interface BodyImbalance {
  type: "fat" | "lean" | "bone"
  leftRegion: string
  rightRegion: string
  leftValue: number
  rightValue: number
  percentDifference: number
  severity: "minor" | "moderate" | "significant"
  description: string
}

export interface WeightLossPlan {
  currentWeight: number
  targetWeight: number
  currentFatMass: number
  targetFatMass: number
  currentLeanMass: number
  targetLeanMass: number
  currentBodyFat: number
  targetBodyFat: number
  weeklyFatLossRate: number   // lb per week
  estimatedWeeks: number
  dailyCalorieTarget: number
  proteinTarget: number       // g per day
  phases: WeightLossPhase[]
}

export interface WeightLossPhase {
  name: string
  durationWeeks: number
  description: string
  targetWeeklyLoss: number
  calorieTarget: number
  proteinTarget: number
  focusAreas: string[]
}

export interface TrainingRecommendation {
  priority: "high" | "medium" | "low"
  category: string
  title: string
  description: string
  exercises: string[]
  frequencyPerWeek: number
}

export interface DexaAnalysis {
  scan: DexaScanData
  imbalances: BodyImbalance[]
  weightLossPlan: WeightLossPlan
  trainingRecommendations: TrainingRecommendation[]
}
