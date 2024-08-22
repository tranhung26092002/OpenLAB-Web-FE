import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import SectionFooter from "./components/SectionFooter";
import GoToTopButton from "./components/custom/GoToTopButton";
const LazyHomePage = lazy(() => import("@container/HomePage"));
const LazyAboutPage = lazy(() => import("@container/AboutPage"));
const LazyContactPage = lazy(() => import("@container/ContactPage"));
const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 50,
      duration: 700,
      easing: "ease-in",
      delay: 100,
      once: true,
    });
    AOS.refresh();
  }, []);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);
  // const PrivateRoute = ({ children }: RouteProps) => {
  //   const isLogin = useSelector((state: RootState) => state.auth.isLogin);
  //   return isLogin ? children : <Navigate to="/login" replace={true} />;
  // };
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={"Loading..."}>
                <LazyHomePage />
              </Suspense>
            }
          />
          <Route
            path="about"
            element={
              <Suspense fallback={"Loading..."}>
                <LazyAboutPage />
              </Suspense>
            }
          />
          <Route
            path="contact"
            element={
              <Suspense fallback={"Loading..."}>
                <LazyContactPage />
              </Suspense>
            }
          />
        </Routes>
        <GoToTopButton
          showButton={showButton}
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        />
        <SectionFooter />
      </BrowserRouter>
    </>
  );
};

export default App;
