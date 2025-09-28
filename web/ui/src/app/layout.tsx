import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
