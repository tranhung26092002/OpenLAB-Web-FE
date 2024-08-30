import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import GoToTopButton from "./components/custom/GoToTopButton";
import MainLayout from "./MainLayout";
import FallbackLoading from "@container/FallbackLoading";
const LazyHomePage = lazy(() => import("@container/HomePage"));
const LazyAboutPage = lazy(() => import("@container/AboutPage"));
const LazyContactPage = lazy(() => import("@container/ContactPage"));
const LazyBlogPage = lazy(() => import("@container/BlogPage"));
const LazyPricesPage = lazy(() => import("@container/products/PricesPage"));
const LazyOpenKitBPage = lazy(
  () => import("@container/openkit/kitb/OpenKitBPage")
);
const LazyAllProduct = lazy(()=> import('@container/products/AllProduct'))
const LazyLoginPage = lazy(() => import("@container/LoginPage"));
const LazyDetailProduct = lazy(()=> import('@container/products/DetailProduct'))
// const LazySignUpPage = lazy(() => import('@container/SignUpPage'));

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-in",
      delay: 100,
      once: true,
    });
    AOS.refresh();
  }, []);

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<FallbackLoading />}>
              <MainLayout>
                <LazyHomePage />
              </MainLayout>
            </Suspense>
          }
        />
      
        <Route
          path="about"
          element={
            <Suspense fallback={<FallbackLoading />}>
              <MainLayout>
                <LazyAboutPage />
              </MainLayout>
            </Suspense>
          }
        />
         <Route
          path="loading"
          element={
            <Suspense fallback={<FallbackLoading />}>
              <MainLayout>
                <FallbackLoading />
              </MainLayout>
            </Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <Suspense fallback={<FallbackLoading />}>
              <MainLayout>
                <LazyContactPage />
              </MainLayout>
            </Suspense>
          }
        />
        <Route
          path="blog"
          element={
            <Suspense fallback={<FallbackLoading />}>
              <MainLayout>
                <LazyBlogPage />
              </MainLayout>
            </Suspense>
          }
        />
        <Route path="product">
          <Route
            path="prices"
            element={
              <Suspense fallback={<FallbackLoading />}>
                <MainLayout>
                  <LazyPricesPage />
                </MainLayout>
              </Suspense>
            }
          />
          <Route
            path=":slug"
            element={
              <Suspense fallback={<FallbackLoading />}>
                <MainLayout>
                  <LazyDetailProduct />
                </MainLayout>
              </Suspense>
            }
          />
              <Route
            index
            element={
              <Suspense fallback={<FallbackLoading />}>
                <MainLayout>
                  <LazyAllProduct />
                </MainLayout>
              </Suspense>
            }
          />
        </Route>
        <Route
          path="openkit-b/dashboard"
          element={
            <Suspense fallback={<FallbackLoading />}>
              <MainLayout>
                <LazyOpenKitBPage />
              </MainLayout>
            </Suspense>
          }
        />
        <Route
          path="login"
          element={
            <Suspense fallback={<FallbackLoading />}>
              <LazyLoginPage />
            </Suspense>
          }
        />
        {/* <Route
          path="signup"
          element={
            <Suspense fallback={"Loading..."}>
              <LazySignUpPage />
            </Suspense>
          }
        /> */}
      </Routes>
      <GoToTopButton
        showButton={showButton}
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      />
    </BrowserRouter>
  );
};

export default App;
