import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-12">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default Layout;
