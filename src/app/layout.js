import { Fraunces, Geist_Mono } from "next/font/google";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import CompareProvider from "@/provider/CompareProvider";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: "variable",
  axes: ["opsz"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata = {
  title: "Calibr8 - Monitor Comparison & Display Accuracy Database",
  description:
    "Compare monitors by verified color accuracy, sRGB, DCI-P3, Delta E scores, and real pricing. Data-driven monitor comparisons, no guesswork.",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistMono.variable} ${fraunces.variable}`}>
      <body className="font-mono antialiased">
        <CompareProvider>
          <TooltipProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </TooltipProvider>
        </CompareProvider>
      </body>
    </html>
  );
}
