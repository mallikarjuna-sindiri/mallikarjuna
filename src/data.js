import viteHome from './images/projects/1vite/1vite_home.png';
import viteHld from './images/projects/1vite/1vite_hld.png';
import viteLld from './images/projects/1vite/1vite_lld.png';
import viteWorkflow from './images/projects/1vite/1vite_workflow.png';

import acadHome from './images/projects/1vite/acadlink/acadlink_home.png';
import acadHld from './images/projects/1vite/acadlink/acadlink_hld.png';
import acadLld from './images/projects/1vite/acadlink/acadlink_lld.png';
import acadWorkflow from './images/projects/1vite/acadlink/acadlink_workflow.png';

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/experience' },
  { label: 'Skills', href: '/skills' },
  { label: 'Achievements', href: '/achievements' },
  { label: 'Contact', href: '/contact' },
];

export const stats = [
  { value: '4+', label: 'Projects' },
  { value: '9.55', label: 'CGPA' },
  { value: "CSE'27", label: 'CSE' },
];

export const processSteps = [
  {
    index: '01',
    title: 'Identify Problem',
    description: 'Understand users, constraints, workflows and the real business problem before writing code.',
  },
  {
    index: '02',
    title: 'Design Solution',
    description: 'Shape the product, architecture and stack around speed, reliability and maintainability.',
  },
  {
    index: '03',
    title: 'Build Application',
    description: 'Develop, test and iterate on a focused application with an engineering-first implementation.',
  },
  {
    index: '04',
    title: 'Scale Impact',
    description: 'Tune performance, deployment and reliability so the system is ready to grow.',
  },
];

export const capabilityCards = [
  {
    title: 'Software Development',
    description: 'Full-stack product work with modern React, backend APIs and clean system design.',
  },
  {
    title: 'AI / ML',
    description: 'Interest in AI-powered features, image processing, prompt design and LLM applications.',
  },
  {
    title: 'Cloud & DevOps',
    description: 'Comfortable with Docker, GCP, AWS, GKE, Terraform and CI/CD workflows.',
  },
  {
    title: 'Open Source / Problem Solving',
    description: 'Competitive coding mindset, analytical thinking and a bias toward practical solutions.',
  },
];

