import React from 'react';
import './App.css';

// Import all modular portfolio components
import Header from './components/Header';
import Profile from './components/Profile';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Education from './components/Education';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

/**
 * Main App Component
 * Integrates all section components into a single-page portfolio layout.
 *
 * Tech Stack:
 * - ReactJS (Functional Components & Hooks)
 * - TypeScript (Strict Type Checking)
 * - CSS Modules (Scoped Component Styles)
 */
export const App: React.FC = () => {
  return (
    <div className="app-wrapper">
      {/* Top Navigation Bar */}
      <Header />

      {/* Main Content Area */}
      <main className="main-content">
        {/* Profile / Hero Section */}
        <Profile />

        {/* About Me Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Certifications & Workshops Section */}
        <Certifications />

        {/* Education & Examination Performance Section */}
        <Education />

        {/* Contact Form Section */}
        <ContactForm />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default App;
