import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import ListPage from "../pages/ListPage";
import Layout from "../layout/Layout";
import PostMessagePage from "../pages/PostMessagePage";
import PostPage from "../pages/PostPage";
import ScrollToTop from "../components/common/ScrollToTop";
import RecipientPage from "../pages/RecipientPage";

function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} /> {/* "/" 경로 */}
          <Route path="/post" element={<PostPage />} />
          <Route path="/post/:id/message" element={<PostMessagePage />} />
        </Route>
        <Route path="list" element={<ListPage />} />
        <Route path="/post/:id" element={<RecipientPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
