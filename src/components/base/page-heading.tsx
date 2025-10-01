import { TextEffect } from "../ui/text-effect";

type Props = {
    text: string
}

export default function PageHeading({ text }: Props) {
    return (
        <>
            <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                as="h1"
                className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16">
                {text}
            </TextEffect>
        </>
    )
}