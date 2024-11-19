import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import ListPage from "../pages/ListPage";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list" element={<ListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
