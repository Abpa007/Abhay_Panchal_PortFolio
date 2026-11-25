import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Abhay Panchal — Developer & Data Practitioner',
  description: 'The portfolio of Abhay Panchal: full-stack engineering, applied AI, and analytics. Explore 12 distinct projects, experience, and skills.',
  openGraph: {
    title: 'Abhay Panchal — Developer & Data Practitioner',
    description: 'Thoughtful software, useful intelligence, and the systems in between.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Abhay Panchal — Developer & Data Practitioner',
    description: 'Thoughtful software, useful intelligence, and the systems in between.',
  },
  generator: 'v0.app',
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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
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
