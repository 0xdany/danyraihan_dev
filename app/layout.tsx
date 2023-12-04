import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "@/styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["200", "300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dany Raihan",
  description: "Super good, cool, and great guy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>{children}</body>
    </html>
  );
}
