// ---------------------------------------------------------------------------
// All portfolio content lives here. Edit this file to update the site —
// you shouldn't need to touch the component files for text changes.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Md Wasim Ansari",
  firstName: "Md Wasim",
  lastName: "Ansari",
  role: "Full Stack Developer / Software Engineer",
  tagline:
    "Building Full-Stack Web Applications and AI-Powered Solutions with Modern Technologies and Clean, Scalable Code.",
  location: "Godda, Jharkhand, India",
  email: "wasimfullstackdev9to5@gmail.com",
  phone: "+91 7482938139",
  linkedin: "https://www.linkedin.com/in/md-wasim-ansari-b78865395/",
  github: "https://github.com/Wasim2934",

  resumeUrl: "/Md-Wasim-Ansari-Resume.pdf",

  avatar: "/profile.jpeg",
  creation: "/hero.jpg",
  available: true,
};

export const socials = [
  { label: "GitHub", href: profile.github, icon: "github" },
  { label: "LinkedIn", href: profile.linkedin, icon: "linkedin" },
  { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Certifications", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const stack = [
  "HTML5",
  "CSS3",
  "React.js",
  "Next.js",
  "JavaScript",
  "TailwindCSS",
  "REST APIs",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git",
  "GitHub",
  "Vercel",
];

export const about = {
  heading: "About Me",
  paragraphs: [
    "I'm a results-driven Software Engineer with hands-on experience in front-end development and modern JavaScript tooling. I recently completed a Software Engineering Internship at Grayphite, through the CMIT Internship Program, building responsive and user-centric web applications from the ground up.",
    "I care about writing clean, maintainable code and enjoy the process of turning a rough idea into a polished, working interface — then figuring out how to make it a little faster or a little clearer. Currently looking for a Front-End or Full-Stack role where I can keep building real products and keep growing as an engineer.",
  ],
  details: [
    { label: "Name", value: "Md Wasim Ansari" },
    { label: "Role", value: "Software Engineer" },
    { label: "Based in", value: "Godda, Jharkhand, India" },
    { label: "Phone", value: "+91 7482938139" },
    { label: "Email", value: "wasimfullstackdev9to5@gmail.com" },
    { label: "Focus", value: "Full-Stack" },
  ],
};

export const education = [
  {
    id: "matric",
    degree: "Marticulation",
    field: "Computer Science",
    school: "Al-Noor Group of Schools and Colleges, Lahore",
    period: "2017 — 2019",
    // meta: '890 / 1100 Marks',
    status: "Completed",
  },
  {
    id: "ics",
    degree: "Intermediate in Computer Science",
    field: "Pre-Engineering / Computer Science",
    school: "Govt. Islamia College, Civil Lines, Lahore",
    period: "2019 — 2021",
    meta: "791 / 1100 Marks",
    status: "Completed",
  },
  {
    id: "bs-it",
    degree: "BS Information Technology",
    field: "Information Technology",
    school: "University of the Punjab",
    period: "2021 — 2025",
    meta: "GPA 3.04 / 4.0",
    status: "Completed",
  },
];

export const certifications = [
  {
    id: "meta-fe",
    title: "SkillForge Full Stack developer Certificate",
    issuer: "SkillForge",
  },
  {
    id: "ibm-py",
    title: "AI Powered Full Stack Developer Certificate",
    issuer: "Sheriyans Coding School",
  },
];

export const skills = {
  frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind CSS",
    "React.js",
    "Next.js",
  ],
  backend: ["MongoDB", "Express.js", "Node.js", "REST APIs"],
  tools: ["Git", "GitHub", "Vercel", "Render", "VS Code"],
  soft: [
    "Problem Solving",
    "Communication",
    "Team Collaboration",
    "Adaptability",
    "Time Management",
    "Continuous Learning",
  ],
};

