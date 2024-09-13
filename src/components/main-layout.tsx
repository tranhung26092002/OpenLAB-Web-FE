import React from "react";
import Header from "~/components/header/Header";
export default function MainLayout({
  children,
  authPage,
}: Readonly<{
  children: React.ReactNode;
  authPage: boolean;
}>) {
  return (
    <div >
      {!authPage && <Header/>}
      {children}
      {!authPage && <p>Footer</p>}
    </div>
  );
}
