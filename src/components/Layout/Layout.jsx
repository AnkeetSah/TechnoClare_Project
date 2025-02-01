import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Routers from '../../router/Routers';
import Footer from '../Footer/Footer';

const Layout = () => {
  const location = useLocation(); // Get the current URL path

  // List of valid routes where footer should be visible
  const validRoutes = [
    '/home',
    '/tour',
    '/tour/:id',
    '/login',
    '/aboutus',
    '/ticket',
    '/tour/search',
  ];

  // Check if the current route is in the validRoutes array
  const isValidRoute = validRoutes.some(route => location.pathname.startsWith(route));

  return (
    <>
      <Header />
      <Routers />

      {/* Render Footer only if the route is valid */}
      {isValidRoute && <Footer />}
    </>
  );
};

export default Layout;
