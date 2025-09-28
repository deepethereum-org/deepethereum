import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function VideoFeatureSection() {
    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <div className="p-3 border rounded-sm">
                    <div className="p-3 border border-primary/25 rounded-md">
                        <iframe
                            className="rounded-(--radius) border border-primary/50 w-full h-full rounded-xl aspect-video"
                            src="https://www.youtube.com/embed/RBM03RihZVs"
                            height=""
                            width=""
                            loading="lazy"
                        />
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-medium">Free blockchain learning designed for developers and non-technicals.</h2>
                    <div className="space-y-6">
                        <p>We are dedicated to offering free, high-quality blockchain education for all. From fundamental concepts to smart contract programming and Web3 solutions.</p>

                        <Button
                            asChild
                            variant="secondary"
                            size="sm"
                            className="gap-1 pr-1.5">
                            <Link href="#">
                                <span>Available Courses</span>
                                <ChevronRight className="size-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
