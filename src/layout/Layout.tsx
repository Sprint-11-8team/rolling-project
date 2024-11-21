import Header from "../components/common/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="layout-body">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
