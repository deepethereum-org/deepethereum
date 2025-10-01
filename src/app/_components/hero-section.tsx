import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { Container } from '@/components/layout/container'
import ShiningLight from '@/components/base/shining-light'
import { defaultAnimatedGroupVariants } from '@/lib/animation'
import PageSubheading from '@/components/base/page-subheading'
import PageHeading from '@/components/base/page-heading'

export default function HeroSection() {
    return (
        <>
            <main className="overflow-hidden">
                <ShiningLight />
                <section>
                    <div className="relative pt-24">
                        <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
                        <Container>
                            <div className="sm:mx-auto lg:mr-auto lg:mt-0">
                                <PageHeading text="Let&apos;s build towards a decentralized future." />
                                <PageSubheading text="You are standing at the edge of the new internet. Blockchain is the future, and now is the time to acquire the skills to thrive in this rapidly evolving landscape. Start learning today for free." />
                                <AnimatedGroup
                                    variants={defaultAnimatedGroupVariants}
                                    className="mt-12 flex items-center gap-2">
                                    <div
                                        key={1}
                                        className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="rounded-xl px-5 text-base">
                                            <Link href="#link">
                                                <span className="text-nowrap">Start Learning for Free</span>
                                            </Link>
                                        </Button>
                                    </div>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="outline"
                                        className="h-10.5 rounded-xl px-5 text-base">
                                        <Link href="#link">
                                            <span className="text-nowrap">About Us</span>
                                        </Link>
                                    </Button>
                                </AnimatedGroup>
                            </div>
                        </Container>
                    </div>
                </section>
            </main>
        </>
    )
}
