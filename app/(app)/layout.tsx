import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteNavigation } from "@/components/SiteNavigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | My Blog',
    default: 'My Blog',
  },
  description: 'Welcome to my personal blog where I share thoughts, ideas, and experiences.',
  keywords: ['blog', 'personal', 'writing', 'thoughts'],
  authors: [{ name: 'Omar White' }],
  creator: 'Omar White',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'My Blog',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '',
  },
  robots: {
    index: true,
    follow: true,
  },
  // metadataBase: new URL('https://yourdomain.com'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="border-b">
          <div className="container mx-auto px-4 py-4">
            <SiteNavigation 
              links={[
                { href: "/", label: "Home" },
                { href: "/posts", label: "Posts" }
              ]}
            />
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
