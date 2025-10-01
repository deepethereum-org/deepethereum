import React from 'react'
import { cn } from '@/lib/utils'

export function Container({ className, children }: React.PropsWithChildren<{ className?: string }>) {
    return (
        <div className={cn('mx-auto max-w-5xl px-6', className)}>
            {children}
        </div>
    )
}
