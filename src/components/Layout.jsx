import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/20 selection:text-primary">
      <Header />
      
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 pt-24 pb-16 flex flex-col">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
