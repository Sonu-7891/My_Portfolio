export const TYPING_PHRASES = [
  'React.js Developer',
  'MERN Stack Builder',
  'AI Integration Engineer',
  'Full Stack Developer',
  'GSAP Animation Dev',
  'LLM Application Developer',
  'TypeScript Enthusiast',
  'Frontend Architect',
];

export const HERO_STATS = [
  { count: 2, label: 'Years Experience' },
  { count: 10, label: 'Projects Delivered' },
  { count: 15, label: 'Technologies' },
  { count: 100, label: '% Remote Ready', suffix: '%' },
];

export const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#ai-expertise', label: 'AI' },
  { href: '#contact', label: 'Contact' },
];

export const ABOUT_CHIPS = ['React.js', 'Node.js', 'LLM Apps', 'Automation', 'AI Agents'];

export const FLOATING_CARDS = [
  { icon: '🤖', bg: 'rgba(124,58,237,0.15)', title: 'AI-First Mindset', sub: 'Integrating LLMs into every layer' },
  { icon: '⚡', bg: 'rgba(59,130,246,0.15)', title: 'Production Ready', sub: 'Code that ships and scales' },
  { icon: '🚀', bg: 'rgba(6,182,212,0.15)', title: 'Rapid Learner', sub: 'New stack? Shipped in days' },
];

export const EXPERIENCE_ITEMS = [
  {
    icon: '🎓',
    dotClass: 'active',
    role: 'Full Stack Web Development (Intensive)',
    company: 'Prepleaf by Masai',
    period: 'April 2024 — Present · Remote',
    desc: 'Immersive, project-based program covering the complete modern web development stack — from responsive UI to backend APIs and deployment. Emphasis on building production-quality applications under time constraints, mirroring real engineering sprints.',
    achievements: [
      'Built a pixel-perfect, responsive clone of the 1mg e-commerce platform from scratch using HTML, CSS, Git, and Node.js',
      'Developed a full-featured movie browsing application with a Node.js backend API, dynamic data fetching, and mobile-first responsive design',
      'Applied systematic testing and debugging practices to ship stable, reliable applications in fast-paced project cycles',
      'Collaborated with designers and fellow developers translating wireframes into functional, accessible user interfaces',
      'Leveraging Generative AI tools to accelerate learning of new tech stacks and increase development velocity',
    ],
    tech: ['React.js', 'JavaScript', 'Node.js', 'HTML/CSS', 'REST APIs', 'Git', 'Responsive Design'],
    delay: '',
  },
  {
    icon: '🖥️',
    dotClass: 'active',
    role: 'Frontend Developer (React)',
    company: 'Freelance / Projects',
    period: '2023 — 2024 · Jaipur, India',
    desc: 'Designed and developed responsive web applications for clients and personal projects, focusing on React.js component architecture, API integration, and performance optimization.',
    achievements: [
      'Delivered high-quality, scalable frontend code using React.js and modern JavaScript (ES6+)',
      'Integrated RESTful APIs to create dynamic, data-driven user interfaces with optimal load performance',
      'Optimized web application performance, improving load times and user engagement metrics',
      'Implemented responsive web design ensuring consistent cross-browser and cross-device experiences',
    ],
    tech: ['React.js', 'JavaScript', 'CSS3', 'REST APIs', 'Git', 'Figma'],
    delay: 'fade-up-delay-1',
  },
  {
    icon: '📚',
    dotClass: 'prev',
    role: 'PGDCA — Post Graduate Diploma in Computer Applications',
    company: 'University of Rajasthan',
    period: 'September 2022 — May 2023 · Jaipur',
    desc: 'Formal foundation in computer science and software application development, building core programming and systems knowledge.',
    achievements: [] as string[],
    tech: ['Computer Science', 'Programming Fundamentals', 'Database Systems', 'Software Engineering'],
    delay: 'fade-up-delay-2',
  },
  {
    icon: '🎓',
    dotClass: 'prev',
    role: 'Bachelor of Science',
    company: 'Maharishi Dayanand Saraswati University, Ajmer',
    period: 'September 2018 — June 2021 · Ajmer',
    desc: 'Analytical and scientific foundation that sharpened problem-solving, logical reasoning, and structured thinking — skills directly transferable to software engineering.',
    achievements: [] as string[],
    tech: ['Analytical Thinking', 'Research', 'Problem Solving'],
    delay: 'fade-up-delay-3',
  },
];

