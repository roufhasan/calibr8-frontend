import { DM_Serif_Display, Geist } from "next/font/google";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrument = DM_Serif_Display({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Calibr8 - Monitor Comparison & Display Accuracy Database",
  description:
    "Compare monitors by verified color accuracy, sRGB, DCI-P3, Delta E scores, and real pricing. Data-driven monitor comparisons, no guesswork.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geist.variable} ${instrument.variable}`}>
      <body className="font-mono antialiased">
        <TooltipProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </TooltipProvider>
      </body>
    </html>
  );
}
