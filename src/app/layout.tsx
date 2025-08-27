import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Cristian Dizeo | Portfolio",
  description: "Fullstack web developer",
  icons: "/icon.svg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <Analytics/>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}