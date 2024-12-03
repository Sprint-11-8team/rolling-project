import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/common/Header";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    const layoutBody = document.querySelector(".layout-body");

    if (layoutBody) {
      const isListPage = location.pathname.includes("/list"); // list페이지만 여백제거
      layoutBody.classList.toggle("no-padding", isListPage);
    }
  }, [location]);

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
