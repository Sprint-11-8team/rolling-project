import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";

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
