import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Tour from '../pages/Tour';
import TourDetails from '../pages/TourDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';
import SearchResultList from '../pages/SearchResultList';
import PageNotFound from '../pages/PageNotFound'; // Import the PageNotFound component
import AboutUs from '../pages/AboutUs';
import Tickets from '../components/Tickets/Tickets';

const Routers = () => {
  return (
    <Routes>
     
      <Route path="/" element={<Home />} />
      <Route path="/tour" element={<Tour />} />
      <Route path="/tour/:id" element={<TourDetails />} />
      <Route path="/login" element={<Login />} />
     <Route path='/aboutus' element={<AboutUs/>}/>
     <Route path='/ticket' element={<Tickets/>}/>
      
      
      {/* Page Not Found Route */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Routers;
