import { Outlet, useLocation, useMatch } from 'react-router-dom';
import Header from '../components/common/Header';
import SubHeader from '../components/common/SubHeader';

const Layout = () => {
  const match = useMatch('/post/:id');
  const showSubHeader = match !== null;
  return (
    <>
      <Header />
      {showSubHeader && <SubHeader />}
      <main className='layout-body'>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
