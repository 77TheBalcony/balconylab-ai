'use client'

import { useState } from 'react'

interface Lead {
  id: string
  name: string
  company: string
  status: 'nuevo' | 'contactado' | 'calificado' | 'propuesta' | 'cerrado'
  value: number
  lastContact: string
  source: string
}

export default function CRMModule() {
  const [leads] = useState<Lead[]>([
    {
      id: '1',
      name: 'Carlos Méndez',
      company: 'Tech Solutions SA',
      status: 'calificado',
      value: 45000,
      lastContact: 'Hace 2 horas',
      source: 'Meta Ads'
    },
    {
      id: '2',
      name: 'Ana García',
      company: 'Innovate Corp',
      status: 'propuesta',
      value: 78000,
      lastContact: 'Hace 1 día',
      source: 'LinkedIn'
    },
    {
      id: '3',
      name: 'Roberto Silva',
      company: 'Growth Labs',
      status: 'contactado',
      value: 32000,
      lastContact: 'Hace 3 horas',
      source: 'TikTok'
    },
    {
      id: '4',
      name: 'María Rodríguez',
      company: 'Digital First',
      status: 'nuevo',
      value: 56000,
      lastContact: 'Hace 30 min',
      source: 'Meta Ads'
    },
    {
      id: '5',
      name: 'Luis Fernández',
      company: 'Scale Partners',
      status: 'cerrado',
      value: 125000,
      lastContact: 'Hace 1 sem',
      source: 'Referido'
    }
  ])

  const getStatusColor = (status: Lead['status']) => {
    const colors = {
      nuevo: 'bg-blue-glow/20 text-blue-glow border-blue-glow/30',
      contactado: 'bg-purple/20 text-purple border-purple/30',
      calificado: 'bg-warn/20 text-warn border-warn/30',
      propuesta: 'bg-cyan-glow/20 text-cyan-glow border-cyan-glow/30',
      cerrado: 'bg-green-glow/20 text-green-glow border-green-glow/30'
    }
    return colors[status]
  }

  const getStatusLabel = (status: Lead['status']) => {
    const labels = {
      nuevo: 'Nuevo',
      contactado: 'Contactado',
      calificado: 'Calificado',
      propuesta: 'Propuesta',
      cerrado: 'Cerrado ✓'
    }
    return labels[status]
  }

  const totalValue = leads.reduce((sum, lead) => sum + lead.value, 0)
  const closedValue = leads.filter(l => l.status === 'cerrado').reduce((sum, lead) => sum + lead.value, 0)

  return (
    <div className="space-y-6">
      {/* CRM Header with Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="glass-medium p-4 rounded-xl">
          <div className="text-xs text-text-tertiary uppercase mb-1">Total Leads</div>
          <div className="font-display text-3xl font-bold text-text-primary">{leads.length}</div>
        </div>
        <div className="glass-medium p-4 rounded-xl">
          <div className="text-xs text-text-tertiary uppercase mb-1">Pipeline Value</div>
          <div className="font-display text-3xl font-bold text-blue-glow">
            ${(totalValue / 1000).toFixed(0)}K
          </div>
        </div>
        <div className="glass-medium p-4 rounded-xl">
          <div className="text-xs text-text-tertiary uppercase mb-1">Cerrados</div>
          <div className="font-display text-3xl font-bold text-green-glow">
            ${(closedValue / 1000).toFixed(0)}K
          </div>
        </div>
        <div className="glass-medium p-4 rounded-xl">
          <div className="text-xs text-text-tertiary uppercase mb-1">Tasa Cierre</div>
          <div className="font-display text-3xl font-bold gradient-text-spectrum">
            {((leads.filter(l => l.status === 'cerrado').length / leads.length) * 100).toFixed(0)}%
          </div>
        </div>
      </div>

      {/* Leads Table */}
      <div className="glass-medium rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-border-subtle">
          <h3 className="font-display text-xl font-bold text-text-primary">
            Leads Activos
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border-subtle">
                <th className="px-6 py-4 text-left text-xs font-semibold text-text-tertiary uppercase tracking-wider">
                  Lead
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-text-tertiary uppercase tracking-wider">
                  Empresa
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-text-tertiary uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-text-tertiary uppercase tracking-wider">
                  Valor
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-text-tertiary uppercase tracking-wider">
                  Último Contacto
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-text-tertiary uppercase tracking-wider">
                  Origen
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-text-tertiary uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle">
              {leads.map((lead) => (
                <tr
                  key={lead.id}
                  className="hover:bg-bg-elevated/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="font-semibold text-text-primary">{lead.name}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-text-secondary">{lead.company}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(lead.status)}`}>
                      {getStatusLabel(lead.status)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-mono font-semibold text-text-primary">
                      ${lead.value.toLocaleString('es-MX')}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-text-tertiary">{lead.lastContact}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-md bg-bg-elevated text-xs text-text-secondary">
                      {lead.source}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-lg hover:bg-bg-elevated transition-colors">
                        <svg className="w-4 h-4 text-text-tertiary hover:text-text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                      <button className="p-2 rounded-lg hover:bg-bg-elevated transition-colors">
                        <svg className="w-4 h-4 text-text-tertiary hover:text-text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
