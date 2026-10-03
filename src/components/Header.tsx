import React, { useState } from 'react';
import styles from './Header.module.css';

/**
 * Header Component
 * Contains navigation bar with responsive mobile menu toggle.
 * Demonstrates React functional component, useState hook, and CSS Modules.
 */
export const Header: React.FC = () => {
  // State to track mobile navigation menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Toggle mobile navigation menu
  const toggleMenu = (): void => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  // Close mobile navigation menu when a link is clicked
  const handleNavLinkClick = (): void => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        {/* Brand / Logo */}
        <a href="#profile" className={styles.brand}>
          <span className={styles.logoBadge}>RQ</span>
          <span className={styles.brandName}>Ravish Quazi</span>
        </a>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={styles.menuBar}></span>
          <span className={styles.menuBar}></span>
          <span className={styles.menuBar}></span>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${styles.navLinks} ${isMobileMenuOpen ? styles.open : ''}`}
        >
          <a href="#profile" className={styles.navLink} onClick={handleNavLinkClick}>
            Profile
          </a>
          <a href="#about" className={styles.navLink} onClick={handleNavLinkClick}>
            About Me
          </a>
          <a href="#skills" className={styles.navLink} onClick={handleNavLinkClick}>
            Skills
          </a>
          <a
            href="#certifications"
            className={styles.navLink}
            onClick={handleNavLinkClick}
          >
            Certifications
          </a>
          <a
            href="#education"
            className={styles.navLink}
            onClick={handleNavLinkClick}
          >
            Education & Exams
          </a>
          <a
            href="#contact"
            className={`${styles.navLink} ${styles.contactBtn}`}
            onClick={handleNavLinkClick}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
