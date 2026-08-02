export const links = {
  github: "https://github.com/amit13579",
  linkedin: "https://linkedin.com/in/amit-kumar-gupta",
  email: "amitkumargupta13579@gmail.com",
  phone: "+91 96447 84218",
  phoneHref: "+919644784218",
  location: "Bhilai, Chhattisgarh, India",
  resume: "assets/Amit-Kumar-Gupta-Resume.pdf",
};

export const heroStats = [
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 35, suffix: "+", label: "REST APIs Shipped" },
  { value: 4, suffix: "+", label: "Production Systems" },
  { value: 2000, suffix: "+", label: "Concurrent Users Served" },
];

export const experience = [
  {
    badge: "Full-time",
    role: "Full Stack Developer (Python)",
    company: "Divyal Technology Pvt. Ltd.",
    location: "Bhilai, India",
    period: "April 2024 — Present",
    sections: [
      {
        heading: "Key Responsibilities",
        items: [
          "Build Angular 14+ / TypeScript SPAs for ERP/CRM, parking, ticketing and e-commerce platforms — lazy-loaded modules, RxJS real-time dashboards, HTTP interceptors and role-filtered route guards.",
          "Design and ship Swagger-documented REST APIs with Django REST Framework and FastAPI, secured with JWT refresh-token rotation and field-level RBAC.",
          "Own PostgreSQL schema design, query optimization, indexing and Redis caching for high-traffic endpoints.",
          "Deploy with Docker and Nginx on AWS EC2 through Jenkins/Bitbucket CI/CD in an Agile Scrum team.",
        ],
      },
      {
        heading: "Key Achievements",
        items: [
          "Shipped 35+ production REST APIs serving 500–2,000 concurrent users across 4+ live systems.",
          "Cut API response times by 40% through query optimization, indexing, Redis caching and async task queues.",
        ],
      },
    ],
  },
  {
    badge: "Internship",
    role: "Java Developer",
    company: "Oasis Infobyte",
    location: "Remote (Delhi)",
    period: "Feb 2024 — Apr 2024",
    sections: [
      {
        heading: "Highlights",
        items: [
          'Completed the AICTE-recognised OIB-SIP internship in Java Development with "wonderful remarks".',
          "Built Java console and web mini-applications, strengthening OOP fundamentals and clean-code habits.",
          "Practised structured Git workflows and task-based delivery on a remote team.",
        ],
      },
    ],
  },
  {
    badge: "Internship",
    role: "Java Web Developer",
    company: "CodeAlpha",
    location: "Remote (Hyderabad)",
    period: "Jan 2024 — Mar 2024",
    sections: [
      {
        heading: "Highlights",
        items: [
          "Completed a virtual internship program in Java Programming, recognised with a Certificate of Achievement.",
          "Developed Java web exercises and mini-projects with dedication across a structured 4-week program.",
          "Gained early exposure to servlet/JSP-style request handling and MVC thinking.",
        ],
      },
    ],
  },
];

export const education = [
  {
    icon: "🎓",
    mode: "Full-time · Grade A",
    degree: "PG Diploma in Advanced Computing (PG-DAC)",
    school: "C-DAC, Advanced Computing Training School — Pune",
    period: "2023 — 2024",
    points: [
      "900-hour full-time postgraduate program; graduated with Grade A.",
      "Core modules: Algorithms & Data Structures (Java), OOP with Java, Web Programming Technologies, Database Technologies, .NET, OS concepts.",
      "Capstone project plus software development methodologies and aptitude/communication training.",
    ],
  },
  {
    icon: "🏛",
    mode: "Full-time",
    degree: "B.Tech — Computer Science & Engineering",
    school: "Rungta College of Engineering & Technology (CSVTU), Bhilai",
    period: "2018 — 2022",
    points: [
      "Four-year engineering degree with a Computer Science & Engineering major.",
      "Foundations in programming, data structures, DBMS, operating systems and computer networks.",
      "Completed industrial training in web development (HTML, CSS, MySQL, PHP, JavaScript) alongside the degree.",
    ],
  },
  {
    icon: "🏫",
    mode: "Schooling",
    degree: "Senior Secondary (Science)",
    school: "M.G.M. Senior Secondary School, Bhilai",
    period: "Completed 2018",
    points: [
      "Higher secondary education with a computer science focus.",
      "Built the early foundations in mathematics and logic that led to engineering.",
    ],
  },
];

