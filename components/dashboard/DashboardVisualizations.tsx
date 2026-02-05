'use client'

import { useEffect, useState } from 'react'

interface DashboardVisualizationsProps {
  metrics: {
    impressions: number
    clicks: number
    responses: number
    qualified: number
    ctr: number
    responseRate: number
    qualificationRate: number
    cac: number
  }
}

export default function DashboardVisualizations({ metrics }: DashboardVisualizationsProps) {
  const [animatedMetrics, setAnimatedMetrics] = useState(metrics)

  useEffect(() => {
    // Animar contadores
    const interval = setInterval(() => {
      setAnimatedMetrics(prev => ({
        ...prev,
        impressions: prev.impressions + Math.floor(Math.random() * 50),
        clicks: prev.clicks + Math.floor(Math.random() * 5)
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-8">
      {/* Big KPI Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Card 1: CTR con tendencia */}
        <div className="glass-medium p-6 rounded-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-primary/5 rounded-full blur-3xl" />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-text-tertiary uppercase tracking-wide font-semibold">CTR</span>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 7a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 11-2 0V9.414l-5.293 5.293a1 1 0 01-1.414 0L6 11.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0L10 12.586l4.293-4.293H13a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                <span className="text-xs text-green-500 font-bold">+{(Math.random() * 10).toFixed(1)}%</span>
              </div>
            </div>
            <div className="font-display text-5xl font-bold text-green-glow mb-2">
              {animatedMetrics.ctr.toFixed(2)}%
            </div>
            <div className="h-8 flex items-end gap-0.5 mt-4">
              {[1.2, 1.5, 1.3, 1.8, 1.6, 2.0, 2.3].map((val, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-green-primary/50 to-green-glow rounded-t-sm"
                  style={{ height: `${(val / 2.3) * 100}%` }}
                />
              ))}
            </div>
            <div className="mt-2 text-xs text-text-tertiary">
              {animatedMetrics.ctr >= 2 ? '✓ Sobre target' : '⚠ Ajustar creativos'}
            </div>
          </div>
        </div>

        {/* Card 2: Response Rate */}
        <div className="glass-medium p-6 rounded-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-glow/5 rounded-full blur-3xl" />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-text-tertiary uppercase tracking-wide font-semibold">Respuesta</span>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 7a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 11-2 0V9.414l-5.293 5.293a1 1 0 01-1.414 0L6 11.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0L10 12.586l4.293-4.293H13a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                <span className="text-xs text-blue-400 font-bold">+{(Math.random() * 5).toFixed(1)}%</span>
              </div>
            </div>
            <div className="font-display text-5xl font-bold text-blue-glow mb-2">
              {animatedMetrics.responseRate.toFixed(1)}%
            </div>
            {/* Mini circular progress */}
            <div className="flex items-center gap-3 mt-4">
              <div className="relative w-12 h-12">
                <svg className="transform -rotate-90 w-12 h-12">
                  <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-bg-elevated" />
                  <circle
                    cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" fill="transparent"
                    strokeDasharray={`${2 * Math.PI * 20}`}
                    strokeDashoffset={`${2 * Math.PI * 20 * (1 - animatedMetrics.responseRate / 100)}`}
                    className="text-blue-glow transition-all duration-1000"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="text-xs text-text-tertiary">
                {animatedMetrics.responseRate >= 60 ? '✓ Saludable' : '⚠ Optimizar mensajes'}
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Calificación */}
        <div className="glass-medium p-6 rounded-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple/5 rounded-full blur-3xl" />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-text-tertiary uppercase tracking-wide font-semibold">Calificación</span>
              <div className="px-2 py-1 rounded-md bg-purple/20 text-xs text-purple font-bold">
                {animatedMetrics.qualificationRate >= 25 ? 'BUENO' : 'REVISAR'}
              </div>
            </div>
            <div className="font-display text-5xl font-bold text-purple mb-2">
              {animatedMetrics.qualificationRate.toFixed(1)}%
            </div>
            {/* Progress bar */}
            <div className="mt-4 h-2 bg-bg-elevated rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple to-purple/50 transition-all duration-1000"
                style={{ width: `${animatedMetrics.qualificationRate}%` }}
              />
            </div>
            <div className="mt-2 text-xs text-text-tertiary">
              Target: 25% • {animatedMetrics.qualified} calificados
            </div>
          </div>
        </div>

        {/* Card 4: CAC */}
        <div className="glass-medium p-6 rounded-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-glow/5 rounded-full blur-3xl" />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-text-tertiary uppercase tracking-wide font-semibold">CAC</span>
              <div className="flex items-center gap-1">
                <span className="text-xs text-cyan-glow font-bold">{animatedMetrics.cac <= 25000 ? '✓' : '⚠'}</span>
              </div>
            </div>
            <div className="font-display text-5xl font-bold gradient-text-spectrum mb-2">
              ${(animatedMetrics.cac / 1000).toFixed(1)}K
            </div>
            <div className="mt-4 flex items-center gap-2">
              <div className="flex-1 h-1 bg-bg-elevated rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-green-glow to-cyan-glow transition-all duration-1000"
                  style={{ width: `${100 - (animatedMetrics.cac / 500)}%` }}
                />
              </div>
            </div>
            <div className="mt-2 text-xs text-text-tertiary">
              {animatedMetrics.cac <= 25000 ? '✓ Eficiente' : '⚠ Revisar funnel'}
            </div>
          </div>
        </div>
      </div>

      {/* Large Funnel Visualization */}
      <div className="glass-medium p-8 rounded-3xl">
        <h3 className="font-display text-2xl font-bold mb-6 text-text-primary">
          Funnel de Conversión
        </h3>
        <div className="space-y-4">
          {[
            { label: 'Impresiones', value: animatedMetrics.impressions, color: 'green', width: 100 },
            { label: 'Clicks', value: animatedMetrics.clicks, color: 'blue', width: (animatedMetrics.clicks / animatedMetrics.impressions) * 100 },
            { label: 'Respuestas', value: animatedMetrics.responses, color: 'purple', width: (animatedMetrics.responses / animatedMetrics.impressions) * 100 },
            { label: 'Calificados', value: animatedMetrics.qualified, color: 'cyan', width: (animatedMetrics.qualified / animatedMetrics.impressions) * 100 }
          ].map((stage, i) => (
            <div key={i} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-text-primary">{stage.label}</span>
                <span className="font-mono text-lg font-bold text-text-primary">
                  {stage.value.toLocaleString('es-MX')}
                </span>
              </div>
              <div className="h-16 bg-bg-elevated rounded-xl overflow-hidden relative">
                <div
                  className={`h-full bg-gradient-to-r from-${stage.color}-primary to-${stage.color}-glow transition-all duration-1000 flex items-center justify-end pr-4`}
                  style={{ width: `${stage.width}%` }}
                >
                  <span className="text-white font-bold text-sm">
                    {stage.width.toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Cards Row */}
      <div className="grid grid-cols-3 gap-6">
        <div className="glass-medium p-6 rounded-2xl">
          <div className="text-sm text-text-tertiary mb-2">Impresiones Totales</div>
          <div className="font-mono text-3xl font-bold text-text-primary">
            {animatedMetrics.impressions.toLocaleString('es-MX')}
          </div>
        </div>
        <div className="glass-medium p-6 rounded-2xl">
          <div className="text-sm text-text-tertiary mb-2">Clicks Generados</div>
          <div className="font-mono text-3xl font-bold text-text-primary">
            {animatedMetrics.clicks.toLocaleString('es-MX')}
          </div>
        </div>
        <div className="glass-medium p-6 rounded-2xl">
          <div className="text-sm text-text-tertiary mb-2">Conversaciones Calificadas</div>
          <div className="font-mono text-3xl font-bold text-green-glow">
            {animatedMetrics.qualified}
          </div>
        </div>
      </div>
    </div>
  )
}
