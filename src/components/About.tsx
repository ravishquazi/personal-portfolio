import React from 'react';
import styles from './About.module.css';

/**
 * About Component
 * Introduces the student, career interests, and academic motivation.
 */
export const About: React.FC = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Get to Know Me</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A quick introduction into my academic background, technical curiosities,
            and software development aspirations.
          </p>
        </div>

        {/* About Grid: Narrative + Highlights */}
        <div className={styles.aboutGrid}>
          {/* Left: Bio Narrative */}
          <div className={styles.textCard}>
            <p>
              Hello! My name is <strong>Ravish Quazi</strong>. I am currently an
              MCA (Master of Computer Applications) student at{' '}
              <strong>
                P. R. Pote Patil College of Engineering & Management, Amravati
              </strong>
              , with an expected graduation year of <strong>2027</strong>.
            </p>
            <p>
              Having completed my BCA degree in 2025 from Late Babanrao Deshmukh
              Mahavidyalaya, I am deeply passionate about{' '}
              <strong>software development</strong>,{' '}
              <strong>web development</strong>, and building scalable full-stack
              solutions.
            </p>
            <p>
              My primary focus revolves around modern <strong>Java</strong>,{' '}
              <strong>Spring Boot</strong>, and frontend frameworks like{' '}
              <strong>ReactJS</strong> with <strong>TypeScript</strong>. I enjoy
              understanding how backend business logic communicates seamlessly
              with intuitive, user-friendly frontend interfaces.
            </p>
            <p>
              Outside of classroom academics, I actively participate in technical
              workshops, solve programming problems, and work on hands-on practical
              assignments to strengthen my fundamentals.
            </p>
          </div>

          {/* Right: Key Focus Highlights */}
          <div className={styles.highlightsList}>
            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}>💻</div>
              <div className={styles.highlightInfo}>
                <h4>Full Stack Aspirations</h4>
                <p>
                  Aspiring MERN Full Stack Developer
Building modern, responsive, and user-friendly web applications using MongoDB, Express.js, React, and Node.js.
                </p>
              </div>
            </div>

            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}>⚙️</div>
              <div className={styles.highlightInfo}>
                <h4>Clean Code & Modern Tools</h4>
                <p>
                  Emphasizing strict typing with TypeScript, component modularity,
                  and version control best practices using Git and GitHub.
                </p>
              </div>
            </div>

            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}>🎯</div>
              <div className={styles.highlightInfo}>
                <h4>Continuous Learning</h4>
                <p>
                  Eager to learn cloud fundamentals, relational databases like MySQL,
                  and software engineering paradigms to solve real-world problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
