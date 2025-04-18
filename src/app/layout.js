import { Arizonia, Bodoni_Moda, Raleway, Ropa_Sans } from "next/font/google";
import "./globals.css";
import HeaderWrapper from "./components/header/HeaderWrapper";
import { CartProvider } from "./context/CartContext";
import Footer from "./components/footer/Footer";
import { PopupProvider } from "./context/PopContext";
// import CaraFav from "./assets/images/cara-fav.png"
import PageTransition from "./components/pageTransitions/PageTransition";
import ScrollToTop from "./components/scroll/ScrollToTop";

const arizonia = Arizonia({
  variable: "--font-arizonia",
  weight: ["400"],
  subsets: ["latin"],
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  weight: ["400"],
  subsets: ["latin"],
});

const ropa = Ropa_Sans({
  variable: "--font-ropa",
  subsets: ["latin"],
  weight: ["400"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Carabliss",
  description: "Loaded With Love, Crafted For Bliss",
  icons: {
    icon: "cara-fav.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Kaisei+Tokumin:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${ropa.variable} ${raleway.variable} ${bodoni.variable} ${arizonia.variable} `}
      >
        {/* <PageTransition > */}
        <ScrollToTop />
        <CartProvider>
          <HeaderWrapper />
          <main className="relative">
            <PopupProvider>{children}</PopupProvider>
          </main>
          {/* <Cart /> */}
          <Footer />
        </CartProvider>
        {/* </PageTransition> */}
      </body>
        
    </html>
  );
}
