import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pramod KC | AI & Web Systems Engineer',
  description: 'Building scalable web apps and AI systems for startups and businesses',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-black text-white min-h-screen antialiased">
        <div className="min-h-screen bg-black">
          {children}
        </div>
      </body>
    </html>
  )
}
