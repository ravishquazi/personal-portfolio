import React from 'react';
import styles from './Skills.module.css';
import type { SkillCategory } from '../types';

/**
 * Skills Component
 * Displays technical proficiencies in structured cards with hover animations.
 * Demonstrates TypeScript array typing and CSS Modules styling.
 */
export const Skills: React.FC = () => {
  // Strongly typed skill categories
  const skillCategories: (SkillCategory & { icon: string })[] = [
    {
      categoryTitle: 'Frontend Development',
      icon: '🎨',
      description:
        'Building responsive, interactive user interfaces with modern web standards.',
      skills: [
        { name: 'HTML', level: 'Proficient' },
        { name: 'CSS', level: 'Proficient' },
        { name: 'JavaScript', level: 'Proficient' },
        { name: 'TypeScript', level: 'Intermediate' },
        { name: 'ReactJS', level: 'Intermediate' },
      ],
    },
    {
      categoryTitle: 'Backend Development',
      icon: '☕',
      description:
        'Server-side logic, object-oriented architecture, and REST API creation.',
      skills: [
        { name: 'Java', level: 'Proficient' },
        { name: 'Spring Boot', level: 'Intermediate' },
        { name: 'Basic Node.js', level: 'Familiar' },
      ],
    },
    {
      categoryTitle: 'Database & SQL',
      icon: '🗄️',
      description:
        'Relational database modeling, query writing, indexing, and data integrity.',
      skills: [
        { name: 'MySQL', level: 'Proficient' },
        { name: 'SQL', level: 'Proficient' },
      ],
    },
    {
      categoryTitle: 'Tools & Version Control',
      icon: '🛠️',
      description:
        'Source control management, collaboration, and modern developer tooling.',
      skills: [
        { name: 'Git/GitHub', level: 'Proficient' },
      ],
    },
  ];

  // Count total skills
  const totalSkillsCount = skillCategories.reduce(
    (acc, cat) => acc + cat.skills.length,
    0
  );

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Technical Stack</span>
          <h2 className="section-title">My Skills & Proficiencies</h2>
          <p className="section-subtitle">
            Core technologies and tools I have studied and implemented across
            academic coursework, labs, and personal projects.
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <div className={styles.skillsGrid}>
          {skillCategories.map((cat) => (
            <div key={cat.categoryTitle} className={styles.categoryCard}>
              <div className={styles.categoryHeader}>
                <span className={styles.categoryIcon}>{cat.icon}</span>
                <h3 className={styles.categoryTitle}>{cat.categoryTitle}</h3>
              </div>
              <p className={styles.categoryDesc}>{cat.description}</p>

              <div className={styles.skillPillsList}>
                {cat.skills.map((skill) => (
                  <span key={skill.name} className={styles.skillPill}>
                    <span className={styles.skillDot} />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Practical Assignment Summary Note */}
        <div className={styles.allSkillsSummary}>
          Currently working with <strong>{totalSkillsCount} key technologies</strong> across
          Frontend, Java Backend, Relational Databases, and Version Control.
        </div>
      </div>
    </section>
  );
};

export default Skills;
