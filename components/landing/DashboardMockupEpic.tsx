'use client'

import { useEffect, useState } from 'react'

export default function DashboardMockupEpic() {
  const [metrics, setMetrics] = useState({
    conversions: 847,
    ctr: 2.31,
    revenue: 125400,
    activeUsers: 3750
  })

  useEffect(() => {
    // Actualizar métricas cada 3 segundos
    const interval = setInterval(() => {
      setMetrics(prev => ({
        conversions: prev.conversions + Math.floor(Math.random() * 8),
        ctr: +(prev.ctr + (Math.random() * 0.15 - 0.075)).toFixed(2),
        revenue: prev.revenue + Math.floor(Math.random() * 500),
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 20 - 10)
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative glass-ultra p-8 rounded-3xl max-w-6xl mx-auto">
      {/* Status Indicator */}
      <div className="absolute top-6 right-6 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-green-glow animate-pulse" />
        <span className="text-xs text-text-tertiary font-mono">LIVE</span>
      </div>

      <div className="aspect-video bg-gradient-to-br from-bg-elevated to-bg-dark rounded-2xl overflow-hidden border border-border-medium p-8">
        {/* Top KPI Cards */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {/* Card 1: Conversions */}
          <div className="glass-medium p-4 rounded-xl relative overflow-hidden group hover:scale-105 transition-transform">
            <div className="absolute inset-0 bg-gradient-to-br from-green-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="text-xs text-text-tertiary uppercase mb-2 font-semibold">Conversiones</div>
              <div className="font-display text-4xl font-bold text-green-glow transition-all duration-500">
                {metrics.conversions}
              </div>
              <div className="flex items-center gap-1 mt-2">
                <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 7a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 11-2 0V9.414l-5.293 5.293a1 1 0 01-1.414 0L6 11.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0L10 12.586l4.293-4.293H13a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                <span className="text-xs text-green-500 font-semibold">+12.3%</span>
              </div>
            </div>
          </div>

          {/* Card 2: CTR */}
          <div className="glass-medium p-4 rounded-xl relative overflow-hidden group hover:scale-105 transition-transform">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-glow/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="text-xs text-text-tertiary uppercase mb-2 font-semibold">CTR</div>
              <div className="font-display text-4xl font-bold text-blue-glow transition-all duration-500">
                {metrics.ctr}%
              </div>
              <div className="flex items-center gap-1 mt-2">
                <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 7a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 11-2 0V9.414l-5.293 5.293a1 1 0 01-1.414 0L6 11.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0L10 12.586l4.293-4.293H13a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                <span className="text-xs text-blue-400 font-semibold">+8.1%</span>
              </div>
            </div>
          </div>

          {/* Card 3: Revenue */}
          <div className="glass-medium p-4 rounded-xl relative overflow-hidden group hover:scale-105 transition-transform">
            <div className="absolute inset-0 bg-gradient-to-br from-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="text-xs text-text-tertiary uppercase mb-2 font-semibold">Revenue</div>
              <div className="font-display text-4xl font-bold text-purple transition-all duration-500">
                ${(metrics.revenue / 1000).toFixed(0)}K
              </div>
              <div className="flex items-center gap-1 mt-2">
                <svg className="w-3 h-3 text-purple" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 7a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 11-2 0V9.414l-5.293 5.293a1 1 0 01-1.414 0L6 11.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0L10 12.586l4.293-4.293H13a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                <span className="text-xs text-purple font-semibold">+15.7%</span>
              </div>
            </div>
          </div>

          {/* Card 4: Active Users */}
          <div className="glass-medium p-4 rounded-xl relative overflow-hidden group hover:scale-105 transition-transform">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-glow/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="text-xs text-text-tertiary uppercase mb-2 font-semibold">Usuarios</div>
              <div className="font-display text-4xl font-bold gradient-text-spectrum transition-all duration-500">
                {(metrics.activeUsers / 1000).toFixed(2)}K
              </div>
              <div className="flex items-center gap-1 mt-2">
                <svg className="w-3 h-3 text-cyan-glow" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 7a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 11-2 0V9.414l-5.293 5.293a1 1 0 01-1.414 0L6 11.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0L10 12.586l4.293-4.293H13a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                <span className="text-xs text-cyan-glow font-semibold">+5.2%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-2 gap-6">
          {/* Mini Bar Chart */}
          <div className="glass-medium p-4 rounded-xl">
            <div className="text-xs text-text-tertiary uppercase mb-3 font-semibold">Performance Semanal</div>
            <div className="h-24 flex items-end justify-between gap-1">
              {[65, 78, 45, 89, 67, 92, 88].map((height, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-green-primary to-green-glow rounded-t transition-all duration-500 hover:scale-y-110"
                  style={{
                    height: `${height}%`,
                    opacity: 0.7 + (height / 200)
                  }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-xs text-text-tertiary">Lun</span>
              <span className="text-xs text-text-tertiary">Dom</span>
            </div>
          </div>

          {/* Circular Progress */}
          <div className="glass-medium p-4 rounded-xl">
            <div className="text-xs text-text-tertiary uppercase mb-3 font-semibold">Meta Mensual</div>
            <div className="flex items-center justify-center h-24">
              <div className="relative w-20 h-20">
                <svg className="transform -rotate-90 w-20 h-20">
                  <circle
                    cx="40"
                    cy="40"
                    r="30"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="transparent"
                    className="text-bg-elevated"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="30"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="transparent"
                    strokeDasharray={`${2 * Math.PI * 30}`}
                    strokeDashoffset={`${2 * Math.PI * 30 * (1 - 0.73)}`}
                    className="text-green-glow transition-all duration-1000"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-glow">73%</span>
                </div>
              </div>
            </div>
            <div className="text-center mt-2">
              <span className="text-xs text-text-tertiary">11/15 días completados</span>
            </div>
          </div>
        </div>

        {/* Bottom Status Bar */}
        <div className="mt-6 flex items-center justify-between glass-subtle p-3 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-purple animate-pulse" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <div className="text-sm font-semibold">AI Agent Activo</div>
              <div className="text-xs text-text-tertiary">3 sugerencias pendientes</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-glow animate-pulse" />
            <span className="text-xs text-green-glow font-mono">ACTUALIZANDO</span>
          </div>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="mt-4 text-center">
        <p className="text-sm text-text-tertiary">
          Dashboard en tiempo real • Inicia sesión para acceso completo
        </p>
      </div>
    </div>
  )
}
