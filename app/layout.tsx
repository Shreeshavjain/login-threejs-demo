import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEXUS AI — Quantum Workspace",
  description: "Next-generation quantum workspace and parallel AI orchestration.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <body className="min-h-full flex flex-col bg-[#090A0F] text-[#E3E1E9] font-sans antialiased selection:bg-[#CCFF00] selection:text-[#090A0F]">
        {children}
      </body>
    </html>
  );
}
