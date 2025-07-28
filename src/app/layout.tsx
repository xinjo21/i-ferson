import type { Metadata } from "next";
import Itim from "next/font/local";
import "./globals.css";
import { PersonalityProvider } from "@/context/usePersonality";

const itim = Itim({
  src: "../fonts/Itim/Itim-Regular.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Imong Ferson?!",
  description: "Personality quiz to find out who you are",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${itim.className}  antialiased`}>
        <PersonalityProvider>{children}</PersonalityProvider>
      </body>
    </html>
  );
}
