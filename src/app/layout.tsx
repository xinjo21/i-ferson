import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { PersonalityProvider } from "@/context/usePersonality";

// Load Raleway font
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

// Load local Itim font
const itim = localFont({
  src: "../fonts/Itim/Itim-Regular.ttf",
  display: "swap",
  variable: "--font-itim",
});

export const metadata: Metadata = {
  title: "Ferson",
  description: "Personality quiz to find out who you are",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${itim.className} ${raleway.variable} font-sans`}
      >
        <PersonalityProvider>{children}</PersonalityProvider>
      </body>
    </html>
  );
}
