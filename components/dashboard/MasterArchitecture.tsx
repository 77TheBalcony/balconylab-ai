'use client'

import { useState } from 'react'

interface Section {
  id: string
  title: string
  icon: string
  subsections: Subsection[]
}

interface Subsection {
  id: string
  title: string
  content: string
}

interface GanttTask {
  id: string
  name: string
  start: number // week number
  duration: number // weeks
  phase: 'pre' | 'prod' | 'post' | 'live'
  dependencies?: string[]
}

const sections: Section[] = [
  {
    id: 'vision',
    title: 'Visión General',
    icon: '🎯',
    subsections: [
      {
        id: 'objetivo',
        title: 'Objetivo del Sistema',
        content: 'Sistema integral de contenido educacional para transformar la percepción de BYND de consultora tradicional a tech-first creative boutique con capacidades de AI y producción ágil.'
      },
      {
        id: 'bloques',
        title: '5 Bloques de Contenido',
        content: 'Premium (cinematográfico), Educacionales (TikTok), Podcasts (conversacionales), Arqui (AI mascot), BYND LAB (plataforma)'
      }
    ]
  },
  {
    id: 'bloque1',
    title: 'Bloque 1: Premium',
    icon: '🎬',
    subsections: [
      {
        id: 'specs',
        title: 'Especificaciones',
        content: 'Contenido cinematográfico de 30 seg, formato 16:9, estética RED Komodo con color science avanzado, narrativa visual sin diálogos.'
      },
      {
        id: 'workflow',
        title: 'Workflow Producción',
        content: 'Preproducción 1 semana, shoot 2 días, post 1 semana. Pipeline: DaVinci Resolve + After Effects + color grading profesional.'
      }
    ]
  },
  {
    id: 'bloque2',
    title: 'Bloque 2: Educacionales',
    icon: '📱',
    subsections: [
      {
        id: 'formato',
        title: 'Formato TikTok',
        content: 'Videos 9:16 vertical, 15-20 seg, hook primeros 2 seg, CTA final, overlays dinámicos, música trending.'
      },
      {
        id: 'temas',
        title: 'Temas Core',
        content: 'Marketing digital, creatividad, estrategia, métricas, casos de éxito, tips rápidos, behind the scenes.'
      }
    ]
  },
  {
    id: 'bloque3',
    title: 'Bloque 3: Podcasts',
    icon: '🎙️',
    subsections: [
      {
        id: 'formato-podcast',
        title: 'Formato Conversacional',
        content: 'Episodios 20-30 min, 2 hosts + invitado ocasional, temas profundos de industria, edición dinámica con clips cortos para redes.'
      },
      {
        id: 'distribucion',
        title: 'Distribución',
        content: 'Spotify, Apple Podcasts, YouTube (video), TikTok (clips), LinkedIn (highlights). Episodio nuevo cada 2 semanas.'
      }
    ]
  },
  {
    id: 'bloque4',
    title: 'Bloque 4: Arqui',
    icon: '🤖',
    subsections: [
      {
        id: 'concepto',
        title: 'AI Mascot',
        content: 'Personaje virtual generado con AI que explica arquitecturas de sistemas, interactivo, personalidad tech-friendly, visual futurista.'
      },
      {
        id: 'tech-stack',
        title: 'Tech Stack',
        content: 'Midjourney/DALL-E para diseño, D-ID/Synthesia para animación, ElevenLabs para voz, compositing en After Effects.'
      }
    ]
  },
  {
    id: 'bloque5',
    title: 'Bloque 5: BYND LAB',
    icon: '🧪',
    subsections: [
      {
        id: 'plataforma',
        title: 'Plataforma Live',
        content: 'Dashboard en tiempo real con BalconyLAB mostrando métricas del proyecto, preview de contenido, AI insights, casos de éxito actualizados.'
      },
      {
        id: 'features',
        title: 'Features Core',
        content: 'Preview videos, analytics live, documentación interactiva, comparativa competitiva, roadmap público, blog integrado.'
      }
    ]
  },
  {
    id: 'sistema-pauta',
    title: 'Sistema de Pauta',
    icon: '🎯',
    subsections: [
      {
        id: 'estrategia',
        title: 'Estrategia Multi-canal',
        content: 'Meta Ads (70% budget), TikTok Ads (20%), LinkedIn Ads (10%). Audiencia: CMOs, directores marketing, founders tech/ecommerce.'
      },
      {
        id: 'kpis',
        title: 'KPIs Principales',
        content: 'CTR >2%, CPM <$15, CPC <$1.50, Tasa respuesta >60%, CAC <$25K, ROI >300%.'
      }
    ]
  }
]

