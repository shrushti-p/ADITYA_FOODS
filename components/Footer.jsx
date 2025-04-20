import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Horizontal Line Above Content */}
      <div className="horizontal-line"></div>

      {/* Footer Content */}
      <div className="footer-content">
        {/* Left Section - Social Handles */}
        <div className="footer-section social-section">
          <h3>Social Families</h3>
          <ul>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="social-icon" /> Aditya Food Product
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="social-icon" /> @AdityafoodProduct
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="social-icon" /> @adityafoodproduct
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="social-icon" /> Aditya Food Product
              </a>
            </li>
          </ul>
        </div>

        {/* Middle Section - Address, Contact, Email */}
        <div className="footer-section contact-section">
          <h3>Get in Touch</h3>
          <ul>
            <li>
              <FaMapMarkerAlt className="contact-icon" />
              <span>
                Aditya Foods, <br />
                Samta Nagar,Dam Road, <br />
                Industrial Area, Udgir, Latur, India, <br />
                P.O 413517
              </span>
            </li>
            <li>
              <FaPhone className="contact-icon" />
              <span>+91 86006 05659</span>
            </li>
            <li>
              <FaEnvelope className="contact-icon" />
              <span>adityafood2015@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Right Section - Quick Links */}
        <div className="footer-section links-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/aboutus">About Us</a>
            </li>
            <li>
              <a href="/contactus">Contact Us</a>
            </li>
            <li>
              <a href="/privacypolicy">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Horizontal Line Below Content */}
      <div className="horizontal-line"></div>

      {/* Copyright Section */}
      <div className="copyright">
        <p>Copyright © 2025 Aditya Food Product. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

// import React from "react";
// import "./Footer.css";
// import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       {/* Left Section - Social Handles */}
//       <div className="footer-section social-section">
//         <h3>Social Handles</h3>
//         <ul>
//           <li>
//             <a href="https://facebook.com/adityafoodproduct" target="_blank" rel="noopener noreferrer">
//               <FaFacebook className="social-icon" /> Aditya Food Product
//             </a>
//           </li>
//           <li>
//             <a href="https://twitter.com/adityafoodproduct" target="_blank" rel="noopener noreferrer">
//               <FaTwitter className="social-icon" /> @AdityafoodProduct
//             </a>
//           </li>
//           <li>
//             <a href="https://instagram.com/adityafoodproduct" target="_blank" rel="noopener noreferrer">
//               <FaInstagram className="social-icon" /> @adityafoodproduct
//             </a>
//           </li>
//           <li>
//             <a href="https://linkedin.com/company/adityafoodproduct" target="_blank" rel="noopener noreferrer">
//               <FaLinkedin className="social-icon" /> Aditya Food Product
//             </a>
//           </li>
//         </ul>
//       </div>

//       {/* Middle Section - Address, Email, and Contact */}
//       <div className="footer-section contact-section">
//         <h3>Get in Touch</h3>
//         <div className="contact-info">
//           <p>
//             <FaMapMarkerAlt className="contact-icon" /> Aditya Food Product,<br />
//             G1 - 200(A) Agro Food Park,<br />
//             Boranada, Jodhpur (Raj.) India,<br />
//             P.O 342012
//           </p>
//           <p>
//             <FaPhone className="contact-icon" /> +91 6375849028
//           </p>
//           <p>
//             <FaEnvelope className="contact-icon" /> business@adityafoodproduct.com
//           </p>
//         </div>
//       </div>

//       {/* Right Section - Quick Links */}
//       <div className="footer-section links-section">
//         <h3>Quick Links</h3>
//         <ul>
//           <li>
//             <a href="/our-brand">Our Brand</a>
//           </li>
//           <li>
//             <a href="/private-labelling">Private Labelling</a>
//           </li>
//           <li>
//             <a href="/exports">Exports</a>
//           </li>
//           <li>
//             <a href="/our-flavourings">Our Flavourings</a>
//           </li>
//         </ul>
//       </div>

//       <div className="copyright">
//          <p>Copyright © 2025 Aditya Foods. All Rights Reserved.</p>
//  </div>
//     </footer>

//   );
// };

// export default Footer;