export const projects = [
  {
    num: "01",
    type: "Production · ERP",
    title: "ERP/CRM — Stock & Procurement Management",
    desc: "The complete procurement-to-inventory module of a company-wide ERP, covering the full material lifecycle — from purchase requisition to warehouse stock. Built the end-to-end PR → PO → Gate Entry → GRN → Inventory workflow with concurrency-safe document numbering and PDF generation.",
    outcomes: [
      "End-to-end procurement workflow with concurrency-safe sequential document numbers and GRN/PO PDF generation.",
      "Real-time per-warehouse stock balance tracking with unit conversion and PO reconciliation.",
      "Gate Pass issuance and warehouse-to-warehouse transfers with automatic stock adjustment and reversal on delete.",
      "Dynamic Reactive Forms/FormArray rows, cascading dropdowns, server-side paginated DataTables, role-based menus.",
    ],
    tags: ["Angular 14+", "TypeScript", "RxJS", "Django REST", "PostgreSQL", "Redis"],
  },
  {
    num: "02",
    type: "Production · FinTech / Rail",
    title: "RailPay — Multi-Tenant Rail Compensation Platform",
    desc: 'A white-labelled "Delay Repay" compensation platform serving 12+ UK Train Operating Companies — a public portal where passengers submit claims and an internal agent portal where staff validate and pay them, on one shared multi-tenant database.',
    outcomes: [
      "Multi-tenant claims workflows — submission, validation, approval, appeals and payout tracking under per-operator branding and rules.",
      "Automatic delay verification against Darwin live train-running data and the NRE OJP journey planner.",
      "Payout integrations: PayPal, Realex/Global Payments (card) and BACS bank transfer, with SendGrid email and Twilio SMS.",
      "Secured with RBAC, session security and full audit logging of claims, payments and user actions.",
    ],
    tags: ["Python", "REST APIs", "PayPal", "Global Payments", "Darwin API", "SendGrid", "Twilio"],
  },
  {
    num: "03",
    type: "Production · SaaS Dashboard",
    title: "Parking Management System",
    desc: "An end-to-end vehicle parking platform: booking, entry/exit management and live slot tracking for facility operators, with a real-time Angular admin dashboard on a Django REST + PostgreSQL backend.",
    outcomes: [
      "Django REST APIs with JWT auth and RBAC over an indexed PostgreSQL schema for vehicles, slots, bookings and events.",
      "Redis caching for hot slot-availability reads.",
      "Angular SPA with RxJS BehaviorSubject real-time slot updates, Material data tables and role-guarded navigation.",
      "Dockerized deployment on AWS EC2 with CI/CD.",
    ],
    tags: ["Angular 14+", "Django REST", "PostgreSQL", "Redis", "Docker", "AWS EC2"],
  },
  {
    num: "04",
    type: "GenAI · Self-driven",
    title: "GenAI — RAG Document Q&A & AI Agents",
    desc: "A year of hands-on AI engineering building production-style Generative AI applications — retrieval-augmented generation chatbots over private document sets and autonomous multi-step AI agent workflows.",
    outcomes: [
      "Full RAG pipeline: chunking, embeddings, vector storage (FAISS / ChromaDB), similarity-search retrieval and grounded answer synthesis.",
      "AI agents with tool calling that invoke APIs and functions to complete multi-step tasks autonomously.",
      "Multi-agent orchestration with LangGraph and CrewAI, plus MCP (Model Context Protocol) for tool integration.",
      "Prompt-engineering patterns for reliable, grounded LLM outputs.",
    ],
    tags: ["OpenAI API", "LangChain", "LangGraph", "CrewAI", "FAISS", "ChromaDB", "MCP"],
  },
];

