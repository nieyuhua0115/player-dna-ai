import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PlayerDNA",
  description: "Football style matcher and player DNA card.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
