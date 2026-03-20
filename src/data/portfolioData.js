export const portfolioData = {
  personal: {
    name: "Suchit Jain",
    title: "Software Engineer | Full-Stack and AI Systems",
    email: "Jainsuchit12@gmail.com",
    phone: "+91 9552103272",
    linkedin: "https://www.linkedin.com/in/suchit-jain",
    github: "https://github.com/suchit41",
    photo: "/images/profile.jpg",
    profile: "I design and ship product-focused software that combines full-stack engineering with practical AI. My work covers high-performance React interfaces, scalable API systems, and machine learning integrations deployed on cloud infrastructure. I focus on building reliable, user-centered solutions that create measurable business impact."
  },

  skills: {
    "Programming Languages": ["Java", "Python", "JavaScript"],
    "Frontend": ["React.js", "Angular", "HTML5", "CSS3", "Bootstrap"],
    "Backend": ["Node.js", "Express.js", "FastAPI"],
    "AI/ML & Data": ["TensorFlow", "LangChain", "FAISS", "CLIP", "OCR"],
    "Databases": ["MongoDB", "SQL", "Firebase", "Supabase"],
    "Tools & Platforms": ["Git", "GitHub"],
    "Cloud & DevOps": ["Google Cloud Platform", "Cloud Run", "Firebase Hosting", "Azure Virtual Machines", "CI/CD Pipelines"]
  },

  experience: [
    {
      title: "Web Developer",
      company: "Accenture",
      period: "2024 Oct – Present",
      current: true,
      achievements: [
        "Delivered scalable enterprise web applications using React.js, JavaScript, and REST APIs",
        "Built reusable UI systems that improved consistency and reduced feature delivery time",
        "Developed Node.js and Express.js backend services with MongoDB for secure and data-rich workflows",
        "Collaborated with automation, product, and engineering teams to release production-ready internal tools",
        "Created AI-assisted workflow tools that improved operational speed and reduced repetitive effort",
        "Maintained quality through peer reviews, modular architecture, and disciplined Git workflows"
      ]
    },
    {
      title: "Software Engineering Intern",
      company: "Finoux",
      period: "2024 Jul – 2024 Oct",
      current: false,
      achievements: [
        "Built responsive stock-analysis dashboards and financial interfaces in React.js",
        "Implemented secure service integrations through Node.js and .NET APIs",
        "Enabled low-latency live updates with WebSocket streams for real-time market monitoring",
        "Worked in agile cycles with cross-functional teams to ship stable user-facing releases"
      ]
    },
    {
      title: "AI/ML Engineer",
      company: "Smart Tech LLC",
      period: "2024 May – 2024 Jul",
      current: false,
      achievements: [
        "Designed and fine-tuned TensorFlow image-classification models for medical imaging scenarios",
        "Improved model performance through targeted augmentation and hyperparameter tuning",
        "Deployed scalable ML services on Azure Virtual Machines with production reliability in mind",
        "Built CI/CD pipelines to automate model validation, integration, and deployment",
        "Contributed across the full ML lifecycle from preprocessing to cloud deployment"
      ]
    }
  ],

  projects: [
    {
      name: "Multimodal RAG Chatbot — ScrapeTalk",
      technologies: ["FastAPI", "LangChain", "CLIP", "FAISS", "React.js"],
      description: [
        "Built a cloud-ready multimodal RAG chatbot for semantic text and image discovery",
        "Implemented FAISS vector retrieval and CLIP embeddings to improve search relevance",
        "Designed scalable FastAPI services for intelligent retrieval across WordPress template content",
        "Delivered a full-stack architecture that integrates AI inference into a production-style web app"
      ],
      liveUrl: "",
      githubUrl: "https://github.com/suchit41/ScrapeTalk"
    },
    {
      name: "AI-Powered Smart Learning Board (EdTech Platform)",
      technologies: ["Python", "TensorFlow", "React.js", "Streamlit"],
      description: [
        "Developed an interactive learning experience using OCR and AI handwriting recognition",
        "Enabled real-time equation-solving assistance with contextual learning recommendations",
        "Integrated ML inference pipelines into a responsive, student-focused web interface"
      ],
      liveUrl: "",
      githubUrl: "https://github.com/suchit41/Edutech"
    },
    {
      name: "Project Management System (Scrum Platform)",
      technologies: ["Node.js", "React.js", "Clerk.js", "Supabase"],
      description: [
        "Built a collaborative sprint platform with dynamic task boards and clear team visibility",
        "Implemented secure authentication and role-based access controls using Clerk.js",
        "Developed scalable APIs with real-time updates for fast-moving scrum workflows"
      ],
      liveUrl: "",
      githubUrl: "https://github.com/suchit41/scrum"
    }
  ],

  education: {
    degree: "Bachelor of Engineering — Computer Engineering (AI & ML)",
    institution: "University of Mumbai",
    period: "2020 – 2024",
    location: "Thane, India"
  },

  publications: [
    {
      title: "Notebook Junction – An E-Stationery System",
      conference: "2023 3rd International Conference on Intelligent Technologies (CONIT)",
      location: "Hubli, India",
      year: "2023",
      pages: "pp.1-5",
      doi: "10.1109/CONIT59222.2023.10205845"
    }
  ],

  achievements: [
    "Star of Business Award — Accenture",
    "Recognition Certificate — Accenture",
    "1st Runner-Up — MachineKnight Hackathon",
    "Winner — Smartest and Impactful AI Solutions Competition",
    "Winner — ReactJS Competition, Webvarad Solutions",
    "Runner-Up — I2C2 Hackathon"
  ]
};
