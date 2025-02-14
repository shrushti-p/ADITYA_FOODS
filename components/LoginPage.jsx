import React, { useState } from "react";
import "./LoginPage.css"; 


const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };

  return (
    <div className="container">
      <div className="login-box">
        <h2 className="text-2xl font-bold text-center mb-6">Account Login</h2>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username or Email"
            value={formData.username}
            onChange={handleChange}
            className="input-field"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="input-field"
            required
          />

          <button type="submit" className="login-btn">
            Login to Your Account!
          </button>
        </form>

        
      </div>
    </div>
  );
};

export default LoginPage;


//Sending Data to a Backend API (Real Login)
// const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       const response = await fetch("https://your-api-url.com/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
  
//       const data = await response.json();
//       console.log("Server Response:", data);
  
//       if (data.success) {
//         alert("Login Successful!");
//       } else {
//         alert("Invalid Credentials!");
//       }
//     } catch (error) {
//       console.error("Error logging in:", error);
//     }
//   };
  
