import React, { Fragment } from 'react';
import Navbar from '../Nav/Navbar';
import { Outlet, useLocation } from 'react-router-dom'; 
import Footer from '../Footer/Footer';
import { AnimatePresence, motion } from 'framer-motion'; 

const Layout = () => {
  const location = useLocation(); 

  return (
    <Fragment>
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}  
            initial={{ opacity: 0, y: 20 }}  
            animate={{ opacity: 1, y: 0 }}   
            exit={{ opacity: 0, y: -20 }}    
            transition={{ duration: 0.3 }}   
          >
            <Outlet /> 
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;