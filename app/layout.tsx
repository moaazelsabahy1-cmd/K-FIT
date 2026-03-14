import type { ReactNode } from "react";
import "./globals.css";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

export const metadata = {
  title: "K FIT",
  description: "Personal training and nutrition coaching",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

