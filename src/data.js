import viteHome from './images/projects/1vite/1vite_home.png';
import viteHld from './images/projects/1vite/1vite_hld.png';
import viteLld from './images/projects/1vite/1vite_lld.png';
import viteWorkflow from './images/projects/1vite/1vite_workflow.png';

import acadHome from './images/projects/acadlink/acadlink_home.png';
import acadHld from './images/projects/acadlink/acadlink_hld.png';
import acadLld from './images/projects/acadlink/acadlink_lld.png';
import acadWorkflow from './images/projects/acadlink/acadlink_workflow.png';

import dashHome from './images/projects/dash/dash_home.png';
import dashHld from './images/projects/dash/dash_hld.png';
import dashLld from './images/projects/dash/dash_lld.png';
import dashWorkflow from './images/projects/dash/dash_workflow.png';

import nexoraHome from './images/projects/nexora/nexora_home.png';
import nexoraHld from './images/projects/nexora/nexora_hld.png';
import nexoraLld from './images/projects/nexora/nexora_lld.png';
import nexoraWorkflow from './images/projects/nexora/nexora_workflow.png';

import pchatHome from './images/projects/pchat/pchat_home.png';
import pchatHld from './images/projects/pchat/pchat_hld.png';
import pchatLld from './images/projects/pchat/pchat_lld.png';
import pchatWorkflow from './images/projects/pchat/pchat_workflow.png';

import sendyHld from './images/projects/sendy/sendy_hld.png';
import sendyLld from './images/projects/sendy/sendly_lld.png';

import trashioHome from './images/projects/trashio/trashio_home.png';
import trashioHld from './images/projects/trashio/trashio_hld.png';
import trashioLld from './images/projects/trashio/trashio_lld.png';
import trashioWorkflow from './images/projects/trashio/trashio_workflow.png';

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/experience' },
  { label: 'Skills', href: '/skills' },
  { label: 'Achievements', href: '/achievements' },
  { label: 'Contact', href: '/contact' },
];

