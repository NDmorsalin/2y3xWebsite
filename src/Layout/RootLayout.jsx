import { Outlet } from "react-router-dom";
import Footer from "../share/Footer/Footer";
import Header from "../share/Header/Header";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
