import React, { useEffect, useState } from "react";
import "./StatsSection.css";

const StatItem = ({ title, targetNumber, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(targetNumber / 100);
    const interval = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        start = targetNumber;
        clearInterval(interval);
      }
      setCount(start);
    }, 30);
    return () => clearInterval(interval);
  }, [targetNumber]);

  return (
    <div className="stat-item">
      <h2 className="stat-number">{count.toLocaleString()}{suffix}</h2>
      <p className="stat-title">{title}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <div className="stats-container">
      <div className="stats-row">
        <StatItem title="Happy Clients" targetNumber={1500} suffix="+" />
      <img src="images/greenpeas.png" alt="Floating greenpeas" className="floating-burger" />
      </div>
      <div className="stats-row">
        <StatItem title="Activate Products" targetNumber={15} suffix="+" />
        <StatItem title="Repeat Customer Rate" targetNumber={88} suffix="%" />
      </div>
      <div className="stats-row">
        <StatItem title="Cities Reached" targetNumber={28} suffix="+" />
      <img src="images/mango.png" alt="Floating jamun" className="floating-burger3" />
      </div>
    </div>
  );
};

export default StatsSection;
