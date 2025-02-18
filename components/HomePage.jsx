
import React, { useRef } from "react";
import "./HomePage.css";
import AboutUs from "./AboutUs";
import Footer from './Footer';
import ContactUs from './ContactUs';
import PrivacyPolicy from './PrivacyPolicy';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import StatsSection from './StatsSection';
import HowToOrder from './HowToOrder';
import Categories from "./Categories";
import HeroProducts from "./HeroProducts";
import Testimonials from "./Testimonials";

const products = [
  { id: 1, name: "Category 1", image: "images/oil.png" },
  { id: 2, name: "Category 2", image: "images/paste.png" },
  { id: 3, name: "Category 3", image: "images/candy.png" },
  { id: 4, name: "Category 4", image: "images/pulp.png" },
  { id: 5, name: "Category 5", image: "images/peas.png" },
  { id: 1, name: "Category 1", image: "images/oil.png" },
  { id: 2, name: "Category 2", image: "images/paste.png" },
  { id: 3, name: "Category 3", image: "images/candy.png" },
  { id: 4, name: "Category 4", image: "images/pulp.png" },
  { id: 5, name: "Category 5", image: "images/peas.png" },
];

const HomePage = () => {
  const imageContainerRef = useRef(null);

  const handleScrollForward = () => {
    const container = imageContainerRef.current;
    container.scrollBy({ left: 200, behavior: "smooth" });
  };

  const handleScrollBackward = () => {
    const container = imageContainerRef.current;
    container.scrollBy({ left: -200, behavior: "smooth" });
  };

  return (
    <>
    <div className="home-page">
      {/* Main Content Section */}
      <div className="main-content">
        {/* Left Section - Text */}
        <div className="text-section">
          <h1 className="main-title">
            Taste your tradition by capturing the nature's essence
          </h1>
          <p className="subtitle">
            Discover the Flavors of Aditya Foods and Elevate Your Experience
          </p>
        </div>

        {/* Right Section - Background Image */}
        <div className="image-section">
          <img
            src="images/all1bg.png" // Replace with your background image path
            alt="Aditya Foods"
            className="background-image"
          />
        </div>
        
      </div>
   

      {/* Product Images Section */}
      <div className="product-section">
        <div className="image-circle-section" ref={imageContainerRef}>
          {products.map((product) => (
            <div className="image-circle" key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                className="circle-image"
              />
              <p className="image-name">{product.name}</p>
            </div>
          ))}
        </div>

        {/* Scroll Buttons */}
        <button
          className="scroll-backward-button"
          onClick={handleScrollBackward}
        >
          <span className="backward-icon">←</span>
        </button>

        <button className="scroll-forward-button" onClick={handleScrollForward}>
          <span className="forward-icon">→</span>
        </button>
      </div>
    </div>
    
    <HeroProducts></HeroProducts>
    <StatsSection></StatsSection>
    <HowToOrder></HowToOrder>
    {<Testimonials></Testimonials> }
    <Footer></Footer>
   

    </>
  );
};

export default HomePage;