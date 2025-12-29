import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `
I am a Computer Science and Engineering undergraduate with a strong passion for building meaningful, real-world software solutions. I enjoy working across the full stack, combining clean front-end design with robust back-end systems. My experience spans web development, mobile applications, and AI-Agents, and a Machine Learning , Computer vision and AI enthusiastic. I am driven by curiosity, problem-solving, and the goal of using technology to create accessible, impactful, and user-focused applications.
`;
export const ABOUT_TEXT = `
I am a Computer Science and Engineering undergraduate with a strong interest in Artificial Intelligence, Machine Learning, and Computer Vision. My academic and project work focuses on designing, training, and evaluating deep learning models to solve practical and research-oriented problems. I have hands-on experience with neural networks, image-based learning, and end-to-end ML pipelines, including data preprocessing, model optimization, and deployment.

One of my key projects involves computer vision and deep learning, aimed at improving accessibility for visually impaired users. Through such projects, I have developed a research-driven mindset—experimenting with models, analyzing performance, and iteratively improving results. I am motivated to pursue advanced research in AI and contribute to impactful, socially meaningful technologies.
`;

export const EXPERIENCES = [
  {
    year: "2021 - Present",
    role: "Under Graduate Student",
    company: "Bachelor at Computer Science and Engineering.",
    description: `Khulna University of Engineering and Technology`,
  },
  {
    year: "2018 - 2020",
    role: "Student",
    company: "higher secondary school",
    description: `HOLY CROSS COLLEGE`,
  },
  {
    year: "2015 - 2017",
    role: "Student",
    company: "Secondary school ",
    description: `SIDDESWARI GIRL'S HIGH SCHOOL`,
  },
];

export const PROJECTS = [
  {
    title: "Online Grocery Management System",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "Laravel", "Node.js", "PHP"],
    link : "https://github.com/meheru273/laravelproject"
  },
  {
    title: "Bank Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "AndroidStudio", "Firebase"],
    link : "https://github.com/meheru273/BankManagementAndroid"
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", ".NET", "PHP"],
    link : "https://github.com/meheru273/BankManagementAndroid"
  },
  {
    title: "Braille Detector Assistant",
    image: project4,
    description:
      "An app that uses RF-DETR model  with Gork AI AGENT to detect and translate braille text",
    technologies: ["Pytorch", "Python", "Vercel", "Docker", "FastAPI"],
    link : "https://huggingface.co/spaces/meheru/braille-detector-assistant"
  },
];

export const CONTACT = {
  address: "Khulna University of Engineering and Technology ",
  phoneNo: "+8801405953515",
  email1: "meherujannat@gmail.com.com",
  email2: "zannat2007039@stud.kuet.ac.bd",
};
