# Student Portfolio Website (ReactJS + TypeScript)

> **College Practical Assignment**  
> **Student:** Ravish Quazi  
> **Course:** Master of Computer Applications (MCA)  
> **Institution:** P. R. Pote Patil College of Engineering & Management, Amravati  
> **Tech Stack:** ReactJS, TypeScript, Vite, CSS Modules

---

## 📖 Overview

This repository contains a simple, responsive, and professional **Portfolio Website** built with **ReactJS** and **TypeScript** powered by **Vite**. The project strictly adheres to practical assignment guidelines:
- **No external UI libraries** (pure CSS & CSS Modules)
- **No backend or database**
- **Strong static typing** with TypeScript interfaces and types
- **State management** using React hooks (`useState`)
- **Semantic, modular components**

---

## 📁 Project Structure

```
assistment/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── vite.svg
│   ├── components/
│   │   ├── Header.tsx              # Sticky navigation bar with mobile toggle
│   │   ├── Header.module.css       # Scoped styling for Header
│   │   ├── Profile.tsx             # Hero section with student info and CTAs
│   │   ├── Profile.module.css      # Scoped styling for Profile hero
│   │   ├── About.tsx               # Introduction and career objectives
│   │   ├── About.module.css        # Scoped styling for About section
│   │   ├── Skills.tsx              # Categorized cards for technical stack
│   │   ├── Skills.module.css       # Scoped styling for Skills cards & hover effects
│   │   ├── Certifications.tsx      # Cards for workshops and job simulations
│   │   ├── Certifications.module.css # Scoped styling for Certifications
│   │   ├── Education.tsx           # Academic degrees & semester examination table
│   │   ├── Education.module.css    # Scoped styling for Education & Exam table
│   │   ├── ContactForm.tsx         # Controlled form with state & submission feedback
│   │   ├── ContactForm.module.css  # Scoped styling for Contact Form
│   │   ├── Footer.tsx              # Academic footer and copyright
│   │   └── Footer.module.css       # Scoped styling for Footer
│   ├── types/
│   │   └── index.ts                # TypeScript interfaces and type definitions
│   ├── App.tsx                     # Main root component integrating all sections
│   ├── App.css                     # Main container layout styles
│   ├── index.css                   # Global styles, variables, typography, and reset
│   ├── main.tsx                    # React DOM root entry point
│   └── vite-env.d.ts               # Vite client and CSS module type declarations
├── index.html                      # HTML5 page template
├── package.json                    # Project dependencies and npm scripts
├── tsconfig.json                   # Root TypeScript configuration
├── tsconfig.app.json               # Application-level TypeScript settings
└── vite.config.ts                  # Vite build configuration
```

---

## 🧩 Components Description

| Component | Description |
| :--- | :--- |
| **`Header`** | Sticky top navigation bar featuring the student brand logo and navigation links (`#profile`, `#about`, `#skills`, `#certifications`, `#education`, `#contact`). Includes a mobile hamburger menu powered by `useState`. |
| **`Profile`** | Hero section highlighting student name (*Ravish Quazi*), role (*MCA Student / Aspiring Full Stack Java Developer*), college details, quick action buttons, and an academic snapshot card. |
| **`About`** | Student-level introduction explaining academic background (MCA at P. R. Pote Patil College, BCA from Late Babanrao Deshmukh Mahavidyalaya) and passion for software development, full-stack technologies, and web development. |
| **`Skills`** | Categorized card layout showcasing HTML, CSS, JavaScript, TypeScript, ReactJS, Java, Spring Boot, MySQL, SQL, Git/GitHub, and Basic Node.js with CSS hover effects. |
| **`Certifications`** | Cards detailing workshops, job simulations (AWS Solutions Architecture, Data Analytics), and certifications (Cybersecurity, Cloud Computing, AI/ML, Java Full Stack). |
| **`Education`** | Displays university degree qualifications (MCA and BCA) and a clean, responsive examination table displaying semester performances. |
| **`ContactForm`** | Controlled React form with fields for Name, Email, and Message. Implements `e.preventDefault()`, input validation, and displays `"Thank you for contacting me! I will get back to you soon."` upon submission. |
| **`Footer`** | Clean footer showing college affiliation, copyright, and quick navigation links. |

---

## 💡 Key Concepts Demonstrated

### 1. TypeScript Implementation
All data models and forms are strictly typed using TypeScript interfaces in `src/types/index.ts`:
- `ProfileInfo`: Defines student metadata.
- `SkillCategory`: Defines categorized skills and proficiency levels.
- `Certification`: Defines credentials, badges, and learning outcomes.
- `EducationItem` & `ExaminationRecord`: Defines academic qualifications and examination results.
- `ContactFormData`: Types form fields (`name`, `email`, `message`).
- Typed event handlers: `React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>` and `React.FormEvent<HTMLFormElement>`.

### 2. CSS Modules
Each component has its own `.module.css` file (e.g., `Skills.module.css`). This scopes class names locally to prevent naming collisions across the application:
```tsx
import styles from './Skills.module.css';

<div className={styles.categoryCard}>...</div>
```

### 3. React State & Form Handling
The contact form uses the `useState` hook to maintain controlled component inputs:
```tsx
const [formData, setFormData] = useState<ContactFormData>({
  name: '',
  email: '',
  message: '',
});
```
Form submission prevents default page reload:
```tsx
const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
  e.preventDefault();
  // Validates inputs and shows feedback message
};
```

---

## 🚀 How to Run the Project in VS Code

### Prerequisites
Make sure **Node.js** (v18 or higher) is installed on your computer.

### Step 1: Open Project in VS Code
Open VS Code, click **File > Open Folder...**, and select the project folder:
```
c:\Users\ravis\OneDrive\Desktop\assistment
```

### Step 2: Open the Integrated Terminal
In VS Code, press ``Ctrl + ` `` (backtick) or go to **Terminal > New Terminal**.

### Step 3: Install Dependencies
Run the following command in the terminal:
```bash
npm install
```

### Step 4: Start Development Server
Start the local Vite development server:
```bash
npm run dev
```

### Step 5: View in Browser
Open your browser and navigate to the local URL displayed in the terminal (usually `http://localhost:5173`).

### Step 6: Build for Production (Optional)
To verify or generate a production build:
```bash
npm run build
```
To preview the production build locally:
```bash
npm run preview
```
