import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neorik",
  description: "We Serve",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
