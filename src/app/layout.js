// import { Arizonia, Bodoni_Moda, Raleway, Ropa_Sans } from "next/font/google";
// import "./globals.css";
// import HeaderWrapper from "./components/header/HeaderWrapper";
// import { CartProvider } from "./context/CartContext";
// import Footer from "./components/footer/Footer";
// import { PopupProvider } from "./context/PopContext";
// import ScrollToTop from "./components/scroll/ScrollToTop";

// const arizonia = Arizonia({
//   variable: "--font-arizonia",
//   weight: ["400"],
//   subsets: ["latin"],
// });

// const bodoni = Bodoni_Moda({
//   variable: "--font-bodoni",
//   weight: ["400"],
//   subsets: ["latin"],
// });

// const ropa = Ropa_Sans({
//   variable: "--font-ropa",
//   subsets: ["latin"],
//   weight: ["400"],
// });

// const raleway = Raleway({
//   variable: "--font-raleway",
//   subsets: ["latin"],
//   weight: ["400"],
// });

// export const metadata = {
//   title: "Carabliss",
//   description: "Loaded With Love, Crafted For Bliss",
//   icons: {
//     icon: "/cara-fav.png",
//   },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         <link
//           href="https://fonts.googleapis.com/css2?family=Kaisei+Tokumin:wght@400;500;700&display=swap"
//           rel="stylesheet"
//         />
//         <link rel="icon" href="/cara-fav.png" type="image/png" sizes="16x16" />
//         <meta property="og:image" content="/cara-og.jpg" />
//         <meta property="og:url" content="https://carabliss.pk/" />
//         <meta name="twitter:image" content="/cara-og.jpg" />
//       </head>
//       <body
//         className={`${ropa.variable} ${raleway.variable} ${bodoni.variable} ${arizonia.variable} `}
//       >
//         <ScrollToTop />
//         <CartProvider>
//           <HeaderWrapper />
//           <main className="relative">
//             <PopupProvider>{children}</PopupProvider>
//           </main>
//           {/* <Cart /> */}
//           <Footer />
//         </CartProvider>
//       </body>
//
//     </html>
//   );
// }
import { Arizonia, Bodoni_Moda, Raleway, Ropa_Sans } from "next/font/google";
import "./globals.css";
import HeaderWrapper from "./components/header/HeaderWrapper";
import { CartProvider } from "./context/CartContext";
import Footer from "./components/footer/Footer";
import { PopupProvider } from "./context/PopContext";
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
    icon: "/cara-fav.png",
  },
  //   openGraph: {
  //     title: "Carabliss",
  //     description: "Loaded With Love, Crafted For Bliss",
  //     url: "https://carabliss.pk/",
  //     images: [
  //       {
  //         url: "/cara-og.jpg",
  //         width: 1200,
  //         height: 630,
  //         alt: "Carabliss",
  //       },
  //     ],
  //   },
  //   twitter: {
  //     card: "summary_large_image",
  //     title: "Carabliss",
  //     description: "Loaded With Love, Crafted For Bliss",
  //     images: ["/cara-og.jpg"],
  //   },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Kaisei+Tokumin:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/cara-fav.ico" type="image/x-icon" sizes="any" />
        <meta property="og:image" content="/cara-og.jpg" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://carabliss.pk/" />
        <meta property="og:title" content="Carabliss" />
        <meta property="og:image:alt" content="Carabliss" />
      </head>
      <body
        className={`${ropa.variable} ${raleway.variable} ${bodoni.variable} ${arizonia.variable} `}
      >
        <ScrollToTop />
        <CartProvider>
          <HeaderWrapper />
          <main className="relative">
            <PopupProvider>{children}</PopupProvider>
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
