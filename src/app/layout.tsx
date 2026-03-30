import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pramod KC | Web Apps, AI Systems, and Conversion-Focused Product Design',
  description:
    'Pramod KC builds premium web products, AI workflows, and polished digital experiences that help startups and service businesses win clients.',
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
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Sora:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-white min-h-screen antialiased">
        <div className="min-h-screen bg-black text-white">{children}</div>
      </body>
    </html>
  )
}
