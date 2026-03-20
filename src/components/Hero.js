import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import './Hero.css';

const withPublicUrl = (assetPath) => {
  if (!assetPath) return '';
  if (assetPath.startsWith('http://') || assetPath.startsWith('https://')) return assetPath;
  if (assetPath.startsWith('/')) return `${process.env.PUBLIC_URL}${assetPath}`;
  return `${process.env.PUBLIC_URL}/${assetPath}`;
};

const Hero = ({ data }) => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = data.name;
  const highlights = ['Full-Stack Systems', 'AI Product Workflows', 'Cloud Delivery'];
  const photoUrl = withPublicUrl(data.photo);
  const fallbackUrl = withPublicUrl('/images/profile.svg');

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [fullText]);

  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>
      <div className="container hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            <span className="greeting">Hi, I'm</span>
            <span className="name">{displayedText}</span>
            <span className="cursor">|</span>
          </h1>
          <h2 className="hero-subtitle">{data.title}</h2>
          <div className="hero-highlights">
            {highlights.map((highlight) => (
              <span key={highlight} className="hero-highlight-pill">
                {highlight}
              </span>
            ))}
          </div>
          <p className="hero-description">{data.profile}</p>
          <div className="hero-buttons">
            <Link to="contact" smooth={true} duration={500} className="btn btn-primary">
              Get In Touch
            </Link>
            <Link to="projects" smooth={true} duration={500} className="btn btn-secondary">
              View Projects
            </Link>
          </div>
          <div className="social-links">
            <a href={data.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href={data.github} target="_blank" rel="noopener noreferrer" title="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href={`mailto:${data.email}`} title="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="image-wrapper">
            <img
              src={photoUrl}
              alt={data.name}
              onError={(event) => {
                event.currentTarget.src = fallbackUrl;
              }}
            />
            <div className="image-glow"></div>
          </div>
        </motion.div>
      </div>

      <Link to="about" smooth={true} duration={500} className="scroll-indicator">
        <i className="fas fa-chevron-down"></i>
      </Link>
    </section>
  );
};

export default Hero;
