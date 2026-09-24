import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const serif = Playfair_Display({ subsets: ["latin"], variable: "--font-serif", display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata = {
  metadataBase: new URL("https://www.authorshantayebrown.com"),
  title: "Shantaye Brown | Author & Technologist",
  description:
    "Author of the Deviants & Saints series (Book 1: Zel), technologist, and host of The Journey To Getting Published.",
  openGraph: {
    title: "Shantaye Brown | Author & Technologist",
    description: "Author of Deviants & Saints. Book 1: Zel. Out now.",
    url: "https://www.authorshantayebrown.com",
    siteName: "Shantaye Brown",
    images: ["/images/shantaye.jpg"],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
