'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    // Demo credentials
    const validCredentials = [
      { email: 'demo@bynd.com', password: 'demo123' },
      { email: 'iahadda@bynd.com', password: 'bynd2026' },
      { email: 'arnaud@bynd.com', password: 'bynd2026' },
      { email: 'orlando@bynd.com', password: 'bynd2026' },
      { email: 'admin@balconylab.ai', password: 'admin123' },
      { email: 'bynd@balconylab.ai', password: 'cracks2026' },
    ]

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800))

    const isValid = validCredentials.some(
      cred => cred.email === email && cred.password === password
    )

    if (isValid) {
      // Store session
      sessionStorage.setItem('balconylab_auth', 'true')
      sessionStorage.setItem('balconylab_user', JSON.stringify({
        email,
        name: email.split('@')[0],
        loginTime: new Date().toISOString()
      }))

      // Redirect to dashboard
      router.push('/dashboard')
    } else {
      setError('Email o contraseña incorrectos')
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto mt-16 animate-scale-in animation-delay-800">
      <form 
        onSubmit={handleSubmit}
        className="glass-ultra p-8 rounded-3xl relative group"
      >
        {/* Decorative glow */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-glow blur-3xl opacity-20" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-glow blur-3xl opacity-20" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h2 className="font-display text-2xl font-bold text-center mb-6">
            Acceso
          </h2>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              placeholder="tu@email.com"
              required
              autoComplete="email"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label htmlFor="password" className="label">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              placeholder="••••••••"
              required
              autoComplete="current-password"
            />
          </div>

          {/* Error */}
          {error && (
            <div className="mb-4 p-3 rounded-lg bg-rebel/10 border border-rebel/30 text-rebel text-sm text-center animate-fade-in">
              {error}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary w-full relative overflow-hidden"
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle 
                    className="opacity-25" 
                    cx="12" 
                    cy="12" 
                    r="10" 
                    stroke="currentColor" 
                    strokeWidth="4"
                    fill="none"
                  />
                  <path 
                    className="opacity-75" 
                    fill="currentColor" 
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                <span>Verificando...</span>
              </div>
            ) : (
              'Entrar'
            )}
          </button>
        </div>
      </form>

      {/* Footer */}
      <div className="mt-8 text-center text-sm text-text-tertiary animate-fade-in animation-delay-1000">
        <p>
          Powered by <span className="text-green-glow font-semibold">The Balcony</span>
        </p>
      </div>
    </div>
  )
}
