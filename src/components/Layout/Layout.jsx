import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Routers from '../../router/Routers';
import Footer from '../Footer/Footer';

const Layout = () => {
  const location = useLocation(); // Get the current URL path

  // Define an array of valid routes (with regex for dynamic routes)
  const validRoutes = [
    /^\/home$/,
    /^\/tour$/,
    /^\/tour\/\d+$/,  // Matches /tour/:id (e.g., /tour/123)
    /^\/login$/,
    /^\/aboutus$/,
    /^\/ticket$/,
    /^\/tour\/search$/,
    /^\/bookingTour\/\d+$/ // Matches /bookingTour/:id (e.g., /bookingTour/456)
  ];

  // Check if the current route matches any valid pattern
  const isValidRoute = validRoutes.some(route => route.test(location.pathname));

  console.log(isValidRoute);

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
