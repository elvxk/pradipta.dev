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
        <meta name="apple-mobile-web-app-title" content="Pradipta" />
      </head>
      <body className={`antialiased bg-cbrown dark:bg-cdark transition-all`}>
        {children}
      </body>
    </html>
  );
}
