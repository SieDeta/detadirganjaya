import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto max-w-5xl md:px-0 px-4 font-inter mt-25">
        <Outlet />
        <hr className="border border-gray-200" />
        <Footer />
      </main>
    </>
  );
};

export default Layout;