export const skills = [
  {
    icon: "🖥",
    category: "Frontend",
    rows: [
      ["Angular 14+", 90],
      ["TypeScript", 88],
      ["RxJS", 85],
      ["Angular Material", 88],
      ["Tailwind CSS", 80],
      ["Vue.js 3", 74],
    ],
  },
  {
    icon: "⚙️",
    category: "Backend",
    rows: [
      ["Python", 92],
      ["Django REST Framework", 90],
      ["FastAPI", 85],
      ["REST API Design", 90],
      ["Celery · Redis · WebSockets", 80],
      ["Node.js · Express", 72],
    ],
  },
  {
    icon: "🗄",
    category: "Databases",
    rows: [
      ["PostgreSQL", 88],
      ["MySQL", 84],
      ["Query Optimization", 85],
      ["Schema Design & Indexing", 86],
    ],
  },
  {
    icon: "🤖",
    category: "AI / Generative AI",
    rows: [
      ["LLMs · Prompt Engineering", 85],
      ["RAG Pipelines", 85],
      ["LangChain · LangGraph", 82],
      ["Vector DBs (FAISS, ChromaDB)", 80],
      ["AI Agents · CrewAI · MCP", 78],
    ],
  },
  {
    icon: "☁️",
    category: "Cloud & DevOps",
    rows: [
      ["AWS (EC2, S3)", 80],
      ["Docker · Nginx", 82],
      ["CI/CD (Jenkins, Bitbucket)", 78],
      ["Linux Server Admin", 78],
      ["Git", 90],
    ],
  },
  {
    icon: "🔐",
    category: "Security & Tools",
    rows: [
      ["JWT · OAuth2 · RBAC", 86],
      ["XSS/CSRF Protection · Audit Logs", 82],
      ["Postman · Swagger/OpenAPI", 88],
      ["JIRA · Agile Scrum", 85],
    ],
  },
] as { icon: string; category: string; rows: [string, number][] }[];

export const certifications = [
  {
    img: "assets/certificates/genai-data-analytics-tata-forage.jpg",
    provider: "Tata Group · Forage",
    title: "GenAI Powered Data Analytics — Job Simulation",
    date: "July 2026",
    desc: "Practical tasks in exploratory data analysis, AI-driven delinquency prediction, data storytelling and an AI-powered collections strategy.",
  },
  {
    img: "assets/certificates/pg-dac-cdac-certificate.jpg",
    provider: "C-DAC ACTS, Pune",
    title: "PG Diploma in Advanced Computing — Grade A",
    date: "2023 — 2024",
    desc: "900-hour full-time postgraduate diploma: Java, data structures & algorithms, web technologies, databases, .NET and software engineering.",
  },
  {
    img: "assets/certificates/web-development-training.jpg",
    provider: "Sensible Computers",
    title: "Industrial Training — Web Development",
    date: "June 2022",
    desc: "Hands-on industrial training in HTML, CSS, MySQL, PHP and JavaScript — the foundation of my full-stack journey.",
  },
];

export const achievementStats = [
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 3, suffix: "+", label: "Certifications" },
  { value: 4, suffix: "+", label: "Major Projects" },
  { value: 3, suffix: "", label: "Internships Completed" },
];

export const achievements = [
  {
    img: "assets/achievements/oasis-infobyte-java-internship.jpg",
    badge: "Professional",
    year: "2024",
    title: "AICTE OIB-SIP Internship — Java Development",
    org: "Oasis Infobyte",
    desc: 'Completed the one-month AICTE-recognised internship in Java Development with "wonderful remarks" from the program team.',
  },
  {
    img: "assets/achievements/codealpha-java-internship.jpg",
    badge: "Professional",
    year: "2024",
    title: "Certificate of Achievement — Java Programming",
    org: "CodeAlpha",
    desc: "Recognised as an active participant of the CodeAlpha Virtual Internship Program in Java Programming for dedication and hard work.",
  },
  {
    img: "assets/achievements/internpe-cpp-internship.jpg",
    badge: "Professional",
    year: "2024",
    title: "Internship Completion — C++ Programming",
    org: "InternPe",
    desc: 'Completed a C++ programming internship, commended as "a sincere and dedicated intern with a professional attitude and very good knowledge of the job".',
  },
];
