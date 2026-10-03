import React from 'react';
import styles from './Education.module.css';
import type { EducationItem, ExaminationRecord } from '../types';

/**
 * Education Component
 * Displays academic qualifications using cards and examination semester performance
 * in a responsive, hover-styled table.
 */
export const Education: React.FC = () => {
  // Strongly typed Education history
  const educationList: EducationItem[] = [
    {
      id: 'edu-mca',
      degree: 'Master of Computer Applications (MCA)',
      specialization: 'Computer Applications & Software Engineering',
      institution: 'P. R. Pote Patil College of Engineering & Management, Amravati',
      completionYear: '2027 (Expected)',
      status: 'Currently Pursuing',
      highlights: [
        'Advanced Data Structures and Algorithms',
        'Web Technologies and Full Stack Java Development',
        'Database Management Systems and Software Engineering',
      ],
    },
    {
      id: 'edu-bca',
      degree: 'Bachelor of Computer Applications (BCA)',
      specialization: 'Computer Science & Application Development',
      institution: 'Late Babanrao Deshmukh Mahavidyalaya',
      completionYear: '2025',
      status: 'Completed',
      highlights: [
        'Core Java, C/C++ Programming, and OOP Principles',
        'Relational Databases and Structured Query Language (SQL)',
        'Graduated with First Class Academic Standing',
      ],
    },
  ];

  // Strongly typed Examination semester performance
  const examinationRecords: ExaminationRecord[] = [
    {
      id: 'exam-sem-1',
      examName: 'MCA Semester 1 Examination',
      course: 'MCA',
      semester: 'Semester I',
      status: 'Completed / Passed',
      performance: 'SGPA: 6.36',
      resultClassification: 'First Class with Distinction',
    },
    {
      id: 'exam-sem-2',
      examName: 'MCA Semester 2 Examination',
      course: 'MCA',
      semester: 'Semester II',
      status: 'Completed / Passed',
      performance: 'SGPA: 7.16',
      resultClassification: 'First Class with Distinction',
    },
  ];

  return (
    <section id="education" className={styles.educationSection}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Academic Background</span>
          <h2 className="section-title">Education & Examination</h2>
          <p className="section-subtitle">
            Formal degrees and verified semester examination evaluations from
            undergraduate to current postgraduate program.
          </p>
        </div>

        {/* Part 1: Degree Cards */}
        <h3 className={styles.subHeading}>
          <span className={styles.subHeadingIcon}>🎓</span>
          Degrees & Academic Qualifications
        </h3>

        <div className={styles.degreesGrid}>
          {educationList.map((edu) => (
            <div key={edu.id} className={styles.degreeCard}>
              <div className={styles.degreeTop}>
                <h4 className={styles.degreeTitle}>{edu.degree}</h4>
                <span
                  className={`${styles.statusBadge} ${
                    edu.status === 'Currently Pursuing'
                      ? styles.statusPursuing
                      : styles.statusCompleted
                  }`}
                >
                  {edu.status}
                </span>
              </div>

              <p className={styles.institution}>{edu.institution}</p>
              <p className={styles.gradYear}>
                <strong>Year:</strong> {edu.completionYear} • {edu.specialization}
              </p>

              <div className={styles.highlightsList}>
                {edu.highlights.map((item, idx) => (
                  <span key={idx} className={styles.highlightItem}>
                    <span>✓</span>
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Part 2: Examination Performance Table */}
        <div className={styles.examWrapper}>
          <h3 className={styles.subHeading}>
            <span className={styles.subHeadingIcon}>📋</span>
            Semester Examination Performance
          </h3>

          <div className={styles.tableContainer}>
            <table className={styles.examTable}>
              <thead>
                <tr>
                  <th>Examination</th>
                  <th>Course</th>
                  <th>Semester</th>
                  <th>Status</th>
                  <th>Performance (SGPA)</th>
                  <th>Classification</th>
                </tr>
              </thead>
              <tbody>
                {examinationRecords.map((record) => (
                  <tr key={record.id}>
                    <td className={styles.examNameCell}>{record.examName}</td>
                    <td>{record.course}</td>
                    <td>{record.semester}</td>
                    <td>{record.status}</td>
                    <td>
                      <span className={styles.gradeBadge}>
                        {record.performance}
                      </span>
                    </td>
                    <td>{record.resultClassification}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.tableFooterNote}>
            * Academic records recorded under university examination guidelines.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
