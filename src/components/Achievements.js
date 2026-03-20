import React from 'react';
import { motion } from 'framer-motion';
import './Achievements.css';

const Achievements = ({ data }) => {
  const getAchievementIcon = (achievement) => {
    if (achievement.includes('Winner') || achievement.includes('Award')) {
      return 'fa-trophy';
    } else if (achievement.includes('Runner-Up') || achievement.includes('1st') || achievement.includes('2nd')) {
      return 'fa-medal';
    } else if (achievement.includes('Certificate') || achievement.includes('Recognition')) {
      return 'fa-certificate';
    } else if (achievement.includes('Star')) {
      return 'fa-star';
    }
    return 'fa-award';
  };

  return (
    <section id="achievements" className="section section-alt">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Achievements & Awards
        </motion.h2>

        <div className="achievements-grid">
          {data.map((achievement, index) => (
            <motion.div
              key={index}
              className="achievement-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="achievement-icon">
                <i className={`fas ${getAchievementIcon(achievement)}`}></i>
              </div>
              <p>{achievement}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
