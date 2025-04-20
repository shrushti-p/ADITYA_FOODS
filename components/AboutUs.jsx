import React from "react";
import "./AboutUs.css";
import { FaSmile, FaLeaf } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { GiFruitBowl } from "react-icons/gi";
import Testimonials from "./Testimonials";

const AboutUs = () => {
  return (
    <div className="about-us-page">
      {/* Header Section */}
      <header className="about-us-header">
        <h1 className="title">
          About Us
          <br />
          <img
            src="images/section_delimiter_1.png"
            alt="img"
            class="title_bottom"
          />
          <p>
            <a href="/" className="footer-links">
              Home
            </a>{" "}
            &gt; About Us
          </p>
          <img
            src="images/ginger.png"
            alt="Floating burger1"
            className="floating-burger2"
          />
          <img
            src="images/garlic.png"
            alt="Floating burger2"
            className="floating-burger1"
          />
        </h1>
      </header>

      <div className="team-section">
        <div className="team-member">
          <img
            src="images/satyajit.png" // Replace with the actual image path
            alt="Satyajit Pandilwar - Owner"
            className="team-member-image"
          />
          <h3>Satyajit Pandilwar</h3>
          <p>Owner</p>
        </div>

        <div className="team-member">
          <img
            src="images/aditya.png" // Replace with the actual image path
            alt="Aditya Pandilwar - Director"
            className="team-member-image"
          />
          <h3>Aditya Pandilwar</h3>
          <p>Director</p>
        </div>
      </div>

      {/* Story Section */}
      <section className="story-section">
        <div className="text-content">
          <h2 className="section_title">Story About Us</h2>
          <h3 className="sub_title">Who we are</h3>
          <img
            src="images/section_delimiter_1.png"
            alt="img"
            class="section_devider"
          />
          <p>
            At Aditya Food's we are passionate about delivering high-quality
            organic food products crafted with care and tradition. We have grown
            to become a trusted name in the food production industry. Our
            diverse product range includes ginger-garlic paste, custard apple
            pulp, traditional Indian dry chutneys, fresh green peas, and fresh
            peanut and kardi oils and many more.
          </p>
          <p>
            We take pride in serving over 1500+ loyal customers and have
            successfully expanded our reach to more than 28+ cities across
            India. With an impressive 89% repeat customer rate, we continue to
            build lasting relationships by delivering authentic and healthy
            flavors. Our team is dedicated to sourcing ingredients sustainably,
            supporting local farmers, and ensuring the highest standards of
            quality at every step of the production process. At Aditya Food's,
            we strive to bring natural goodness to your table.
          </p>
        </div>

        <div className="image-content">
          <img src="images/all2.jpg" alt="Aditya Foods's" />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h3 class="sub_title">Why Choose Us</h3>
        <img
          src="images/section_delimiter_1.png"
          alt="img"
          class="section_devider"
        />
        <div className="choose-cards">
          <div className="choose-card">
            <GiFruitBowl size={40} color="#00b4ef" />
            <h4>100% Organic Ingredients</h4>
            <p>
              Fresh, natural, and chemical-free products for healthy living.
            </p>
          </div>

          <div className="choose-card">
            <FaLeaf size={40} color="#00b4ef" />
            <h4>Sustainable Sourcing</h4>
            <p>
              Responsibly sourced raw materials to promote environmental care.
            </p>
          </div>

          <div className="choose-card">
            <IoMdSettings size={40} color="#00b4ef" />
            <h4>Advanced Production Techniques</h4>
            <p>Modern facilities for hygienic and efficient production.</p>
          </div>

          <div className="choose-card">
            <FaSmile size={40} color="#00b4ef" />
            <h4>Customer Satisfaction</h4>
            <p>Focused on delivering excellence in taste and service.</p>
          </div>
        </div>
      </section>
      <Testimonials></Testimonials>
    </div>
  );
};

export default AboutUs;
