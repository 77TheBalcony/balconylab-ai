'use client'

import { useState } from 'react'

interface Competitor {
  id: string
  name: string
  dependencia: number // 0-10
  efectividad: number // 0-10
  scores: {
    estrategia: number
    creatividad: number
    medicion: number
    tecnologia: number
    agilidad: number
    costoEficiencia: number
    expertiseIndustria: number
  }
  fortalezas: string[]
  debilidades: string[]
  posicionamiento: string
}

const competitors: Competitor[] = [
  {
    id: 'bynd',
    name: 'BYND',
    dependencia: 3,
    efectividad: 9,
    scores: { estrategia: 9, creatividad: 9, medicion: 10, tecnologia: 9, agilidad: 10, costoEficiencia: 8, expertiseIndustria: 9 },
    fortalezas: ['AI-powered analytics', 'Producción ágil', 'Data-driven strategy'],
    debilidades: ['Marca en construcción', 'Equipo pequeño'],
    posicionamiento: 'Tech-first creative boutique con AI'
  },
  {
    id: 'ogilvy',
    name: 'Ogilvy',
    dependencia: 8,
    efectividad: 7,
    scores: { estrategia: 8, creatividad: 8, medicion: 6, tecnologia: 5, agilidad: 4, costoEficiencia: 5, expertiseIndustria: 8 },
    fortalezas: ['Marca global', 'Red internacional', 'Expertise profundo'],
    debilidades: ['Procesos lentos', 'Costo alto', 'Tech stack obsoleto'],
    posicionamiento: 'Agency tradicional premium'
  },
  {
    id: 'accenture',
    name: 'Accenture Interactive',
    dependencia: 9,
    efectividad: 6,
    scores: { estrategia: 7, creatividad: 5, medicion: 8, tecnologia: 9, agilidad: 5, costoEficiencia: 4, expertiseIndustria: 7 },
    fortalezas: ['Tech expertise', 'Recursos masivos', 'Consulting background'],
    debilidades: ['Creatividad limitada', 'Burocracia extrema', 'Muy caro'],
    posicionamiento: 'Tech consulting entrando a creative'
  },
  {
    id: 'wpp',
    name: 'WPP',
    dependencia: 9,
    efectividad: 6,
    scores: { estrategia: 7, creatividad: 7, medicion: 5, tecnologia: 5, agilidad: 3, costoEficiencia: 4, expertiseIndustria: 8 },
    fortalezas: ['Holding masivo', 'Multi-marca', 'Cobertura global'],
    debilidades: ['Fragmentación interna', 'Procesos complejos', 'Legacy systems'],
    posicionamiento: 'Holding tradicional en transición'
  },
  {
    id: 'dentsu',
    name: 'Dentsu',
    dependencia: 8,
    efectividad: 6,
    scores: { estrategia: 7, creatividad: 6, medicion: 6, tecnologia: 6, agilidad: 4, costoEficiencia: 5, expertiseIndustria: 7 },
    fortalezas: ['Presencia Asia-Pacífico', 'Data capabilities', 'Performance marketing'],
    debilidades: ['Creatividad promedio', 'Integración compleja', 'Costos altos'],
    posicionamiento: 'Network global con foco data'
  },
  {
    id: 'publicis',
    name: 'Publicis',
    dependencia: 8,
    efectividad: 7,
    scores: { estrategia: 7, creatividad: 7, medicion: 7, tecnologia: 7, agilidad: 5, costoEficiencia: 5, expertiseIndustria: 7 },
    fortalezas: ['Plataforma tecnológica', 'Modelo integrado', 'Data-driven'],
    debilidades: ['Complejidad operativa', 'Costos', 'Agilidad limitada'],
    posicionamiento: 'Holding tech-forward'
  },
  {
    id: 'local-boutique',
    name: 'Boutiques Locales',
    dependencia: 4,
    efectividad: 6,
    scores: { estrategia: 6, creatividad: 7, medicion: 4, tecnologia: 3, agilidad: 7, costoEficiencia: 7, expertiseIndustria: 6 },
    fortalezas: ['Agilidad', 'Costo accesible', 'Relación cercana'],
    debilidades: ['Tech limitado', 'Escala pequeña', 'Recursos limitados'],
    posicionamiento: 'Creativas ágiles sin tech'
  },
  {
    id: 'freelance',
    name: 'Freelancers/In-house',
    dependencia: 2,
    efectividad: 5,
    scores: { estrategia: 4, creatividad: 6, medicion: 3, tecnologia: 3, agilidad: 8, costoEficiencia: 9, expertiseIndustria: 5 },
    fortalezas: ['Máxima agilidad', 'Costo bajo', 'Control directo'],
    debilidades: ['Falta estrategia', 'Sin tech', 'Capacidad limitada'],
    posicionamiento: 'Ejecución táctica económica'
  },
  {
    id: 'r-ga',
    name: 'R/GA',
    dependencia: 7,
    efectividad: 7,
    scores: { estrategia: 8, creatividad: 7, medicion: 7, tecnologia: 8, agilidad: 6, costoEficiencia: 5, expertiseIndustria: 7 },
    fortalezas: ['Innovation focus', 'Tech + Creative', 'Startup mindset'],
    debilidades: ['Costos altos', 'Recursos limitados vs holdings', 'Escala media'],
    posicionamiento: 'Innovation agency tech-creative'
  },
  {
    id: 'huge',
    name: 'Huge',
    dependencia: 6,
    efectividad: 7,
    scores: { estrategia: 7, creatividad: 8, medicion: 6, tecnologia: 7, agilidad: 6, costoEficiencia: 6, expertiseIndustria: 6 },
    fortalezas: ['Design excellence', 'Digital-first', 'UX expertise'],
    debilidades: ['Menos analytics', 'Costo medio-alto', 'Escala limitada'],
    posicionamiento: 'Design-driven digital agency'
  }
]

