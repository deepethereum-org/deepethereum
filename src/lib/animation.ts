export const defaultTransitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring' as const,
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export const defaultAnimatedGroupVariants = {
    container: {
        visible: {
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.75,
            },
        },
    },
    ...defaultTransitionVariants,
}