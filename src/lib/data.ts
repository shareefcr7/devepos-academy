// courses.ts

export interface Course {
  id: string;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Career";
  price: string;
  image: string;
  rating: number;
  featured?: boolean;
  category: string;
  duration: string;
  mode?: string;

  // Card + View Details Page
  description: string; // short card text
  overview: string;    // section intro
  story: string;       // 👈 View Details main paragraph
  topics: string[];
  outcome: string[];
  ctaLabel: string;
}

export const courses: Course[] = [
  // =========================
  // L0 — ENTRY CLARITY LAYER
  // =========================
  {
    id: "l0",
    title: "SDEC Discovery — Entry Clarity Layer",
    level: "Beginner",
    price: "₹0-₹199",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    rating: 4.8,
    featured: true,
    category: "Awareness",
    duration: "90 Minutes – 3 Days",
    mode: "Online / Offline",

    description:
      "Know whether software engineering is the right career path before commitment.",

    overview:
      "A short discovery layer designed for beginners exploring the tech industry.",

    story:
      "The tech industry is often perceived as a maze of complex code and intimidating jargon, leading many potential developers to hesitate or start with the wrong expectations. Our Entry Clarity Layer is meticulously designed to pull back the curtain, offering a transparent and comprehensive overview of the software engineering landscape. Through interactive sessions and real-world case studies, we help you identify your natural strengths and align them with the right career path, ensuring that your first step into tech is one of absolute confidence rather than a leap of faith.",

    topics: [
      "The Modern Tech Ecosystem",
      "Role-Based Career Roadmap",
      "Decoding Developer Jargon",
      "Salary & Growth Projections",
      "Industry Expectations vs Reality",
      "Interactive Q&A Session"
    ],

    outcome: [
      "Absolute career direction",
      "Investment risk elimination",
      "Qualified entry to Foundation Program"
    ],

    ctaLabel: "Start Discovery →"
  },

  // =========================
  // L1 — FOUNDATION PROGRAM
  // =========================
  {
    id: "l1",
    title: "SDEC Core — Engineering Foundation",
    level: "Beginner",
    price: "₹5,000",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    rating: 4.9,
    featured: true,
    category: "Foundation",
    duration: "1 Week",
    mode: "Online / Offline",

    description:
      "Build strong software fundamentals by completing one full SDLC cycle.",

    overview:
      "Your first real step into structured software development.",

    story:
      "Moving beyond awareness, the Foundation Program immerses you in the actual lifecycle of software creation. We believe the best way to learn is by doing; therefore, you will navigate through a complete Software Development Life Cycle (SDLC) in just seven days. This intensive experience bridges the gap between theoretical knowledge and practical application, teaching you the discipline of version control, the logic of basic architecture, and the thrill of deploying your first live project. It's about transforming from a spectator into a creator who understands the 'why' behind every line of code.",

    topics: [
      "SDLC Phases & Agile Basics",
      "Git & GitHub Workflow",
      "Basic Terminal Literacy",
      "HTML5 Semantic Structure",
      "CSS3 Layout Fundamentals",
      "Project Deployment Mastery"
    ],

    outcome: [
      "Complete SDLC experience",
      "Live personal website launch",
      "Professional coding discipline"
    ],

    ctaLabel: "Claim Your Spot →"
  },

  // =========================
  // L2 — FRONTEND DEVELOPMENT
  // =========================
  {
    id: "l2-frontend",
    title: "SDEC Specialist — Frontend Engineering",
    level: "Intermediate",
    price: "₹19,999",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
    rating: 4.9,
    category: "Skill Building",
    duration: "3 Months",
    mode: "Online / Offline",

    description:
      "Become a frontend-ready developer with hands-on UI projects.",

    overview:
      "Focused training for building modern user interfaces.",

    story:
      "In a world where digital experiences are paramount, frontend development is the bridge between technology and the human touch. This three-month specialization takes you deep into the art and science of user interface construction. You'll master the intricacies of modern CSS frameworks, the power of functional JavaScript, and the component-driven architecture of React. By focusing on pixel-perfect precision and fluid user journeys, you'll learn to build applications that don't just work—they wow. You'll graduate with a portfolio of high-performance, responsive interfaces that demonstrate your readiness for modern agency and startup environments.",

    topics: [
      "Advanced CSS & Tailwind Architectures",
      "Modern ES6+ JavaScript Mastery",
      "React Hooks & State Management",
      "API Integration & Data Fetching",
      "Responsive Layout Design Patterns",
      "UI/UX Implementation Best Practices"
    ],

    outcome: [
      "Senior-level UI development skills",
      "Production-ready React portfolio",
      "Expert-level responsive design"
    ],

    ctaLabel: "Start Building UIs →"
  },

  // =========================
  // L2 — BACKEND DEVELOPMENT
  // =========================
  {
    id: "l2-backend",
    title: "SDEC Specialist — Backend Engineering",
    level: "Intermediate",
    price: "₹19,999",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    rating: 4.9,
    category: "Skill Building",
    duration: "3 Months",
    mode: "Online / Offline",

    description:
      "Learn to build real backend systems and APIs.",

    overview:
      "Server-side development with real-world backend logic.",

    story:
      "Behind every great user interface lies a robust, scalable backend that powers it. This specialization is designed for those who want to master the engine room of modern web applications. You'll dive deep into server-side logic with Node.js, learn the nuances of RESTful API design, and master the art of data persistence with NoSQL and Relational databases. We focus on security, performance, and scalability, teaching you how to handle authentication, manage background tasks, and architect systems that can scale to thousands of users. You'll build the 'invisible' logic that defines the success of modern digital platforms.",

    topics: [
      "Node.js & Express Framework",
      "NoSQL Database (MongoDB) Mastery",
      "RESTful API Design & Versioning",
      "JWT Authentication & Security",
      "Middleware & Server-side Logic",
      "Cloud Hosting & API Deployment"
    ],

    outcome: [
      "Expert API development skills",
      "Database architecture mastery",
      "Secure backend system design"
    ],

    ctaLabel: "Build the Core →"
  },

  // =========================
  // L3 — ADVANCED MERN STACK
  // =========================
  {
    id: "l3",
    title: "SDEC Elite — Full Stack Mastery (MERN)",
    level: "Advanced",
    price: "₹49,999",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    rating: 5.0,
    featured: true,
    category: "Advanced",
    duration: "7 Months",
    mode: "Online / Offline",

    description:
      "Master full-stack development with production-ready projects.",

    overview:
      "Advanced-level training for serious full-stack learners.",

    story:
      "True mastery in web development comes from the ability to navigate the entire stack with elegance and precision. Our Elite MERN program is a rigorous seven-month journey that transforms you into a complete full-stack engineer. You will learn to architect complex systems where frontend and backend work in perfect harmony. From advanced React patterns and Redux state management to deep backend optimizations and deployment pipelines, this course simulates a high-pressure production environment. You aren't just building 'apps'; you are engineering solutions that are secure, scalable, and built to professional industry standards.",

    topics: [
      "Full Stack System Architecture",
      "Advanced State Management (Redux/Zustand)",
      "Real-time Data with WebSockets",
      "CI/CD Pipelines & DevOps Basics",
      "Enterprise Grade Security Patterns"
    ],

    outcome: [
      "Full stack production level mastery",
      "Senior engineer level problem solving",
      "Enterprise project ownership"
    ],

    ctaLabel: "Become an Elite Developer →"
  },

  // =========================
  // L4 — CAREER ACCELERATOR
  // =========================
  {
    id: "l4",
    title: "SDEC Leadership — Career Accelerator",
    level: "Career",
    price: "₹1,99,999",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    rating: 5.0,
    featured: true,
    category: "Career Accelerator",
    duration: "1 Year",
    mode: "Online / Offline",

    description:
      "Become a professional software engineer with real industry exposure.",

    overview:
      "A long-term career-focused engineering program.",

    story:
      "The Career Accelerator is our magnum opus—a one-year immersive program designed to turn learners into industry leaders. This isn't just about code; it's about the professional 'modus operandi' of a software engineer. You will work within team structures, manage live industry projects, and gain direct exposure to real-world corporate workflows through our partner networks. This year is defined by mentorship, leadership training, and heavy-duty engineering challenges. You will graduate not just as a developer looking for a job, but as an engineer ready to take ownership, lead teams, and contribute to the most ambitious tech projects in the industry.",

    topics: [
      "Enterprise Software Architecture",
      "Project Leadership & Management",
      "Advanced System Design (L1/L2)",
      "Corporate Workflow Exposure",
      "Performance Optimization & Auditing",
      "Career Strategy & Placement Support"
    ],

    outcome: [
      "Professional Engineer status",
      "Live industry project experience",
      "Guaranteed career transformation"
    ],

    ctaLabel: "Apply for Accelerator →"
  }
];
