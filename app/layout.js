import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Cash Cup - Professional Sports Tournament Management",
  description: "Transform local football tournaments into professionally managed events with transparent operations, digital contracts, and real-time match tracking.",
};

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="cashcup">
      <body className={`${montserrat.variable} ${inter.variable} antialiased bg-base-100 text-base-content min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
