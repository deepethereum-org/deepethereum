import React from 'react'

export default function PageContent({ children }: { children: React.ReactNode }) {
    return (
        <section>
            <div className="relative pt-24">
                <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
                {children}
            </div>
        </section>
    )
}