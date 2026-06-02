import type { Metadata } from "next";
import { Syne, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fahjin.vercel.app"),
  title: "Yong Fah Jin | Applied AI, Data Analytics & FinTech",
  description: "Singapore-based portfolio for applied AI engineering, data analytics, automation, market intelligence, and FinTech product analytics.",
  openGraph: {
    title: "Yong Fah Jin | Applied AI, Data Analytics & FinTech",
    description: "Singapore-based portfolio for applied AI engineering, data analytics, automation, market intelligence, and FinTech product analytics.",
    url: "https://fahjin.vercel.app",
    siteName: "Yong Fah Jin Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yong Fah Jin | Applied AI, Data Analytics & FinTech",
    description: "Singapore-based portfolio for applied AI engineering, data analytics, automation, market intelligence, and FinTech product analytics.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${syne.variable} ${dmSans.variable} ${dmMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
