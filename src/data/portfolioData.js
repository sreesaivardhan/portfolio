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
  cgpa: "9.08",
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
  title: "SkillSync",
  subtitle: "Skill Exchange & Collaboration Platform",
  description:
    "Built a full-stack MERN platform for peer-to-peer skill exchange with profile management, GitHub skill import, JWT auth, Google OAuth, and secure password recovery flows.",
  tags: ["MERN", "React.js", "Node.js", "MongoDB", "JWT", "OAuth"],
  github: "https://github.com/sreesaivardhan/skillsync",
  live: "https://skillsync-nine-mauve.vercel.app",
  category: "Web",
  highlight: null,
},
  {
    title: "Retinal Disease Detection",
    subtitle: "Medical AI",
    description:
      "Hybrid ConvNeXt-V2 + Swin Transformer model for 5-class diabetic retinopathy classification on the APTOS dataset.",
    tags: ["PyTorch", "TensorFlow", "Transformers", "Medical AI", "Deep Learning"],
    github: "https://github.com/sreesaivardhan/Retinal_Disease_Detection",
    category: "AI",
    highlight: "72.9% clinical classification accuracy",
  },
  {
    title: "GreenVoice",
    subtitle: "Plant Health AI",
    description:
      "ML-based early plant disease detection using bioelectric signals and environmental sensor data from ESP32 integration.",
    tags: ["Python", "ESP32", "IoT", "ML", "Signal Processing"],
    github: "https://github.com/R-J-N-1810/Green-Voice",
    category: "AI",
    highlight: "Top 10 — VIT-AP Engineering Clinics Expo",
  },
  {
    title: "Hospital Operation Scheduler",
    subtitle: "Healthcare Web App",
    description:
      "Dynamic OT scheduling system with real-time dashboards, Firebase Firestore backend, and role-based admin portals for doctor and surgery management.",
    tags: ["Firebase", "Node.js", "JavaScript", "RBAC", "Real-time"],
    github: "https://github.com/sreesaivardhan/hospital-operation-scheduler",
    category: "Web",
    highlight: null,
  },
  {
  title: "RxOCR",
  subtitle: "Multi-Domain Prescription OCR Prototype",
  description:
    "Built a prescription digitization prototype using multi-pass OCR, confidence-aware field extraction, and domain-adaptive post-processing for dental and general hospital prescriptions.",
  tags: ["Python", "Streamlit", "EasyOCR", "OCR", "Healthcare AI"],
  github: "https://github.com/sreesaivardhan/prescription-ocr-prototype",
  category: "AI",
  highlight: null,
},
  {
  title: "SWARM",
  subtitle: "Hierarchical Multi-Agent Reinforcement Learning",
  description:
    "Developed a hierarchical multi-agent reinforcement learning system for autonomous warehousing, combining GCN-based task allocation, PPO-based navigation, and safety constraints through control barrier functions.",
  tags: ["Python", "RL", "PPO", "GCN", "Multi-Agent Systems"],
  github: "https://github.com/sreesaivardhan/SWARM-HMARL",
  category: "AI",
  highlight: null,
},
  {
    title: "SecureGov",
    subtitle: "Document Management",
    description:
      "Government-style secure document management system with JWT auth, role-based access control, encrypted storage, and audit logging.",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT", "Security"],
    github: "https://github.com/sreesaivardhan/SecureGov",
    category: "Web",
    highlight: null,
  },
  {
    title: "Hybrid ML Fraud Detection",
    subtitle: "Machine Learning",
    description:
      "Ensemble Voting Classifier (XGBoost, Random Forest, Logistic Regression) with SMOTE balancing on imbalanced transaction datasets.",
    tags: ["Python", "XGBoost", "Scikit-learn", "SMOTE", "Feature Engineering"],
    github: "https://github.com/sreesaivardhan/ML-FRAUD-DETECTION-PROJECT",
    category: "AI",  
    highlight: null, 
  },
  {
  title: "Semantic Search Engine",
  subtitle: "Cluster-Aware Semantic Search System",
  description:
    "Built a semantic search engine with cluster-aware caching, FAISS retrieval, GMM clustering, and cluster keyword analysis for efficient paraphrase-aware search over 20 Newsgroups data.",
  tags: ["Python", "FAISS", "FastAPI", "GMM", "NLP"],
  github: "https://github.com/sreesaivardhan/semantic-search-system",
  category: "AI",
  highlight: null,
},
  {
    title: "Virtual Art Gallery",
    subtitle: "Interactive Web Experience",
    description:
      "Immersive 3D-style virtual gallery for exploring curated digital artworks with responsive design, smooth navigation, and dynamic content rendering.",
    tags: ["React.js", "JavaScript", "HTML/CSS", "UI Design", "Responsive"],
    github: "https://github.com/sreesaivardhan/virtual-gallery",
    category: "Web",
    highlight: null,
  },
  {
    title: "Gemini Pro Financial Decoder",
    subtitle: "GenAI Application",
    description:
      "Full-stack AI analytics platform using Gemini Pro API and Streamlit for financial document insights with a multimodal RAG pipeline.",
    tags: ["GenAI", "Gemini API", "Streamlit", "RAG", "Python"],
    github: "https://github.com/sreesaivardhan/gemini-financial-decoder",
    category: "AI",
    highlight: null,},
    {
    title: "ChatChime",
    subtitle: "Real-Time Chat App",
    description:
      "Real-time messaging platform supporting multiple chat rooms with WebSocket communication, persistent sessions, and offline message handling.",
    tags: ["Node.js", "Firebase", "WebSockets", "JavaScript", "Real-time"],
    github: "https://github.com/sreesaivardhan/ChatChime",
    category: "Web",
    highlight: null,
  },
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