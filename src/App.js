import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import AddProject from './pages/addProject';

import Home from './pages/Home';
import Projects from './pages/Projects';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';


// // Lazy load your pages
// const Home = lazy(() => import('./pages/Home'));
// const Projects = lazy(() => import('./pages/Projects'));
// const AboutUs = lazy(() => import('./pages/AboutUs'));
// const ContactUs = lazy(() => import('./pages/ContactUs'));

const AppRouter = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/addproject" element={<AddProject />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default AppRouter;