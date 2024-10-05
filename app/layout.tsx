import Script from "next/script";
import type { Metadata } from "next";
import "../styles/globals.css";
import "../styles/Header.css";
import "../styles/ImageLeft.css";
import "../styles/ImageRight.css";
import "../styles/Footer.css";

export const metadata: Metadata = {
  title: "reallybad.art",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Script
        defer
        data-domain="reallybad.art"
        src="https://plausible.io/js/script.js"
      />
    </html>
  );
}
