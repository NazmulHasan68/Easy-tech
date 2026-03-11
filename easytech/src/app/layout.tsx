import type { Metadata } from "next";
import { Syne, DM_Sans, Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "EasyTech — Digital Innovation Agency", template: "%s | EasyTech" },
  icons: {
    icon: "/logo/icon.webp",
  },
  description: "We build world-class web, mobile & software products for ambitious businesses across Bangladesh and beyond.",
  keywords: ["web development", "mobile apps", "digital marketing", "software", "Bangladesh", "Dhaka"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "EasyTech",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("dark", "font-sans", geist.variable)} suppressHydrationWarning>
      <body className={`${syne.variable} ${dmSans.variable}`}>
        <ThemeProvider>
          <Header />
          <main style={{ paddingTop: "1px" }}>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
