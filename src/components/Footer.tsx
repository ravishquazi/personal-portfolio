import React from 'react';
import styles from './Footer.module.css';

// Year computed outside render for pure rendering
const CURRENT_YEAR = new Date().getFullYear();

/**
 * Footer Component
 * Displays student copyright, college practical assignment details, and footer links.
 */
export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerBrand}>
          Ravish Quazi <span>Portfolio</span>
        </div>

        <p className={styles.academicNotice}>
          Master of Computer Applications (MCA)
          <br />
          P. R. Pote Patil College of Engineering & Management, Amravati
        </p>

        <nav className={styles.footerNav}>
          <a href="#profile" className={styles.footerLink}>
            Profile
          </a>
          <a href="#about" className={styles.footerLink}>
            About Me
          </a>
          <a href="#skills" className={styles.footerLink}>
            Skills
          </a>
          <a href="#certifications" className={styles.footerLink}>
            Certifications
          </a>
          <a href="#education" className={styles.footerLink}>
            Education
          </a>
          <a href="#contact" className={styles.footerLink}>
            Contact
          </a>
        </nav>

        <p className={styles.copyright}>
          © {CURRENT_YEAR} Ravish Quazi. Built with ReactJS, TypeScript & CSS Modules.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
