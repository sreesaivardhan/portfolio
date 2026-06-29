// src/data/portfolioData.js

export const personalInfo = {
  name: "Sirasanagandla Sree Sai Vardhan",
  shortName: "Sree Sai Vardhan",
  roles: ["AI Engineer", "Full Stack Developer", "ML Enthusiast"],
  email: "sreesaivardhans@gmail.com",
  phone: "+91 8332839135",
  github: "https://github.com/sreesaivardhan",
  linkedin: "https://linkedin.com/in/saivardhan06",
  tagline:
    "Building intelligent systems at the intersection of AI and Full Stack Engineering.",
};

export const education = {
  degree: "B.Tech in Computer Science and Engineering (AIML)",
  university: "VIT-AP University",
  cgpa: "9.07",
  graduation: "June 2027",
  coursework: [
    "Artificial Intelligence",
    "Machine Learning",
    "Data Structures & Algorithms",
    "Operating Systems",
    "Computer Networks",
    "Database Systems",
    "Deep Learning",
    "OOps & Cloud Computing",
    "web Development",
  ],
};

export const skills = {
  "Programming": ["Python", "C++", "JavaScript", "Java", "SQL"],
  "AI / ML": [
    "TensorFlow", "PyTorch", "Scikit-learn", "OpenCV",
    "Transformers", "Vertex AI", "Gemini API", "CNN", "LSTM",
  ],
  "Web & Backend": [
    "React.js", "Node.js", "Express.js", "REST APIs",
    "WebSockets", "Streamlit", "HTML/CSS",
  ],
  "Cloud & DevOps": ["AWS", "Google Cloud Platform", "Firebase", "Docker"],
  "Databases": ["MongoDB", "MySQL", "Firebase Firestore"],
  "IoT & Embedded": ["ESP32", "Arduino", "Sensor Integration"],
  "Developer Tools": ["Git", "VS Code", "Jupyter Notebook", "Postman"],
};

export const experience = [
  {
    title: "Web Development Intern",
    company: "Unified Mentor",
    duration: "June 2025 – September 2025",
    type: "Remote",
    points: [
      "Developed 4 full-stack web applications using Node.js, Express.js, MongoDB, and Firebase.",
      "Built enterprise healthcare management system with real-time dashboards and role-based access control.",
      "Implemented JWT authentication systems and secure REST API architectures.",
      "Delivered secure document management platform with encrypted file handling and audit logging.",
    ],
  },
];

