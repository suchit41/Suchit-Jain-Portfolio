import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = ({ data }) => {
  const skillIcons = {
    'Programming Languages': 'fa-code',
    'Frontend': 'fa-laptop-code',
    'Backend': 'fa-server',
    'AI/ML & Data': 'fa-brain',
    'Databases': 'fa-database',
    'Tools & Platforms': 'fa-tools',
    'Cloud & DevOps': 'fa-cloud'
  };

  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills & Technologies
        </motion.h2>

        <div className="skills-grid">
          {Object.entries(data).map(([category, skills], index) => (
            <motion.div
              key={category}
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="skill-icon">
                <i className={`fas ${skillIcons[category] || 'fa-code'}`}></i>
              </div>
              <h3>{category}</h3>
              <div className="skill-tags">
                {skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
