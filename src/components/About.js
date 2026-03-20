import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = ({ data, education, achievementsCount }) => {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>{data.profile}</p>
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">2+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{achievementsCount}</div>
                <div className="stat-label">Achievements</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="education-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <i className="fas fa-graduation-cap"></i>
            <h3>{education.degree}</h3>
            <p className="institution">{education.institution}</p>
            <p className="period">{education.period}</p>
            <p className="location">{education.location}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
