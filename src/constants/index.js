import profileImg from "../assets/profile.jpg";

/* ------------------------------------------------------------------ *
 * Content is sourced from the master resume file. Every claim below   *
 * is backed by a shipped repo, a live deployment or the preprint —    *
 * nothing here is aspirational.                                       *
 * ------------------------------------------------------------------ */

export const PROFILE = {
  name: "Meheru Zannat",
  role: "AI / ML Engineer · Full-Stack Developer",
  affiliation: "B.Sc. in Computer Science & Engineering",
  affiliationUrl: "https://kuet.ac.bd/",
  affiliationShort: "KUET",
  location: "Dhaka, Bangladesh",
  email: "meherujannat@gmail.com",
  phone: "+880 1405-953515",
  phoneHref: "+8801405953515",
  image: profileImg,
  cv: "/Meheru_Zannat_CV.pdf",
};

export const SOCIALS = [
  { label: "Email", icon: "mail", url: `mailto:${PROFILE.email}` },
  { label: "GitHub", icon: "github", url: "https://github.com/meheru273" },
  {
    label: "LinkedIn",
    icon: "linkedin",
    url: "https://www.linkedin.com/in/meheru-jannat-902712229/",
  },
  { label: "arXiv", icon: "arxiv", url: "https://arxiv.org/abs/2604.18372" },
  { label: "LeetCode", icon: "leetcode", url: "https://leetcode.com/u/meheru/" },
  {
    label: "Codeforces",
    icon: "codeforces",
    url: "https://codeforces.com/profile/Meheru_jannat",
  },
];

