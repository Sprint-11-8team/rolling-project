import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import ListPage from '../pages/ListPage';
import Post from '../pages/Post';
import Layout from '../layout/Layout';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} /> {/* "/" 경로 */}
          <Route path="list" element={<ListPage />} />
          <Route path="post" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
