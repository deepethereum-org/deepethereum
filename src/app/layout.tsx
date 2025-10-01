import type { Metadata } from "next";
import { Lora, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lora",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "DeepEthereum | Blockchain is the future.",
  description: "DeepEthereum is a for-the-public charity dedicated to provide free, open, and quality blockchain education focused on the Ethereum network.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${lora.variable} ${poppins.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
