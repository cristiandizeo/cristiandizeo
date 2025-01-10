import type { Metadata } from "next";
import "./globals.css";
import SpaceBackground from "./components/layout/Background";

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
    <html lang="en">
      <body
        className={`antialiased min-h-screen overflow-hidden`}
      >
        {children}
        <SpaceBackground />
      </body>
    </html>
  );
}