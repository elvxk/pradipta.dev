import "./globals.css";
import fav from "@/assets/favicon-96x96.png";

export const metadata = {
  title: "Pradipta R. Sandri",
  description: "Pradipta R. Sandri Profile",
  keywords: "React, HTML, CSS, TailwindCSS, Nextjs",
  author: "Pradipta R. Sandri",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Pradipta" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`antialiased bg-cbrown dark:bg-cdark transition-all`}>
        {children}
      </body>
    </html>
  );
}
