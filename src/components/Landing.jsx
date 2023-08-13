import React from "react";
import './Landing.css';

const Landing = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./assets/drst1.jpg"
       className="d-block w-100"
        alt="..."
        style={{ maxWidth: "100%", height: "700px" }}
         />
      <div className="carousel-caption d-none d-md-block">
        <h5>What We Have Done</h5>
        <p className="carousel">IDENTIFICATION AND REGISTRATION OF ELDERLY AND PERSONS WITH DISABILITIES FOR NONE FOOD ITEMS DISTRIBUTION HOST COMMUNITIES IN KASULU DISTRICT.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="./assets/drst2.jpg"
      className="d-block w-100" 
      alt="..." 
      style={{ maxWidth: "100%", height: "700px" }}      
      />
      <div className="carousel-caption d-none d-md-block">
        <h5>What We Have Done</h5>
        <p className="carousel">ENTREPRENEURSHIP TRAINING FOR PERSONS WITH DISABILITIES (PWDS)..</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="./assets/drst3.jpg" 
      className="d-block w-100" 
      alt="..."         
      style={{ maxWidth: "100%", height: "700px" }}
      />
      <div className="carousel-caption d-none d-md-block">
        <h5>What We Have Done</h5>
        <p className="carousel">EMPOWERING PERSONS WITH DISABILITIES (PWDS) WOMEN AND YOUTHS FOR ECONOMIC –SELF RELIANCE THROUGH IMPROVED GOATS REARING AND CROP FARMING PROJECT AT NKUNDUSI VILLAGE KASULU DISTRICT KIGOMA REGION.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

  );
};

export default Landing;