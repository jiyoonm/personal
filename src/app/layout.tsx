import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Footer from "../components/layout/footer";
import Layout from "../components/layout/layout";
import Navbar from "../components/layout/navbar";
import "../styles/global.css";
const montserrat = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Jiyoon Moon",
  description: "Jiyoon Moon Portfolio",
};
const myFont = localFont({ src: "./fonts/archia-regular-webfont.woff2" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        <Layout>{children}</Layout>
        <Footer />
      </body>
      {/* <body className={inter.className}>{children}</body> */}
    </html>
  );
}