export const SKILL_CATEGORIES = [
  {
    icon: '🤖',
    iconBg: 'rgba(124,58,237,0.15)',
    name: 'AI & LLM',
    count: 'Core Focus Area',
    dotColor: '#7C3AED',
    skills: ['Generative AI', 'Prompt Engineering', 'OpenAI API', 'LLM Integration', 'AI Automation', 'Workflow AI'],
    delay: '',
  },
  {
    icon: '⚛️',
    iconBg: 'rgba(59,130,246,0.15)',
    name: 'Frontend',
    count: 'Primary Expertise',
    dotColor: '#3B82F6',
    skills: ['React.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML', 'CSS', 'GSAP Animations', 'Responsive Design', 'Tailwind CSS'],
    delay: 'fade-up-delay-1',
  },
  {
    icon: '🖥️',
    iconBg: 'rgba(6,182,212,0.15)',
    name: 'Backend & Full Stack',
    count: 'MERN Stack',
    dotColor: '#06B6D4',
    skills: ['Node.js', 'Express.js', 'Python', 'MongoDB', 'REST APIs', 'MERN Stack', 'API Integration'],
    delay: 'fade-up-delay-2',
  },
  {
    icon: '🗄️',
    iconBg: 'rgba(16,185,129,0.15)',
    name: 'Tools & DevOps',
    count: 'Workflow Essentials',
    dotColor: '#10B981',
    skills: ['Git & GitHub', 'Version Control', 'VS Code', 'Browser DevTools', 'Testing & Debugging', 'Agile / Sprints'],
    delay: 'fade-up-delay-3',
  },
  {
    icon: '🎨',
    iconBg: 'rgba(245,158,11,0.15)',
    name: 'Design & UX',
    count: 'Product Thinking',
    dotColor: '#F59E0B',
    skills: ['UI/UX Principles', 'Figma', 'Cross-Browser Compat.', 'Accessibility', 'Mobile-First Design'],
    delay: '',
  },
  {
    icon: '💡',
    iconBg: 'rgba(236,72,153,0.15)',
    name: 'Soft Skills',
    count: 'What Makes Me Different',
    dotColor: '#EC4899',
    skills: ['Effective Communication', 'Time Management', 'Problem Solving', 'Fast Learning', 'Self-Directed', 'Collaboration'],
    delay: 'fade-up-delay-1',
  },
];

export const AI_CAPABILITIES = [
  { icon: '🧠', name: 'LLM Integration', sub: 'OpenAI, Anthropic APIs', delay: '' },
  { icon: '🤖', name: 'AI Agents', sub: 'Autonomous task systems', delay: 'fade-up-delay-1' },
  { icon: '📚', name: 'RAG Systems', sub: 'Retrieval-augmented gen.', delay: 'fade-up-delay-2' },
  { icon: '⚡', name: 'Workflow Automation', sub: 'n8n, Zapier, custom flows', delay: 'fade-up-delay-3' },
  { icon: '✏️', name: 'Prompt Engineering', sub: 'Chain-of-thought, few-shot', delay: '' },
  { icon: '🔍', name: 'Vector Databases', sub: 'Pinecone, Weaviate', delay: 'fade-up-delay-1' },
  { icon: '🚀', name: 'AI-Accelerated Dev', sub: 'Copilot, Cursor, Claude', delay: 'fade-up-delay-2' },
  { icon: '🏗️', name: 'Production AI Apps', sub: 'End-to-end deployment', delay: 'fade-up-delay-3' },
];

export const PROJECTS = [
  {
    glowColor: 'var(--cyan)',
    labelStyle: { background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)', color: 'var(--cyan-bright)' },
    label: 'Full Stack Clone',
    title: '1mg E-Commerce Clone',
    problem: 'Problem',
    desc: 'Replicate a complex, real-world healthcare e-commerce platform end-to-end — including product listings, responsive navigation, and multi-device layouts — with production-quality code standards.',
    impact: '⚡ Responsive across 5+ device breakpoints · Pixel-perfect UI components · Git-managed team workflow',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Git', 'Responsive Design'],
    github: 'https://github.com/Sonu-7891',
    secondaryLink: '#',
    secondaryLabel: 'Live Demo',
    delay: '',
  },
  {
    glowColor: 'var(--violet)',
    labelStyle: { background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)', color: 'var(--violet-bright)' },
    label: 'API Integration',
    title: 'Movie Discovery App',
    problem: 'Problem',
    desc: 'Build an engaging, performant movie browsing platform that dynamically fetches and displays real movie data from a backend API — with seamless UX, fast load times, and mobile-first design.',
    impact: '⚡ Dynamic API data fetching · Optimized load performance · Fully tested & debugged',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'REST API', 'Responsive'],
    github: 'https://github.com/Sonu-7891',
    secondaryLink: '#',
    secondaryLabel: 'Live Demo',
    delay: 'fade-up-delay-1',
  },
  {
    glowColor: 'var(--blue)',
    labelStyle: { background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)', color: 'var(--blue-bright)' },
    label: 'AI / Automation',
    title: 'AI-Powered Workflow Tool',
    problem: 'Coming Soon',
    desc: 'An intelligent automation application integrating LLM APIs to automate repetitive tasks, generate structured outputs, and streamline developer workflows — built with React frontend and Node.js backend.',
    impact: '🚧 In Development · LLM API integration · RAG architecture',
    stack: ['React.js', 'Node.js', 'OpenAI API', 'Vector DB', 'REST APIs'],
    github: 'https://github.com/Sonu-7891',
    secondaryLink: '#contact',
    secondaryLabel: 'Collaborate',
    delay: 'fade-up-delay-2',
  },
];

