/**
 * BalconyLAB AI Agent
 * Powered by Anthropic Claude
 * 
 * Monitors metrics 24/7 and provides actionable insights
 * Based on 7 decision rules from BYND strategy
 */

export interface Metrics {
  // Funnel metrics
  impressions: number
  clicks: number
  whatsappInitiated: number
  responses: number
  qualified: number
  appointments: number
  shows: number
  closes: number
  
  // Performance metrics
  ctr: number // Click-through rate
  responseRate: number
  qualificationRate: number
  appointmentRate: number
  showRate: number
  closeRate: number
  
  // Cost metrics
  spend: number
  cpc: number // Cost per click
  cpm: number // Cost per mille
  cpl: number // Cost per lead
  cac: number // Customer acquisition cost
  
  // Content performance
  videoCompletionRate?: number
  contentPerformanceMultiplier?: number // vs average
  
  // Time periods
  period: 'today' | 'week' | 'month'
  consecutiveDays?: number // For rule tracking
}

export interface Alert {
  id: string
  type: 'critical' | 'warning' | 'opportunity' | 'info'
  rule: string
  title: string
  description: string
  suggestion: string
  actions: Action[]
  priority: number
  createdAt: string
}

export interface Action {
  id: string
  label: string
  type: 'primary' | 'secondary' | 'danger'
  autoExecutable: boolean
}

/**
 * 7 DECISION RULES (from ARQUITECTURA_MAESTRA)
 */

// RULE 1: Low CTR
export function checkCTRRule(metrics: Metrics): Alert | null {
  const { ctr, consecutiveDays = 0 } = metrics
  
  if (ctr < 2 && consecutiveDays >= 3) {
    return {
      id: 'rule-1-low-ctr',
      type: 'critical',
      rule: 'REGLA 1',
      title: 'CTR Bajo Crítico',
      description: `CTR de ${ctr.toFixed(2)}% por ${consecutiveDays} días consecutivos. Benchmark: 2-3% B2B.`,
      suggestion: 'El creative actual no resuena. Hook débil o targeting incorrecto.',
      actions: [
        { 
          id: 'pause-creative', 
          label: 'Pausar Creative', 
          type: 'danger', 
          autoExecutable: true 
        },
        { 
          id: 'test-hook', 
          label: 'Ver Alternativas Hook', 
          type: 'primary', 
          autoExecutable: false 
        }
      ],
      priority: 10,
      createdAt: new Date().toISOString()
    }
  }
  
  return null
}

// RULE 2: Low WhatsApp Response Rate
export function checkResponseRateRule(metrics: Metrics): Alert | null {
  const { responseRate, consecutiveDays = 0 } = metrics
  
  if (responseRate < 60 && consecutiveDays >= 7) {
    return {
      id: 'rule-2-low-response',
      type: 'warning',
      rule: 'REGLA 2',
      title: 'Tasa Respuesta WhatsApp Baja',
      description: `${responseRate.toFixed(1)}% de tasa de respuesta. Esperado: 60-70%.`,
      suggestion: 'El mensaje automático inicial no resuena. Muy formal, muy largo o confuso.',
      actions: [
        { 
          id: 'review-message', 
          label: 'Revisar Mensaje Inicial', 
          type: 'primary', 
          autoExecutable: false 
        },
        { 
          id: 'ab-test', 
          label: 'A/B Test: Corto vs Actual', 
          type: 'secondary', 
          autoExecutable: false 
        }
      ],
      priority: 7,
      createdAt: new Date().toISOString()
    }
  }
  
  return null
}

// RULE 3: Low Qualification Rate
export function checkQualificationRule(metrics: Metrics): Alert | null {
  const { qualificationRate, consecutiveDays = 0 } = metrics
  
  if (qualificationRate < 25 && consecutiveDays >= 14) {
    return {
      id: 'rule-3-low-qualification',
      type: 'critical',
      rule: 'REGLA 3',
      title: 'Tasa Calificación Muy Baja',
      description: `Solo ${qualificationRate.toFixed(1)}% de leads califican. Esperado: 25-35%.`,
      suggestion: 'El targeting está incorrecto. Los leads no son el target real de BYND.',
      actions: [
        { 
          id: 'review-targeting', 
          label: 'Revisar Targeting Pauta', 
          type: 'danger', 
          autoExecutable: false 
        },
        { 
          id: 'refine-audience', 
          label: 'Refinar Job Titles + Company Size', 
          type: 'primary', 
          autoExecutable: false 
        }
      ],
      priority: 9,
      createdAt: new Date().toISOString()
    }
  }
  
  return null
}

// RULE 4: Low Show Rate
export function checkShowRateRule(metrics: Metrics): Alert | null {
  const { showRate } = metrics
  
  if (showRate < 75) {
    return {
      id: 'rule-4-low-show',
      type: 'warning',
      rule: 'REGLA 4',
      title: 'Tasa Show Baja',
      description: `${showRate.toFixed(1)}% de asistencia a citas. Esperado: 75-85%.`,
      suggestion: 'Valor percibido pre-cita bajo. Reminders insuficientes o expectativa mal seteada.',
      actions: [
        { 
          id: 'improve-reminders', 
          label: 'Mejorar Reminders', 
          type: 'primary', 
          autoExecutable: false 
        },
        { 
          id: 'test-reminder-sequence', 
          label: 'Test: Email + WhatsApp vs Solo Email', 
          type: 'secondary', 
          autoExecutable: false 
        }
      ],
      priority: 6,
      createdAt: new Date().toISOString()
    }
  }
  
  return null
}

