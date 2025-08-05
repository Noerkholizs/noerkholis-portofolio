import type { Metadata } from "next";
import {Inter, Montserrat} from "next/font/google";

import {cn} from "@/lib/utils";
import {QueryProvider} from "@/components/query-provider";
import "./globals.css";

const montserrat = Montserrat({subsets: ["latin"]})
const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Nurkholis Majid - Full Stack Developer",
  description: "Portfolio of Nurkholis Majid, Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(montserrat.className, "antialiased min-h-screen")}>
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
