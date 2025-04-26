import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="hero-banner">
        <div className="hero-content">
          <h1>Welcome to Netflix</h1>
          <p>Watch unlimited movies, TV shows, and more.</p>
        </div>
      </div>
      <div className="content-section">
        <h2>Popular on Netflix</h2>
        <div className="movie-grid">{/* Movie cards will go here */}</div>
      </div>
    </div>
  );
};

export default Home;
