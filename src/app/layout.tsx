import { IBM_Plex_Sans, Fraunces } from "next/font/google";
import localFont from "next/font/local";
import Footer from "../components/layout/footer";
import Layout from "../components/layout/layout";
import Navbar from "../components/layout/navbar";
import "../styles/global.css";
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["200", "700"],
  variable: "--font-fraunces", // Define a CSS variable for easier use
});

export const metadata = {
  title: "Jiyoon Moon",
  icons: {
    icon: "moon.ico",
  },
  description: "Jiyoon Moon Portfolio",
};
// const myFont = localFont({ src: "./fonts/archia-regular-webfont.woff2" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fraunces.variable}>
      <body className={ibmPlexSans.className}>
        <Navbar />
        <Layout>{children}</Layout>
        <Footer />
      </body>
      {/* <body className={inter.className}>{children}</body> */}
    </html>
  );
}