export const experience = [
  {
    id: "grayphite",
    company: "CodSoft — Internship Program 2025",
    role: "Software Engineer Intern",
    period: "Dec 2025 — Jan 2026",
    points: [
      "Worked as a Front-End Developer Intern focusing on modern web technologies and responsive UI development.",
      "Developed and maintained responsive web pages using HTML, CSS, JavaScript, Tailwind CSS, React.js, and Next.js.",
      "Built multiple mini-projects to strengthen core front-end development concepts.",
      "Worked on real-world applications including a React-based e-commerce platform and a Lenz Pricing & Product webpage.",
      "Built and deployed projects using GitHub, Vercel, and Netlify.",
      "Gained practical experience in component-based architecture and reusable UI development.",
      "Collaborated in an internship environment focused on clean code practices and version control using GitHub.",
    ],
    tags: ["React.js", "Next.js", "Tailwind CSS", "JavaScript"],
  },
];

//  swap `repo` / `live` with your real links, and drop a screenshot into
// /public for each project (see the `image` field) 
export const projects = [
  {
    id: "lenz-pricing",
    index: "01",
    title: "InterviewIQ.ai - AI Interview Agent",
    description:
      "An AI-powered interview platform built with React, Node.js, Express.js, and MongoDB that generates personalized interviews based on job roles, skills, and uploaded resumes. It supports voice and text-based interviews, speech-to-text, AI-powered evaluation, interview dashboards, downloadable PDF reports, authentication, and Razorpay payment integration.",
    tags: [
      "React.js",
      "React Router DOM",
      "Redux Toolkit",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT Authentication",
      "OpenRouter API",
      "Razorpay",
      "Firebase",
      "Voice Interviews",
      "PDF Reports",
    ],
    type: "Full Stack",
    repo: "https://github.com/Wasim2934/ai-interview-agent.git",
    live: "https://ai-interview-agent-5rom.onrender.com/",
    featured: false,
  },
  {
    id: "ecommerce",
    index: "02",
    title: "FOREVER - Full-stack e-commerce with admin panel",
    description:
      "A full-stack e-commerce platform built with React, Node.js, Express.js, and MongoDB, featuring product browsing, cart and checkout functionality, secure JWT authentication, image uploads with Cloudinary, and Razorpay payment integration. Includes a dedicated admin panel for managing products, orders, and users.",
    tags: [
      "React.js",
      "React Router DOM",
      "Context API",
      "Axios",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT Authentication",
      "Cloudinary",
      "Razorpay",
      "Admin Panel",
      "Vercel",
    ],
    type: "Full Stack",
    repo: "https://github.com/Wasim2934/forever-e-commerce.git",
    live: "https://forever-frontend-bice-three.vercel.app/",
    featured: false,
  },
  {
    id: "lenz-pricing",
    index: "03",
    title: "GenWeb.ai - AI Website Builder",
    description:
      "An AI-powered website builder platform built with React, Node.js, Express.js, and MongoDB that generates personalized websites based on user input and preferences. It supports drag-and-drop functionality, AI-powered content generation, responsive design, and seamless deployment.",
    tags: [
      "React.js",
      "React Router DOM",
      "Redux Toolkit",
      "Axios",
      "Tailwind CSS",
      "Motion",
      "Lucide React",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT Authentication",
      "AI API Integration",
      "Firebase",
      "Stripe",
    ],
    type: "Full Stack",
    repo: "https://github.com/Wasim2934/ai-website-builder.git",
    live: "https://ai-website-builder-1-eka6.onrender.com/",
    featured: false,
  },
  {
    id: "more",
    index: "04",
    title: "More on GitHub",
    description:
      "A collection of full-stack and AI-driven projects exploring modern web development, backend systems, APIs, authentication, databases, and practical AI integrations.",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TypeScript",
      "AI Integration",
    ],
    type: "Self-Learning",
    repo: profile.github,
    live: profile.github,
    featured: false,
  },
];

export const contact = {
  heading: "Let's Build Something.",
  sub: "Have a Role, a Project, or just want to say Hi? My Inbox is Open.",
};
