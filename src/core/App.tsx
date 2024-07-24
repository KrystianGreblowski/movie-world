import { Header } from "../common/Header";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../common/ScrollToTop";

export const App = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
    </>
  );
};
