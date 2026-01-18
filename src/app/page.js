"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, Stars, OrbitControls } from "@react-three/drei";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Code2,
  Globe,
  Server,
  Cpu,
} from "lucide-react";
import ExperienceSection from "@/components/Experience";

const GeometricScene = () => {
  return (
    <>
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <mesh>
          <octahedronGeometry args={[2, 0]} />
          <meshStandardMaterial
            color="#4f46e5"
            wireframe={true}
            transparent={true}
            opacity={0.8}
          />
        </mesh>
      </Float>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
    </>
  );
};

const projects = [
  {
    title: "Brother ID",
    description:
      "A decentralized identity naming service on Starknet. Register your identity on the blockchain with a unique domain name and put it on auction",
    tech: ["Cairo", "Vite", "Starknet.id", "Tailwind"],
    image: "/images/brother.png",
    github: "",
    live: "https://brother-domain-9tag.vercel.app/",
  },
  {
    title: "Paw Pets (Aptos)",
    description:
      "A complete decentralized pet care game on Aptos using Move 2.0 and a modern Next.js frontend.",
    tech: [
      "Next.js",
      "Move 2.0",
      "Aptos TS SDK",
      "Framer Motion",
      "Styled Components",
      "use-sound",
    ],
    image: "/images/paw.jpeg",
    github: "https://github.com/snehaa-eth/paw-pets-aptos",
    live: "https://paw-pets-aptos.vercel.app/",
  },
  {
    title: "Roomzy",
    description:
      "A full-stack platform to find ideal roommates or affordable rooms.",
    tech: ["ReactJS", "Node.js", "MongoDB", "Telegram Miniapp", "Express.js"],
    image: "/images/roomzy.jpeg",
    github: "https://github.com/snehaa-eth/Roomzy",
    live: "https://roomzy-axja.vercel.app/",
  },
  {
    title: "Starknet Tic-Tac-Toe",
    description:
      "Built this to give a workshop on building onchain game on starknet. 1.6k people attended the worshop.",
    tech: ["Typescript", "Next.js", "Starknet.js", "Cairo"],
    image: "/images/tic-tac-toe.jpeg",
    github: "https://github.com/snehaa-eth/starknet-tictactoe",
    live: "https://starknet-tictactoe.vercel.app/",
  },
  {
    title: "Trix.ai",
    description:
      "Your personal AI-powered crypto and DeFi guide for trading, NFTs, and tokens.",
    tech: ["Next.js", "Openai sdk", "Solidity", "Tailwind", "Ethers.js"],
    image: "/images/trix.jpeg",
    github: "",
    live: "https://trix-ai.vercel.app/",
  },
  {
    title: "Prophecy Pool",
    description:
      "A decentralized betting platform for binary predictions on user-created pools.",
    tech: ["Next.js", "Ethers/Wagmi", "Solidity", "Tailwind/Framer motion"],
    image: "/images/prophecy.jpeg",
    github: "",
    live: "https://monksagentnetwork-l5nz.vercel.app",
  },
  {
    title: "Winfinity",
    description:
      "A modern gaming platform blending early 2000s nostalgia with ETH staking and rewards.",
    tech: ["Next.js", "Express", "MongoDB", "Telegram Miniapp"],
    image: "/images/winfinity.jpeg",
    github: "https://github.com/snehaa-eth/winfinity-ancient8",
    live: "https://winfinity-ancient8.vercel.app",
  },
  {
    title: "Flixtube",
    description:
      "Video Streaming platform aims to replicate some of the core functionalities of YouTube, allowing users to search and watch videos.",
    tech: ["React", "Node.js", "Rapid API", "MUI"],
    image: "/images/flixtube.png",
    github: "https://github.com/snehaa-eth/flixtube",
    live: "https://flixtube19.netlify.app/",
  },
  {
    title: "Vital Fit",
    description:
      "This project is a fitness app built using React.js. It leverages the RapidAPI and YouTube API to fetch exercise data and related YouTube videos, respectively. ",
    tech: ["React.js", "Rapid api", "MUI", "Javascript"],
    image: "/images/fit.png",
    github: "https://github.com/snehaa-eth/Fitness-app",
    live: "https://fitness-app-five-drab.vercel.app/",
  },
];

const skills = [
  {
    category: "FullStack",
    icon: <Globe className="w-6 h-6 mb-4" />,
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "Redis",
    ],
  },
  {
    category: "Blockchain",
    icon: <Server className="w-6 h-6 mb-4" />,
    technologies: [
      "Solidity",
      "Cairo",
      "Web3.js",
      "Ethers.js",
      "Wagmi",
      "Starknet.js",
      "Hardhat",
      "Solana web3.js",
    ],
  },
  {
    category: "Machine Learning",
    icon: <Cpu className="w-6 h-6 mb-4" />,
    technologies: ["OpenAI", "TensorFlow", "Computer Vision", "Scikit-learn"],
  },
];

const ProjectCard = ({ project }) => (
  <div className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden hover:bg-white/10 transition-all">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
      <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="px-3 py-1 bg-indigo-500/20 rounded-full text-sm text-indigo-300"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {project.github && (
          <a
            href={project.github}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
            Code
          </a>
        )}
        <a
          href={project.live}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ExternalLink className="w-5 h-5" />
          Live Demo
        </a>
      </div>
    </div>
  </div>
);

const ProjectsGrid = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const currentProjects = projects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {currentProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
          disabled={currentPage === 0}
          className="p-2 rounded-full bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentPage === index ? "bg-indigo-500 w-4" : "bg-white/20"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))
          }
          disabled={currentPage === totalPages - 1}
          className="p-2 rounded-full bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="bg-[#0a0a0a] min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-white">snehaa</span>
            <div className="space-x-8">
              <a
                href="#about"
                className="text-gray-300 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#experience"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <Canvas>
            <GeometricScene />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </motion.div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <Code2 className="w-8 h-8 text-indigo-400" />
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              Software Developer
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Building modern applications with a focus on performance and user
            experience
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors inline-flex items-center gap-2"
            >
              <Code2 className="w-5 h-5" />
              View Projects
            </a>
            <a
              href="https://t.me/sneha_1907"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-colors inline-flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </a>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-16 text-center text-white"
          >
            Skills & Technologies
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:bg-white/10 transition-all text-center"
              >
                <div className="flex justify-center text-indigo-400">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}

      <ExperienceSection />

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-6 bg-gradient-to-b from-black/20 to-black/40"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-16 text-center text-white"
          >
            Featured Projects
          </motion.h2>
          <ProjectsGrid />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-8 text-white"
          >
            Let&apos;s Work Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 mb-12"
          >
            Open for freelance opportunities and interesting projects
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center items-center gap-6"
          >
            <a
              href="mailto:snehagupta98930@gmail.com"
              className="px-8 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors inline-flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/sneha-gupta-239aa1201"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-colors inline-flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/snehaa-eth"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-colors inline-flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black/20">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>© {new Date().getFullYear()} snehaa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
