import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Banner from "./components/Header/Banner";
import Footer from "./components/Footer/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog Application",
  description: "Blog application with next-14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  // Check if the route contains 'studio' to determine if we are in the Sanity Studio


  return (
    <html lang="en">
      <body className={`${inter.className} max-w-7xl mx-auto`}>
        {/* Conditionally render Header component */}
        <Header />
        {/* Banner Component */}
        <Banner />
        {children}

        <Footer />
      </body>
    </html>
  );
}
