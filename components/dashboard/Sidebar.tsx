'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface SidebarProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export default function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const [expanded, setExpanded] = useState<string | null>('proyecto')
  const router = useRouter()

  const handleLogout = () => {
    sessionStorage.removeItem('balconylab_auth')
    sessionStorage.removeItem('balconylab_user')
    router.push('/')
  }

  const sections = {
    proyecto: {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
      ),
      label: 'PROYECTO',
      subsections: ['documentos', 'maquetas', 'referencias']
    },
    dashboard: {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
        </svg>
      ),
      label: 'DASHBOARD',
      subsections: ['ai-agent', 'funnel', 'crm', 'costos', 'performance', 'audiencia']
    }
  }

  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-bg-dark border-r border-border-subtle flex flex-col z-50">
      {/* Logo */}
      <div className="p-6 border-b border-border-subtle">
        <Image 
          src="/logo-balconylab.svg" 
          alt="BalconyLAB" 
          width={150}
          height={50}
          priority
        />
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        {Object.entries(sections).map(([key, section]) => (
          <div key={key}>
            {/* Main section */}
            <button
              onClick={() => {
                setExpanded(expanded === key ? null : key)
                onSectionChange(`${key}-${section.subsections[0]}`)
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeSection.startsWith(key)
                  ? 'bg-blue-primary/10 border-l-4 border-blue-primary text-text-primary'
                  : 'text-text-secondary hover:bg-bg-elevated hover:text-text-primary'
              }`}
            >
              <div className="w-5 h-5">{section.icon}</div>
              <span className="font-display font-semibold text-sm flex-1 text-left tracking-wide">
                {section.label}
              </span>
              <svg 
                className={`w-4 h-4 transition-transform ${expanded === key ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Subsections */}
            {expanded === key && (
              <div className="ml-12 mt-2 space-y-1 animate-fade-in">
                {section.subsections.map(sub => (
                  <button
                    key={sub}
                    onClick={() => onSectionChange(`${key}-${sub}`)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      activeSection === `${key}-${sub}`
                        ? 'text-green-glow font-semibold bg-green-primary/5'
                        : 'text-text-tertiary hover:text-text-secondary hover:bg-bg-elevated'
                    }`}
                  >
                    <span className="inline-block w-2 h-2 rounded-full bg-current mr-2 opacity-70" />
                    {sub.charAt(0).toUpperCase() + sub.slice(1)}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* User section */}
      <div className="p-4 border-t border-border-subtle">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-green flex items-center justify-center font-display font-bold text-sm">
            BY
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-sm truncate">BYND User</div>
            <div className="text-xs text-text-tertiary truncate">demo@bynd.com</div>
          </div>
          <button 
            onClick={handleLogout}
            className="p-2 rounded-lg hover:bg-rebel/10 text-text-tertiary hover:text-rebel transition-colors"
            title="Cerrar sesión"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
            </svg>
          </button>
        </div>
      </div>
    </aside>
  )
}
