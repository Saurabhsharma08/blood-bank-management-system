import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import About from './components/About/About'
import Eligibility from './components/About/Eligibility'
import Contact from './components/Contact/Contact'
import Login from './components/Login/Login'
import DonorLogin from './components/Login/DonorLogin';
import PatientLogin from './components/Login/PatientLogin';
import PrivateRoute from "./components/routes/Private";
import Dashboard from './components/user/Dashboard';

import './styles/header.scss'
import './styles/app.scss'
import './styles/footer.scss'
import './styles/home.scss'
import './styles/login.scss'
import './styles/contact.scss'
import './styles/eligibility.scss'
import './styles/aboutus.scss'
import './styles/register.scss'
import Register from './components/Login/Register';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/eligibility" element={<Eligibility />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/donor-login" element={<DonorLogin />} />
        <Route path="/patient-login" element={<PatientLogin />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App