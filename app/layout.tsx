import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Abhay Panchal — Developer & Data Practitioner',
  description: 'I’m Abhay Panchal, a developer in Indore. Take a look at my projects in web development, analytics, and AI, and the experience behind them.',
  openGraph: {
    title: 'Abhay Panchal — Developer & Data Practitioner',
    description: 'Projects in web development, analytics, and AI by Abhay Panchal.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Abhay Panchal — Developer & Data Practitioner',
    description: 'Projects in web development, analytics, and AI by Abhay Panchal.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#17201b',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