export const TECH_ROW_1 = [
  { icon: '⚛️', name: 'React.js' },
  { icon: '🟨', name: 'JavaScript' },
  { icon: '🌿', name: 'Node.js' },
  { icon: '🔷', name: 'TypeScript' },
  { icon: '🐍', name: 'Python' },
  { icon: '🐙', name: 'Git' },
  { icon: '🤖', name: 'OpenAI API' },
  { icon: '⚡', name: 'Next.js' },
  { icon: '🎯', name: 'REST APIs' },
  { icon: '📦', name: 'Express.js' },
  { icon: '🎨', name: 'CSS' },
  { icon: '📐', name: 'HTML' },
  { icon: '🎬', name: 'GSAP' },
  { icon: '🍃', name: 'MongoDB' },
];

export const TECH_ROW_2 = [
  { icon: '🧠', name: 'LLM Integration' },
  { icon: '🚀', name: 'Prompt Engineering' },
  { icon: '🔍', name: 'Vector DB' },
  { icon: '⚙️', name: 'Workflow Automation' },
  { icon: '🛠️', name: 'VS Code' },
  { icon: '🌐', name: 'Responsive Design' },
  { icon: '📱', name: 'Mobile First' },
  { icon: '🔧', name: 'Debugging' },
  { icon: '📊', name: 'Figma' },
  { icon: '☁️', name: 'Cloud Basics' },
  { icon: '🧪', name: 'Testing' },
  { icon: '🤝', name: 'Agile' },
];

export const ACHIEVEMENTS = [
  { icon: '🎓', title: 'PGDCA Graduate', desc: 'Post Graduate Diploma in Computer Applications — University of Rajasthan, 2023', delay: '' },
  { icon: '🚀', title: 'Masai School Cohort', desc: "Admitted to Prepleaf by Masai's competitive full-stack program — acceptance rate under 10%", delay: 'fade-up-delay-1' },
  { icon: '💻', title: 'Production Clones Shipped', desc: 'Built pixel-perfect replicas of real-world platforms (1mg, movie apps) to production-quality standards', delay: 'fade-up-delay-2' },
  { icon: '🤖', title: 'AI-Accelerated Learning', desc: 'Mastered new frameworks in days using Generative AI tools — cut personal learning cycles by 60%+', delay: 'fade-up-delay-3' },
  { icon: '🌐', title: 'Remote-First Developer', desc: 'Successfully collaborating in async, distributed team environments across multiple time zones', delay: '' },
  { icon: '📈', title: 'Full Stack Progression', desc: 'Progressed from pure frontend to full-stack within 12 months — now targeting AI engineering roles', delay: 'fade-up-delay-1' },
];

export const TESTIMONIALS = [
  {
    text: 'Sonu consistently delivers clean, scalable code and brings a strong problem-solving mindset to every project. His ability to rapidly absorb new technologies using AI tools is genuinely impressive for a developer at his stage.',
    avatar: 'MA',
    avatarGradient: 'linear-gradient(135deg,#7C3AED,#3B82F6)',
    name: 'Masai Instructor',
    role: 'Prepleaf by Masai · Full Stack Program',
    delay: '',
  },
  {
    text: "One of the most dependable collaborators I've had. Sonu ships on time, communicates clearly, and always finds a way to make the UI better than what was asked for. A developer who genuinely cares about the product.",
    avatar: 'TP',
    avatarGradient: 'linear-gradient(135deg,#06B6D4,#3B82F6)',
    name: 'Team Peer',
    role: 'Cohort Collaborator · Project Team',
    delay: 'fade-up-delay-1',
  },
  {
    text: "Sonu's portfolio demonstrates a rare combination: strong technical foundations and genuine product thinking. He understands user experience, not just code. That's exactly the type of developer we look for.",
    avatar: 'HR',
    avatarGradient: 'linear-gradient(135deg,#EC4899,#7C3AED)',
    name: 'Hiring Manager',
    role: 'Tech Startup · Jaipur',
    delay: 'fade-up-delay-2',
  },
];

export const CONTACT_LINKS = [
  { href: 'mailto:sonuverma789163@gmail.com', icon: '📧', label: 'Email' },
  { href: 'https://linkedin.com/in/sonu-verma-997225308', icon: '💼', label: 'LinkedIn', external: true },
  { href: 'https://github.com/Sonu-7891', icon: '🐙', label: 'GitHub', external: true },
  { href: 'tel:+917891632981', icon: '📞', label: 'Call' },
];

export const FOOTER_LINKS = [
  { href: 'https://github.com/Sonu-7891', label: 'GitHub', external: true },
  { href: 'https://linkedin.com/in/sonu-verma-997225308', label: 'LinkedIn', external: true },
  { href: 'mailto:sonuverma789163@gmail.com', label: 'Email' },
];
