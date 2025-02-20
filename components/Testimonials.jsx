import { FaStar } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./Testimonials.css";
import { useState, useEffect } from "react";
import CityTestimonial from "./CityTestimonial"

const testimonialsData = [
  {
    rating: 4.5,
    title: "Excellent Service",
    text: "These super foods are packed with vital nutrients, including vitamins and minerals that can help keep you healthy. Plus they are easy to enjoy—just add water and let the magic happen!",
    name: "Bridget Cosmus",
    role: "Client",
  },
  {
    rating: 5.0,
    title: "Outstanding Quality",
    text: "The products exceeded my expectations. They are of great quality and worth every penny. Highly recommend to anyone seeking a healthier lifestyle.",
    name: "John Doe",
    role: "Client",
  },
  {
    rating: 4.0,
    title: "Great Support",
    text: "Customer support was very helpful and responsive. They answered all my questions and ensured I had a great experience.",
    name: "Emily Smith",
    role: "Client",
  },
  {
    rating: 4.8,
    title: "Amazing Experience",
    text: "I had an amazing experience with this product. It has made a positive impact on my daily routine. Highly satisfied!",
    name: "Michael Brown",
    role: "Client",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScrollForward = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 2 >= testimonialsData.length ? 0 : prevIndex + 2
    );
  };

  const handleScrollBackward = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 2 : prevIndex - 2
    );
  };

  return (
    <>
    <div className="testimonials-section">
      {/* Left Side */}
      <div className="test-left">
        <h2 style={{fontSize:50}}className="test-heading">Testimonials</h2>
        <img src="images/city_image.png" alt="image" className="testimonial-image" />
        <p className="test-para" style={{fontSize:40}}>What Our <br /> Customer’s Say?</p>
        <button className="read-all-btn">
          Read All <SlArrowRight />
        </button>
      </div>

      {/* Right Side - Testimonials Slider */}
      <div className="test-right">
        <button className="scroll-btn left" onClick={handleScrollBackward}>
          <FaArrowLeft />
        </button>

        <div className="testimonials-container">
          {testimonialsData
            .slice(currentIndex, currentIndex + 2)
            .map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="rating">
                  {[...Array(Math.floor(testimonial.rating))].map((_, starIndex) => (
                    <FaStar key={starIndex} className="star-icon" />
                  ))}
                  {testimonial.rating} / 5.0
                </div>
                <h4 className="test-title">{testimonial.title}</h4>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-footer">
                  <h5 style={{fontStyle:"oblique"}}>{testimonial.name}</h5>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            ))}
        </div>

        <button className="scroll-btn right" onClick={handleScrollForward}>
          <FaArrowRight />
        </button>
      </div>
    </div>
     <CityTestimonial></CityTestimonial>
    </>

  );
};

export default Testimonials;
