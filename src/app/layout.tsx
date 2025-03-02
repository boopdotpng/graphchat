import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import KeyboardShortcutsProvider from "./components/KeyboardShortcutsProvider";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GraphChat",
  description: "A modern graph-based chat application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} antialiased`}
      >
        <KeyboardShortcutsProvider>
          <div className="min-h-screen bg-[#f8f4e9] dark:bg-[#282828]">
            <main className="pb-24">
              {children}
            </main>
          </div>
        </KeyboardShortcutsProvider>
      </body>
    </html>
  );
}
