import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ["200","300","400","500","600","700","800"]
})

export const metadata: Metadata = {
  title: "NeuroWolf AI",
  description: "SaaS that enables you to create intelligent AI agents.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolage.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
