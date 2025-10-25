import { Righteous, Space_Mono } from "next/font/google";
import "./globals.css";

const righteous = Righteous({
  weight: "400",
  variable: "--font-righteous",
  subsets: ["latin"],
});

const space = Space_Mono({
  weight: "400",
  variable: "--font-space",
  subsets: ["latin"],
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
      <body className={`${righteous.variable} ${space.variable} antialiased bg-black min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
