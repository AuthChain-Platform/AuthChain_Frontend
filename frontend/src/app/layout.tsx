"use client";

import type { Metadata } from "next";
import localFont from "next/font/local";
import { AuthProvider } from "./context/authContext";
import "./globals.css";
import { ThirdwebProvider } from 'thirdweb/react';


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      {/* <Navbar /> */}
       <ThirdwebProvider>
        <AuthProvider>
          {children}
          </AuthProvider>
        </ThirdwebProvider>
      </body>
    </html>
  );
}