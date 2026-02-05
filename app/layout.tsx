import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BalconyLAB | Observa, decide, crece',
  description: 'Plataforma de tracking y analytics para proyectos de crecimiento. Visibilidad total, decisiones data-driven, resultados medibles.',
  keywords: ['analytics', 'growth', 'tracking', 'B2B', 'consultoria'],
}

export default function RootLayout({
  children,
}: {
  children: React.Node
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/logo-balconylab.svg" />
      </head>
      <body>{children}</body>
    </html>
  )
}
