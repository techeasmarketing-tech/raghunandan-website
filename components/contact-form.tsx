'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight } from 'lucide-react'
import { WhatsAppMark } from '@/components/brand-icons'
import { whatsappLink } from '@/lib/constants'

const interests = [
    'Necklaces',
    'Earrings',
    'Bangles',
    'Rings',
    'Bridal',
    'Gold',
    'Brooch',
    'Religious Idols & Murti',
    'Traditional',
    'Custom design',
    'Something else',
]

const fieldClass =
    'mt-2 min-h-12 w-full border border-[#282622]/15 bg-white px-4 text-sm text-[#282622] outline-none transition-colors placeholder:text-[#282622]/35 focus:border-[#a57d35] focus:ring-1 focus:ring-[#a57d35]'
const labelClass = 'block text-[9px] uppercase tracking-[0.18em] text-[#806648]'

export function ContactForm() {
    const [sentUrl, setSentUrl] = useState('')

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        const get = (key: string) => String(data.get(key) ?? '').trim()

        const lines = [
            'Namaste Raghunandan Jewellers,',
            '',
            `Name: ${get('name')}`,
            `Phone: ${get('phone')}`,
            get('email') ? `Email: ${get('email')}` : '',
            `Interested in: ${get('interest')}`,
            get('message') ? `\nMessage: ${get('message')}` : '',
        ].filter((line, index, all) => line !== '' || all[index - 1] !== '')

        const url = whatsappLink(lines.join('\n'))
        setSentUrl(url)
        window.open(url, '_blank', 'noopener,noreferrer')
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
                <label className={labelClass}>
                    Full name *
                    <input name="name" required autoComplete="name" placeholder="Your name" className={fieldClass} />
                </label>
                <label className={labelClass}>
                    Phone number *
                    <input
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        inputMode="tel"
                        pattern="[0-9+\s\-]{10,15}"
                        title="Enter a valid phone number"
                        placeholder="98XXXXXXXX"
                        className={fieldClass}
                    />
                </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
                <label className={labelClass}>
                    Email (optional)
                    <input name="email" type="email" autoComplete="email" placeholder="you@example.com" className={fieldClass} />
                </label>
                <label className={labelClass}>
                    I am interested in *
                    <select name="interest" required defaultValue="" className={fieldClass}>
                        <option value="" disabled>
                            Select a category
                        </option>
                        {interests.map((item) => (
                            <option key={item} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                </label>
            </div>

            <label className={`${labelClass} block`}>
                Your message
                <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us about the occasion, design or budget you have in mind…"
                    className={`${fieldClass} min-h-32 resize-y py-3`}
                />
            </label>

            <button
                type="submit"
                className="inline-flex min-h-12 w-full items-center justify-center gap-3 bg-[#a57d35] px-6 text-[9px] font-medium uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#87642d] sm:w-auto"
            >
                <WhatsAppMark className="size-[18px]" />
                Send enquiry on WhatsApp
                <ArrowRight size={14} />
            </button>

            <p className="text-[11px] leading-5 text-[#282622]/55" aria-live="polite">
                {sentUrl ? (
                    <>
                        WhatsApp should have opened with your details. If it didn&apos;t,{' '}
                        <a href={sentUrl} target="_blank" rel="noreferrer" className="text-[#9a7435] underline underline-offset-2">
                            tap here to continue
                        </a>
                        .
                    </>
                ) : (
                    'Your details open in WhatsApp as a ready-to-send message. Nothing is stored on this website.'
                )}
            </p>
        </form>
    )
}