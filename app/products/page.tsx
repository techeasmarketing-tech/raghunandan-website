'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Heart, Search, X } from 'lucide-react'
import { WhatsAppMark } from '@/components/brand-icons'
import { SimpleHeader } from '@/components/simple-header'
import { productEnquiryLink, whatsappLink } from '@/lib/constants'
import { products } from '@/data/products'

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  useEffect(() => {
    setSearchQuery(new URLSearchParams(window.location.search).get('search') ?? '')
  }, [])

  const categories = [...new Set(products.map((product) => product.category.trim()).filter(Boolean))]
    .sort((a, b) => a.localeCompare(b))
  const visibleProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === 'All' || product.category.toLowerCase() === activeCategory.toLowerCase()
    const query = searchQuery.trim().toLowerCase()
    const matchesSearch =
      !query || `${product.name} ${product.code} ${product.category}`.toLowerCase().includes(query)
    return matchesCategory && matchesSearch
  })

  return (
    <main className="min-h-screen bg-[#f8f6f1] text-[#282622]">
      <SimpleHeader />

      <section className="relative isolate overflow-hidden bg-[#282622] text-[#fcf9f5]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_30%,rgba(181,137,75,0.28),transparent_38%),linear-gradient(115deg,#282622_8%,#372d25_58%,#5a4430)]" />
        <div className="relative mx-auto grid max-w-[1500px] gap-8 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-end lg:px-12 lg:py-20">
          <div>
            <p className="flex items-center gap-3 text-[8px] uppercase tracking-[0.3em] text-[#e8c987] sm:text-[9px]">
              <span className="h-px w-8 bg-[#e8c987]" />
              Raghunandan Jewellers · Est. 1987
            </p>
            <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              The art of
              <br />
              <em className="font-normal text-[#e8c987]">being treasured.</em>
            </h1>
            <p className="mt-5 max-w-xl text-xs leading-6 text-white/65 sm:mt-7 sm:text-sm sm:leading-7">
              Discover heirloom-inspired jewellery, thoughtfully crafted for
              celebrations, milestones and all the moments in between.
            </p>
          </div>
          <div className="flex items-center gap-3 text-[8px] uppercase tracking-[0.16em] text-white/55 lg:flex-col lg:items-end">
            <span>Hand-finished in India</span>
            <span className="hidden h-px w-12 bg-[#e8c987]/60 lg:block" />
            <span>Made to be yours</span>
          </div>
        </div>
        <div className="relative h-px bg-gradient-to-r from-transparent via-[#e8c987]/70 to-transparent" />
      </section>

      <section id="catalogue" className="mx-auto max-w-[1500px] px-4 py-10 sm:px-6 sm:py-14 lg:px-12 lg:py-16">
        <div className="mb-8 flex flex-col gap-6 border-b border-[#282622]/12 pb-7 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[8px] uppercase tracking-[0.28em] text-[#9a7435]">The collection</p>
            <h2 className="mt-2 font-serif text-4xl tracking-[-0.04em] sm:text-5xl">
              Find your <em className="font-normal text-[#9a7435]">forever piece.</em>
            </h2>
          </div>
          <p className="max-w-sm text-[11px] leading-5 text-[#282622]/55">
            {`${visibleProducts.length} thoughtfully selected ${visibleProducts.length === 1 ? 'piece' : 'pieces'}`}
          </p>
        </div>

        <div className="mb-8 space-y-5 sm:mb-10">
          <label className="flex max-w-xl items-center gap-3 border-b border-[#282622]/20 pb-3">
            <Search size={17} className="shrink-0 text-[#9a7435]" />
            <span className="sr-only">Search products</span>
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search by name, code or category"
              className="w-full bg-transparent text-sm outline-none placeholder:text-[#282622]/40"
            />
            {searchQuery && (
              <button type="button" aria-label="Clear search" onClick={() => setSearchQuery('')}>
                <X size={15} className="text-[#806648]" />
              </button>
            )}
          </label>

          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
            {['All', ...categories].map((category) => {
              const count = category === 'All'
                ? products.length
                : products.filter((product) => product.category.toLowerCase() === category.toLowerCase()).length
              const selected = activeCategory === category
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setActiveCategory(category)}
                  className={`inline-flex min-h-10 shrink-0 items-center gap-2 border px-4 text-[8px] uppercase tracking-[0.14em] transition-colors sm:min-h-11 sm:px-5 ${selected
                      ? 'border-[#9a7435] bg-[#9a7435] text-white'
                      : 'border-[#282622]/15 bg-[#fcf9f5] text-[#806648] hover:border-[#9a7435] hover:text-[#9a7435]'
                    }`}
                >
                  {category}
                  <span className={selected ? 'text-white/65' : 'text-[#282622]/40'}>{count}</span>
                </button>
              )
            })}
          </div>
        </div>

        {visibleProducts.length === 0 ? (
          <div className="border border-dashed border-[#282622]/20 px-5 py-16 text-center">
            <p className="font-serif text-2xl">No pieces found.</p>
            <p className="mt-2 text-sm text-[#282622]/55">Try another search or choose a different category.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('')
                setActiveCategory('All')
              }}
              className="mt-5 text-[9px] uppercase tracking-[0.18em] text-[#9a7435] underline underline-offset-4"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-5 lg:grid-cols-3 lg:gap-x-7 lg:gap-y-12 xl:grid-cols-4">
            {visibleProducts.map((product, index) => (
              <article key={product.code} className="group min-w-0">
                <div className="relative overflow-hidden border border-[#282622]/8 bg-[#eee9e0]">
                  <div className="relative aspect-[0.94] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading={index < 4 ? 'eager' : 'lazy'}
                      className="size-full object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                    <span className="absolute left-3 top-3 bg-[#fcf9f5]/90 px-2.5 py-1.5 text-[7px] uppercase tracking-[0.16em] text-[#806648]">
                      {product.category}
                    </span>
                    <span className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-[#fcf9f5]/90 text-[#806648]">
                      <Heart size={14} strokeWidth={1.4} />
                    </span>
                    <a
                      href={productEnquiryLink(product)}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Enquire about ${product.name} on WhatsApp`}
                      className="absolute inset-x-0 bottom-0 translate-y-full bg-[#282622]/90 py-3 text-center text-[8px] uppercase tracking-[0.18em] text-white transition-transform duration-300 group-hover:translate-y-0 focus:translate-y-0"
                    >
                      Ask about this piece
                    </a>
                  </div>
                </div>

                <div className="px-1 pt-4">
                  <div className="flex min-h-[58px] items-start justify-between gap-2">
                    <div className="min-w-0">
                      <h3 className="font-serif text-base leading-snug sm:text-lg">{product.name}</h3>
                      <p className="mt-1 text-[8px] uppercase tracking-[0.15em] text-[#282622]/45">
                        {product.code}
                      </p>
                    </div>
                  </div>
                  <a
                    href={productEnquiryLink(product)}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Enquire about ${product.name} on WhatsApp`}
                    className="mt-3 flex min-h-11 w-full items-center justify-center gap-2 bg-[#a57d35] px-3 text-[8px] font-medium uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#87642d]"
                  >
                    <WhatsAppMark className="size-4" />
                    Enquire on WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <footer className="mt-6 bg-[#282622] px-5 py-7 text-white/55 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[9px] uppercase tracking-[0.15em]">Raghunandan Jewellers · Est. 1987</p>
          <a
            href={whatsappLink('Namaste, I would like help choosing a jewellery piece.')}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.14em] text-[#e8c987] transition-colors hover:text-white"
          >
            <WhatsAppMark className="size-4" />
            Need help choosing? WhatsApp us
            <ArrowRight size={13} />
          </a>
        </div>
      </footer>
    </main>
  )
}