// import NavContact from "@components/custom/NavContact";
import Header from "@components/Header";
import SectionFooter from "@components/SectionFooter";
import { ReactNode } from "react";
type MainLayoutProps = {
  children: ReactNode;
};
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      {/* <NavContact /> */}
      <Header />
      {children}
      <SectionFooter />
    </>
  );
};

export default MainLayout;
