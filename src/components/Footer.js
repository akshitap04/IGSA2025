// components/Footer.js
import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-section">
      <h2>CONTACT US</h2>

      <div className="social-icons">
        <a href="https://www.facebook.com/groups/igsa.udel/" target="_blank" rel="noreferrer">
         <i class="fa-brands fa-square-facebook"></i>
        </a>
        <a href="https://www.instagram.com/udel.igsa/" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="mailto:igsa.ud@gmail.com">
          <i className="fas fa-envelope"></i>
        </a>
      </div>

      <div className="footer-bottom-bar">IGSA</div>

      <p className="footer-description">
        This website is run by the Indian Graduate Student Association at the University of Delaware.
        For help contact: <a href="mailto:igsa.ud@gmail.com">IGSA Admin</a><br />
      
      </p>
    </footer>
  );
}
