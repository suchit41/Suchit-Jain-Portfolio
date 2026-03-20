import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = ({ data }) => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Professional Experience
        </motion.h2>

        <div className="timeline">
          {data.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3>{exp.title}</h3>
                    <h4>{exp.company}</h4>
                  </div>
                  <div className="timeline-period">
                    <span className={exp.current ? 'current-badge' : ''}>
                      {exp.period}
                    </span>
                  </div>
                </div>
                <ul className="achievements-list">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
