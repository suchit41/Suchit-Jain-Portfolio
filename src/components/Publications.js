import React from 'react';
import { motion } from 'framer-motion';
import './Publications.css';

const Publications = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <section id="publications" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Publications
        </motion.h2>

        <div className="publications-list">
          {data.map((pub, index) => (
            <motion.div
              key={index}
              className="publication-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <i className="fas fa-file-alt publication-icon"></i>
              <div className="publication-content">
                <h3>{pub.title}</h3>
                <p className="publication-venue">
                  {pub.conference}, {pub.location}, {pub.year}
                </p>
                {pub.pages && <p className="publication-pages">{pub.pages}</p>}
                {pub.doi && (
                  <p className="publication-doi">
                    <strong>DOI:</strong>{' '}
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {pub.doi}
                    </a>
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
