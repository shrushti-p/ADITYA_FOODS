import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import React from 'react';
import './App.css'
import Navbar from '../components/Navbar';
import InspiringRecipes from '../components/InspiringRecipes';
import HomePage from '../components/HomePage'
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';
import PrivacyPolicy from '../components/PrivacyPolicy';
import LoginPage from '../components/LoginPage';
import SignupPage from '../components/SignupPage';
import StatsSection from '../components/StatsSection';
import HowToOrder from '../components/HowToOrder';
import Categories from "../components/Categories";
import ProductDetails from "../components/ProductDetails";
import HeroProducts from "../components/HeroProducts";
import Testimonials from '../components/Testimonials';



function App() {
 

  return (
    <>


<Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/recipes" element={<InspiringRecipes />} />
        {<Route path="/testimonials" element={<Testimonials />} /> }
        <Route path="/hero-products" element={<HeroProducts />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </Router>

   {/* <Navbar></Navbar>
    <HomePage></HomePage> */}
    {/* <Footer></Footer>
    <AboutUs></AboutUs>
    <ContactUs></ContactUs>
    <PrivacyPolicy></PrivacyPolicy>
    <InspiringRecipes></InspiringRecipes>
    <LoginPage></LoginPage>
    <SignupPage></SignupPage>
    <StatsSection></StatsSection>
    <HowToOrder></HowToOrder> */}
    {/* <Testimonials></Testimonials> */}
    
    
    </>
  )
}

export default App
