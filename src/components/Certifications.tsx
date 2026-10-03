import React from 'react';
import styles from './Certifications.module.css';
import type { Certification } from '../types';

/**
 * Certifications Component
 * Showcases training, workshops, and job simulations completed.
 * Uses typed certification cards with CSS module hover effects.
 */
export const Certifications: React.FC = () => {
  // Strongly typed list of certifications
  const certificationsData: (Certification & { icon: string })[] = [
    {
      id: 'cert-1',
      title: 'Java Full Stack Development Workshop',
      issuer: 'Technical Training Program',
      badge: 'Workshop',
      icon: '☕',
      description:
        'Intensive hands-on workshop covering Java fundamentals, Spring Boot architecture, REST APIs, and frontend integration.',
      tags: ['Core Java', 'Spring Boot', 'REST APIs', 'Hibernate'],
    },
    {
      id: 'cert-2',
      title: 'AWS Solutions Architecture Job Simulation',
      issuer: 'Forage Virtual Experience',
      badge: 'Simulation',
      icon: '☁️',
      description:
        'Designed scalable cloud architectures, configured VPCs, EC2 instances, and evaluated highly available cloud infrastructure.',
      tags: ['AWS', 'Cloud Architecture', 'EC2', 'S3'],
    },
    {
      id: 'cert-3',
      title: 'Cybersecurity Fundamentals',
      issuer: 'Academic Certification Course',
      badge: 'Certification',
      icon: '🔒',
      description:
        'Fundamental training in network security, threat vectors, authentication mechanisms, and best practices in web application defense.',
      tags: ['Network Security', 'Cryptography', 'OWASP Top 10'],
    },
    {
      id: 'cert-4',
      title: 'Cloud Computing',
      issuer: 'Online Learning Platform',
      badge: 'Course',
      icon: '🌐',
      description:
        'Explored cloud service models (IaaS, PaaS, SaaS), virtualization, containerization, and modern serverless paradigms.',
      tags: ['Cloud Models', 'Virtualization', 'Scalability'],
    },
    {
      id: 'cert-5',
      title: 'Data Analytics Job Simulation',
      issuer: 'Forage Virtual Internship',
      badge: 'Simulation',
      icon: '📊',
      description:
        'Extracted and cleaned datasets using SQL queries, transformed data pipelines, and generated analytical reports.',
      tags: ['SQL', 'Data Cleaning', 'Reporting', 'Excel'],
    },
    {
      id: 'cert-6',
      title: 'AI / Machine Learning Workshop',
      issuer: 'College Tech Symposium',
      badge: 'Workshop',
      icon: '🤖',
      description:
        'Practical introduction to supervised and unsupervised learning algorithms, model evaluation metrics, and AI workflow pipelines.',
      tags: ['Python', 'ML Algorithms', 'Data Modeling'],
    },
  ];

  return (
    <section id="certifications" className={styles.certSection}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Credentials & Learning</span>
          <h2 className="section-title">Certifications & Workshops</h2>
          <p className="section-subtitle">
            Industry-oriented job simulations, technical workshops, and foundation
            certifications completed to bolster my practical knowledge.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className={styles.certGrid}>
          {certificationsData.map((cert) => (
            <div key={cert.id} className={styles.certCard}>
              <div>
                <div className={styles.cardTop}>
                  <span className={styles.certTypeBadge}>{cert.badge}</span>
                  <span className={styles.certIcon}>{cert.icon}</span>
                </div>
                <h3 className={styles.certTitle}>{cert.title}</h3>
                <p className={styles.certIssuer}>{cert.issuer}</p>
                <p className={styles.certDesc}>{cert.description}</p>
              </div>

              <div className={styles.certTags}>
                {cert.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
