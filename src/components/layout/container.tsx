import React from 'react'
import { cn } from '@/lib/utils'

/**
 * A responsive container that centers content and provides horizontal padding.
 *
 * @param className Additional classes for the container
 * @param children Content to render inside the container
 */
export function Container({ className, children }: React.PropsWithChildren<{ className?: string }>) {
    return (
        <div className={cn('mx-auto max-w-5xl px-6', className)}>
            {children}
        </div>
    )
}
