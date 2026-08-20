// src/data/portfolioData.js

export const personalInfo = {
  name: "Sirasanagandla Sree Sai Vardhan",
  shortName: "Sree Sai Vardhan",
  roles: ["AI Engineer", "Full Stack Developer", "ML Enthusiast"],
  email: "sreesaivardhans@gmail.com",
  phone: "+91 8332839135",
  github: "https://github.com/sreesaivardhan",
  linkedin: "https://linkedin.com/in/saivardhan06",
  leetcode: "https://leetcode.com/u/sreesaivardhanS",
  tagline:
    "Building scalable AI-powered applications using modern web technologies.",
};

export const education = {
  degree: "B.Tech in Computer Science and Engineering (AIML)",
  university: "VIT-AP University",
  graduation: "June 2027",
  coursework: [
    "Data Structures & Algorithms",
    "Operating Systems",
    "Computer Networks",
    "Database Systems",
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Cloud Computing",
  ],
};

export const skills = {
  "Programming": [
    "Python",
    "Java",
    "C++",
    "JavaScript",
    "TypeScript",
    "SQL"
  ],

  "AI / ML": [
    "PyTorch",
    "TensorFlow",
    "Scikit-learn",
    "Transformers",
    "OpenCV",
    "GenAI",
    "Gemini API",
    "Streamlit",
    "XGBoost",
    "Computer Vision",
    "FAISS"
  ],

  "Web & Backend": [
    "React.js",
    "Node.js",
    "Express.js",
    "REST APIs",
    "Socket.IO",
    "WebSockets",
    "FastAPI"
  ],

  "Cloud & Databases": [
    "AWS",
    "Google Cloud",
    "Firebase",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "Prisma"
  ],

  "Developer Tools": [
    "Git",
    "GitHub",
    "Docker",
    "VS Code",
    "Jupyter",
    "Postman"
  ],

  "IoT & Embedded": [
    "ESP32",
    "Arduino",
    "Sensor Integration"
  ]
};

export const experience = [
  {
    title: "Web Development Intern",
    company: "Unified Mentor",
    duration: "June 2025 – September 2025",
    type: "Remote",
    points: [
      "Developed and deployed web applications across document management, healthcare, real-time communication, and interactive web domains.",
      "Implemented authentication, RBAC, REST APIs, WebSocket features, cloud integrations, and responsive frontend experiences using JavaScript, Node.js, Express.js, Firebase, and MongoDB.",
      "Worked across multiple application architectures including REST-based backends, Firebase-powered services, real-time Socket.IO communication, and static JSON-driven frontend systems.",
      "Delivered secure document management, healthcare scheduling, real-time communication, and dynamic photography applications during the internship.",
    ],
  },
];

