import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";

const plexSans = IBM_Plex_Sans({ subsets: ["latin"], variable: "--font-sans" });

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "doman CLI",
  description: "Download the doman CLI today.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", plexSans.variable, plexMono.variable, "font-sans")}>
      <body className="min-h-full flex flex-col dark">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
