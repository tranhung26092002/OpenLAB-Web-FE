import type { Metadata } from "next";
import localFont from "next/font/local";
import "~/styles/globals.css";
import { Toaster } from "~/components/ui/toaster";
import ButtonGoToTop from "~/components/custom/ButtonGoToTop";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "OpenLAB",
  description: "Nền tảng thực hành số",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <ButtonGoToTop />
        <main className="min-h-screen h-screen relative">{children}</main>
        <div>
          <aside className="w-1/4 relative bg-gray-800">
            <Toaster />
          </aside>
        </div>
      </body>
    </html>
  );
}
