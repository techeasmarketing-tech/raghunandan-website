import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jewellery Collection | Raghunandan Jewellers',
  description:
    'Explore jewellery collections from Raghunandan Jewellers, thoughtfully crafted for every occasion.',
}

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
