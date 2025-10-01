import { Container } from "@/components/layout/container";
import PageContent from "@/components/layout/page-content";
import PageSubheading from "@/components/base/page-subheading";
import ShiningLight from "@/components/base/shining-light";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Button } from "@/components/ui/button";
import { defaultAnimatedGroupVariants } from "@/lib/animation";
import Link from "next/link";
import PageHeading from "@/components/base/page-heading";


export default function CoursesPage() {
    return (
        <main className="overflow-hidden">
            <ShiningLight />
            <PageContent>
                <Container>
                    <div className="sm:mx-auto lg:mr-auto lg:mt-0">
                        <PageHeading text="Start learning today." />
                        <PageSubheading text="We provide free and high-quality blockchain education for all. Learn the fundamentals of blockchain technology, smart contract programming, and Web3 development through our comprehensive courses." />
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
                                    <Link href="/sign-in">
                                        <span className="text-nowrap">Start Learning for Free</span>
                                    </Link>
                                </Button>
                            </div>
                        </AnimatedGroup>
                    </div>
                </Container>
            </PageContent>
        </main>
    )
}