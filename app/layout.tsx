import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ReactQueryProvider from "./components/ReactQueryProvider";
import Providers from "./components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokemon List",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ReactQueryProvider>
            <div className="flex h-screen container m-auto flex-col justify-between pl-10 pr-10">
              <Header />
              {children}
              <Footer />
            </div>
          </ReactQueryProvider>
        </Providers>
      </body>
    </html>
  );
}
