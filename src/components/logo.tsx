import Image from "next/image";
import DeepEthereumTransparent from "@/assets/brand/deepethereum-transparent.png"

export default function Logo() {
    return <Image src={DeepEthereumTransparent} alt="DeepEthereum" width={180} height={80} priority={true} />
}