export const projects = [
  {
  title: "NexTask",
  subtitle: "AI-Powered Collaborative Kanban Platform",
  description:
    "Production-ready collaborative Kanban platform with real-time task synchronization, AI-powered project insights, GitHub issue import, Chrome extension, and secure PostgreSQL-backed authentication.",
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
    "Full-stack MERN collaboration platform enabling peer-to-peer skill exchange with real-time matching, messaging, file sharing, collaborative notes, AI-powered recommendations, and a credit-based reward system.",
  tags: ["MERN", "React.js", "Node.js", "MongoDB", "Socket.IO", "JWT", "Google OAuth", "Gemini AI", "Real-Time"],
  github: "https://github.com/sreesaivardhan/skillsync",
  live: "https://skillsync-nine-mauve.vercel.app",
  category: "Web",
  highlight: null,
},
  {
    title: "Retinal Disease Detection",
    subtitle: "Medical AI",
    description:
      "Deep learning-based retinal disease classification system using hybrid ConvNeXt-V2 and Swin Transformer architectures trained on the APTOS dataset.",
    tags: ["PyTorch", "TensorFlow", "ConvNeXt-V2", "Swin Transformer", "Computer Vision", "Medical AI"],
    github: "https://github.com/sreesaivardhan/Retinal_Disease_Detection",
    category: "AI",
    highlight: "72.9% clinical classification accuracy",
  },
  {
    title: "SecureGov",
    subtitle: "Document Management",
    description:
      "Secure document management platform featuring encrypted file handling, role-based access control, Google OAuth, JWT authentication, audit tracking, and controlled document sharing workflows.",
    tags: ["Node.js", "Express.js", "MongoDB", "Firebase Storage", "JWT", "Google OAuth", "RBAC", "Security"],
    github: "https://github.com/sreesaivardhan/SecureGov",
     live: "https://securegov.netlify.app",
    category: "Web",
    highlight: null,
  },
  {
  title: "SWARM",
  subtitle: "Hierarchical Multi-Agent Reinforcement Learning",
  description:
    "Hierarchical multi-agent reinforcement learning framework for autonomous warehouse coordination combining PPO navigation, GCN task allocation, and safety-aware control mechanisms.",
  tags: ["Reinforcement Learning", "PPO", "GCN", "Multi-Agent Systems", "Control Barrier Functions", "Python"],
  github: "https://github.com/sreesaivardhan/SWARM-HMARL",
  category: "AI",
  highlight: null,
},
{
  title: "MediCore",
  subtitle: "Healthcare Management Platform",
  description:
    "Full-stack healthcare management platform supporting appointment booking, doctor assignment, operation theater scheduling, Razorpay payments, and role-based dashboards with Firebase-powered real-time updates.",
  tags: ["Firebase", "Firestore", "Cloud Functions", "Razorpay", "RBAC", "Authentication", "Real-Time", "Healthcare"],
  github: "https://github.com/sreesaivardhan/hospital-operation-scheduler",
  live: "https://mediicore.netlify.app",
  category: "Web",
  highlight: null,
},
{
  title: "Semantic Search Engine",
  subtitle: "Cluster-Aware Semantic Search System",
  description:
    "Cluster-aware semantic retrieval system leveraging FAISS vector search, GMM clustering, and intelligent caching for efficient paraphrase-aware document discovery.",
  tags: ["FAISS", "NLP", "Semantic Search", "FastAPI", "Vector Search", "Information Retrieval"],
  github: "https://github.com/sreesaivardhan/semantic-search-system",
  category: "AI",
  highlight: null,
},
{
    title: "ChatChime",
    subtitle: "Real-Time Chat App",
    description:
      "Real-time multi-room communication platform built with Socket.IO featuring live messaging, typing indicators, presence tracking, and resilient WebSocket connectivity.",
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
      "ML-powered plant health prediction system using bioelectric and environmental sensor signals for early disease detection before visible symptoms appear.",
    tags: ["Machine Learning", "IoT", "ESP32", "Signal Processing", "Predictive Analytics", "Agritech"],
    github: "https://github.com/R-J-N-1810/Green-Voice",
    category: "AI",
    highlight: "Top 10 — VIT-AP Engineering Clinics Expo",
  },
  {
  title: "RxOCR",
  subtitle: "Multi-Domain Prescription OCR Prototype",
  description:
    "Healthcare OCR system for digitizing handwritten prescriptions through confidence-aware extraction and domain-specific post-processing pipelines.",
  tags: ["OCR", "EasyOCR", "Healthcare AI", "Document Processing", "Information Extraction", "Python"],
  github: "https://github.com/sreesaivardhan/prescription-ocr-prototype",
  category: "AI",
  highlight: null,
},
{
    title: "Gemini Pro Financial Decoder",
    subtitle: "GenAI Application",
    description:
      "GenAI-powered financial document analysis platform utilizing Gemini Pro and a multimodal RAG pipeline for contextual insight generation and intelligent document understanding.",
    tags: ["Gemini API", "RAG", "LLMs", "GenAI", "Streamlit", "Multimodal AI"],
    github: "https://github.com/sreesaivardhan/gemini-financial-decoder",
    category: "AI",
    highlight: null,
  },
  {
    title: "Hybrid ML Fraud Detection",
    subtitle: "Machine Learning",
    description:
      "Ensemble fraud detection system combining XGBoost, Random Forest, and Logistic Regression with SMOTE balancing for highly imbalanced transaction datasets.",
    tags: ["XGBoost", "Random Forest", "Scikit-learn", "Fraud Detection", "SMOTE", "Feature Engineering"],
    github: "https://github.com/sreesaivardhan/ML-FRAUD-DETECTION-PROJECT",
    category: "AI",  
    highlight: null, 
  },
 {
  title: "LensLore",
  subtitle: "Photography Journal Platform",
  description:
    "Metadata-driven photography platform featuring dynamic JSON-powered content rendering, editorial gallery experiences, collection discovery, theme persistence, and location-integrated visual storytelling.",
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
  },
  {
    title: "AWS Academy Graduate – Cloud Foundations",
    issuer: "Amazon Web Services",
    date: "September 2025",
    badge: "aws",
  },
  {
    title: "Develop GenAI Apps with Gemini and Streamlit",
    issuer: "Google Cloud",
    date: "2025",
    badge: "google",
  },
  {
    title: "Inspect Rich Documents with Gemini Multimodality & RAG",
    issuer: "Google Cloud",
    date: "2025",
    badge: "google",
  },
  {
    title: "Prompt Design in Vertex AI",
    issuer: "Google Cloud",
    date: "2025",
    badge: "google",
  },
  {
    title: "Getting Started with Artificial Intelligence",
    issuer: "IBM SkillsBuild",
    date: "June 2025",
    badge: "ibm",
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