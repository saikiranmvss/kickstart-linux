import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom'; // Allows rendering the content of each page

const DefaultLayout = () => {
  return (
    <div className="default-layout">
      <Header />
      <main className="main-content">
        <Outlet /> {/* This is where page content will be injected */}
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
