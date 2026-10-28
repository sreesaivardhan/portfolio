// src/data/portfolioData.js
//
// Project data only. Everything else moved out:
//   experience       -> src/data/experience.js
//   highlights/certs -> src/data/highlights.js
//   contact/social   -> src/data/siteConfig.js
//   skills strip     -> src/data/skills.js
//
// Field names are unchanged, so ProjectCard / ProjectsArchive need no edits.
// Card rules: description fits 3 lines on featured cards (4 on archive),
// tags are ordered best-first (featured shows 5, archive shows 4).
//
// To add a screenshot later, add an `image` field, for example:
//   image: "/images/projects/nextask.png"

export const projects = [
  // ---------------------------------------------------------------- featured
  {
    slug: "nextask",
    featured: true,
    title: "NexTask",
    subtitle: "AI-Powered Collaborative Kanban",
    image: "/images/projects/NexTask.png",
    description:
      "A Kanban board where teams stay in sync in real time. Built with optimistic concurrency control, AI task-complexity estimates, GitHub issue import and a Chrome extension.",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Socket.IO"],
    github: "https://github.com/sreesaivardhan/nextask",
    live: "https://nextask-flame.vercel.app",
    category: "Web",
    highlight: null,
  },
  {
    slug: "semantic-search-engine",
    featured: true,
    title: "Semantic Search Engine",
    subtitle: "Cluster-Aware Semantic Search",
    image: "/images/projects/sse.png",
    description:
      "Finds documents by meaning instead of keywords. Embeds text with Sentence Transformers, searches with FAISS, groups results using GMM clustering and caches similar queries.",
    tags: ["FAISS", "Sentence Transformers", "FastAPI", "GMM", "NLP"],
    github: "https://github.com/sreesaivardhan/semantic-search-system",
    category: "AI",
    highlight: null,
  },
  {
    slug: "skillsync",
    featured: true,
    title: "SkillSync",
    subtitle: "Skill Exchange Platform",
    image: "/images/projects/SkillSync.png",
    description:
      "A peer-to-peer skill exchange with real-time matchmaking. Includes messaging, shared notes, GitHub skill import, reputation tracking and a credit-based session system.",
    tags: ["React", "Node.js", "MongoDB", "Socket.IO", "JWT"],
    github: "https://github.com/sreesaivardhan/skillsync",
    live: "https://skillsync-nine-mauve.vercel.app",
    category: "Web",
    highlight: null,
  },
  {
    slug: "retinal-disease-detection",
    featured: true,
    title: "Retinal Disease Detection",
    subtitle: "Medical AI",
    image: "/images/projects/rdd.png",
    description:
      "Classifies retinal disease from fundus images. A custom dual-branch network that combines ConvNeXt-V2 with Swin-inspired attention, trained on the APTOS 2019 dataset.",
    tags: ["PyTorch", "ConvNeXt-V2", "Swin-inspired Attention", "Computer Vision", "Medical AI"],
    github: "https://github.com/sreesaivardhan/Retinal_Disease_Detection",
    category: "AI",
    highlight: null,
  },
  {
    slug: "medicore",
    featured: true,
    title: "MediCore",
    subtitle: "Healthcare Platform",
    image: "/images/projects/MediCore.png",
    description:
      "Appointment booking and operation theater scheduling in one platform. Role-based dashboards, Razorpay payments and Firebase Cloud Functions with real-time updates.",
    tags: ["Firebase", "Firestore", "Cloud Functions", "Razorpay", "RBAC"],
    github: "https://github.com/sreesaivardhan/hospital-operation-scheduler",
    live: "https://mediicore.netlify.app",
    category: "Web",
    highlight: null,
  },
  {
    slug: "greenvoice",
    featured: true,
    title: "GreenVoice",
    subtitle: "Plant Health AI",
    image: "/images/projects/greenvoice.png",
    description:
      "Reads plant health from bioelectric signals. ESP32 sensors feed bioelectric and environmental data into a CNN-LSTM that classifies health over time.",
    tags: ["ESP32", "CNN-LSTM", "IoT", "Signal Processing", "Machine Learning"],
    github: "https://github.com/R-J-N-1810/Green-Voice",
    category: "AI",
    highlight: null,
  },

  // ----------------------------------------------------------------- archive
  {
    slug: "cognilearn",
    featured: false,
    title: "CogniLearn",
    subtitle: "Adaptive Learning Platform",
    description:
      "A learning platform that adapts tasks to each learner. Six interactive activities, behavioural telemetry, BKT/HMM knowledge tracing, voice analysis and explainable AI.",
    tags: ["React", "FastAPI", "BKT / HMM", "Explainable AI"],
    github: "https://github.com/saravanesh26/CapstoneProject",
    live: "https://cognilearn.saravanesh.dev",
    category: "Web",
    highlight: null,
  },
  {
    slug: "swarm",
    featured: false,
    title: "SWARM",
    subtitle: "Multi-Agent Reinforcement Learning",
    description:
      "Multi-agent RL for warehouse robot coordination. Actor-Critic policy learning with reward shaping on Gymnasium and RWARE, plus benchmark evaluation.",
    tags: ["Reinforcement Learning", "Actor-Critic", "Gymnasium", "Python"],
    github: "https://github.com/sreesaivardhan/SWARM-HMARL",
    category: "AI",
    highlight: null,
  },
  {
    slug: "securegov",
    featured: false,
    title: "SecureGov",
    subtitle: "Document Management",
    description:
      "Secure document storage with family-based sharing. Firebase auth, JWT-protected Express APIs, MongoDB metadata and Firebase Storage behind access-controlled workflows.",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/sreesaivardhan/SecureGov",
    live: "https://securegov.netlify.app",
    category: "Web",
    highlight: null,
  },
  {
    slug: "chatchime",
    featured: false,
    title: "ChatChime",
    subtitle: "Real-Time Chat",
    description:
      "Multi-room chat built on Socket.IO. Live messaging, typing indicators, presence tracking and room management with in-memory state.",
    tags: ["Socket.IO", "Node.js", "Express.js", "WebSockets"],
    github: "https://github.com/sreesaivardhan/ChatChime",
    live: "https://chat-chimes.netlify.app",
    category: "Web",
    highlight: null,
  },
  {
    slug: "rxocr",
    featured: false,
    title: "RxOCR",
    subtitle: "Prescription OCR Prototype",
    description:
      "Digitizes handwritten prescriptions. Multi-pass EasyOCR with confidence-weighted merging, fuzzy drug-name matching and domain-specific information extraction.",
    tags: ["EasyOCR", "OpenCV", "RapidFuzz", "Python"],
    github: "https://github.com/sreesaivardhan/prescription-ocr-prototype",
    category: "AI",
    highlight: null,
  },
  {
    slug: "gemini-pro-financial-decoder",
    featured: false,
    title: "Gemini Pro Financial Decoder",
    subtitle: "GenAI Application",
    description:
      "Explains financial statements with GenAI. Upload a CSV or Excel file and Gemini 1.5 Flash, LangChain prompt templates and Streamlit interpret it.",
    tags: ["Gemini API", "LangChain", "Streamlit", "Pandas"],
    github: "https://github.com/sreesaivardhan/gemini-financial-decoder",
    category: "AI",
    highlight: null,
  },
  {
    slug: "hybrid-ml-fraud-detection",
    featured: false,
    title: "Hybrid ML Fraud Detection",
    subtitle: "Machine Learning",
    description:
      "Fraud detection on heavily imbalanced transaction data. Ensembles Logistic Regression, Random Forest and XGBoost with structured preprocessing and feature engineering.",
    tags: ["XGBoost", "Random Forest", "Scikit-learn", "Feature Engineering"],
    github: "https://github.com/sreesaivardhan/ML-FRAUD-DETECTION-PROJECT",
    category: "AI",
    highlight: null,
  },
  {
    slug: "lenslore",
    featured: false,
    title: "LensLore",
    subtitle: "Photography Journal",
    description:
      "A photography journal driven by JSON metadata. Dynamic galleries, collection filtering, modal navigation and theme persistence in plain JavaScript.",
    tags: ["JavaScript", "HTML5", "CSS3", "JSON"],
    github: "https://github.com/sreesaivardhan/virtual-gallery",
    live: "https://virtual-gallery-gamma-woad.vercel.app",
    category: "Web",
    highlight: null,
  },
];

// -- Ordered exports (slug lookup keeps display order explicit) ---------------
const bySlug = Object.fromEntries(projects.map((p) => [p.slug, p]));
const pick = (slugs) => slugs.map((s) => bySlug[s]).filter(Boolean);

// Featured: exactly 6, in display order
export const featuredProjects = pick([
  "nextask",
  "semantic-search-engine",
  "skillsync",
  "retinal-disease-detection",
  "medicore",
  "greenvoice",
]);

// Archive: the remaining 8, in display order
export const archiveProjects = pick([
  "cognilearn",
  "swarm",
  "securegov",
  "chatchime",
  "rxocr",
  "gemini-pro-financial-decoder",
  "hybrid-ml-fraud-detection",
  "lenslore",
]);