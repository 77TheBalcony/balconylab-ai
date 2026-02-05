import NeuralNetwork3D from '@/components/landing/NeuralNetwork3D'
import HeroSection from '@/components/landing/HeroSection'
import LoginForm from '@/components/landing/LoginForm'
import DashboardMockupEpic from '@/components/landing/DashboardMockupEpic'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Neural Network 3D Background */}
      <NeuralNetwork3D />

      {/* Hero Section */}
      <HeroSection />

      {/* Login Section */}
      <section className="relative z-10 py-20">
        <div className="container">
          <LoginForm />
        </div>
      </section>

      {/* Why BalconyLAB Section */}
      <section className="relative z-10 py-32">
        <div className="container">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 gradient-text-spectrum">
            ¿Por qué BalconyLAB?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1: Visibilidad */}
            <div className="card card-neural group cursor-pointer">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-green-primary/20 flex items-center justify-center glow-green">
                  <svg className="w-8 h-8 text-green-glow" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-display text-2xl font-bold mb-3 text-green-glow group-hover:text-glow-green transition-all">
                Visibilidad Total
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Métricas en tiempo real conectadas a todas tus plataformas. 
                Meta, TikTok, YouTube, Instagram, WhatsApp, Calendly. 
                Todo en un solo lugar.
              </p>
            </div>

            {/* Card 2: Decisiones */}
            <div className="card card-neural group cursor-pointer">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-blue-primary/20 flex items-center justify-center glow-cyan">
                  <svg className="w-8 h-8 text-blue-glow" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-display text-2xl font-bold mb-3 text-blue-glow group-hover:text-glow-cyan transition-all">
                Decisiones Data-Driven
              </h3>
              <p className="text-text-secondary leading-relaxed">
                AI Agent 24/7 analiza patrones y sugiere acciones concretas.
                Pausar creatives, escalar winners, optimizar budget.
                Automatizado.
              </p>
            </div>

            {/* Card 3: Crecimiento */}
            <div className="card card-neural group cursor-pointer">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-purple/20 flex items-center justify-center" style={{boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)'}}>
                  <svg className="w-8 h-8 text-purple" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
              <h3 className="font-display text-2xl font-bold mb-3 text-purple group-hover:brightness-125 transition-all">
                Resultados Medibles
              </h3>
              <p className="text-text-secondary leading-relaxed">
                North Star Metric clara: Conversaciones calificadas/mes.
                Funnel completo trackeado. CAC, LTV, ROI.
                Crecimiento real, no vanity metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* System Preview Section */}
      <section className="relative z-10 py-32 overflow-hidden">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 gradient-text-spectrum">
              Sistema en Acción
            </h2>
            <p className="text-xl text-text-secondary">
              AI Agent + Analytics en Tiempo Real + Dashboard Neural
            </p>
          </div>

          {/* Mockup Dashboard Preview Animado */}
          <DashboardMockupEpic />
        </div>
      </section>
    </main>
  )
}
