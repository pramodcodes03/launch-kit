import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "LaunchKit — Ship your SaaS faster",
  description:
    "The most complete SaaS landing page theme built with Next.js and Tailwind CSS. Launch your SaaS product in days, not months.",
  keywords: "SaaS theme, Next.js template, Tailwind CSS, startup landing page",
  openGraph: {
    title: "LaunchKit — Ship your SaaS faster",
    description: "Complete SaaS theme with Next.js + Tailwind CSS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LaunchKit — Ship your SaaS faster",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
