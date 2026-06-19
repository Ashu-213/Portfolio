import React from 'react';
import { FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const ProjectCard = ({ title, tools, description, link, color }: any) => (
  <div className={`bg-white border-4 border-black rounded-3xl  p-6 shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all relative overflow-hidden`}>

    <div className={`absolute top-0 left-0 right-0 h-4 ${color} border-b-4 border-black`}></div>

    <div className="mt-4 flex justify-between items-start mb-4">
      <div>
        <h3 className="text-2xl font-shrikhand">{title}</h3>
        <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 border border-black rounded-md ml-1 animate-pulse">
          LIVE PROJECT
        </span>
      </div>
      <a href={link} target="_blank" rel="noreferrer" className="bg-black text-white p-2 rounded-lg hover:bg-gray-800 transition-colors">
        <FaExternalLinkAlt />
      </a>
    </div>

    <div className="flex flex-wrap gap-2 mb-4">
      {tools.map((t: string) => (
        <span key={t} className="bg-gray-100 border border-black px-2 py-1 text-xs font-bold font-mono rounded-md">
          {t}
        </span>
      ))}
    </div>

    <ul className="list-disc list-inside space-y-2 text-sm font-medium border-t-2 border-black pt-4">
      {description.map((point: string, i: number) => (
        <li key={i}>{point}</li>
      ))}
    </ul>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "RandomChat",
      color: "bg-custom-purple",
      tools: ["React 19", "Node.js", "WebRTC", "Socket.IO", "Redis", "Firebase", "Docker"],
      link: "https://randomchat-one.vercel.app/",
      description: [
        "Built a scalable P2P video chat platform using WebRTC, reducing first-connection failures by 20% and enabling seamless camera switching (<100ms) without reconnecting.",
        "Architected a Redis-based distributed matchmaking system with atomic transactions, eliminating race conditions and supporting horizontal scaling via Socket.IO Redis Adapter.",
        "Secured real-time communication with Firebase JWT authentication, rate limiting, and Dockerized CI/CD deployment across Vercel and Render."
      ]
    },
    {
      title: "InterviewPrep",
      color: "bg-custom-blue",
      tools: ["MongoDB", "Express.js", "React.js", "Node.js", "Groq API", "JWT"],
      link: "https://interview-prep-0vcj.onrender.com/",
      description: [
        "Engineered AI interview prep platform (React, Node.js, MongoDB, Groq API) with JWT auth and PDF resume parsing and also give personalized reports.",
        "Architectured LLM pipeline (Llama 3.3 70B) generating technical questions, skill gaps & 7-day prep plans with enforced JSON schema.",
        "Developed 10+ REST API endpoints with MVC architecture, bcrypt, and full CRUD report history."
      ]
    },
    {
      title: "RxVault",
      color: "bg-custom-red",
      tools: ["React", "Node.js", "MongoDB", "JWT", "Express"],
      link: "https://rxvault-1.onrender.com",
      description: [
        "Engineered a full-stack digital prescription management system enabling secure, paperless healthcare record management.",
        "Implemented JWT authentication and patient verification workflows with role-based access for doctors and patients.",
        "Built prescription lifecycle management featuring diagnosis tracking, medication records, follow-up scheduling, and PDF generation.",
        "Developed analytics dashboards, dark mode support, and deployed the application using React, Node.js, Express, and MongoDB."
      ]
    },
    {
      title: "VerifyFirst",
      color: "bg-custom-pink",
      tools: ["Python", "FastAPI", "scikit-learn", "Chrome Extension", "RandomForest"],
      link: "https://verifyfirst.onrender.com/",
      description: [
        "Built real-time phishing detection system using RandomForest ML trained on 651k Kaggle URLs with 86.84% accuracy.",
        "Engineered multi-signal scoring pipeline combining URL blacklist (10k URLs), domain age via WHOIS, and 14 feature-based ML model.",
        "Developed privacy-first Chrome Extension (Manifest V3) with zero external API calls; all detection runs locally (<2s analysis time).",
        "Architected FastAPI backend with caching strategy delivering <10ms cache hits and ~1.2s avg for new URLs; blocks malicious sites before page load."
      ]
    },
    {
      title: "Mybnb",
      color: "bg-custom-green",
      tools: ["MERN Stack", "EJS", "Bootstrap", "MapTiler", "Cloudinary"],
      link: "https://mybnb-1.onrender.com/",
      description: [
        "Built full-stack Airbnb clone with complete CRUD operations for listings, user authentication via Passport.js, and 5-star review system.",
        "Integrated MapTiler Geocoding API for location-to-coordinates conversion and Mapbox GL JS for interactive property map visualization.",
        "Implemented secure authorization middleware (isOwner, isReviewAuthor) ensuring only authorized users edit/delete listings and reviews.",
        "Engineered image upload pipeline with Multer + Cloudinary integration, server-side Joi validation, and responsive Bootstrap 5 design across mobile, tablet, desktop breakpoints."
      ]
    },
    {
      title: "IntelliGaurd",
      color: "bg-custom-yellow",
      tools: ["YOLOv8", "OpenCV", "FastAPI", "WebSockets", "Twilio"],
      link: "https://github.com/Ashu-213/IntelliGaurd.git ",
      description: [
        "Built a real-time weapon detection using YOLOv8 + OpenCV on live CCTV streams — 24 FPS, 91% accuracy.",
        "FastApI backend with WebSocket streaming delivering live feeds and threat alerts with <200ms latency.",
        "Integrated Twilio for automated SMS alerts reaching administrators within 3 seconds of detection"
      ]
    }

  ];

  return (
    <section id="projects" className="py-10 px-4 mx-auto max-w-7xl  bg-custom-yellow border-2 border-b-4 border-r-4 border-black rounded-3xl shadow-neo">
      <div className="flex items-center gap-4 mb-10">
        <div className="bg-custom-green px-8 py-3 rounded-full border-4 border-black shadow-neo">
          <h2 className="text-3xl font-shrikhand text-white">PROJECTS</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;