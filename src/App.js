import { Fragment } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Home from './Page/Home';
import Layout from './Component/Layout/Layout';
import Contact from './Page/Contact';
import About from './Page/About-nav';
import Team from './Page/Team';
import Faq from './Page/Faq';
import Booking from './Page/booking-nav';
import Login from './Page/Login';
import ServicesPage from './Page/ServicesPage-nav';
import ServiceDetails from './Page/ServiceDetails-nav';



const routes = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='home' element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='team' element={<Team />} /> 
    <Route path='faq' element={<Faq />} />
    <Route path='booking' element={<Booking />} />
    <Route path='login' element={<Login />} /> 
    <Route path='services' element={<ServicesPage />} />
    <Route path='service-details' element={<ServiceDetails />} />
    <Route path='contact' element={<Contact />} />
    {/* ما في مسار منفصل لـ WorkingProcess لأنه جزء من Home */}
  </Route>
))

function App() {
  return (
    <Fragment>
      <RouterProvider router={routes} />
    </Fragment>
  );
}

export default App;