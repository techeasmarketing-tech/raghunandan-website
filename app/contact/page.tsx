import type { Metadata } from 'next'
import { ArrowRight, Clock, MapPin, Phone, Star } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'
import { FacebookMark, InstagramMark, WhatsAppMark } from '@/components/brand-icons'
import { SimpleHeader } from '@/components/simple-header'
import {
    facebookProfile,
    googleMapsLink,
    googleReviewLink,
    instagramProfile,
    showroomAddress,
    showroomHours,
    showroomPhone,
    showroomPhoneDisplay,
    whatsappLink,
} from '@/lib/constants'

export const metadata: Metadata = {
    title: 'Contact | Raghunandan Jewellers',
    description:
        'Visit our Sector 18, Noida showroom, call us or send an enquiry on WhatsApp. Raghunandan Jewellers is happy to help you choose.',
}

const socials = [
    { label: 'Instagram', href: instagramProfile, Icon: InstagramMark },
    { label: 'Facebook', href: facebookProfile, Icon: FacebookMark },
    {
        label: 'WhatsApp',
        href: whatsappLink('Namaste Raghunandan Jewellers, I would like to know more about your jewellery.'),
        Icon: WhatsAppMark,
    },
]

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#f8f6f1] text-[#282622]">
            <SimpleHeader />

            <section className="mx-auto max-w-[1200px] px-5 pb-16 pt-12 sm:px-8 sm:pt-16 lg:px-12 lg:pb-24">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-[8px] uppercase tracking-[0.28em] text-[#9a7435]">We would love to hear from you</p>
                    <h1 className="mt-3 font-serif text-4xl tracking-[-0.04em] sm:text-5xl">
                        Get in <em className="font-normal text-[#9a7435]">touch.</em>
                    </h1>
                    <p className="mt-4 text-xs leading-6 text-[#282622]/60 sm:text-sm">
                        Tell us what you are looking for and our jewellery team will guide you personally.
                    </p>
                </div>

                <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
                    <div className="border border-[#c99d68]/35 bg-[#fcf9f5] p-6 sm:p-10">
                        <h2 className="font-serif text-2xl sm:text-3xl">Send an enquiry</h2>
                        <p className="mb-7 mt-2 text-xs leading-6 text-[#282622]/60">
                            Fill in the form and we will continue the conversation on WhatsApp.
                        </p>
                        <ContactForm />
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="relative overflow-hidden bg-[#282622] p-7 text-[#f8f6f1]/75 sm:p-9">
                            <div className="pointer-events-none absolute -right-12 -top-16 size-52 rounded-full border border-[#e8c987]/20" />
                            <div className="pointer-events-none absolute -right-5 -top-9 size-36 rounded-full border border-[#e8c987]/20" />
                            <p className="relative text-[8px] uppercase tracking-[0.24em] text-[#e8c987]">Visit our showroom</p>
                            <h2 className="relative mt-3 font-serif text-2xl text-[#fcf9f5] sm:text-3xl">Raghunandan Jewellers</h2>

                            <ul className="relative mt-6 space-y-4 text-xs leading-6">
                                <li className="flex items-start gap-3">
                                    <MapPin size={16} className="mt-1 shrink-0 text-[#e8c987]" />
                                    <span>{showroomAddress}</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Clock size={16} className="mt-1 shrink-0 text-[#e8c987]" />
                                    <span>{showroomHours}</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Phone size={16} className="mt-1 shrink-0 text-[#e8c987]" />
                                    <a href={`tel:${showroomPhone}`} className="transition-colors hover:text-white">
                                        {showroomPhoneDisplay}
                                    </a>
                                </li>
                            </ul>

                            <div className="relative mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                                <a
                                    href={googleMapsLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#e8c987] px-5 text-[8px] font-medium uppercase tracking-[0.16em] text-[#282622] transition-colors hover:bg-[#f0d59b]"
                                >
                                    <MapPin size={14} />
                                    Get directions
                                </a>
                                <a
                                    href={googleReviewLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#e8c987]/60 px-5 text-[8px] font-medium uppercase tracking-[0.16em] text-[#f5d99c] transition-colors hover:bg-[#e8c987] hover:text-[#282622]"
                                >
                                    <Star size={14} />
                                    Rate us on Google
                                </a>
                            </div>
                        </div>

                        <div className="border border-[#c99d68]/35 bg-[#fcf9f5] p-7 sm:p-9">
                            <p className="text-[8px] uppercase tracking-[0.24em] text-[#9a7435]">Prefer to chat?</p>
                            <h3 className="mt-3 font-serif text-xl sm:text-2xl">Find us online</h3>
                            <div className="mt-5 flex items-center gap-3">
                                {socials.map(({ label, href, Icon }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={label}
                                        className="inline-flex size-11 items-center justify-center border border-[#c99d68]/60 text-[#9a7435] transition-colors hover:bg-[#a57d35] hover:text-white"
                                    >
                                        <Icon className="size-5" />
                                    </a>
                                ))}
                            </div>
                            <a
                                href="/products"
                                className="mt-6 inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.18em] text-[#9a7435]"
                            >
                                Explore the collection
                                <ArrowRight size={13} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-[#282622] px-5 py-7 text-white/55 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-[1500px]">
                    <p className="text-[9px] uppercase tracking-[0.15em]">Raghunandan Jewellers · Est. 1987</p>
                </div>
            </footer>
        </main>
    )
}