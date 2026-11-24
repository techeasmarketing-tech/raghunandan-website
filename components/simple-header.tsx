import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { showroomPhone } from '@/lib/constants'

export function SimpleHeader() {
    return (
        <header className="sticky top-0 z-40 border-b border-[#282622]/10 bg-[#fcf9f5]/95 backdrop-blur-xl">
            <div className="mx-auto flex h-[72px] max-w-[1500px] items-center justify-between gap-3 px-4 sm:px-6 lg:h-[82px] lg:px-12">
                <a href="/" className="flex min-w-0 items-center gap-2.5 leading-none sm:gap-3">
                    <Image
                        src="/Golden Indian Bridal Portrait.png"
                        alt="Raghunandan Jewellers bridal portrait"
                        width={56}
                        height={64}
                        priority
                        className="h-11 w-10 border border-[#c99d68]/70 object-cover object-center sm:h-[54px] sm:w-12"
                    />
                    <span className="flex min-w-0 flex-col">
                        <span className="truncate font-serif text-[17px] uppercase tracking-[0.08em] sm:text-[22px] sm:tracking-[0.12em]">
                            Raghunandan
                        </span>
                        <span className="mt-1.5 text-[7px] uppercase tracking-[0.26em] text-[#9a7435] sm:text-[8px] sm:tracking-[0.32em]">
                            Jewellers Legacy
                        </span>
                    </span>
                </a>

                <nav className="flex items-center gap-4 sm:gap-6">
                    <a
                        href="/"
                        className="hidden items-center gap-2 text-[9px] uppercase tracking-[0.16em] text-[#806648] transition-colors hover:text-[#9a7435] sm:inline-flex"
                    >
                        <ArrowLeft size={14} />
                        Home
                    </a>
                    <a
                        href="/products"
                        className="text-[9px] uppercase tracking-[0.16em] text-[#806648] transition-colors hover:text-[#9a7435]"
                    >
                        Collections
                    </a>
                    <a
                        href="/contact"
                        className="text-[9px] uppercase tracking-[0.16em] text-[#806648] transition-colors hover:text-[#9a7435]"
                    >
                        Contact
                    </a>
                    <a
                        href={`tel:${showroomPhone}`}
                        className="hidden border border-[#c99d68] px-5 py-3 text-[8px] uppercase tracking-[0.16em] text-[#9a7435] transition-colors hover:bg-[#9a7435] hover:text-white md:block"
                    >
                        Call showroom
                    </a>
                </nav>
            </div>
        </header>
    )
}