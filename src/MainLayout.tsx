import Header from "@components/Header";
import SectionFooter from "@components/SectionFooter";
import { ReactNode } from "react";
type MainLayoutProps = {
  children: ReactNode;
};
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <SectionFooter />
    </>
  );
};

export default MainLayout;
