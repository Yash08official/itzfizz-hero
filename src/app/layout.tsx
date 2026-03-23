import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Itzfizz Digital — We Build Digital Experiences",
  description: "Award-winning digital agency crafting premium web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
