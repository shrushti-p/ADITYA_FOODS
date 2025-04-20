import { FaStar } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./Testimonials.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const testimonialsData = [
  {
    rating: 4.5,
    text: "This mango pulp tastes just like fresh Alphonso mangoes! I use it for making aamras, smoothies, and even mango lassi. Absolutely delicious and naturally sweet!",
    name: "Aarti Verma",
  },
  {
    rating: 5.0,
    text: "The mango pulp is absolutely delicious! It has the perfect sweetness and smooth texture, making it ideal for milkshakes and desserts",
    name: "Priya Sharma",
  },
  {
    rating: 4.0,
    text: "A lifesaver for making sitaphal milkshake without the mess of removing seeds! Super creamy and naturally sweet.",
    name: "Shalini Desai",
  },
  {
    rating: 4.8,
    text: "The taste is fresh and pure, but I found it a little thick for direct consumption. Mixing with milk worked well!",
    name: "Raghav Patil",
  },
  {
    rating: 4.5,
    text: "This guava pulp has a rich, natural flavor, perfect for making refreshing juice. No artificial taste, just pure fruit!",
    name: "Neha Malhotra",
  },
  {
    rating: 4.4,
    text: "Loved the taste, but I wish the pulp was a bit smoother. Otherwise, it’s great for making guava mocktails!",
    name: "Anil Gupta",
  },
  {
    rating: 4.0,
    text: "So good for making healthy drinks! I use this pulp for jamun shots, and it helps with digestion too. Great quality!",
    name: "Sunil Pandey",
  },
  {
    rating: 4.9,
    text: "The pulp is fresh and naturally tangy, but a bit on the thicker side. Works great when diluted with water!",
    name: "Shweta Saxena",
  },
  {
    rating: 4.7,
    text: "These peas are so fresh and sweet! Perfect for making matar paneer and aloo matar. I love that they don’t turn mushy after cooking",
    name: "Priya Sinha",
  },
  {
    rating: 4.3,
    text: "Good quality and fresh taste, overall, great value for money!",
    name: "Rohit Bansal",
  },
  {
    rating: 4.1,
    text: "Super convenient and saves so much time! The flavor is strong, fresh, and just like homemade.",
    name: "Kavita Jain",
  },
  {
    rating: 4.3,
    text: "Nice consistency and aroma, but I prefer it a little less salty. Otherwise, it's perfect for daily cooking!",
    name: "Manoj Dubey",
  },
  {
    rating: 4.4,
    text: "Soft, fresh, and doesn’t break while cooking! Perfect for making paneer tikka and butter paneer.",
    name: "Radha Mishra",
  },
  {
    rating: 4.5,
    text: "Good quality and great taste! Just wish it came in a vacuum-sealed pack for longer shelf life.",
    name: "Sanjay Thakur",
  },
  {
    rating: 4.9,
    text: "So fresh and perfect for making sweets like gulab jamun and barfi! Loved the texture and taste.",
    name: "Simran Kaur",
  },
  {
    rating: 4.8,
    text: "Perfect for making sweets! The mawa is fresh, soft, and gives an authentic taste to my homemade mithais.",
    name: "Sunita Yadav",
  },
  {
    rating: 4.7,
    text: "Pure and aromatic! This ghee reminds me of my grandmother’s homemade ghee. Perfect for cooking and sweets.",
    name: "Swati Choudhary",
  },
  {
    rating: 4.2,
    text: "This oil has a great nutty aroma and is perfect for deep frying. Much healthier than refined oils!",
    name: "Anusha Reddy",
  },
  {
    rating: 4.0,
    text: "Love the natural flavor! I use it for making traditional dishes, but wish the bottle had a better pouring design.",
    name: "Rajesh Kumar",
  },
  {
    rating: 4.5,
    text: "Light and healthy! I switched to safflower oil for cooking, and it’s really good for heart health.",
    name: "Nidhi Agarwal",
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(2);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth <= 768) {
        setCardsToShow(1);
      } else {
        setCardsToShow(2);
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const handleScrollForward = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsToShow >= testimonialsData.length
        ? 0
        : prevIndex + cardsToShow
    );
  };

  const handleScrollBackward = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? testimonialsData.length - cardsToShow
        : prevIndex - cardsToShow
    );
  };

  return (
    <>
      <div className="testimonials-section">
        {/* Left Side */}
        <div className="test-left">
          <h2 className="test-heading">Testimonials</h2>
          <img
            src="images/section_delimiter_1.png"
            alt="img"
            className="section_devider"
          />
          <p className="test-para">
            What Our <br /> Customer’s Say?
          </p>

          <Link to="/CityTestimonial" className="read-all-btn">
            Read All <SlArrowRight />
          </Link>
        </div>

        {/* Right Side - Testimonials Slider */}
        <div className="test-right">
          <button
            className="scroll-btn scroll-btn-abs left"
            onClick={handleScrollBackward}
          >
            <FaArrowLeft />
          </button>

          <div className="testimonials-container">
            {testimonialsData
              .slice(currentIndex, currentIndex + cardsToShow)
              .map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <div className="rating">
                    {[...Array(Math.floor(testimonial.rating))].map(
                      (_, starIndex) => (
                        <FaStar key={starIndex} className="star-icon" />
                      )
                    )}
                    {testimonial.rating} / 5.0
                  </div>
                  <h4 className="test-title">{testimonial.title}</h4>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-footer">
                    <h5 style={{ fontStyle: "oblique" }}>{testimonial.name}</h5>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              ))}
          </div>

          <button
            className="scroll-btn scroll-btn-abs right"
            onClick={handleScrollForward}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