const ganttTasks: GanttTask[] = [
  // PREPRODUCCIÓN
  { id: 'pre-1', name: 'Kick-off + Brief', start: 1, duration: 1, phase: 'pre' },
  { id: 'pre-2', name: 'Guiones + Storyboards', start: 1, duration: 2, phase: 'pre' },
  { id: 'pre-3', name: 'Casting + Locations', start: 2, duration: 2, phase: 'pre' },
  { id: 'pre-4', name: 'Plan de rodaje', start: 3, duration: 1, phase: 'pre' },
  
  // PRODUCCIÓN
  { id: 'prod-1', name: 'Shoot Premium (2 días)', start: 4, duration: 1, phase: 'prod', dependencies: ['pre-4'] },
  { id: 'prod-2', name: 'Shoot Educacionales', start: 5, duration: 1, phase: 'prod' },
  { id: 'prod-3', name: 'Grab Podcasts (3 eps)', start: 5, duration: 2, phase: 'prod' },
  { id: 'prod-4', name: 'Generación Arqui AI', start: 6, duration: 1, phase: 'prod' },
  
  // POST-PRODUCCIÓN
  { id: 'post-1', name: 'Edit Premium', start: 5, duration: 2, phase: 'post', dependencies: ['prod-1'] },
  { id: 'post-2', name: 'Color Grading Premium', start: 6, duration: 1, phase: 'post', dependencies: ['post-1'] },
  { id: 'post-3', name: 'Edit Educacionales', start: 6, duration: 1, phase: 'post', dependencies: ['prod-2'] },
  { id: 'post-4', name: 'Edit Podcasts', start: 7, duration: 1, phase: 'post', dependencies: ['prod-3'] },
  { id: 'post-5', name: 'Motion Graphics Arqui', start: 7, duration: 1, phase: 'post', dependencies: ['prod-4'] },
  { id: 'post-6', name: 'BalconyLAB Build', start: 4, duration: 4, phase: 'post' },
  
  // SISTEMA ANDANDO
  { id: 'live-1', name: 'Setup Pauta + Cuentas', start: 7, duration: 1, phase: 'live' },
  { id: 'live-2', name: 'Launch Suave (Feb final)', start: 8, duration: 1, phase: 'live', dependencies: ['live-1'] },
  { id: 'live-3', name: 'Optimización + Clipping', start: 9, duration: 2, phase: 'live' },
  { id: 'live-4', name: 'Sistema Full (Marzo)', start: 11, duration: 2, phase: 'live' },
  { id: 'live-5', name: 'Mailing + Outreach', start: 9, duration: 4, phase: 'live' },
  { id: 'live-6', name: 'Podcasts publicación', start: 10, duration: 3, phase: 'live' }
]

