import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from 'react';
import Header from './components/layout/Header';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Full-stack Developer - Renie Namocot",
  description: "Professional full stack developer specializing in Laravel, Next.js, React, WordPress, and Shopify. Expert in custom themes, plugins, and modern web technologies. Available for remote work worldwide.",
  keywords: "full stack developer, Laravel, Next.js, React, WordPress expert, Shopify developer, custom plugins, theme development, web development, remote developer, PHP, JavaScript, TypeScript, WooCommerce",
  authors: [{ name: "Renie Namocot" }],
  creator: "Renie Namocot",
  publisher: "Renie Namocot",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://renienamocot.com'), // Update with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Full-stack Developer - Renie Namocot",
    description: "Professional full stack developer specializing in Laravel, Next.js, React, WordPress, and Shopify. Expert in custom themes, plugins, and modern web technologies. Available for remote work worldwide.",
    url: 'https://renienamocot.com', // Update with your actual domain
    siteName: 'Renie Namocot - Portfolio',
    images: [
      {
        url: '/images/profile/me.png',
        width: 1200,
        height: 630,
        alt: 'Renie Namocot - Full Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Full-stack Developer - Renie Namocot",
    description: "Professional full stack developer specializing in Laravel, Next.js, React, WordPress, and Shopify. Expert in custom themes, plugins, and modern web technologies. Available for remote work worldwide.",
    creator: '@renie',
    images: ['/images/profile/me.png'],
  },
  icons: {
    icon: '/logo.PNG',
    shortcut: '/logo.PNG',
    apple: '/logo.PNG',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white text-gray-900`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