export const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "news", label: "News" },
  { id: "research", label: "Research" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

/* Inline markup supported in body copy: [label](url) and **bold**. */
export const ABOUT_PARAGRAPHS = [
  `Meheru Zannat is a Computer Science & Engineering graduate of [Khulna University of Engineering & Technology (KUET)](https://kuet.ac.bd/), based in Dhaka, Bangladesh. She builds end-to-end AI systems — from self-supervised and generative models in the lab through to production RAG and agentic LLM applications running on full-stack microservice backends.`,

  `Her research sits at the intersection of representation learning, generative modelling and applied signal processing. A [preprint on Parkinson's disease detection from bilateral wrist-worn IMU signals](https://arxiv.org/abs/2604.18372) introduces a **self-supervised dual-channel cross-attention** encoder that stays accurate with a fraction of the labels and runs at the edge on a Raspberry Pi. Her undergraduate thesis replaces cascaded diffusion with a **latent rectified flow** for tropical-cyclone forecasting, jointly generating satellite imagery and atmospheric fields in a single pass at roughly 30× lower sampling cost.`,

  `On the engineering side she ships complete products: event-driven Node/Express microservices behind an API gateway, FastAPI services with streaming LLM agents, Laravel and ASP.NET applications, an Android banking client, and Verilog RTL for an AES-128 encryption core on FPGA. She cares about the parts that make software real — schema design, idempotency, caching, tests and CI.`,
];

export const RESEARCH_INTERESTS = [
  "Self-Supervised & Contrastive Learning",
  "Generative Diffusion & Flow Models",
  "Transformers & Cross-Attention",
  "Computer Vision & Remote Sensing",
  "Biomedical Time-Series",
  "Agentic LLM / RAG Systems",
];

export const NEWS = [
  {
    date: "Jun 2026",
    text: `Graduated from **KUET** with a B.Sc. in Computer Science & Engineering. Undergraduate thesis — *Tropical Cyclone Forecasting via Latent Rectified Flow* — complete; manuscript in preparation.`,
  },
  {
    date: "Jun 2026",
    text: `[Banchan](https://banchan-korean-restaurant-client.vercel.app), a six-service Korean-restaurant ordering platform with an event-driven order pipeline, went live.`,
  },
  {
    date: "Apr 2026",
    text: `New preprint on arXiv: [Parkinson's Disease Detection via Self-Supervised Dual-Channel Cross-Attention on Bilateral Wrist-Worn IMU Signals](https://arxiv.org/abs/2604.18372) — **93.56%** accuracy using only 20% of the labels.`,
  },
  {
    date: "Mar 2026",
    text: `[Braillifie](https://huggingface.co/spaces/meheru/braille-detector-assistant), a braille-to-text reader paired with an LLM assistant, shipped as three independently deployable services.`,
  },
];

export const PUBLICATIONS = [
  {
    kind: "Preprint",
    title:
      "Parkinson's Disease Detection via Self-Supervised Dual-Channel Cross-Attention on Bilateral Wrist-Worn IMU Signals",
    authors: ["Meheru Zannat"],
    venue: "arXiv:2604.18372",
    date: "April 2026",
    highlights: [
      "Self-supervised dual-channel cross-attention encoder over bilateral wrist-IMU signals, trained and evaluated on the PADS dataset of 469 subjects.",
      "93.12% healthy-control vs. Parkinson's accuracy under full supervision; contrastive InfoNCE pre-training reaches 93.56% using only 20% of the labels.",
      "Deployed at the edge on a Raspberry Pi at 48.32 ms per window.",
    ],
    tags: [
      "Self-Supervised Learning",
      "Contrastive Learning",
      "Cross-Attention",
      "Biomedical Time-Series",
      "Edge Inference",
    ],
    links: [{ label: "arXiv", url: "https://arxiv.org/abs/2604.18372" }],
  },
  {
    kind: "Undergraduate Thesis",
    status: "Manuscript in preparation",
    title:
      "Tropical Cyclone Forecasting via Latent Rectified Flow using Satellite Imagery and Atmospheric Fields",
    authors: ["Meheru Zannat", "Sk. Md. Masudul Ahsan"],
    venue: "Khulna University of Engineering & Technology",
    date: "2026",
    highlights: [
      "Two-stage latent generative model: a multi-channel VAE compresses each 5×256×256 storm frame — GRIDSAT-B1 infrared brightness temperature plus four ERA5 fields — into a 4×64×64 latent, feeding a 66.2M-parameter conditional rectified-flow UNet with factorized temporal attention that generates the next three frames at 3-hour cadence in a single pass.",
      "16.35 dB PSNR / 0.759 SSIM on held-out 2022 storms, beating a reproduced cascaded-diffusion baseline at every lead time while sampling ~30× faster (56 ms vs. 1,673 ms).",
      "Track error of 17.5 km at +3 h and 62.4 km at +9 h — 15% below baseline with no track-regression head, read out physically from the generated winds via a steering-flow calculation; reward fine-tuning with direct reward gradients (DRaFT) cut +9 h error a further 8–11%.",
      "Trained on SETCD — 1,160 storms across six basins, 2012–2022, at 0.25° resolution — in roughly 400 GPU-hours on a single RTX A6000, with every configuration reproducible on a 16 GB consumer card.",
    ],
    tags: [
      "Rectified Flow",
      "Latent Generative Models",
      "Remote Sensing",
      "Reward Fine-Tuning",
      "PyTorch",
    ],
    note: "Advised by Prof. Dr. Sk. Md. Masudul Ahsan, Department of CSE, KUET.",
    links: [],
  },
];

export const PROJECTS = [
  {
    title: "Banchan — Korean Restaurant Ordering Platform",
    category: "Full-Stack · Microservices",
    period: "2026",
    featured: true,
    description:
      "An npm-workspaces monorepo running six Express microservices — gateway, auth, menu, order, delivery and notification — behind a React 19 storefront and admin dashboard.",
    highlights: [
      "API gateway built on http-proxy-middleware with Helmet, CORS, optional JWT verification and Redis-backed per-user rate limiting that degrades gracefully to an in-memory limiter.",
      "Event-driven order flow over BullMQ and Redis: order-service emits ORDER_CONFIRMED, delivery and notification workers consume it with three retries and exponential backoff; Stripe PaymentIntents settle through signature-verified, idempotent webhooks.",
      "Database-per-service on MongoDB Atlas with Redis cache-aside in menu-service; Jest and Supertest suites run per service through a GitHub Actions matrix.",
    ],
    tech: [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "BullMQ",
      "Stripe",
      "Firebase Auth",
      "Jest",
      "GitHub Actions",
    ],
    links: [
      {
        label: "Live",
        url: "https://banchan-korean-restaurant-client.vercel.app",
      },
      {
        label: "Code",
        url: "https://github.com/meheru273/Banchan_Korean_Restaurant",
      },
    ],
  },
  {
    title: "AI Chatbot — RAG & Agentic LLM System",
    category: "AI / LLM · Full-Stack",
    period: "2026",
    featured: true,
    description:
      "A streaming chat assistant on FastAPI and LangGraph, with retrieval-augmented generation over OpenAI embeddings and a FAISS index.",
    highlights: [
      "LangGraph StateGraph and ToolNode agent that reaches for Wikipedia and arXiv tools mid-conversation, served over Server-Sent Events so tokens stream as they are produced.",
      "React frontend and FastAPI backend both deployed to Vercel; Groq-hosted Gemma2 and LLaMA models keep response latency low.",
    ],
    tech: [
      "FastAPI",
      "Python",
      "LangGraph",
      "LangChain",
      "RAG",
      "FAISS",
      "OpenAI API",
      "Groq API",
      "SSE",
      "React",
    ],
    links: [
      { label: "Live", url: "https://ai-chat-bot-gqca.vercel.app/" },
      { label: "Code", url: "https://github.com/meheru273/AI_ChatBot" },
    ],
  },
  {
    title: "Braillifie — Braille-to-Text Recognition",
    category: "Computer Vision · LLM Agents",
    period: "2026",
    featured: true,
    description:
      "An end-to-end braille reader: an RF-DETR detector served from Roboflow turns a photo of braille into candidate characters, and a LangChain/OpenAI agent corrects the detections, scores confidence and explains the result.",
    highlights: [
      "Context-aware chat over the recognised text, with a Wikipedia tool for follow-up questions.",
      "Split into three independently deployable services — detector-api, assistant-api and firebase-api — on Vercel and Firebase, alongside a companion Flutter Android client with Firebase auth.",
    ],
    tech: [
      "Python",
      "RF-DETR",
      "Roboflow",
      "LangChain",
      "OpenAI API",
      "Vercel",
      "Firebase",
      "Flutter",
    ],
    links: [
      {
        label: "Demo",
        url: "https://huggingface.co/spaces/meheru/braille-detector-assistant",
      },
      {
        label: "Recognition",
        url: "https://github.com/meheru273/Braille-recognition",
      },
      {
        label: "Flutter App",
        url: "https://github.com/meheru273/BrailleDetectionWithFlutter",
      },
    ],
  },
  {
    title: "SDN Network Simulation",
    category: "Networking · Systems",
    period: "2026",
    description:
      "A 10-node software-defined network with 13 bidirectional 100 Mbps links, simulated in OMNeT++ 6.2 with the control plane architecturally separated from the forwarding data plane.",
    highlights: [
      "A centralized RouteController implements Dijkstra, A*, Bellman-Ford, utilization-penalized load balancing and Yen's K-shortest paths, choosing an algorithm per packet from its priority and the current congestion.",
      "Four QoS traffic classes — video, datacenter, gaming and IoT; injected link failures recover after 5 s and path computation skips downed links for automatic failover.",
      "Data-plane nodes handle TTL decrement, duplicate suppression and flooding fallback, recording end-to-end delay, hop count and drops to scalar and vector files.",
    ],
    tech: ["C++17", "OMNeT++", "NED", "Graph Algorithms", "QoS"],
    links: [{ label: "Code", url: "https://github.com/meheru273/NetworkProject" }],
  },
  {
    title: "AES-128 Image Encryption on FPGA",
    category: "Hardware · Security",
    period: "2025",
    description:
      "Transparent memory encryption on a Digilent Basys 3 (Artix-7): a 128×128 grayscale image streams in over UART, is encrypted block-by-block into on-chip BRAM, then decrypted on demand and streamed back.",
    highlights: [
      "Four operation modes with a dynamic 128-bit key loaded over UART.",
      "13 RTL modules verified by 11 testbenches against a Python golden model.",
    ],
    tech: ["Verilog", "Vivado 2023.1", "Basys 3 / Artix-7", "UART", "BRAM"],
    links: [
      {
        label: "Code",
        url: "https://github.com/meheru273/IMAGE_ENCRYPTION_AES_FPGA",
      },
    ],
  },
  {
    title: "Retail Order & Delivery Database",
    category: "Databases · Oracle PL/SQL",
    period: "2024",
    description:
      "A six-table normalised Oracle schema for a retail order and delivery workflow, with the referential-integrity and PL/SQL layers written by hand.",
    highlights: [
      "Primary and foreign keys throughout with ON DELETE CASCADE and SET NULL actions, CHECK constraints and DECIMAL(15,2) money columns.",
      "A stored procedure, a function, an explicit %ROWTYPE cursor and a row-level BEFORE UPDATE trigger deriving delivery status from :NEW, with COMMIT / ROLLBACK / SAVEPOINT transaction control.",
    ],
    tech: ["Oracle Database", "SQL", "PL/SQL"],
    links: [{ label: "Code", url: "https://github.com/meheru273/DB_Project" }],
  },
  {
    title: "Grocery Management System",
    category: "Full-Stack · PHP",
    period: "2024",
    description:
      "A Laravel inventory and ordering system with strict MVC separation and role-based access control across admin, staff and customer roles.",
    highlights: [
      "RBAC middleware, Eloquent ORM alongside raw indexed SQL, Stripe payments and a responsive Blade UI.",
      "Automated tests wired into CI.",
    ],
    tech: ["Laravel", "PHP 8", "MySQL", "Eloquent", "Blade", "Stripe"],
    links: [
      {
        label: "Live",
        url: "https://laravelproject-git-main-meheru.vercel.app/",
      },
      {
        label: "Code",
        url: "https://github.com/meheru273/Grocery_Store_Management_App_Laravel",
      },
    ],
  },
  {
    title: "Bank Management — Android",
    category: "Mobile · Java",
    period: "2024",
    description:
      "An Android banking client covering send-money, cash in and out, bill pay, savings and transaction history, with live updates from Firebase Realtime Database.",
    highlights: [
      "A FinancialServicesFacade plus Adapter pattern keeps the UI decoupled from the service layer.",
      "JUnit unit tests and Espresso instrumented UI tests; runnable straight from the browser via Appetize.io.",
    ],
    tech: [
      "Java",
      "Android",
      "Firebase Realtime DB",
      "JUnit",
      "Espresso",
      "Gradle",
    ],
    links: [
      {
        label: "Demo",
        url: "https://appetize.io/app/b_s2vkmurhf4yfl22yt3itjyi7ja?device=pixel7&osVersion=13.0&toolbar=true",
      },
      {
        label: "Code",
        url: "https://github.com/meheru273/BankManagementAndroid",
      },
    ],
  },
  {
    title: "Portfolio Website — ASP.NET",
    category: "Web · .NET",
    period: "2024",
    description:
      "An ASP.NET Web Forms (C#) site with authentication and CRUD pages over a SQL data layer. Implemented but not hosted.",
    highlights: [],
    tech: ["ASP.NET Web Forms", "C#", "SQL", "Swiper.js"],
    links: [
      { label: "Code", url: "https://github.com/meheru273/meheru_portfolio" },
    ],
  },
  {
    title: "SwiftUI iOS Game",
    category: "Mobile · Swift",
    period: "2024",
    description:
      "A state-driven SwiftUI runner game — scoring, game-over and reset all flow through @State.",
    highlights: [],
    tech: ["Swift", "SwiftUI", "Xcode"],
    links: [
      { label: "Code", url: "https://github.com/meheru273/RPC_GAME_SWIFTUI" },
    ],
  },
];

export const SKILLS = [
  {
    group: "Languages",
    items: [
      "Python",
      "JavaScript / ES6+",
      "TypeScript",
      "Java",
      "C++",
      "C",
      "C#",
      "PHP",
      "SQL",
      "Bash",
    ],
  },
  {
    group: "Machine Learning",
    items: [
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "OpenCV",
      "Transformers",
      "Self-Supervised & Contrastive Learning",
      "Diffusion & Flow Models",
      "RF-DETR",
      "CNNs",
      "NumPy",
      "Pandas",
    ],
  },
  {
    group: "Agentic AI & LLMs",
    items: [
      "LangChain",
      "LangGraph",
      "RAG",
      "FAISS",
      "OpenAI API",
      "Groq API",
      "Function Calling",
      "Prompt Engineering",
    ],
  },
  {
    group: "Backend & APIs",
    items: [
      "FastAPI",
      "Node.js",
      "Express",
      "Django",
      "Flask",
      "ASP.NET",
      "REST API Design",
      "Microservices",
      "API Gateway",
      "JWT / OAuth",
    ],
  },
  {
    group: "Data & Messaging",
    items: [
      "Oracle Database",
      "PL/SQL",
      "PostgreSQL",
      "MySQL",
      "MongoDB / Mongoose",
      "Redis",
      "Firebase",
      "BullMQ",
      "Event-Driven Workers",
    ],
  },
  {
    group: "Frontend",
    items: [
      "React",
      "Next.js",
      "Vite",
      "Tailwind CSS",
      "DaisyUI",
      "Context API & Hooks",
      "axios",
      "HTML / CSS",
    ],
  },
  {
    group: "Testing & DevOps",
    items: [
      "Jest",
      "Supertest",
      "Selenium",
      "JUnit",
      "Espresso",
      "Docker",
      "CI/CD (GitHub Actions)",
      "Git",
      "Linux",
      "Vercel",
      "Render",
      "Hugging Face Hub",
    ],
  },
  {
    group: "Systems & Hardware",
    items: [
      "Software-Defined Networking",
      "OMNeT++",
      "Routing Algorithms",
      "QoS & Load Balancing",
      "Verilog",
      "FPGA (Vivado, Artix-7)",
      "UART / BRAM",
    ],
  },
  {
    group: "Mobile",
    items: ["Android (Java)", "Flutter", "Swift / SwiftUI"],
  },
];

export const EDUCATION = [
  {
    institution: "Khulna University of Engineering & Technology",
    location: "Khulna, Bangladesh",
    degree: "B.Sc. in Computer Science & Engineering",
    period: "Mar 2022 – Jun 2026",
    notes: [
      "Undergraduate thesis: *Tropical Cyclone Forecasting via Latent Rectified Flow using Satellite Imagery and Atmospheric Fields*, advised by Prof. Dr. Sk. Md. Masudul Ahsan.",
    ],
  },
];

export const ACHIEVEMENTS = [
  {
    label: "Codeforces",
    detail: "120+ problems solved",
    url: "https://codeforces.com/profile/Meheru_jannat",
  },
  {
    label: "LeetCode",
    detail: "60+ problems solved",
    url: "https://leetcode.com/u/meheru/",
  },
];

export const CONTACT_INTRO = `I'm open to roles in AI/ML engineering, backend and full-stack development, and to research collaborations. The fastest way to reach me is email.`;
