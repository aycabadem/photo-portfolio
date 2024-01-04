import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const instagramLink = "https://www.instagram.com/aycabadem/";
  const githubLink = "https://github.com/aycabadem";
  const linkedinLink =
    "https://www.linkedin.com/in/ay%C3%A7a-badem-ergin-284b45147/";

  return (
    <div className="contact-container">
      <div className="contact">
        <h1>Follow me</h1>
        <a href={instagramLink} target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Contact;
