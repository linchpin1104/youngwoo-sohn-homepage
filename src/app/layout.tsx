import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/lib/LanguageProvider";
import "./globals.css";

const pretendard = localFont({
  src: [
    {
      path: "../../public/fonts/PretendardVariable.woff2",
      style: "normal",
    },
  ],
  variable: "--font-pretendard",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Youngwoo Sohn | Korea University",
    template: "%s | Youngwoo Sohn",
  },
  description:
    "Associate Professor, Dept. of Future Science & Technology Business, Korea University. Research in Advanced Technology Commercialization, AI, Quantum Computing.",
  keywords: [
    "Youngwoo Sohn",
    "손영우",
    "Korea University",
    "고려대학교",
    "technology commercialization",
    "AI",
    "quantum computing",
    "atCL",
  ],
  openGraph: {
    title: "Youngwoo Sohn | Korea University",
    description:
      "Associate Professor, Dept. of Future Science & Technology Business",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pretendard.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <LanguageProvider>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