export const projects = [
  {
    slug: '1vite',
    name: '1Vite',
    subtitle: 'AI-powered event invitation & photo sharing platform.',
    problem: 'Teams needed a smarter way to build, personalize and distribute invitations at scale.',
    solution: 'Built a full-stack platform with image-processing features, optimized APIs and cloud deployment support.',
    feature: 'AI-assisted invitation workflows with scalable backend handling.',
    stack: ['Next.js', 'FastAPI', 'Python', 'Docker', 'AWS', 'GCP','postgreSQL','CosmosDB','Redis'],
    github: 'https://github.com/mallikarjuna-sindiri',
    liveUrl: 'https://1vite.ai/',
    demoLabel: 'Open Case Study',
    homeImage: viteHome,
    hldImage: viteHld,
    lldImage: viteLld,
    workflowImage: viteWorkflow,
    hldTitle: 'Microservices & Cloud Media Architecture (1Vite HLD)',
    hldDescription: '1Vite High-Level Architecture featuring Next.js frontend client, FastAPI backend application layer, PostgreSQL / MongoDB data persistence, and AWS S3 / GCP image processing pipeline.',
    hldHighlights: [
      'Frontend SPA built with Next.js & React for high-performance client rendering',
      'Asynchronous FastAPI REST services handling image ingestion & AI generation',
      'Distributed cloud storage for high-resolution invitations & media assets via AWS S3 / GCP',
      'Dockerized deployment pipelines across multi-cloud infrastructure',
    ],
    lldTitle: 'Component Specs & API Module Design (1Vite LLD)',
    lldDescription: 'Low-Level Class and Module Diagram detailing API routes, Authentication handler, Image Processor, Template Engine, and Data Access Objects.',
    lldHighlights: [
      'Modular FastAPI router structure segregating Auth, Event, and Media endpoints',
      'Pydantic schemas enforcing strict request/response data validation',
      'Asynchronous task workers for compute-intensive image manipulation',
      'Database ORM abstraction for clean data access layers',
    ],
    workflowTitle: 'User Interaction & Processing Workflow Diagram (1Vite)',
    workflowDescription: 'End-to-end workflow sequence illustrating user onboarding, invitation customization, asynchronous AI processing, CloudFront CDN caching, and distribution.',
    workflowSteps: [
      { step: '01', title: 'Event Creation & Theme Selection', desc: 'User picks event theme, inputs metadata, and customizes AI parameters.' },
      { step: '02', title: 'Async API Request & Validation', desc: 'FastAPI validates inputs via Pydantic schemas and enqueues tasks.' },
      { step: '03', title: 'AI Processing & Media Generation', desc: 'Image manipulation engine generates personalized cards and renders outputs.' },
      { step: '04', title: 'Cloud Asset Storage & Signed URLs', desc: 'Assets are uploaded to cloud storage and signed distribution URLs are generated.' },
      { step: '05', title: 'Multi-Channel Distribution', desc: 'Invitations are dispatched via email, QR codes, and custom domain links.' },
    ],
  },
  {
    slug: 'acadlink',
    name: 'AcadLink',
    subtitle: 'LMS - Learning Management System',
    problem: 'Colleges need a single workflow for enrollment, content sharing, assignments and performance tracking.',
    solution: 'Built a role-based platform that centralizes academic operations and improves visibility across users.',
    feature: 'QR/code-based subject enrollment and learning management flows.',
    stack: ['React.js', 'FastAPI', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/mallikarjuna-sindiri',
    liveUrl: 'https://github.com/mallikarjuna-sindiri',
    demoLabel: 'Open Case Study',
    homeImage: acadHome,
    hldImage: acadHld,
    lldImage: acadLld,
    workflowImage: acadWorkflow,
    hldTitle: 'Role-Based LMS System Architecture (AcadLink HLD)',
    hldDescription: 'AcadLink High-Level Architecture featuring React.js frontend client, FastAPI application layer, MongoDB data persistence, and role-based access control (Admin, Faculty, Student).',
    hldHighlights: [
      'Modular React SPA for role-specific interfaces (Admin Dashboard, Faculty Console, Student Portal)',
      'FastAPI REST server with Pydantic validation and JWT token authentication',
      'MongoDB NoSQL database for flexible academic document storage and assignment submissions',
      'QR-code generation & verification service for automated attendance and enrollment',
    ],
    lldTitle: 'API Controllers & Component Specs (AcadLink LLD)',
    lldDescription: 'Low-Level Class and Module Diagram detailing User Auth Middleware, Course Router, Assignment Manager, Grading Engine, and QR Code Generator.',
    lldHighlights: [
      'RBAC security middleware protecting Admin, Faculty, and Student endpoints',
      'Course Router managing enrollment codes, subject materials, and announcements',
      'Assignment Submission pipeline handling file uploads and automated deadline checks',
      'MongoDB indexing on student IDs, course tokens, and submission timestamps',
    ],
    workflowTitle: 'User Interaction & Academic Operations Workflow (AcadLink)',
    workflowDescription: 'Complete workflow sequence from course setup & QR token generation to student enrollment, assignment delivery, submission, and grading.',
    workflowSteps: [
      { step: '01', title: 'Course Creation & QR Generation', desc: 'Faculty creates a subject module and system generates a unique QR code / join token.' },
      { step: '02', title: 'Frictionless QR Student Enrollment', desc: 'Students scan the QR code via mobile/web interface to immediately enroll in the course.' },
      { step: '03', title: 'Assignment & Content Release', desc: 'Faculty publishes lecture notes, announcements, and assignment tasks.' },
      { step: '04', title: 'Submission & Automated Processing', desc: 'Students submit work before deadline via secure file upload pipeline.' },
      { step: '05', title: 'Grading & Real-Time Performance Analytics', desc: 'Faculty reviews submissions, assigns grades, and student dashboards update instantly.' },
    ],
  },
  {
    slug: 'dash',
    name: 'DASH',
    subtitle: 'Smart scheduling assistant.',
    problem: 'Users need a lightweight way to prioritize work, detect conflicts and stay on track.',
    solution: 'Designed an interactive planning tool with reminders, progress tracking and conflict detection.',
    feature: 'Priority-aware task management with clear UX.',
    stack: ['MERN Stack'],
    github: 'https://github.com/mallikarjuna-sindiri',
    liveUrl: 'https://github.com/mallikarjuna-sindiri',
    demoLabel: 'Open Case Study',
    homeImage: null,
    hldImage: null,
    lldImage: null,
    hldTitle: 'DASH System Architecture',
    hldDescription: 'Full-stack MERN scheduling architecture with Express.js API backend, MongoDB persistence, and React frontend.',
    hldHighlights: [
      'Real-time conflict detection engine',
      'Scheduled background notifications for task deadlines',
      'Interactive React calendar and timeline view',
    ],
    lldTitle: 'DASH Component & Algorithm Specs',
    lldDescription: 'Priority algorithm modules, calendar grid view components, and task state management.',
    lldHighlights: [
      'Interval scheduling algorithm for collision-free task placement',
      'Optimistic state updates for instant UX feedback',
      'MongoDB indexing on user ID and timestamp ranges',
    ],
    workflowSteps: [
      { step: '01', title: 'Task Input', desc: 'User enters task details, priority, and deadline.' },
      { step: '02', title: 'Conflict Detection', desc: 'System checks existing calendar slots for overlapping commitments.' },
      { step: '03', title: 'Smart Slot Suggestion', desc: 'Assistant recommends optimal execution slots.' },
      { step: '04', title: 'Tracking & Reminders', desc: 'Task progress is tracked and automated alerts trigger before deadlines.' },
    ],
  },
  {
    slug: 'sendy',
    name: 'Sendy',
    subtitle: 'No-login text and file sharing platform.',
    problem: 'People need a frictionless way to share content securely without account creation.',
    solution: 'Created a domain-based sharing experience with optional passwords and QR/url access.',
    feature: 'No-login sharing with controlled access and simple distribution.',
    stack: ['React.js', 'FastAPI', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/mallikarjuna-sindiri',
    liveUrl: 'https://github.com/mallikarjuna-sindiri',
    demoLabel: 'Open Case Study',
    homeImage: null,
    hldImage: null,
    lldImage: null,
    hldTitle: 'Sendy Sharing System Architecture',
    hldDescription: 'Frictionless file sharing platform with ephemeral blob storage, encrypted payloads, and QR distribution.',
    hldHighlights: [
      'Domain-isolated file sharing channels',
      'Optional bcrypt password protection for sensitive shares',
      'Automatic cleanup workers for expired payloads',
    ],
    lldTitle: 'Sendy Component & Crypto Specs',
    lldDescription: 'File chunking modules, temporary URL routing, and security middleware.',
    lldHighlights: [
      'Streaming payload upload handler for large media files',
      'Short URL hash generator for clean links',
      'Rate-limiting middleware protecting against brute-force access',
    ],
    workflowSteps: [
      { step: '01', title: 'Drop & Upload', desc: 'User drops text or files without logging in.' },
      { step: '02', title: 'Security Configuration', desc: 'Optional password and expiration timer are attached.' },
      { step: '03', title: 'Link & QR Generation', desc: 'Unique URL and downloadable QR code are produced instantly.' },
      { step: '04', title: 'Secure Access & Auto Cleanup', desc: 'Recipient opens link and payload auto-deletes upon expiry.' },
    ],
  },
];

export const experience = [
  {
    role: 'Software Engineering Intern',
    company: '1vite.ai',
    href: 'https://1vite.ai/',
    duration: 'Oct 2025 – Dec 2025',
    points: [
      'Developed scalable full-stack features for an AI-powered photo-sharing platform using Next.js, FastAPI and Python.',
      'Built and optimized RESTful APIs for efficient data processing and better application throughput.',
      'Implemented AI/ML-based photo processing features and contributed to deployments across AWS and GCP.',
    ],
    stack: ['Next.js', 'FastAPI', 'Python', 'AWS', 'GCP', 'AI/ML'],
  },
];

export const systemsPrinciples = ['Performance', 'Security', 'Scalability', 'Reliability', 'Real Impact'];

export const skillCategories = [
  {
    id: 'Programming',
    name: 'Programming',
    icon: '💻',
    description: 'Languages used for core software engineering, data structures, algorithm design, and system development.',
    skills: ['Python', 'Java', 'C'],
  },
  {
    id: 'Frontend',
    name: 'Frontend',
    icon: '🎨',
    description: 'Modern frameworks and languages for building responsive, pixel-perfect, and interactive web user interfaces.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js'],
  },
  {
    id: 'Backend',
    name: 'Backend',
    icon: '⚙️',
    description: 'Technologies for engineering robust RESTful APIs, high-performance web servers, and business logic.',
    skills: ['Node.js', 'FastAPI', 'REST APIs'],
  },
  {
    id: 'Databases',
    name: 'Databases',
    icon: '🗄️',
    description: 'Relational and NoSQL database management systems for reliable data storage and indexing.',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    id: 'Cloud & DevOps',
    name: 'Cloud & DevOps',
    icon: '☁️',
    description: 'Cloud providers, containerization platforms, IaC tools, and automated deployment pipelines.',
    skills: ['AWS', 'GCP', 'Docker', 'Google Kubernetes Engine', 'Terraform', 'GitHub Actions'],
  },
  {
    id: 'Developer Tools',
    name: 'Developer Tools',
    icon: '🛠️',
    description: 'CLI tools, version control, API testing tools, and AI-assisted development environments.',
    skills: ['Git', 'GitHub', 'Postman', 'GitHub CLI', 'GitHub Copilot', 'Cursor', 'Antigravity'],
  },
  {
    id: 'Analytics',
    name: 'Analytics',
    icon: '📊',
    description: 'Business intelligence and data visualization platforms for analytics and decision metrics.',
    skills: ['Tableau', 'Power BI'],
  },
];

export const skills = {
  Programming: ['Python', 'Java', 'C'],
  Frontend: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js'],
  Backend: ['Node.js', 'FastAPI', 'REST APIs'],
  Databases: ['MongoDB', 'MySQL'],
  'Cloud & DevOps': ['AWS', 'GCP', 'Docker', 'Google Kubernetes Engine', 'Terraform', 'GitHub Actions'],
  'Developer Tools': ['Git', 'GitHub', 'Postman', 'GitHub CLI', 'GitHub Copilot', 'Cursor', 'Antigravity'],
  Analytics: ['Tableau', 'Power BI'],
};

export const achievements = [
  {
    title: 'Turing Cup 2k25',
    description: 'Led a team in a competitive programming contest organized by TuringHut at VNRVJIET.',
  },
  {
    title: 'Smart India Hackathon 2025',
    description: 'Advanced to the second round for developing an AI-based Smart Allocation Engine.',
  },
  {
    title: 'ACM Winter Coding Contest',
    description: 'Stayed active in competitive coding to sharpen algorithms and analytical thinking.',
  },
  {
    title: "PwC Launchpad'26",
    description: 'Building industry-relevant skills in cloud consulting, scalable systems and problem solving.',
  },
];

export const certifications = [
  {
    title: 'Large Language Models & Prompt Engineering',
    description: 'Fundamentals of LLMs, prompt design and AI application development.',
  },
  {
    title: 'Python Programming',
    description: 'Core programming concepts, data structures and problem-solving in Python.',
  },
  {
    title: 'Java OOP',
    description: 'Object-oriented programming principles and practical Java fundamentals.',
  },
  {
    title: 'Artificial Intelligence / Machine Learning',
    description: 'Core AI concepts, ML basics and applied understanding of intelligent systems.',
  },
];

export const exploring = ['AI Engineering', 'Cloud Architecture', 'Scalable Systems', 'System Design', 'LLM Applications'];

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/mallikarjuna-sindiri' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mallikarjuna-sindiri/' },
  { label: 'Email', href: 'mailto:mallikarjuna.sindiri@gmail.com' },
];

export const contactDetails = [
  { label: 'Email', value: 'mallikarjuna.sindiri@gmail.com', href: 'mailto:mallikarjuna.sindiri@gmail.com' },
  { label: 'LinkedIn', value: 'mallikarjuna-sindiri', href: 'https://www.linkedin.com/in/mallikarjuna-sindiri/' },
  { label: 'GitHub', value: 'mallikarjuna-sindiri', href: 'https://github.com/mallikarjuna-sindiri' },
];
