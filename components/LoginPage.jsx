import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginPage.css";

export default function LoginPage() {
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `http://localhost:3000/api/users/${isRegister ? "register" : "login"}`;
      const payload = isRegister ? { name, email, password } : { email, password };

      const response = await axios.post(url, payload);

      if (!isRegister) {
        localStorage.setItem("token", response.data.token);
        alert("Login successful!");
        navigate("/");
      } else {
        alert("Registration successful! Please login.");
        setIsRegister(false);
      }
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-header">{isRegister ? "Register" : "Login"}</h2>
      <form onSubmit={handleSubmit}>
        {isRegister && (
          <input
            className="login-input"
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}
        <input
          className="login-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="password-input-wrapper">
          <input
            className="login-input"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="password-toggle-btn"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            <svg 
              className={`eye-icon ${showPassword ? '' : 'eye-hidden'}`}
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M12 5C5.63636 5 2 12 2 12C2 12 5.63636 19 12 19C18.3636 19 22 12 22 12C22 12 18.3636 5 12 5Z" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              {!showPassword && (
                <line 
                  x1="3" 
                  y1="3" 
                  x2="21" 
                  y2="21" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
        <button className="login-submit-btn" type="submit">
          {isRegister ? "Register" : "Login"}
        </button>
      </form>
      <p>
        {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
        <button className="Login-toggle-btn" onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? "Login" : "Register"}
        </button>
      </p>
    </div>
  );
}