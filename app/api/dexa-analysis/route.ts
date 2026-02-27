import { NextResponse } from "next/server"
import type { DexaScanData } from "@/lib/types/dexa-scan"
import { analyzeDexaScan } from "@/lib/dexa-analysis"

export async function POST(request: Request) {
  try {
    const scanData: DexaScanData = await request.json()

    // Validate required fields
    if (!scanData.totalBodyFatPercent || !scanData.regions || !scanData.weightLbs) {
      return NextResponse.json(
        { error: "Missing required DEXA scan fields" },
        { status: 400 }
      )
    }

    const analysis = analyzeDexaScan(scanData)

    // If Anthropic API key is available, enhance the analysis with AI coaching
    const apiKey = process.env.ANTHROPIC_API_KEY
    if (apiKey) {
      try {
        const coachingInsights = await getAICoachingInsights(scanData, apiKey)
        return NextResponse.json({
          ...analysis,
          aiInsights: coachingInsights,
        })
      } catch {
        // Fall back to algorithmic analysis
        return NextResponse.json(analysis)
      }
    }

    return NextResponse.json(analysis)
  } catch (error) {
    console.error("DEXA analysis API error:", error)
    return NextResponse.json(
      { error: "Failed to analyze DEXA scan data" },
      { status: 500 }
    )
  }
}

async function getAICoachingInsights(scan: DexaScanData, apiKey: string) {
  const prompt = `You are an elite body composition coach analyzing a DEXA scan. Be direct, specific, and actionable.

PATIENT: ${scan.patientName}, ${scan.sex}, Age ${scan.age}, ${scan.heightInches}" / ${scan.weightLbs} lb, BMI ${scan.bmi}

BODY COMPOSITION:
- Total Body Fat: ${scan.totalBodyFatPercent}%
- Fat Mass: ${scan.totalFatMass} lb
- Lean + BMC: ${scan.totalLeanPlusBmc} lb
- T-Score: ${scan.tScore}, BMD: ${scan.totalBmd} g/cm²

REGIONAL DATA:
${scan.regions.map(r => `- ${r.region}: ${r.percentFat}% fat, ${r.fatMass} lb fat, ${r.leanPlusBmc} lb lean`).join("\n")}

ADIPOSE INDICES:
- Android/Gynoid Ratio: ${scan.adiposeIndices.androidGynoidRatio}
- Trunk/Legs Fat Ratio: ${scan.adiposeIndices.trunkLegsFatRatio}
- Estimated VAT Mass: ${scan.adiposeIndices.estVatMass}g
- Fat Mass/Height²: ${scan.adiposeIndices.fatMassHeightSquared} kg/m²

LEAN INDICES:
- Lean/Height²: ${scan.leanIndices.leanHeightSquared} kg/m² (${scan.leanIndices.percentileYN}th percentile)
- Appendicular Lean/Height²: ${scan.leanIndices.appendicularLeanHeightSquared} kg/m² (${scan.leanIndices.percentileAM}th percentile)

Respond with ONLY valid JSON in this format:
{
  "overallAssessment": "2-3 sentences on overall body composition status",
  "keyFindings": ["3-4 most important findings from the scan"],
  "riskFactors": ["any health risk factors based on the data"],
  "priorityActions": ["3 highest-priority actions ranked by impact"]
}`

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
      messages: [{ role: "user", content: prompt }],
    }),
  })

  if (!response.ok) {
    throw new Error(`Anthropic API error: ${response.status}`)
  }

  const result = await response.json()
  const text = result.content?.[0]?.text || ""
  return JSON.parse(text)
}
