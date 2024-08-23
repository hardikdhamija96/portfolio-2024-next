import type { Metadata } from "next";
import { Inter, League_Spartan } from "next/font/google";
import "./globals.css";
import Navbar2 from "@/components/Navbar2";
import { relative } from "path";
import { Providers } from "./provider";

// const inter = Inter({ subsets: ["latin"] });
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
    <html lang="en" className="w-full h-full" suppressHydrationWarning>
      <body className={`w-full h-full`}>
        <Providers>
          <section className="relative w-full h-full bg-darkBg">
            <Navbar2 />
            <main
              className={`${lspartan.className} relative z-0 h-full w-full`}>
              {children}
            </main>
          </section>
        </Providers>
      </body>
    </html>
  );
}