export const projects = [
  {
    title: "NexTask",
    subtitle: "AI-Powered Collaborative Kanban Platform",
    description:
      "Production-ready collaborative Kanban platform with real-time task synchronization, AI-assisted task complexity estimation, GitHub issue import, Chrome extension, optimistic concurrency control, and PostgreSQL-backed authentication.",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Socket.IO", "OAuth", "AI"],
    github: "https://github.com/sreesaivardhan/nextask",
    live: "https://nextask-flame.vercel.app",
    category: "Web",
    highlight: null,
  },
  {
    title: "SkillSync",
    subtitle: "Skill Exchange & Collaboration Platform",
    description:
      "Full-stack MERN collaboration platform enabling peer-to-peer skill exchange with real-time matchmaking, messaging, collaborative notes, GitHub skill import, reputation tracking, and a credit-based session system.",
    tags: ["MERN", "React.js", "Node.js", "MongoDB", "Socket.IO", "JWT", "Google OAuth", "Real-Time", "Analytics"],
    github: "https://github.com/sreesaivardhan/skillsync",
    live: "https://skillsync-nine-mauve.vercel.app",
    category: "Web",
    highlight: null,
  },
  {
    title: "Retinal Disease Detection",
    subtitle: "Medical AI",
    description:
      "Deep learning-based retinal disease classification system using a custom dual-branch ConvNeXt-V2 and Swin-inspired attention architecture trained on the APTOS 2019 dataset.",
    tags: ["PyTorch", "TensorFlow", "ConvNeXt-V2", "Swin-inspired Attention", "Computer Vision", "Medical AI"],
    github: "https://github.com/sreesaivardhan/Retinal_Disease_Detection",
    category: "AI",
    highlight: null,
  },
  {
    title: "MediCore",
    subtitle: "Healthcare Management Platform",
    description:
      "Full-stack healthcare management platform supporting appointment booking, doctor workflows, operation theater scheduling, Razorpay payments, and role-based dashboards with Firebase-powered real-time updates.",
    tags: ["Firebase", "Firestore", "Cloud Functions", "Razorpay", "RBAC", "Authentication", "Real-Time", "Healthcare"],
    github: "https://github.com/sreesaivardhan/hospital-operation-scheduler",
    live: "https://mediicore.netlify.app",
    category: "Web",
    highlight: null,
  },
  {
    title: "SWARM",
    subtitle: "Multi-Agent Reinforcement Learning",
    description:
      "Multi-agent reinforcement learning prototype for warehouse coordination using Gymnasium and RWARE, with Actor-Critic policy learning, reward shaping, and benchmark evaluation.",
    tags: ["Reinforcement Learning", "Actor-Critic", "REINFORCE", "Multi-Agent Systems", "Gymnasium", "Python"],
    github: "https://github.com/sreesaivardhan/SWARM-HMARL",
    category: "AI",
    highlight: null,
  },
  {
    title: "SecureGov",
    subtitle: "Document Management",
    description:
      "Secure document management platform featuring Firebase authentication, JWT-protected Express APIs, MongoDB metadata storage, Firebase Storage, family-based sharing, and access-controlled workflows.",
    tags: ["Node.js", "Express.js", "MongoDB", "Firebase Storage", "JWT", "Google OAuth", "RBAC", "Security"],
    github: "https://github.com/sreesaivardhan/SecureGov",
    live: "https://securegov.netlify.app",
    category: "Web",
    highlight: null,
  },
  {
    title: "Semantic Search Engine",
    subtitle: "Cluster-Aware Semantic Search System",
    description:
      "Cluster-aware semantic retrieval system using Sentence Transformers embeddings, FAISS vector search, GMM clustering, TF-IDF keyword analysis, and semantic caching for efficient document retrieval.",
    tags: ["FAISS", "Sentence Transformers", "NLP", "Semantic Search", "FastAPI", "Vector Search", "Information Retrieval"],
    github: "https://github.com/sreesaivardhan/semantic-search-system",
    category: "AI",
    highlight: null,
  },
  {
    title: "ChatChime",
    subtitle: "Real-Time Chat App",
    description:
      "Real-time multi-room communication platform built with Node.js, Express.js, and Socket.IO featuring live messaging, typing indicators, presence tracking, room management, and in-memory state handling.",
    tags: ["Socket.IO", "WebSockets", "Node.js", "Express.js", "Real-Time", "Communication"],
    github: "https://github.com/sreesaivardhan/ChatChime",
    live: "https://chat-chimes.netlify.app",
    category: "Web",
    highlight: null,
  },
  {
    title: "GreenVoice",
    subtitle: "Plant Health AI",
    description:
      "IoT-based plant health classification system using bioelectric and environmental sensor telemetry with a CNN-LSTM model for temporal signal analysis.",
    tags: ["Machine Learning", "CNN-LSTM", "IoT", "ESP32", "Signal Processing", "Sensor Integration"],
    github: "https://github.com/R-J-N-1810/Green-Voice",
    category: "AI",
    highlight: "Top 10 — VIT-AP Engineering Clinics Expo",
  },
  {
    title: "RxOCR",
    subtitle: "Multi-Domain Prescription OCR Prototype",
    description:
      "Healthcare OCR system for digitizing handwritten prescriptions using multi-pass EasyOCR, confidence-weighted text merging, fuzzy drug matching, and domain-specific information extraction.",
    tags: ["OCR", "EasyOCR", "OpenCV", "Healthcare AI", "Information Extraction", "RapidFuzz", "Python"],
    github: "https://github.com/sreesaivardhan/prescription-ocr-prototype",
    category: "AI",
    highlight: null,
  },
  {
    title: "Gemini Pro Financial Decoder",
    subtitle: "GenAI Application",
    description:
      "GenAI-powered financial analysis platform using Gemini 1.5 Flash, LangChain PromptTemplates, and Streamlit to interpret uploaded CSV and Excel financial statements.",
    tags: ["Gemini API", "LangChain", "LLMs", "GenAI", "Streamlit", "Pandas", "Financial Analytics"],
    github: "https://github.com/sreesaivardhan/gemini-financial-decoder",
    category: "AI",
    highlight: null,
  },
  {
    title: "Hybrid ML Fraud Detection",
    subtitle: "Machine Learning",
    description:
      "Ensemble fraud detection pipeline combining Logistic Regression, Random Forest, and XGBoost with structured preprocessing and feature engineering for imbalanced transaction classification.",
    tags: ["XGBoost", "Random Forest", "Logistic Regression", "Scikit-learn", "Fraud Detection", "Feature Engineering"],
    github: "https://github.com/sreesaivardhan/ML-FRAUD-DETECTION-PROJECT",
    category: "AI",
    highlight: null,
  },
  {
    title: "LensLore",
    subtitle: "Photography Journal Platform",
    description:
      "Metadata-driven photography platform featuring JSON-powered content rendering, dynamic galleries, collection filtering, modal navigation, theme persistence, and responsive editorial storytelling.",
    tags: [
      "JavaScript", "HTML5", "CSS3", "JSON", "Responsive Design", "UI/UX", "Editorial Design", "Frontend"],
    github: "https://github.com/sreesaivardhan/virtual-gallery",
    live: "https://virtual-gallery-gamma-woad.vercel.app",
    category: "Web",
    highlight: null,
  }
];

