import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cyberpunk Portfolio",
  description: "A futuristic cyberpunk-themed portfolio showcasing my work and skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${rajdhani.className} bg-cyber-dark`}>
        <div className="cyber-grid-bg min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
