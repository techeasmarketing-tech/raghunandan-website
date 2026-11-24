import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { FloatingContact } from '@/components/floating-contact'

export const metadata: Metadata = {
  title: 'Raghunandan Jewellers | Jewellery with a story',
  description:
    'Thoughtfully crafted jewellery for the moments that become part of you.',
  generator: 'Raghunandan Jewellers',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning>
        {children}
        <FloatingContact />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}