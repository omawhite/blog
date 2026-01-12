import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { UmamiAnalytics } from "@/components/UmamiAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Omar Louis White",
  description: "Omar's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navLinks = [
    { label: "Home", href: "/", key: "home" },
    { label: "Blog", href: "/blog", key: "blog" },
    // { label: "Contact", href: "/contact", key: "contact" },
  ];
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header>
            <Navbar links={navLinks} />
          </header>
          <main className="max-w-3xl mx-auto px-4">{children}</main>
        </ThemeProvider>
        <UmamiAnalytics />
      </body>
    </html>
  );
}
