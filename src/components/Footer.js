import React from 'react';
import './Footer.css';

const Footer = ({ data }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} {data.name}. All rights reserved.</p>
        
      </div>
    </footer>
  );
};

export default Footer;
