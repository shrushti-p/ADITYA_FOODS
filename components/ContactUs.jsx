import React from "react";
import "./ContactUs.css";
import Footer from "./Footer";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="contact-container">
      {/* Header Section */}
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>
          <a href="/" className="footer-links">
            Home
          </a>{" "}
          &gt; Contact Us
        </p>
        <img
          src="images/penut.png"
          alt="Floating penut"
          className="floating-burger1"
        />
        <img
          src="images/custerdapple4.png"
          alt="Floating custerdapple"
          className="floating-burger2"
        />
      </div>

      {/* Contact Information */}
      <div className="contact-info">
        <div className="info-card">
          <FaMapMarkerAlt className="icon" />
          <h5>LOCATION</h5>
          <p>
            {" "}
            Aditya Foods, Samta Nagar,Dam Road, Industrial Area, Udgir, Latur,
            India, P.O 413517{" "}
          </p>
        </div>
        <div className="info-card">
          <FaPhoneAlt className="icon" />
          <h5>PHONES</h5>
          <p>+91 86006 05659</p>
          <p>+91 94224 72978</p>
        </div>
        <div className="info-card">
          <FaEnvelope className="icon" />
          <h5>EMAIL</h5>
          <p>adityafood2015@gmail.com</p>
        </div>
      </div>

      {/* Get In Touch Section */}
      <div className="get-in-touch">
        <h2 className="section_title">Get In Touch </h2>
        <h3 className="sub_title">Send Us Messages</h3>
        <img
          src="images/section_delimiter_1.png"
          alt="img"
          class="section_devider"
        />
        <div className="contact-content">
          {/* Google Map */}
          <div className="map-container">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.0276013207594!2d77.1096625!3d18.3846923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcfab2b18f0b175%3A0x630484fba65b42f!2sAditya%20foods!5e0!3m2!1sen!2sin!4v1707741742078!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <form>
              <div className="form-group">
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
              </div>
              <input type="text" placeholder="Subject" required />
              <textarea
                placeholder="Write your message here..."
                required
              ></textarea>
              <button className="submit" type="submit">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default ContactUs;
