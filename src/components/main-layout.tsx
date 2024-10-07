import React from "react";
import Header from "~/components/header/Header";
import Footer from "~/components/footer/Footer";
import ButtonGoToTop from "~/components/custom/ButtonGoToTop";
import NavContact from "~/components/custom/NavContact";
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
    <div className="w-screen max-w-full ">
      {!authPage && (
        <div className="xs:hidden">
          <NavContact />
        </div>
      )}
      {!authPage && <Header />}
      {children}
      {!authPage && <ButtonGoToTop />}
      {!authPage && !coursePage && <Footer />}
    </div>
  );
}
