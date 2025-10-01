import { TextEffect } from "../ui/text-effect";

type Props = {
    text: string
}

export default function PageSubheading({ text }: Props) {
    return (
        <>
            <TextEffect
                per="line"
                preset="fade-in-blur"
                speedSegment={0.3}
                delay={0.5}
                as="p"
                className="mt-12 max-w-2xl text-pretty text-lg">
                {text}
            </TextEffect>
        </>
    )
}