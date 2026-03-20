import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const normalizeUrl = (url) => {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  return `https://${url}`;
};

const Projects = ({ data }) => {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>

        <div className="projects-grid">
          {data.map((project, index) => {
            const liveUrl = normalizeUrl(project.liveUrl);
            const githubUrl = normalizeUrl(project.githubUrl);

            return (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-header">
                <h3>{project.name}</h3>
                <div className="project-links">
                  {githubUrl && (
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" title="GitHub">
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                  {liveUrl && (
                    <a href={liveUrl} target="_blank" rel="noopener noreferrer" title="Live Demo">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  )}
                </div>
              </div>

              <div className="project-tech">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="project-description">
                {project.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>

              <div className="project-cta-row">
                {liveUrl && (
                  <a
                    className="project-cta project-cta-live"
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live Project
                  </a>
                )}
                {githubUrl && (
                  <a
                    className="project-cta project-cta-code"
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Source Code
                  </a>
                )}
                {!liveUrl && !githubUrl && (
                  <span className="project-cta-muted">Private build - demo available on request</span>
                )}
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
