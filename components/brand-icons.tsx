type IconProps = { className?: string; strokeWidth?: number }

function Outline({ className, strokeWidth = 1.7, children }: IconProps & { children: React.ReactNode }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            {children}
        </svg>
    )
}

export function InstagramMark(props: IconProps) {
    return (
        <Outline {...props}>
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
        </Outline>
    )
}

export function WhatsAppMark(props: IconProps) {
    return (
        <Outline {...props}>
            <path d="M20.2 11.8a8.2 8.2 0 0 1-12.1 7.1L3 20l1.2-4.9a8.2 8.2 0 1 1 16-3.3Z" />
            <path d="M8.5 8.1c.2-.5.5-.5.8-.5h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4 0 .6l-.5.7c-.2.2-.3.4-.1.7.3.5.8 1.1 1.3 1.5.6.5 1.2.8 1.6.9.3.1.5 0 .7-.2l.8-.9c.2-.2.4-.2.7-.1l1.6.8c.3.1.4.3.4.5 0 .3-.2 1.2-.7 1.6-.5.5-1.2.7-1.9.7-.6 0-1.5-.2-2.8-.8-1.2-.6-2.3-1.5-3.2-2.6-.8-1-1.3-2.1-1.4-2.9-.1-.8.1-1.5.5-2.1Z" />
        </Outline>
    )
}

// Solid "f" so it stays readable at small sizes.
export function FacebookMark({ className }: IconProps) {
    return (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.4 1.5-1.4h1.6V4.5c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.2H8v3h2.5V21h3Z" />
        </svg>
    )
}