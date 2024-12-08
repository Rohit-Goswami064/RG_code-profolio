import { Outfit } from 'next/font/google';
import "./globals.css";

const outfit = Outfit({ subsets: ['latin'] });






export const metadata = {
  title: "Rohit_Goswami",
  description: "Portfoli website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.className}>
      <body>{children}</body>
    </html>
  );
}