export const certifications = [
  {
    title: "AWS Academy Graduate – Cloud Architecting",
    issuer: "Amazon Web Services",
    date: "October 2025",
    badge: "aws",
    verify: "https://www.credly.com/badges/8ae6a057-a32b-4844-9df4-53d15f2ad8f2/public_url",
  },
  {
    title: "AWS Academy Graduate – Cloud Foundations",
    issuer: "Amazon Web Services",
    date: "September 2025",
    badge: "aws",
    verify: "https://www.credly.com/badges/f9498fa6-f2a3-4d3d-8a37-6287ea94d202/public_url",
  },
  {
    title: "Develop GenAI Apps with Gemini and Streamlit",
    issuer: "Google Cloud",
    date: "2025",
    badge: "google",
    verify: "https://www.credly.com/badges/a2282c0b-a0af-405a-9572-5503aa3d0eeb/public_url",
  },
  {
    title: "Inspect Rich Documents with Gemini Multimodality & RAG",
    issuer: "Google Cloud",
    date: "2025",
    badge: "google",
    verify: "https://www.credly.com/badges/5f9a8f1b-2e3f-43d5-96f5-90f03500675f/public_url",
  },
  {
    title: "Prompt Design in Vertex AI",
    issuer: "Google Cloud",
    date: "2025",
    badge: "google",
    verify: "https://www.credly.com/badges/4cbdbf23-5f95-4b5e-b7ee-1651134eb1b9/public_url",
  },
  {
    title: "Journey to Cloud: Envisioning Your Solution",
    issuer: "IBM SkillsBuild",
    date: "2025",
    badge: "ibm",
    verify: "https://www.credly.com/badges/54b30965-31bc-4b43-9ef7-fe65ac4c1057/public_url",
  },
  {
    title: "Getting Started with Artificial Intelligence",
    issuer: "IBM SkillsBuild",
    date: "June 2025",
    badge: "ibm",
    verify: "https://www.credly.com/badges/dbc17ab4-a600-42a0-a1d3-0032a113f00a/public_url",
  },
];

export const achievements = [
  {
    title: "Registered Design Contributor",
    org: "Smart Power Bank — Indian Designs Act",
    duration: "2025",
    icon: "certificate",
    points: [
      "Co-contributor to a multi-function smart power bank registered under the Indian Designs Act.",
      "Design Registration Number: 455127-001.",
    ],
  },
  {
    title: "Top 10 Project – Engineering Clinics Expo",
    org: "VIT-AP University",
    duration: "2025",
    icon: "trophy",
    points: [
      "GreenVoice selected among Top 10 projects at the VIT-AP Engineering Clinics Expo.",
    ],
  },
  {
    title: "Vice President – Machine Learning Club",
    org: "VIT-AP University (MLC)",
    duration: "Dec 2023 – May 2026",
    icon: "leadership",
    points: [
      "Won the Best Technical Club Award for 2025-2026 at VIT-AP University.",
      "Spearheading operations managing 10+ groups across technical and non-technical departments.",
      "Orchestrated 10+ annual ML workshops, competitions, and technical sessions.",
    ],
  },
  {
    title: "HackVerse 2025 – National Hackathon",
    org: "Top 50 Finalist — 200+ competing teams",
    duration: "April 2025",
    icon: "medal",
    points: [
      "Built AI-powered skill exchange platform using MERN stack.",
      "Ranked top 25% with full-stack implementation and real-time WebRTC features.",
    ],
  },
]