// RULE 5: High CAC
export function checkCACRule(metrics: Metrics): Alert | null {
  const { cac } = metrics
  
  if (cac > 25000) {
    return {
      id: 'rule-5-high-cac',
      type: 'critical',
      rule: 'REGLA 5',
      title: 'CAC Muy Alto',
      description: `CAC de $${cac.toLocaleString('es-MX')} MXN. Target: <$25K.`,
      suggestion: 'Leak en el funnel. Revisar dónde se pierde eficiencia.',
      actions: [
        { 
          id: 'review-funnel', 
          label: 'Revisar Funnel Completo', 
          type: 'danger', 
          autoExecutable: false 
        },
        { 
          id: 'reduce-budget', 
          label: 'Reducir Budget Temporal', 
          type: 'secondary', 
          autoExecutable: true 
        },
        { 
          id: 'improve-conversion', 
          label: 'Focus: Mejorar Conversión', 
          type: 'primary', 
          autoExecutable: false 
        }
      ],
      priority: 10,
      createdAt: new Date().toISOString()
    }
  }
  
  return null
}

// RULE 6: Low Video Completion Rate
export function checkVideoCompletionRule(metrics: Metrics): Alert | null {
  const { videoCompletionRate = 0 } = metrics
  
  if (videoCompletionRate > 0 && videoCompletionRate < 50) {
    return {
      id: 'rule-6-low-completion',
      type: 'warning',
      rule: 'REGLA 6',
      title: 'Completion Rate Bajo',
      description: `${videoCompletionRate.toFixed(1)}% completan el video. Esperado: >50%.`,
      suggestion: 'Hook débil, ritmo lento o valor poco claro.',
      actions: [
        { 
          id: 'pause-distribution', 
          label: 'Pausar Distribución', 
          type: 'danger', 
          autoExecutable: true 
        },
        { 
          id: 'review-content', 
          label: 'Revisar Contenido', 
          type: 'primary', 
          autoExecutable: false 
        }
      ],
      priority: 7,
      createdAt: new Date().toISOString()
    }
  }
  
  return null
}

// RULE 7: High Content Performance (Opportunity!)
export function checkHighPerformanceRule(metrics: Metrics): Alert | null {
  const { contentPerformanceMultiplier = 1 } = metrics
  
  if (contentPerformanceMultiplier >= 2) {
    return {
      id: 'rule-7-high-performance',
      type: 'opportunity',
      rule: 'REGLA 7',
      title: '¡Contenido Outperforming!',
      description: `Este contenido está performando ${contentPerformanceMultiplier.toFixed(1)}x mejor que el promedio.`,
      suggestion: 'Oportunidad de escalar este winner.',
      actions: [
        { 
          id: 'scale-budget', 
          label: `Aumentar Budget +$1,500`, 
          type: 'primary', 
          autoExecutable: true 
        },
        { 
          id: 'create-variants', 
          label: 'Crear 2 Variantes Similares', 
          type: 'secondary', 
          autoExecutable: false 
        }
      ],
      priority: 8,
      createdAt: new Date().toISOString()
    }
  }
  
  return null
}

/**
 * Analyze all metrics and return alerts
 */
export function analyzeMetrics(metrics: Metrics): Alert[] {
  const alerts: Alert[] = []
  
  const rules = [
    checkCTRRule,
    checkResponseRateRule,
    checkQualificationRule,
    checkShowRateRule,
    checkCACRule,
    checkVideoCompletionRule,
    checkHighPerformanceRule
  ]
  
  rules.forEach(rule => {
    const alert = rule(metrics)
    if (alert) alerts.push(alert)
  })
  
  // Sort by priority (descending)
  return alerts.sort((a, b) => b.priority - a.priority)
}

/**
 * Get AI suggestions using Claude API
 */
export async function getAISuggestions(
  alerts: Alert[],
  context: string
): Promise<string> {
  const apiKey = process.env.ANTHROPIC_API_KEY
  
  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY not configured')
  }
  
  const prompt = `Eres el AI Agent de BalconyLAB, analizando métricas para BYND Consulting.

ALERTAS DETECTADAS:
${alerts.map(a => `- ${a.title}: ${a.description}`).join('\n')}

CONTEXTO ADICIONAL:
${context}

Proporciona:
1. Análisis breve de la situación (2-3 oraciones)
2. Acción prioritaria #1 con reasoning
3. Quick win sugerido

Sé conciso, accionable y estratégico.`

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1024,
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ]
      })
    })
    
    if (!response.ok) {
      throw new Error(`Claude API error: ${response.statusText}`)
    }
    
    const data = await response.json()
    return data.content[0].text
  } catch (error) {
    console.error('AI Agent error:', error)
    return 'Error al generar sugerencias. Por favor intenta de nuevo.'
  }
}

/**
 * Generate mock metrics for demo
 */
export function generateMockMetrics(): Metrics {
  return {
    impressions: 87430,
    clicks: 1246,
    whatsappInitiated: 87,
    responses: 52,
    qualified: 12,
    appointments: 8,
    shows: 6,
    closes: 2,
    
    ctr: 1.43,
    responseRate: 59.77,
    qualificationRate: 23.08,
    appointmentRate: 66.67,
    showRate: 75.0,
    closeRate: 33.33,
    
    spend: 15000,
    cpc: 12.04,
    cpm: 171.50,
    cpl: 288.46,
    cac: 12500,
    
    videoCompletionRate: 48,
    contentPerformanceMultiplier: 2.3,
    
    period: 'month',
    consecutiveDays: 3
  }
}
