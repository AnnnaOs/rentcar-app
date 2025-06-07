import { Outlet } from 'react-router-dom';
import { ToastContainer, Zoom } from 'react-toastify';

import Header from '../Header/Header';
import s from './Layout.module.css';

const Layout = () => {
  return (
    <div className={s.layoutWrap}>
      <Header />
      <main>
        <Outlet />
      </main>
      <ToastContainer
        autoClose={2000}
        transition={Zoom}
        position="top-center"
      />
    </div>
  );
};

export default Layout;
