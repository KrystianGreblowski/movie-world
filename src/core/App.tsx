import { Header } from "../common/components/Header";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../common/components/ScrollToTop";
import { Footer } from "../common/components/Footer";

export const App = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
