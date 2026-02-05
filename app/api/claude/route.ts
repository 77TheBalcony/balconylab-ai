import { NextResponse } from 'next/server'
import { analyzeMetrics, getAISuggestions, generateMockMetrics, type Metrics } from '@/lib/claude'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { metrics: customMetrics, context } = body
    
    // Use provided metrics or generate mock
    const metrics: Metrics = customMetrics || generateMockMetrics()
    
    // Analyze metrics with 7 rules
    const alerts = analyzeMetrics(metrics)
    
    // Get AI suggestions if there are alerts
    let aiSuggestion = null
    if (alerts.length > 0) {
      aiSuggestion = await getAISuggestions(
        alerts,
        context || 'Análisis rutinario de métricas BYND.'
      )
    }
    
    return NextResponse.json({
      success: true,
      data: {
        metrics,
        alerts,
        aiSuggestion,
        timestamp: new Date().toISOString()
      }
    })
  } catch (error) {
    console.error('AI Agent API error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    // Quick analysis with mock data
    const metrics = generateMockMetrics()
    const alerts = analyzeMetrics(metrics)
    
    return NextResponse.json({
      success: true,
      data: {
        metrics,
        alerts: alerts.slice(0, 3), // Top 3 alerts only
        summary: {
          critical: alerts.filter(a => a.type === 'critical').length,
          warnings: alerts.filter(a => a.type === 'warning').length,
          opportunities: alerts.filter(a => a.type === 'opportunity').length,
        },
        timestamp: new Date().toISOString()
      }
    })
  } catch (error) {
    console.error('AI Agent API error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    )
  }
}
