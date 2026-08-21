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
    subtitle: 'AI-powered event invitation platform.',
    problem: 'Teams needed a smarter way to build, personalize and distribute invitations at scale.',
    solution: 'Built a full-stack platform with image-processing features, optimized APIs and cloud deployment support.',
    feature: 'AI-assisted invitation workflows with scalable backend handling.',
    stack: ['Next.js', 'FastAPI', 'Python', 'Docker', 'AWS', 'GCP'],
    github: 'https://github.com/mallikarjuna-sindiri',
    demoLabel: 'Open Case Study',
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
    demoLabel: 'Open Case Study',
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
    demoLabel: 'Open Case Study',
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
    demoLabel: 'Open Case Study',
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
