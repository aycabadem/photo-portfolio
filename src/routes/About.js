import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-me-container">
      <div className="profile-info">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/photo-portfolio-42170.appspot.com/o/bb.jpeg?alt=media&token=0550496a-4976-4658-abe3-1bf87d8e1d40"
          alt="Profile"
        />
        <h1>Ayca Badem Ergin</h1>
        <p>Porto, Portugal</p>
      </div>
      <div className="bio">
        <p>
          Hello! I'm Ayca, a software engineer who loves taking photos in her
          free time. I've combined these two interests to create a portfolio
          page. Ready to explore?
        </p>
      </div>
    </div>
  );
}

export default About;
