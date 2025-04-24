import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Green Bell High | School",
  description:
    "Green Bell High - A vibrant community fostering academic excellence, creativity, and holistic growth for future leaders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
