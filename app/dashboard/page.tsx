'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/dashboard/Sidebar'
import AIAgent from '@/components/dashboard/AIAgent'
import CRMModule from '@/components/dashboard/CRMModule'
import CompetitiveAnalysis from '@/components/dashboard/CompetitiveAnalysis'
import MasterArchitecture from '@/components/dashboard/MasterArchitecture'
import ReactMarkdown from 'react-markdown'

export default function DashboardPage() {
  const [activeSection, setActiveSection] = useState('dashboard-ai-agent')
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null)
  const [docContent, setDocContent] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check auth
    const isAuth = sessionStorage.getItem('balconylab_auth')
    if (isAuth !== 'true') {
      router.push('/')
    }
  }, [router])

  const loadDocument = async (docName: string, docPath: string) => {
    setLoading(true)
    setSelectedDoc(docName)
    try {
      const response = await fetch(`/docs/${docPath}`)
      const text = await response.text()
      setDocContent(text)
    } catch (error) {
      console.error('Error loading document:', error)
      setDocContent('# Error\n\nNo se pudo cargar el documento.')
    } finally {
      setLoading(false)
    }
  }

  const closeDocument = () => {
    setSelectedDoc(null)
    setDocContent('')
  }

  const renderContent = () => {
    switch(activeSection) {
      case 'dashboard-ai-agent':
        return (
          <div>
            <h1 className="font-display text-4xl font-bold mb-2">AI Agent</h1>
            <p className="text-text-tertiary mb-8">Sugerencias en tiempo real powered by Claude</p>
            <AIAgent />
          </div>
        )
      
      case 'dashboard-funnel':
        return (
          <div>
            <h1 className="font-display text-4xl font-bold mb-2">Funnel Analytics</h1>
            <p className="text-text-tertiary mb-8">Conversiones y métricas del funnel completo</p>
            <div className="glass-medium p-12 rounded-3xl text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-blue-primary/20 flex items-center justify-center glow-cyan">
                <svg className="w-10 h-10 text-blue-glow" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold mb-2">Módulo Funnel</h3>
              <p className="text-text-tertiary">Próximamente: Gráficas interactivas del funnel completo</p>
            </div>
          </div>
        )
      
      case 'dashboard-crm':
        return (
          <div>
            <h1 className="font-display text-4xl font-bold mb-2">CRM</h1>
            <p className="text-text-tertiary mb-8">Gestión de leads y pipeline de ventas</p>
            <CRMModule />
          </div>
        )
      
      case 'dashboard-costos':
      case 'dashboard-performance':
      case 'dashboard-audiencia':
        return (
          <div>
            <h1 className="font-display text-4xl font-bold mb-2 capitalize">
              {activeSection.split('-')[1]}
            </h1>
            <p className="text-text-tertiary mb-8">Dashboard analytics</p>
            <div className="glass-medium p-12 rounded-3xl text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-primary/20 flex items-center justify-center glow-green">
                <svg className="w-10 h-10 text-green-glow" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold mb-2">Módulo en Desarrollo</h3>
              <p className="text-text-tertiary">Próximamente disponible</p>
            </div>
          </div>
        )
      
      case 'proyecto-documentos':
        if (selectedDoc) {
          // Special case: Interactive Competitive Analysis
          if (selectedDoc === 'Análisis Competitivo') {
            return (
              <div>
                <button
                  onClick={closeDocument}
                  className="flex items-center gap-2 text-text-secondary hover:text-text-primary mb-6 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                  Volver a documentos
                </button>
                
                <h1 className="font-display text-4xl font-bold mb-2">Análisis Competitivo Interactivo</h1>
                <p className="text-text-tertiary mb-8">10 consultoras × 7 dimensiones • Radar chart • Mapa territorio</p>
                
                <CompetitiveAnalysis />
              </div>
            )
          }

          // Special case: Interactive Master Architecture
          if (selectedDoc === 'Arquitectura Maestra') {
            return (
              <div>
                <button
                  onClick={closeDocument}
                  className="flex items-center gap-2 text-text-secondary hover:text-text-primary mb-6 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                  Volver a documentos
                </button>
                
                <h1 className="font-display text-4xl font-bold mb-2">Arquitectura Maestra del Sistema</h1>
                <p className="text-text-tertiary mb-8">5 Bloques • Timeline Gantt • Navegación por secciones</p>
                
                <MasterArchitecture />
              </div>
            )
          }

          return (
            <div>
              <button
                onClick={closeDocument}
                className="flex items-center gap-2 text-text-secondary hover:text-text-primary mb-6 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Volver a documentos
              </button>
              
              <h1 className="font-display text-4xl font-bold mb-8">{selectedDoc}</h1>
              
              {loading ? (
                <div className="glass-medium p-12 rounded-3xl text-center">
                  <div className="animate-spin w-12 h-12 border-4 border-green-primary border-t-transparent rounded-full mx-auto mb-4" />
                  <p className="text-text-tertiary">Cargando documento...</p>
                </div>
              ) : (
                <div className="glass-medium p-8 rounded-3xl prose prose-invert prose-green max-w-none">
                  <ReactMarkdown
                    components={{
                      h1: ({ node, ...props }) => <h1 className="text-3xl font-bold text-green-glow mb-4" {...props} />,
                      h2: ({ node, ...props }) => <h2 className="text-2xl font-bold text-text-primary mb-3 mt-6" {...props} />,
                      h3: ({ node, ...props }) => <h3 className="text-xl font-bold text-text-primary mb-2 mt-4" {...props} />,
                      p: ({ node, ...props }) => <p className="text-text-secondary mb-4 leading-relaxed" {...props} />,
                      ul: ({ node, ...props }) => <ul className="list-disc list-inside space-y-2 mb-4 text-text-secondary" {...props} />,
                      ol: ({ node, ...props }) => <ol className="list-decimal list-inside space-y-2 mb-4 text-text-secondary" {...props} />,
                      code: ({ node, ...props }) => <code className="bg-bg-elevated px-2 py-1 rounded text-green-glow font-mono text-sm" {...props} />,
                      strong: ({ node, ...props }) => <strong className="font-bold text-text-primary" {...props} />,
                    }}
                  >
                    {docContent}
                  </ReactMarkdown>
                </div>
              )}
            </div>
          )
        }
        
        return (
          <div>
            <h1 className="font-display text-4xl font-bold mb-2">Documentación</h1>
            <p className="text-text-tertiary mb-8">Documentos del proyecto BYND</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { 
                  title: 'Análisis Competitivo', 
                  desc: '10 consultoras analizadas', 
                  icon: '📊',
                  file: '01_ANALISIS_COMPETITIVO_BYND.md'
                },
                { 
                  title: 'Arquitectura Maestra', 
                  desc: '5 bloques + sistema completo', 
                  icon: '🏗️',
                  file: '02_ARQUITECTURA_MAESTRA_BYND_V2.md'
                },
                { 
                  title: 'Premium Specs', 
                  desc: 'Bloque 1 cinematográfico', 
                  icon: '🎬',
                  file: '03_BLOQUE_1_PREMIUM_SPECS_V3.md'
                },
                { 
                  title: 'Producción Ágil', 
                  desc: 'Educacionales + BYND LAB', 
                  icon: '⚡',
                  file: 'TRATAMIENTO_PRODUCCION_AGIL__1_.md'
                },
              ].map((doc, i) => (
                <button
                  key={i}
                  onClick={() => loadDocument(doc.title, doc.file)}
                  className="card card-neural text-left group"
                >
                  <div className="text-4xl mb-4">{doc.icon}</div>
                  <h3 className="font-display text-xl font-bold mb-2 group-hover:text-green-glow transition-colors">
                    {doc.title}
                  </h3>
                  <p className="text-text-tertiary text-sm mb-3">{doc.desc}</p>
                  <div className="flex items-center gap-2 text-green-glow text-sm font-semibold">
                    Abrir documento
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )
      
      case 'proyecto-maquetas':
        return (
          <div>
            <h1 className="font-display text-4xl font-bold mb-2">Maquetas Audiovisuales</h1>
            <p className="text-text-tertiary mb-8">Videos demostrativos de cada bloque de contenido</p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: 'Premium', duration: '30 seg', type: 'Cinematográfico', vimeoId: '1162419291', hash: 'ad73a58485' },
                { title: 'Educacional', duration: '20 seg', type: 'TikTok Style', vimeoId: '1162422070', hash: '9cae881386' },
                { title: 'Educacional 2', duration: '20 seg', type: 'TikTok Style', vimeoId: '1162423738', hash: '' },
                { title: 'Educacional 3', duration: '15 seg', type: 'TikTok Style', vimeoId: '1162424985', hash: '' },
                { title: 'BYND LAB', duration: '20 seg', type: 'Live Preview', vimeoId: '', hash: '' },
              ].map((video, i) => (
                <div key={i} className="card card-neural">
                  <div className="aspect-video bg-bg-elevated rounded-xl mb-4 overflow-hidden">
                    {video.vimeoId ? (
                      <iframe
                        src={`https://player.vimeo.com/video/${video.vimeoId}${video.hash ? `?h=${video.hash}&` : '?'}badge=0&autopause=0&player_id=0&app_id=58479`}
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                        className="w-full h-full"
                        title={video.title}
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-center p-6">
                        <svg className="w-12 h-12 text-text-tertiary mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                        </svg>
                        <p className="text-sm text-text-tertiary">
                          Agrega el ID de Vimeo en el código<br/>
                          <code className="text-xs text-green-glow mt-2 inline-block">vimeoId: 'TU_ID_AQUI'</code>
                        </p>
                      </div>
                    )}
                  </div>
                  <h3 className="font-display text-lg font-bold mb-1">{video.title}</h3>
                  <div className="flex gap-3 text-sm text-text-tertiary">
                    <span>{video.duration}</span>
                    <span>•</span>
                    <span>{video.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      
      case 'proyecto-ruta-critica':
        return (
          <div>
            <h1 className="font-display text-4xl font-bold mb-2">Ruta Crítica</h1>
            <p className="text-text-tertiary mb-8">Timeline y milestones del proyecto</p>
            
            <div className="glass-medium p-8 rounded-3xl">
              <div className="mb-6">
                <h3 className="font-display text-xl font-bold mb-2">Google Sheets - Editable en tiempo real</h3>
                <p className="text-text-tertiary text-sm mb-4">
                  Este documento se sincroniza automáticamente desde Google Sheets. Los cambios se reflejan en tiempo real.
                </p>
              </div>
              
              {/* Google Sheets Embed */}
              <div className="w-full h-[800px] rounded-xl overflow-hidden border border-border-subtle">
                <iframe
                  src="https://docs.google.com/spreadsheets/d/17LaLjcpamKNZSH3qHfYbVvnqkS6yYDLp/edit?usp=sharing&rm=minimal"
                  className="w-full h-full"
                  frameBorder="0"
                  title="Ruta Crítica BYND"
                />
              </div>
              
              <div className="mt-6 p-4 bg-green-primary/10 border border-green-primary/20 rounded-xl">
                <div className="flex gap-3">
                  <svg className="w-5 h-5 text-green-glow flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <div className="text-sm">
                    <p className="font-semibold text-text-primary mb-1">✅ Google Sheets conectado</p>
                    <p className="text-text-tertiary">
                      Este documento se actualiza automáticamente. Cualquier cambio que hagas en Google Sheets se reflejará aquí al recargar la página.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      
      default:
        return (
          <div>
            <h1 className="font-display text-4xl font-bold mb-2">Dashboard</h1>
            <p className="text-text-tertiary">Selecciona una sección del menú</p>
          </div>
        )
    }
  }

  return (
    <div className="flex min-h-screen bg-bg-darker">
      <Sidebar 
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      
      <main className="flex-1 ml-72 p-8">
        <div className="max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  )
}
