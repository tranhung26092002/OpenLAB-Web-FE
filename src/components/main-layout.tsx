import React from "react";
import Header from "~/components/header/Header";
import Footer from "~/components/footer/Footer";
export default function MainLayout({
  children,
  authPage = false,
  coursePage = false,
}: Readonly<{
  children: React.ReactNode;
  authPage?: boolean;
  coursePage?: boolean;
}>) {
  return (
    <>
      {!authPage && <Header />}
      {children}
      {!authPage && !coursePage && <Footer />}
    </>
  );
}
