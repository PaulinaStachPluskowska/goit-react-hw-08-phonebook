import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import { Toaster } from 'react-hot-toast';
import { AppBar } from 'components/AppBar/AppBar';
import css from './Layout.module.css';

export const Layout = () => {
  return (
    <div className={css.Container}>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};