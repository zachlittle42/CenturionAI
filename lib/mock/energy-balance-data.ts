import type { EnergyBalanceData } from "@/lib/types/energy-balance"

export function getEnergyBalanceData(): EnergyBalanceData {
  return {
    eaten: 2730,
    targetMin: 2100,
    targetMax: 2200,
    tdee: 2806,
  }
}
