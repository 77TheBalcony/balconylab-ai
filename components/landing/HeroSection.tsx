'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    // Letter-by-letter animation
    const title = titleRef.current
    if (!title) return

    const text = 'BalconyLAB'
    title.innerHTML = ''

    text.split('').forEach((letter, i) => {
      const span = document.createElement('span')
      span.textContent = letter
      span.style.display = 'inline-block'
      span.style.opacity = '0'
      span.style.transform = 'translateY(50px) rotateX(-90deg)'
      span.style.animation = `letter-reveal 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.05}s forwards`
      title.appendChild(span)
    })

    // Add CSS animation
    const style = document.createElement('style')
    style.textContent = `
      @keyframes letter-reveal {
        to {
          opacity: 1;
          transform: translateY(0) rotateX(0);
        }
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
      {/* Logo */}
      <div className="absolute top-8 left-8 animate-fade-in">
        <Image 
          src="/logo-balconylab.svg" 
          alt="BalconyLAB" 
          width={180}
          height={60}
          className="glow-green transition-all duration-300 hover:scale-105"
          priority
        />
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Hero Title */}
        <h1 
          ref={titleRef}
          className="font-display text-7xl md:text-9xl font-extrabold tracking-tight"
          style={{
            background: 'linear-gradient(135deg, #FFFFFF 0%, #2D8B6F 50%, #0066FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          BalconyLAB
        </h1>

        {/* Tagline */}
        <p className="font-display text-3xl md:text-4xl font-semibold text-green-glow animate-fade-in animation-delay-300">
          Observa, decide, crece
        </p>

        {/* Description */}
        <p className="text-base md:text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-500">
          Plataforma de investigación, tracking y analytics para proyectos de crecimiento digital.
          <br />
          <span className="text-text-primary">Visibilidad total, decisiones data-driven, resultados medibles.</span>
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto pt-8 animate-fade-in animation-delay-700">
          <div className="glass-subtle p-6 rounded-2xl">
            <div className="font-display text-4xl font-bold text-blue-glow mb-2">24/7</div>
            <div className="text-sm text-text-tertiary uppercase tracking-wide">AI Agent<br/>Activo</div>
          </div>
          <div className="glass-subtle p-6 rounded-2xl">
            <div className="font-display text-4xl font-bold gradient-text-spectrum mb-2">Real-time</div>
            <div className="text-sm text-text-tertiary uppercase tracking-wide">Analytics<br/>Dashboard</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-1000">
        <div className="flex flex-col items-center gap-2 text-text-tertiary">
          <span className="text-sm uppercase tracking-wider">Scroll</span>
          <svg 
            className="w-6 h-6 animate-bounce" 
            fill="none" 
            strokeWidth="2" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  )
}