export default function CompetitiveAnalysis() {
  const [selectedCompetitor, setSelectedCompetitor] = useState<Competitor | null>(null)
  const [filterDimension, setFilterDimension] = useState<string>('all')

  const dimensions = [
    { key: 'estrategia', label: 'Estrategia' },
    { key: 'creatividad', label: 'Creatividad' },
    { key: 'medicion', label: 'Medición' },
    { key: 'tecnologia', label: 'Tecnología' },
    { key: 'agilidad', label: 'Agilidad' },
    { key: 'costoEficiencia', label: 'Costo-Eficiencia' },
    { key: 'expertiseIndustria', label: 'Expertise Industria' }
  ]

  const getScoreColor = (score: number) => {
    if (score >= 8) return 'text-green-glow'
    if (score >= 6) return 'text-blue-glow'
    if (score >= 4) return 'text-warn'
    return 'text-rebel'
  }

  const getScoreBg = (score: number) => {
    if (score >= 8) return 'bg-green-glow/20 border-green-glow/30'
    if (score >= 6) return 'bg-blue-glow/20 border-blue-glow/30'
    if (score >= 4) return 'bg-warn/20 border-warn/30'
    return 'bg-rebel/20 border-rebel/30'
  }

  // Radar Chart Data
  const radarData = {
    bynd: competitors.find(c => c.id === 'bynd')!,
    average: {
      estrategia: competitors.reduce((sum, c) => sum + c.scores.estrategia, 0) / competitors.length,
      creatividad: competitors.reduce((sum, c) => sum + c.scores.creatividad, 0) / competitors.length,
      medicion: competitors.reduce((sum, c) => sum + c.scores.medicion, 0) / competitors.length,
      tecnologia: competitors.reduce((sum, c) => sum + c.scores.tecnologia, 0) / competitors.length,
      agilidad: competitors.reduce((sum, c) => sum + c.scores.agilidad, 0) / competitors.length,
      costoEficiencia: competitors.reduce((sum, c) => sum + c.scores.costoEficiencia, 0) / competitors.length,
      expertiseIndustria: competitors.reduce((sum, c) => sum + c.scores.expertiseIndustria, 0) / competitors.length
    }
  }

  const renderRadarChart = () => {
    const centerX = 150
    const centerY = 150
    const radius = 100
    const angles = dimensions.map((_, i) => (i * 2 * Math.PI) / dimensions.length - Math.PI / 2)

    const getPoint = (score: number, angleIndex: number) => {
      const r = (score / 10) * radius
      return {
        x: centerX + r * Math.cos(angles[angleIndex]),
        y: centerY + r * Math.sin(angles[angleIndex])
      }
    }

    const byndPoints = dimensions.map((dim, i) => getPoint(radarData.bynd.scores[dim.key as keyof typeof radarData.bynd.scores], i))
    const avgPoints = dimensions.map((dim, i) => getPoint(radarData.average[dim.key as keyof typeof radarData.average], i))

    return (
      <svg viewBox="0 0 300 300" className="w-full h-full">
        {/* Grid circles */}
        {[2, 4, 6, 8, 10].map(level => (
          <circle
            key={level}
            cx={centerX}
            cy={centerY}
            r={(level / 10) * radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-border-subtle"
            opacity="0.3"
          />
        ))}

        {/* Axes */}
        {dimensions.map((dim, i) => {
          const endPoint = getPoint(10, i)
          return (
            <g key={dim.key}>
              <line
                x1={centerX}
                y1={centerY}
                x2={endPoint.x}
                y2={endPoint.y}
                stroke="currentColor"
                strokeWidth="1"
                className="text-border-medium"
                opacity="0.5"
              />
              <text
                x={endPoint.x + (endPoint.x - centerX) * 0.2}
                y={endPoint.y + (endPoint.y - centerY) * 0.2}
                textAnchor="middle"
                className="text-xs fill-text-tertiary"
              >
                {dim.label}
              </text>
            </g>
          )
        })}

        {/* Average polygon */}
        <polygon
          points={avgPoints.map(p => `${p.x},${p.y}`).join(' ')}
          fill="currentColor"
          fillOpacity="0.1"
          stroke="currentColor"
          strokeWidth="2"
          className="text-text-tertiary"
        />

        {/* BYND polygon */}
        <polygon
          points={byndPoints.map(p => `${p.x},${p.y}`).join(' ')}
          fill="currentColor"
          fillOpacity="0.2"
          stroke="currentColor"
          strokeWidth="3"
          className="text-green-glow"
        />
      </svg>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header with Filter */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-2xl font-bold text-text-primary">
            Matriz Competitiva
          </h2>
          <p className="text-sm text-text-tertiary mt-1">
            10 consultoras × 7 dimensiones
          </p>
        </div>
        <select
          value={filterDimension}
          onChange={(e) => setFilterDimension(e.target.value)}
          className="glass-medium px-4 py-2 rounded-xl text-sm border border-border-subtle focus:outline-none focus:border-blue-glow transition-colors"
        >
          <option value="all">Todas las dimensiones</option>
          {dimensions.map(dim => (
            <option key={dim.key} value={dim.key}>{dim.label}</option>
          ))}
        </select>
      </div>

      {/* Competitive Table */}
      <div className="glass-medium rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border-subtle bg-bg-elevated/50">
                <th className="px-6 py-4 text-left text-xs font-semibold text-text-tertiary uppercase tracking-wider sticky left-0 bg-bg-elevated z-10">
                  Consultora
                </th>
                {dimensions.map(dim => (
                  <th key={dim.key} className="px-4 py-4 text-center text-xs font-semibold text-text-tertiary uppercase tracking-wider">
                    {dim.label}
                  </th>
                ))}
                <th className="px-6 py-4 text-center text-xs font-semibold text-text-tertiary uppercase tracking-wider">
                  Promedio
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle">
              {competitors.map((comp) => {
                const avgScore = Object.values(comp.scores).reduce((a, b) => a + b, 0) / Object.values(comp.scores).length
                return (
                  <tr
                    key={comp.id}
                    className="hover:bg-bg-elevated/50 transition-colors cursor-pointer group"
                    onClick={() => setSelectedCompetitor(comp)}
                  >
                    <td className="px-6 py-4 sticky left-0 bg-bg-dark group-hover:bg-bg-elevated/50 z-10">
                      <div className="flex items-center gap-2">
                        <div className="font-semibold text-text-primary">{comp.name}</div>
                        {comp.id === 'bynd' && (
                          <span className="px-2 py-1 rounded-md bg-green-glow/20 text-green-glow text-xs font-bold">
                            NOSOTROS
                          </span>
                        )}
                      </div>
                    </td>
                    {dimensions.map(dim => {
                      const score = comp.scores[dim.key as keyof typeof comp.scores]
                      return (
                        <td key={dim.key} className="px-4 py-4 text-center">
                          <span className={`inline-flex items-center justify-center w-10 h-10 rounded-lg border ${getScoreBg(score)} font-bold ${getScoreColor(score)}`}>
                            {score}
                          </span>
                        </td>
                      )
                    })}
                    <td className="px-6 py-4 text-center">
                      <span className="font-mono font-bold text-lg text-text-primary">
                        {avgScore.toFixed(1)}
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Radar Chart */}
        <div className="glass-medium p-6 rounded-2xl">
          <h3 className="font-display text-xl font-bold mb-4 text-text-primary">
            BYND vs Promedio Mercado
          </h3>
          <div className="h-80">
            {renderRadarChart()}
          </div>
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-green-glow" />
              <span className="text-sm text-text-tertiary">BYND</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-text-tertiary" />
              <span className="text-sm text-text-tertiary">Promedio</span>
            </div>
          </div>
        </div>

        {/* Territory Map 2D */}
        <div className="glass-medium p-6 rounded-2xl">
          <h3 className="font-display text-xl font-bold mb-4 text-text-primary">
            Territorio Único: Dependencia vs Efectividad
          </h3>
          <div className="relative h-80 bg-bg-elevated rounded-xl p-4">
            <svg viewBox="0 0 400 320" className="w-full h-full">
              {/* Grid */}
              <line x1="0" y1="160" x2="400" y2="160" stroke="currentColor" strokeWidth="1" className="text-border-medium" opacity="0.5" />
              <line x1="200" y1="0" x2="200" y2="320" stroke="currentColor" strokeWidth="1" className="text-border-medium" opacity="0.5" />
              
              {/* Labels */}
              <text x="200" y="15" textAnchor="middle" className="text-xs fill-text-tertiary">Alta Efectividad</text>
              <text x="200" y="310" textAnchor="middle" className="text-xs fill-text-tertiary">Baja Efectividad</text>
              <text x="15" y="165" textAnchor="start" className="text-xs fill-text-tertiary">Baja Dep.</text>
              <text x="385" y="165" textAnchor="end" className="text-xs fill-text-tertiary">Alta Dep.</text>

              {/* Competitors */}
              {competitors.map((comp) => {
                const x = (comp.dependencia / 10) * 380 + 10
                const y = 310 - (comp.efectividad / 10) * 290
                return (
                  <g key={comp.id}>
                    <circle
                      cx={x}
                      cy={y}
                      r={comp.id === 'bynd' ? 12 : 8}
                      fill="currentColor"
                      className={comp.id === 'bynd' ? 'text-green-glow' : 'text-blue-glow'}
                      opacity={comp.id === 'bynd' ? 1 : 0.6}
                    />
                    <text
                      x={x}
                      y={y - 15}
                      textAnchor="middle"
                      className={`text-xs ${comp.id === 'bynd' ? 'fill-green-glow font-bold' : 'fill-text-tertiary'}`}
                    >
                      {comp.name}
                    </text>
                  </g>
                )
              })}
            </svg>
          </div>
          <p className="text-xs text-text-tertiary mt-4 text-center">
            Sweet spot: Baja dependencia + Alta efectividad (esquina superior izquierda)
          </p>
        </div>
      </div>

      {/* Competitor Detail Modal */}
      {selectedCompetitor && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedCompetitor(null)}>
          <div className="glass-ultra p-8 rounded-3xl max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="font-display text-3xl font-bold text-text-primary mb-2">
                  {selectedCompetitor.name}
                </h2>
                <p className="text-text-tertiary">{selectedCompetitor.posicionamiento}</p>
              </div>
              <button
                onClick={() => setSelectedCompetitor(null)}
                className="p-2 rounded-lg hover:bg-bg-elevated transition-colors"
              >
                <svg className="w-6 h-6 text-text-tertiary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-green-glow mb-3">Fortalezas</h3>
                <ul className="space-y-2">
                  {selectedCompetitor.fortalezas.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                      <svg className="w-5 h-5 text-green-glow flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-rebel mb-3">Debilidades</h3>
                <ul className="space-y-2">
                  {selectedCompetitor.debilidades.map((d, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                      <svg className="w-5 h-5 text-rebel flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border-subtle">
              <h3 className="font-semibold text-text-primary mb-4">Scores por Dimensión</h3>
              <div className="grid grid-cols-2 gap-3">
                {dimensions.map(dim => {
                  const score = selectedCompetitor.scores[dim.key as keyof typeof selectedCompetitor.scores]
                  return (
                    <div key={dim.key} className="flex items-center justify-between">
                      <span className="text-sm text-text-tertiary">{dim.label}</span>
                      <span className={`font-bold ${getScoreColor(score)}`}>{score}/10</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
