import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import ListPage from "../pages/ListPage";
import Layout from "../layout/Layout";
import PostMessagePage from "../pages/PostMessagePage";
import PostPage from "../pages/PostPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} /> {/* "/" 경로 */}
          <Route path="list" element={<ListPage />} />
          <Route path="/post/:id/message" element={<PostMessagePage />} />
          <Route path="/post" element={<PostPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