export default function MasterArchitecture() {
  const [activeSection, setActiveSection] = useState(sections[0].id)
  const [activeSubsection, setActiveSubsection] = useState(sections[0].subsections[0].id)
  const [searchTerm, setSearchTerm] = useState('')
  const [ganttZoom, setGanttZoom] = useState(1)

  const currentSection = sections.find(s => s.id === activeSection)
  const currentSubsection = currentSection?.subsections.find(ss => ss.id === activeSubsection)

  const getPhaseColor = (phase: GanttTask['phase']) => {
    const colors = {
      pre: 'bg-blue-glow',
      prod: 'bg-green-glow',
      post: 'bg-purple',
      live: 'bg-cyan-glow'
    }
    return colors[phase]
  }

  const getPhaseLabel = (phase: GanttTask['phase']) => {
    const labels = {
      pre: 'Preproducción',
      prod: 'Producción',
      post: 'Post-producción',
      live: 'Sistema Live'
    }
    return labels[phase]
  }

  return (
    <div className="flex gap-6 h-full">
      {/* Sidebar Navigation */}
      <div className="w-72 glass-medium rounded-2xl p-6 flex-shrink-0 overflow-y-auto">
        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Buscar en documento..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-xl bg-bg-elevated border border-border-subtle focus:outline-none focus:border-blue-glow transition-colors text-sm"
          />
        </div>

        {/* Sections */}
        <nav className="space-y-2">
          {sections.map(section => (
            <div key={section.id}>
              <button
                onClick={() => {
                  setActiveSection(section.id)
                  setActiveSubsection(section.subsections[0].id)
                }}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-left ${
                  activeSection === section.id
                    ? 'bg-blue-primary/10 border-l-4 border-blue-primary text-text-primary'
                    : 'text-text-secondary hover:bg-bg-elevated hover:text-text-primary'
                }`}
              >
                <span className="text-lg">{section.icon}</span>
                <span className="font-semibold text-sm">{section.title}</span>
              </button>

              {activeSection === section.id && (
                <div className="mt-2 ml-8 space-y-1">
                  {section.subsections.map(sub => (
                    <button
                      key={sub.id}
                      onClick={() => setActiveSubsection(sub.id)}
                      className={`w-full text-left px-3 py-1.5 rounded text-sm transition-colors ${
                        activeSubsection === sub.id
                          ? 'text-blue-glow font-semibold'
                          : 'text-text-tertiary hover:text-text-primary'
                      }`}
                    >
                      {sub.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 space-y-8 overflow-y-auto">
        {/* Current Content */}
        <div className="glass-medium p-8 rounded-2xl">
          <h2 className="font-display text-3xl font-bold text-text-primary mb-2">
            {currentSubsection?.title}
          </h2>
          <p className="text-text-secondary leading-relaxed">
            {currentSubsection?.content}
          </p>
        </div>

        {/* Gantt Chart */}
        {activeSection === 'sistema-pauta' && (
          <div className="glass-medium p-8 rounded-2xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-display text-2xl font-bold text-text-primary">
                  Timeline Maestro: Feb - Mar 2026
                </h3>
                <p className="text-sm text-text-tertiary mt-1">
                  Diagrama Gantt interactivo • Todas las fases del proyecto
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setGanttZoom(Math.max(0.5, ganttZoom - 0.25))}
                  className="px-3 py-1.5 rounded-lg bg-bg-elevated hover:bg-bg-elevated/80 transition-colors text-sm"
                >
                  −
                </button>
                <span className="text-sm text-text-tertiary w-16 text-center">{(ganttZoom * 100).toFixed(0)}%</span>
                <button
                  onClick={() => setGanttZoom(Math.min(2, ganttZoom + 0.25))}
                  className="px-3 py-1.5 rounded-lg bg-bg-elevated hover:bg-bg-elevated/80 transition-colors text-sm"
                >
                  +
                </button>
              </div>
            </div>

            {/* Gantt Legend */}
            <div className="flex items-center gap-6 mb-6 flex-wrap">
              {['pre', 'prod', 'post', 'live'].map(phase => (
                <div key={phase} className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded ${getPhaseColor(phase as GanttTask['phase'])}`} />
                  <span className="text-sm text-text-tertiary">{getPhaseLabel(phase as GanttTask['phase'])}</span>
                </div>
              ))}
            </div>

            {/* Gantt Chart */}
            <div className="overflow-x-auto">
              <div style={{ minWidth: `${800 * ganttZoom}px` }}>
                {/* Week Headers */}
                <div className="flex border-b border-border-subtle pb-2 mb-4">
                  <div className="w-48 flex-shrink-0 font-semibold text-xs text-text-tertiary uppercase">
                    Tarea
                  </div>
                  <div className="flex-1 flex">
                    {Array.from({ length: 13 }, (_, i) => (
                      <div key={i} className="flex-1 text-center text-xs text-text-tertiary">
                        S{i + 1}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tasks */}
                <div className="space-y-2">
                  {ganttTasks.map(task => {
                    const leftPercent = ((task.start - 1) / 13) * 100
                    const widthPercent = (task.duration / 13) * 100

                    return (
                      <div key={task.id} className="flex items-center group">
                        <div className="w-48 flex-shrink-0 text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                          {task.name}
                        </div>
                        <div className="flex-1 relative h-10">
                          <div
                            className={`absolute h-8 rounded-lg ${getPhaseColor(task.phase)} opacity-80 hover:opacity-100 transition-all cursor-pointer flex items-center justify-center`}
                            style={{
                              left: `${leftPercent}%`,
                              width: `${widthPercent}%`
                            }}
                            title={`${task.name} • ${task.duration} semana${task.duration > 1 ? 's' : ''}`}
                          >
                            <span className="text-xs font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity">
                              {task.duration}s
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Milestones */}
            <div className="mt-8 pt-6 border-t border-border-subtle">
              <h4 className="font-semibold text-text-primary mb-4">Milestones Clave</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="glass-subtle p-4 rounded-xl">
                  <div className="text-2xl font-bold text-blue-glow mb-1">Semana 4</div>
                  <div className="text-sm text-text-secondary">Shoot Premium completado</div>
                </div>
                <div className="glass-subtle p-4 rounded-xl">
                  <div className="text-2xl font-bold text-green-glow mb-1">Semana 8</div>
                  <div className="text-sm text-text-secondary">Launch suave (feb final)</div>
                </div>
                <div className="glass-subtle p-4 rounded-xl">
                  <div className="text-2xl font-bold text-cyan-glow mb-1">Semana 11</div>
                  <div className="text-sm text-text-secondary">Sistema full operativo (marzo)</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* System Map (Visual) */}
        {activeSection === 'vision' && activeSubsection === 'bloques' && (
          <div className="glass-medium p-8 rounded-2xl">
            <h3 className="font-display text-2xl font-bold text-text-primary mb-6">
              Mapa del Sistema Completo
            </h3>
            <div className="relative h-96 bg-bg-elevated rounded-xl p-8">
              <svg viewBox="0 0 800 400" className="w-full h-full">
                {/* Bloques */}
                {[
                  { x: 100, y: 80, label: 'Premium', color: '#8B5CF6' },
                  { x: 300, y: 80, label: 'Educacionales', color: '#3B82F6' },
                  { x: 500, y: 80, label: 'Podcasts', color: '#10B981' },
                  { x: 700, y: 80, label: 'Arqui', color: '#F59E0B' },
                  { x: 400, y: 280, label: 'BYND LAB', color: '#06B6D4' }
                ].map((block, i) => (
                  <g key={i}>
                    <rect
                      x={block.x - 60}
                      y={block.y - 30}
                      width="120"
                      height="60"
                      rx="8"
                      fill={block.color}
                      opacity="0.2"
                      stroke={block.color}
                      strokeWidth="2"
                    />
                    <text
                      x={block.x}
                      y={block.y + 5}
                      textAnchor="middle"
                      className="text-sm font-bold"
                      fill={block.color}
                    >
                      {block.label}
                    </text>
                  </g>
                ))}

                {/* Connections */}
                <line x1="160" y1="110" x2="400" y2="250" stroke="#06B6D4" strokeWidth="2" opacity="0.5" />
                <line x1="340" y1="110" x2="400" y2="250" stroke="#06B6D4" strokeWidth="2" opacity="0.5" />
                <line x1="460" y1="110" x2="400" y2="250" stroke="#06B6D4" strokeWidth="2" opacity="0.5" />
                <line x1="640" y1="110" x2="400" y2="250" stroke="#06B6D4" strokeWidth="2" opacity="0.5" />

                {/* Center label */}
                <text x="400" y="360" textAnchor="middle" className="text-xs fill-text-tertiary">
                  Todo converge en BYND LAB (plataforma central)
                </text>
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
