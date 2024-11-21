import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import ListPage from '../pages/ListPage';
import Post from '../pages/Post';
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
