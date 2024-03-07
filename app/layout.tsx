import type { Metadata } from "next";
import "./globals.css";
import { roobert, neue } from "@/utils/customFonts";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
      <body className={`${roobert.variable} ${neue.variable}`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
