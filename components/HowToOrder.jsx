import React from "react";
import "./HowToOrder.css";


const HowToOrder = () => {
  return (
    <div className="food-order-container">
      <div className="food-step">
        <img src="images/foodproduction3.png" alt="Choose Food" className="step-image" />
        <div className="step-text">
          
          <h3 className="sub_title">CHOOSE</h3> 
          <img src="images/section_delimiter_1.png" alt="img" class="section_devider"/>
            
        <p className="sub_title">Select food, which you want now the most and don’t forget about drinks.</p>    
        
        </div>
      </div>

      <div className="food-step middle-step">
        <div className="step-text">
          

          <h3 className="sub_title">MAKE AN ORDER</h3> 
          <img src="images/section_delimiter_1.png" alt="img" class="section_devider"/>
            
        <p className="sub_title">Contact us and provide our agent with correct information about your order.</p> 
          
        </div>
        <img src="images/food2.png" alt="Make Order" className="step-image" />
      </div>

      <div className="food-step">
        <img src="images/delivery2.png" alt="Receive Order" className="step-image" />
        <div className="step-text">
  
          <h3 className="sub_title">RECEIVE</h3> 
          <img 
          src="images/section_delimiter_1.png" alt="img" class="section_devider"/>
            
        <p className="sub_title">Get your order as quickly as possible and enjoy your meal.</p> 

          
        </div>
      </div>

     
    </div>
  );
};

export default HowToOrder;
