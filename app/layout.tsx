import type { Metadata } from "next";
import "./globals.css";
import FloatingMenu from "@/components/floating-menu";

export const metadata: Metadata = {
  title: "Carlos Freeman Violinist",
  description:
    "Carlos Freeman is a talented violinist with a passion for music and performance.",
  keywords: "violinist, music, performance, Carlos Freeman",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
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
