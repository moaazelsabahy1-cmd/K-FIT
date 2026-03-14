import "./globals.css";

export const metadata = {
  title: "K FIT",
  description: "Personal training and nutrition coaching",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
