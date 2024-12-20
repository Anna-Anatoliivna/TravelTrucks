import { Suspense } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import css from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={css.layout}>
      <Header />
      <Suspense fallback={null}>{children}</Suspense>
      <Footer />
    </div>
  );
};

export default Layout;
