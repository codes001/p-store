import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Theme } from '@radix-ui/themes';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "P-Store",
  description: "An eommerce store for online shopping",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`{inter.className} letter-space`}>
        <Theme>

        <Header />
        <main> {children}</main>
        <Footer />
        </Theme>
      </body>
    </html>
  );
}
