'use client'

import { useEffect, useState } from 'react'
import type { Alert } from '@/lib/claude'
import DashboardVisualizations from './DashboardVisualizations'

interface AIAgentData {
  alerts: Alert[]
  aiSuggestion: string | null
  summary: {
    critical: number
    warnings: number
    opportunities: number
  }
  metrics?: any
}

export default function AIAgent() {
  const [data, setData] = useState<AIAgentData | null>(null)
  const [loading, setLoading] = useState(true)
  const [expanded, setExpanded] = useState<string | null>(null)

  useEffect(() => {
    fetchAgentData()
    // Refresh every 5 minutes
    const interval = setInterval(fetchAgentData, 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  const fetchAgentData = async () => {
    try {
      const res = await fetch('/api/claude')
      const json = await res.json()
      if (json.success) {
        setData({
          alerts: json.data.alerts,
          aiSuggestion: null,
          summary: json.data.summary,
          metrics: json.data.metrics
        })
      }
    } catch (error) {
      console.error('Failed to fetch AI Agent data:', error)
    } finally {
      setLoading(false)
    }
  }

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'critical':
        return (
          <div className="w-12 h-12 rounded-xl bg-rebel/20 flex items-center justify-center glow-rebel">
            <svg className="w-6 h-6 text-rebel" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
        )
      case 'warning':
        return (
          <div className="w-12 h-12 rounded-xl bg-warn/20 flex items-center justify-center" style={{boxShadow: '0 0 20px rgba(255, 184, 0, 0.4)'}}>
            <svg className="w-6 h-6 text-warn" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        )
      case 'opportunity':
        return (
          <div className="w-12 h-12 rounded-xl bg-green-primary/20 flex items-center justify-center glow-green">
            <svg className="w-6 h-6 text-green-glow" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        )
      default:
        return null
    }
  }

  if (loading) {
    return (
      <div className="glass-medium p-8 rounded-3xl">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple/20 flex items-center justify-center animate-pulse">
            <svg className="w-6 h-6 text-purple" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div>
            <div className="font-display text-xl font-bold text-purple">AI Agent</div>
            <div className="text-sm text-text-tertiary">Analizando métricas...</div>
          </div>
        </div>
      </div>
    )
  }

  if (!data) return null

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="glass-medium p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-purple/20 flex items-center justify-center" style={{boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)'}}>
              <svg className="w-7 h-7 text-purple" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-purple">BalconyLAB AI Agent</div>
              <div className="text-sm text-text-tertiary">Powered by Claude • Última actualización: hace 2 min</div>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="px-4 py-2 rounded-xl bg-rebel/10 border border-rebel/30">
              <div className="text-xs text-text-tertiary uppercase">Críticas</div>
              <div className="font-mono text-xl font-bold text-rebel">{data.summary.critical}</div>
            </div>
            <div className="px-4 py-2 rounded-xl bg-warn/10 border border-warn/30">
              <div className="text-xs text-text-tertiary uppercase">Warnings</div>
              <div className="font-mono text-xl font-bold text-warn">{data.summary.warnings}</div>
            </div>
            <div className="px-4 py-2 rounded-xl bg-green-primary/10 border border-green-primary/30">
              <div className="text-xs text-text-tertiary uppercase">Oportunidades</div>
              <div className="font-mono text-xl font-bold text-green-glow">{data.summary.opportunities}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Alerts */}
      <div className="space-y-4">
        {data.alerts.map((alert) => (
          <div 
            key={alert.id}
            className="glass-ultra p-6 rounded-2xl cursor-pointer transition-all hover:scale-[1.01]"
            onClick={() => setExpanded(expanded === alert.id ? null : alert.id)}
          >
            <div className="flex items-start gap-4">
              {getAlertIcon(alert.type)}
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs px-2 py-1 rounded-md bg-bg-elevated border border-border-subtle">
                    {alert.rule}
                  </span>
                  <h3 className="font-display text-lg font-bold">
                    {alert.title}
                  </h3>
                </div>
                
                <p className="text-text-secondary mb-3">
                  {alert.description}
                </p>
                
                {expanded === alert.id && (
                  <div className="mt-4 pt-4 border-t border-border-subtle space-y-4 animate-fade-in">
                    <div>
                      <div className="text-sm font-semibold text-text-primary mb-2">Sugerencia:</div>
                      <p className="text-sm text-text-secondary">{alert.suggestion}</p>
                    </div>
                    
                    <div>
                      <div className="text-sm font-semibold text-text-primary mb-3">Acciones:</div>
                      <div className="flex flex-wrap gap-2">
                        {alert.actions.map((action) => (
                          <button
                            key={action.id}
                            className={`btn btn-${action.type} text-xs`}
                            onClick={(e) => {
                              e.stopPropagation()
                              window.alert('Acción: ' + action.label)
                            }}
                          >
                            {action.label}
                            {action.autoExecutable && (
                              <span className="ml-2 text-xs opacity-70">(Auto)</span>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <button className="text-text-tertiary hover:text-text-primary transition-colors">
                <svg 
                  className={`w-5 h-5 transition-transform ${expanded === alert.id ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Dashboard Visualizations */}
      {data.metrics && (
        <div className="mt-12">
          <h2 className="font-display text-3xl font-bold mb-8 text-text-primary">
            Métricas y Performance
          </h2>
          <DashboardVisualizations metrics={data.metrics} />
        </div>
      )}
    </div>
  )
}
