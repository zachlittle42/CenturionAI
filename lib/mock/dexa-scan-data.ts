import type { DexaScanData } from "@/lib/types/dexa-scan"

export function getDexaScanData(): DexaScanData {
  return {
    scanDate: "2026-02-27",
    patientName: "Zach Little",
    sex: "Male",
    age: 28,
    heightInches: 73.0,
    weightLbs: 244.0,
    bmi: 32.2,

    totalBodyFatPercent: 27.0,
    totalFatMass: 66.24,
    totalLeanPlusBmc: 179.54,
    totalMass: 245.78,
    tScore: 0.7,
    zScore: 0.6,
    totalBmd: 1.263,

    regions: [
      { region: "L Arm", fatMass: 3.88, leanPlusBmc: 11.60, totalMass: 15.48, percentFat: 25.1, percentileYN: 83, percentileAM: 82 },
      { region: "R Arm", fatMass: 4.66, leanPlusBmc: 12.06, totalMass: 16.72, percentFat: 27.9, percentileYN: 89, percentileAM: 88 },
      { region: "Trunk", fatMass: 34.09, leanPlusBmc: 88.08, totalMass: 122.17, percentFat: 27.9, percentileYN: 81, percentileAM: 78 },
      { region: "L Leg", fatMass: 9.96, leanPlusBmc: 28.77, totalMass: 38.73, percentFat: 25.7, percentileYN: 69, percentileAM: 69 },
      { region: "R Leg", fatMass: 10.67, leanPlusBmc: 30.02, totalMass: 40.69, percentFat: 26.2, percentileYN: 70, percentileAM: 70 },
      { region: "Android", fatMass: 6.48, leanPlusBmc: 12.36, totalMass: 18.83, percentFat: 34.4 },
      { region: "Gynoid", fatMass: 10.71, leanPlusBmc: 27.17, totalMass: 37.88, percentFat: 28.3 },
    ],

    boneDensity: [
      { region: "L Arm", area: 284.54, bmc: 295.90, bmd: 1.040 },
      { region: "R Arm", area: 275.33, bmc: 298.69, bmd: 1.085 },
      { region: "L Ribs", area: 151.27, bmc: 112.94, bmd: 0.747 },
      { region: "R Ribs", area: 163.68, bmc: 126.63, bmd: 0.774 },
      { region: "T Spine", area: 173.68, bmc: 143.31, bmd: 0.825 },
      { region: "L Spine", area: 70.43, bmc: 67.30, bmd: 0.956 },
      { region: "Pelvis", area: 278.53, bmc: 397.84, bmd: 1.428 },
      { region: "L Leg", area: 430.21, bmc: 538.85, bmd: 1.253 },
      { region: "R Leg", area: 441.41, bmc: 612.42, bmd: 1.387 },
      { region: "Head", area: 246.52, bmc: 583.23, bmd: 2.366 },
    ],

    adiposeIndices: {
      totalBodyFatPercent: 27.0,
      fatMassHeightSquared: 8.74,
      androidGynoidRatio: 1.22,
      trunkLegsFatRatio: 1.07,
      trunkLimbFatMassRatio: 1.17,
      estVatMass: 555,
      estVatVolume: 600,
      estVatArea: 115,
      percentileYN: 80,
      percentileAM: 78,
    },

    leanIndices: {
      leanHeightSquared: 22.8,
      appendicularLeanHeightSquared: 10.4,
      percentileYN: 85,
      percentileAM: 84,
    },
  }
}
