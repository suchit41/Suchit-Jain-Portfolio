import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = ({ data }) => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Let's Connect
        </motion.h2>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <a href={`mailto:${data.email}`}>{data.email}</a>
              </div>
            </div>

            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <h4>Phone</h4>
                <a href={`tel:${data.phone}`}>{data.phone}</a>
              </div>
            </div>

            <div className="contact-item">
              <i className="fab fa-linkedin"></i>
              <div>
                <h4>LinkedIn</h4>
                <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
                  Visit Profile
                </a>
              </div>
            </div>

            <div className="contact-item">
              <i className="fab fa-github"></i>
              <div>
                <h4>GitHub</h4>
                <a href={data.github} target="_blank" rel="noopener noreferrer">
                  Visit Profile
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
