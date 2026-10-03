/**
 * TypeScript interfaces and types for the Portfolio Application
 * Defines strong types for Profile, Skills, Certifications, Education, Examinations, and Contact Form.
 */

export interface ProfileInfo {
  name: string;
  role: string;
  college: string;
  course: string;
  expectedGraduation: string;
  email: string;
  location: string;
  github: string;
  linkedin: string;
  bioSummary: string;
}

export interface SkillCategory {
  categoryTitle: string;
  description: string;
  skills: {
    name: string;
    level: 'Proficient' | 'Intermediate' | 'Familiar';
  }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  badge: string;
  description: string;
  tags: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  specialization: string;
  institution: string;
  completionYear: string;
  status: 'Currently Pursuing' | 'Completed';
  highlights: string[];
}

export interface ExaminationRecord {
  id: string;
  examName: string;
  course: string;
  semester: string;
  status: string;
  performance: string;
  resultClassification: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface FormSubmissionStatus {
  submitted: boolean;
  message: string;
  isError?: boolean;
}
