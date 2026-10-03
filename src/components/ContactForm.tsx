import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import type { ContactFormData, FormSubmissionStatus } from '../types';

/**
 * ContactForm Component
 * Demonstrates:
 * 1. Controlled React form inputs using useState
 * 2. TypeScript interface typing for state and event handlers
 * 3. Form event handling with event.preventDefault()
 * 4. Conditional rendering for the submission feedback message
 */
export const ContactForm: React.FC = () => {
  // State for storing form input values, typed with ContactFormData interface
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  // State for managing submission status and response message
  const [submissionStatus, setSubmissionStatus] =
    useState<FormSubmissionStatus>({
      submitted: false,
      message: '',
    });

  /**
   * Handle text changes across all form fields.
   * Uses React.ChangeEvent with union of HTMLInputElement and HTMLTextAreaElement.
   */
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  /**
   * Handle form submission.
   * Prevents default browser reload and updates component state.
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // Basic validation check
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert('Please fill out all fields before submitting.');
      return;
    }

    // Set submission success state
    setSubmissionStatus({
      submitted: true,
      message: 'Thank you for contacting me! I will get back to you soon.',
    });

    // Reset input fields
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  /**
   * Reset form status to allow sending another message
   */
  const handleReset = (): void => {
    setSubmissionStatus({
      submitted: false,
      message: '',
    });
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Get in Touch</span>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">
            Have an opportunity, question, or want to discuss full-stack development?
            Feel free to drop a message!
          </p>
        </div>

        <div className={styles.contactGrid}>
          {/* Left Column: Direct Contact Details */}
          <div className={styles.infoCard}>
            <h3 className={styles.infoCardTitle}>Let's Connect</h3>
            <p className={styles.infoCardText}>
              I am open to software development internship opportunities, academic
              collaborations, and technology discussions.
            </p>

            <div className={styles.contactMethods}>
              <div className={styles.contactMethodItem}>
                <div className={styles.methodIcon}>📧</div>
                <div className={styles.methodDetails}>
                  <span className={styles.methodLabel}>Email</span>
                  <span className={styles.methodValue}>
                    ravish.quazi@example.com
                  </span>
                </div>
              </div>

              <div className={styles.contactMethodItem}>
                <div className={styles.methodIcon}>🏛️</div>
                <div className={styles.methodDetails}>
                  <span className={styles.methodLabel}>College</span>
                  <span className={styles.methodValue}>
                    P. R. Pote Patil College, Amravati
                  </span>
                </div>
              </div>

              <div className={styles.contactMethodItem}>
                <div className={styles.methodIcon}>📍</div>
                <div className={styles.methodDetails}>
                  <span className={styles.methodLabel}>Location</span>
                  <span className={styles.methodValue}>
                    Amravati, Maharashtra, India
                  </span>
                </div>
              </div>

              <div className={styles.contactMethodItem}>
              <div className={styles.methodIcon}>🌐</div>
              <div className={styles.methodDetails}>
              <span className={styles.methodLabel}>Profiles</span>
              <span className={styles.methodValue}>
      <a href="https://github.com/ravishquazi"target="_blank"rel="noopener noreferrer">GitHub</a>{" / "}
      <a href="https://www.linkedin.com/in/ravish-quazi/"target="_blank"rel="noopener noreferrer">LinkedIn</a>{" / "}
      <a href="#profile"> Portfolio </a>
    </span>
</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className={styles.formCard}>
            <h3 className={styles.formTitle}>Send a Message</h3>

            {/* Conditional Rendering: Success Message vs Form */}
            {submissionStatus.submitted ? (
              <div className={styles.successAlert}>
                <span className={styles.successIcon}>✅</span>
                <h4 className={styles.successTitle}>Message Sent!</h4>
                <p className={styles.successText}>{submissionStatus.message}</p>
                <button
                  type="button"
                  onClick={handleReset}
                  className={styles.resetBtn}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.formElement}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. John Doe"
                    required
                    className={styles.inputField}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. johndoe@example.com"
                    required
                    className={styles.inputField}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your message here..."
                    required
                    rows={4}
                    className={styles.textareaField}
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Send Message 🚀
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
