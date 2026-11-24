import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { SimpleHeader } from '@/components/simple-header'

export const metadata: Metadata = {
  title: 'Page Not Found | Raghunandan Jewellers',
  description: 'The page you are looking for could not be found.',
}

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#f8f6f1] text-[#282622]">
      <SimpleHeader />

      <section className="relative isolate flex min-h-[calc(100svh-82px)] items-center justify-center overflow-hidden px-5 py-16 sm:px-8">
        <div className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full border border-[#c99d68]/20" />
        <div className="pointer-events-none absolute -bottom-28 -left-20 size-72 rounded-full border border-[#c99d68]/20" />

        <div className="relative w-full max-w-2xl border border-[#c99d68]/35 bg-[#fcf9f5] px-6 py-12 text-center shadow-[0_22px_60px_rgba(40,38,34,0.08)] sm:px-12 sm:py-16">
          <p className="text-[9px] uppercase tracking-[0.3em] text-[#9a7435]">
            Raghunandan Jewellers
          </p>
          <p className="mt-5 font-serif text-8xl leading-none tracking-[-0.08em] text-[#a57d35] sm:text-9xl">
            404
          </p>
          <h1 className="mt-5 font-serif text-3xl tracking-[-0.04em] sm:text-4xl">
            This page is out of place.
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#282622]/60">
            The page you are looking for may have moved or no longer exists.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#a57d35] px-6 text-[9px] font-medium uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#87642d]"
            >
              <ArrowLeft size={14} />
              Back to home
            </Link>
            <Link
              href="/products"
              className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#c99d68]/60 px-6 text-[9px] font-medium uppercase tracking-[0.18em] text-[#806648] transition-colors hover:border-[#9a7435] hover:text-[#9a7435]"
            >
              Explore collections
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