export const stats = [
  { value: '7+', label: 'Projects' },
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
    stack: ['Next.js', 'FastAPI', 'Python', 'Docker', 'AWS', 'GCP', 'PostgreSQL', 'CosmosDB', 'Redis'],
    github: null,
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
    github: 'https://github.com/mallikarjuna-sindiri/AcadLink',
    liveUrl: null,
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
    subtitle: 'Smart scheduling & task management assistant.',
    problem: 'Users need a lightweight way to prioritize work, detect conflicts and stay on track with automated reminders.',
    solution: 'Designed an interactive planning tool with real-time conflict detection, progress tracking and automated notifications.',
    feature: 'Priority-aware task management with interval scheduling algorithms.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/vk-2828/DASH-DECISIVE-ASSISTANT-FOR-SCHEDULING',
    liveUrl: null,
    demoLabel: 'Open Case Study',
    homeImage: dashHome,
    hldImage: dashHld,
    lldImage: dashLld,
    workflowImage: dashWorkflow,
    hldTitle: 'DASH Scheduling System Architecture (HLD)',
    hldDescription: 'High-Level Architecture for DASH scheduling platform featuring React frontend client, Express.js REST API layer, MongoDB storage, and background notification service.',
    hldHighlights: [
      'React SPA client for calendar management & conflict visualization',
      'Express REST API services managing task CRUD and priority algorithms',
      'MongoDB NoSQL database for flexible event schemas and indexing',
      'Background notification queues for upcoming deadline alerts',
    ],
    lldTitle: 'Interval Scheduling & Conflict Detection Specs (LLD)',
    lldDescription: 'Low-Level Class and Module Diagram detailing Task Router, Conflict Detection Engine, Priority Scheduler, and User Notification Controller.',
    lldHighlights: [
      'Interval scheduling algorithm preventing overlapping time commitments',
      'Optimistic UI updates for immediate user interaction feedback',
      'JWT middleware for secure user authentication',
      'Indexed MongoDB queries by userId and timestamp ranges',
    ],
    workflowTitle: 'Task Scheduling & Conflict Resolution Workflow',
    workflowDescription: 'Step-by-step sequence from task input and timeline conflict evaluation to smart slot recommendations and scheduled alerts.',
    workflowSteps: [
      { step: '01', title: 'Task Input & Metadata', desc: 'User inputs task name, duration, priority tier, and target deadline.' },
      { step: '02', title: 'Conflict Evaluation', desc: 'System queries existing schedule slots to identify temporal collisions.' },
      { step: '03', title: 'Smart Slot Suggestion', desc: 'Interval algorithm calculates and suggests optimal execution windows.' },
      { step: '04', title: 'Task Dispatch & Reminders', desc: 'Task is committed to database and automated reminder triggers are scheduled.' },
    ],
  },
  {
    slug: 'nexora',
    name: 'Nexora',
    subtitle: 'AI-driven workflow & process automation engine.',
    problem: 'Teams struggle to connect disparate cloud services, automate multi-step developer workflows, and process events with low latency.',
    solution: 'Architected a modular workflow engine enabling asynchronous event handling, AI pipeline execution, and multi-service integrations.',
    feature: 'Visual workflow orchestration with asynchronous trigger execution and AI-assisted automation.',
    stack: ['React.js', 'FastAPI', 'Python', 'Docker', 'PostgreSQL', 'Redis', 'AWS'],
    github: 'https://github.com/mallikarjuna-sindiri/XLVentures_Hackathon',
    liveUrl: null,
    demoLabel: 'Open Case Study',
    homeImage: nexoraHome,
    hldImage: nexoraHld,
    lldImage: nexoraLld,
    workflowImage: nexoraWorkflow,
    hldTitle: 'Distributed Workflow Engine Architecture (Nexora HLD)',
    hldDescription: 'Nexora High-Level Architecture featuring React.js builder portal, FastAPI trigger service, Redis task queue, worker nodes, and PostgreSQL persistence.',
    hldHighlights: [
      'React workflow builder for visual step orchestration & dynamic node wiring',
      'Asynchronous FastAPI ingestion engine receiving external webhooks & API triggers',
      'Redis-backed message queue distributing compute-heavy automation jobs',
      'Distributed worker nodes executing AI processing pipelines and multi-cloud tasks',
    ],
    lldTitle: 'Task Executor & Pipeline Module Design (Nexora LLD)',
    lldDescription: 'Low-Level Class and Module Diagram detailing Workflow Engine, Task Scheduler, Event Router, Integration Gateway, and State Store.',
    lldHighlights: [
      'Event-driven router triggering pipelines on HTTP, Webhook, or scheduled signals',
      'State machine managing step retries, error fallbacks, and execution timeouts',
      'Pluggable integration gateway abstracting third-party API payloads',
      'PostgreSQL ORM schemas storing pipeline definitions and execution logs',
    ],
    workflowTitle: 'Automated Pipeline Execution & Event Workflow',
    workflowDescription: 'End-to-end execution flow from trigger event ingestion and queue scheduling to worker execution, AI transformation, and response dispatch.',
    workflowSteps: [
      { step: '01', title: 'Trigger Event Ingestion', desc: 'System receives API request, webhook, or scheduled cron trigger.' },
      { step: '02', title: 'Task Enqueueing & Validation', desc: 'FastAPI validates payload and enqueues execution job in Redis queue.' },
      { step: '03', title: 'Async Worker Execution', desc: 'Worker node executes workflow steps, calling AI models and integrations.' },
      { step: '04', title: 'State Logging & Notification', desc: 'Execution result is persisted in PostgreSQL and status update is dispatched.' },
    ],
  },
  {
    slug: 'pchat',
    name: 'PChat',
    subtitle: 'Real-time messaging & chat platform.',
    problem: 'Teams and individuals need fast, private, low-latency messaging with active presence detection.',
    solution: 'Engineered a real-time chat application with WebSocket synchronization, room management, and persistent message history.',
    feature: 'Real-time bi-directional messaging with instant room joining and online status.',
    stack: ['React.js', 'Node.js', 'Socket.io', 'FastAPI', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/mallikarjuna-sindiri/PChat',
    liveUrl: null,
    demoLabel: 'Open Case Study',
    homeImage: pchatHome,
    hldImage: pchatHld,
    lldImage: pchatLld,
    workflowImage: pchatWorkflow,
    hldTitle: 'Real-Time Socket Architecture (PChat HLD)',
    hldDescription: 'PChat High-Level System Architecture featuring React client interface, Node.js Socket.io server layer, FastAPI management endpoints, and MongoDB chat persistence.',
    hldHighlights: [
      'Bi-directional WebSocket infrastructure for zero-latency messaging',
      'Distributed room management & user presence handlers',
      'FastAPI service handling RESTful auth and user profile queries',
      'MongoDB database indexing for rapid message history retrieval',
    ],
    lldTitle: 'Socket Handlers & Message Pipeline Specs (PChat LLD)',
    lldDescription: 'Low-Level Design detailing Socket Gateway, Connection Pool Manager, Encryption / Sanitization Module, and Message Store DAO.',
    lldHighlights: [
      'WebSocket Gateway managing heartbeat connections and room subscriptions',
      'Event-driven handlers for message payload transmission',
      'Payload validation and sanitization preventing injection attacks',
      'Asynchronous DB write buffers for optimized throughput',
    ],
    workflowTitle: 'Chat Connection & Message Delivery Workflow',
    workflowDescription: 'End-to-end messaging sequence from WebSocket handshake and channel subscription to real-time broadcasting and storage.',
    workflowSteps: [
      { step: '01', title: 'WebSocket Handshake', desc: 'Client initiates socket connection and authenticates token.' },
      { step: '02', title: 'Channel Subscription', desc: 'User joins specific chat room and triggers online status broadcast.' },
      { step: '03', title: 'Message Broadcast', desc: 'Sender posts message; socket gateway broadcasts payload to connected peers instantly.' },
      { step: '04', title: 'Asynchronous Persistence', desc: 'Message payload is stored asynchronously in MongoDB for history retrieval.' },
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
    github: 'https://github.com/mallikarjuna-sindiri/Sendy',
    liveUrl: null,
    demoLabel: 'Open Case Study',
    homeImage: null,
    hldImage: sendyHld,
    lldImage: sendyLld,
    workflowImage: null,
    hldTitle: 'Sendy Ephemeral Storage & Distribution Architecture (HLD)',
    hldDescription: 'Frictionless sharing system architecture with ephemeral payload handling, password hashing, and short link routing.',
    hldHighlights: [
      'Domain-isolated file sharing channels',
      'Optional bcrypt password protection for sensitive shares',
      'Automatic cleanup workers for expired payloads',
    ],
    lldTitle: 'Sendy Payload Handler & Crypto Specs (LLD)',
    lldDescription: 'Low-Level Specifications detailing File Chunking Engine, Short Hash Generator, and Expiration Timer.',
    lldHighlights: [
      'Streaming payload upload handler for large media files',
      'Short URL hash generator for clean links',
      'Rate-limiting middleware protecting against brute-force access',
    ],
    workflowTitle: 'Frictionless Upload & Expiry Workflow',
    workflowDescription: 'Step-by-step flow from payload upload and link creation to secure retrieval and automated cleanup.',
    workflowSteps: [
      { step: '01', title: 'Drop & Upload', desc: 'User drops text or files without logging in.' },
      { step: '02', title: 'Security Configuration', desc: 'Optional password and expiration timer are attached.' },
      { step: '03', title: 'Link & QR Generation', desc: 'Unique URL and downloadable QR code are produced instantly.' },
      { step: '04', title: 'Secure Access & Auto Cleanup', desc: 'Recipient opens link and payload auto-deletes upon expiry.' },
    ],
  },
  {
    slug: 'trashio',
    name: 'Trashio',
    subtitle: 'Smart waste management & community reporting platform.',
    problem: 'Municipalities and communities lack real-time visibility into bin overflow levels, pickup scheduling, and public reports.',
    solution: 'Built a web application for smart waste tracking, route optimization, and community overflow reporting.',
    feature: 'Real-time bin fill monitoring, geo-tagged incident reporting, and automated route planning.',
    stack: ['React.js', 'FastAPI', 'Python', 'PostgreSQL', 'Docker', 'GCP'],
    github: 'https://github.com/mallikarjuna-sindiri/trashio',
    liveUrl: null,
    demoLabel: 'Open Case Study',
    homeImage: trashioHome,
    hldImage: trashioHld,
    lldImage: trashioLld,
    workflowImage: trashioWorkflow,
    hldTitle: 'Smart Waste System Architecture (Trashio HLD)',
    hldDescription: 'Trashio High-Level System Architecture featuring React management portal, FastAPI REST backend, PostgreSQL geospatial storage, and route planning pipeline.',
    hldHighlights: [
      'React dashboard for real-time bin status visualization and community reports',
      'FastAPI REST backend managing sensor telemetry and user submissions',
      'PostgreSQL / PostGIS database for spatial querying and location data',
      'Dockerized microservice deployment with cloud hosting support',
    ],
    lldTitle: 'Geospatial Route Engine & Reporting Specs (Trashio LLD)',
    lldDescription: 'Low-Level Component Specifications detailing Telemetry Processor, Geospatial Query Router, Incident Manager, and Route Optimizer.',
    lldHighlights: [
      'Geospatial indexing optimizing proximity queries for waste collection trucks',
      'Telemetry data ingestion service processing bin sensor fill levels',
      'Role-based access control for Citizens, Workers, and Municipal Admins',
      'Automated alert trigger when bin capacities cross threshold levels',
    ],
    workflowTitle: 'Incident Reporting & Waste Pickup Workflow',
    workflowDescription: 'Sequence from citizen overflow report or sensor alert to collection truck routing and status resolution.',
    workflowSteps: [
      { step: '01', title: 'Telemetry & Report Ingestion', desc: 'Sensors report fill status or citizens submit geo-tagged overflow photos.' },
      { step: '02', title: 'Geospatial Processing', desc: 'FastAPI backend processes location data and updates PostGIS spatial index.' },
      { step: '03', title: 'Optimal Route Generation', desc: 'Route planning service calculates efficient collection path for drivers.' },
      { step: '04', title: 'Pickup & Status Update', desc: 'Collection team completes pickup and clears alert status in real-time.' },
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

export const education = [
  {
    institution: 'VNR Vignana Jyothi Institute of Engineering and Technology',
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    duration: '2023 – 2027',
    grade: 'CGPA: 9.55',
  },
  {
    institution: 'Narayana Junior College',
    degree: 'Intermediate',
    duration: '2021 – 2023',
    grade: 'Percentage: 96.50',
  },
  {
    institution: 'Sri Chaitanya School',
    degree: 'SSC',
    duration: '2021',
    grade: 'Percentage: 99.33',
  },
];
