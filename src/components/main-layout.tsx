import React from "react";
import Header from "~/components/header/Header";
import Footer from "~/components/footer/Footer";
export default function MainLayout({
  children,
  authPage = false,
}: Readonly<{
  children: React.ReactNode;
  authPage?: boolean;
}>) {
  return (
    <>
      {!authPage && <Header />}
      {children}
      {!authPage && <Footer />}
    </>
  );
}
