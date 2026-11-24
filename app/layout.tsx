import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { FloatingContact } from '@/components/floating-contact'
import { siteUrl } from '@/lib/site-url'

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: 'Raghunandan Jewellers | Jewellery with a story',
  description:
    'Thoughtfully crafted jewellery for the moments that become part of you.',
  generator: 'Raghunandan Jewellers',
  openGraph: {
    title: 'Raghunandan Jewellers | Jewellery with a story',
    description:
      'Thoughtfully crafted jewellery for the moments that become part of you.',
    siteName: 'Raghunandan Jewellers',
    type: 'website',
    locale: 'en_IN',
    images: ['/images/Bridal.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raghunandan Jewellers | Jewellery with a story',
    description:
      'Thoughtfully crafted jewellery for the moments that become part of you.',
    images: ['/images/Bridal.png'],
  },
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