import type { Metadata } from "next";
import { Inter,League_Spartan } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const lspartan = League_Spartan({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hardik Dhamija",
  description: "Created by Hardik Dhamija",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lspartan.className}>
        <Navbar />
        <main className="max-w-5xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
