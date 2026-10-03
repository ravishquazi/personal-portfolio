import React from 'react';
import styles from './Profile.module.css';
import type { ProfileInfo } from '../types';

/**
 * Profile Component
 * Showcases student profile, introduction hero section, education details,
 * and call-to-action buttons.
 */
export const Profile: React.FC = () => {
  // Profile data typed with ProfileInfo interface
  const profileData: ProfileInfo = {
    name: 'Ravish Quazi',
    role: 'MCA Student / Aspiring MERN Full Stack Developer',
    college: 'P. R. Pote Patil College of Engineering & Management, Amravati',
    course: 'Master of Computer Applications (MCA)',
    expectedGraduation: '2027',
    email: 'ravishquazi8@gmail.com',
    location: 'Amravati, Maharashtra, India',
    github: 'https://github.com/ravishquazi',
    linkedin: 'https://www.linkedin.com/in/ravish-quazi/',
    bioSummary:
      'Passionate postgraduate student dedicated to mastering Full Stack Java development, modern frontend engineering with React & TypeScript, and enterprise database systems.',
  };

  return (
    <section id="profile" className={styles.profileSection}>
      <div className={styles.profileContainer}>
        {/* Left Column: Greeting and Role Overview */}
        <div className={styles.introContent}>
          <div className={styles.studentBadge}>
            <span>🎓</span>
            <span>College Practical Assignment Portfolio</span>
          </div>

          <h1 className={styles.name}>
            Hi, I'm <span className={styles.nameHighlight}>{profileData.name}</span>
          </h1>

          <p className={styles.role}>{profileData.role}</p>

          <p className={styles.collegeNotice}>
            Currently pursuing <strong>{profileData.course}</strong> at{' '}
            <strong>{profileData.college}</strong>. Actively building robust
            web applications and honing skills in Java, Spring Boot, ReactJS, and
            relational databases.
          </p>

          {/* Action buttons */}
          <div className={styles.actionButtons}>
            <a href="#contact" className={styles.btnPrimary}>
              Get In Touch ✉️
            </a>
            <a href="#skills" className={styles.btnSecondary}>
              Explore Skills ⚡
            </a>
          </div>
        </div>

        {/* Right Column: Academic Details Card */}
        <div className={styles.profileCard}>
          <div className={styles.avatarContainer}>
            <div className={styles.avatarCircle}>RQ</div>
            <div className={styles.avatarMeta}>
              <h3>{profileData.name}</h3>
              <p>Aspiring Software Engineer</p>
            </div>
          </div>

          <div className={styles.detailsList}>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Degree / Program</span>
              <span className={styles.detailValue}>{profileData.course}</span>
            </div>

            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>College / Institute</span>
              <span className={styles.detailValue}>{profileData.college}</span>
            </div>

            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Expected Graduation</span>
              <span className={styles.detailValue}>
                {profileData.expectedGraduation}
              </span>
            </div>

            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Primary Tech Focus</span>
              <span className={styles.detailValue}>
                Java • Spring Boot • React • SQL
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
