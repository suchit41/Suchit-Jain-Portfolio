import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolioData';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="App">
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <Hero data={portfolioData.personal} />
      <About
        data={portfolioData.personal}
        education={portfolioData.education}
        achievementsCount={portfolioData.achievements.length}
      />
      <Skills data={portfolioData.skills} />
      <Experience data={portfolioData.experience} />
      <Projects data={portfolioData.projects} />
      <Publications data={portfolioData.publications} />
      <Achievements data={portfolioData.achievements} />
      <Contact data={portfolioData.personal} />
      <Footer data={portfolioData.personal} />
    </div>
  );
}

export default App;
