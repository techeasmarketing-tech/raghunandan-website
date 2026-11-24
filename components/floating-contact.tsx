import { FacebookMark, InstagramMark, WhatsAppMark } from '@/components/brand-icons'
import { facebookProfile, instagramProfile, whatsappLink } from '@/lib/constants'

const links = [
    { label: 'Follow on Facebook', href: facebookProfile, Icon: FacebookMark },
    { label: 'Follow on Instagram', href: instagramProfile, Icon: InstagramMark },
    {
        label: 'Chat on WhatsApp',
        href: whatsappLink('Namaste Raghunandan Jewellers, I would like to know more about your jewellery.'),
        Icon: WhatsAppMark,
    },
]

export function FloatingContact() {
    return (
        <aside
            aria-label="Contact and social links"
            className="fixed bottom-4 right-4 z-[90] flex flex-col gap-3 print:hidden sm:bottom-6 sm:right-6"
        >
            {links.map(({ label, href, Icon }) => (
                <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="group relative flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-[#f0d59b] to-[#c99d68] text-[#282622] shadow-[0_0_0_2px_rgba(255,255,255,0.9),0_8px_22px_rgba(40,38,34,0.4)] transition duration-300 hover:-translate-y-1 hover:from-[#f7e2b3] hover:to-[#d9ab6a] sm:size-14"
                >
                    <Icon className="size-[24px] sm:size-[27px]" strokeWidth={2} />
                    <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-sm bg-[#282622] px-3 py-2 text-[9px] uppercase tracking-[0.16em] text-[#f8f6f1] opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 md:block">
                        {label}
                    </span>
                </a>
            ))}
        </aside>
    )
}