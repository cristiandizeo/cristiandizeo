"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { X, FileText } from "lucide-react";
import { SiTypescript } from "react-icons/si";
import { FaFolder, FaLaravel, FaPhp, FaReact } from "react-icons/fa";
import { DiPhp } from "react-icons/di";

const projects = [
  {
    name: "Vocaltech.tsx",
    description: "Plataforma innovadora que combina la voz y la tecnología para potenciar marcas y desarrollar talento.",
    tech: ["React", "TypeScript", "Zustand"],
    codeUrl: "https://github.com/No-Country-simulation/equipo-h4-01-vocaltech",
    liveUrl: "https://equipo-h4-01-vocaltech.vercel.app/",
  },
  {
    name: "NotepadAI.jsx",
    description: "Clon ligero de NotebookLM con interacción avanzada de documentos.",
    tech: ["NextJS", "TypeScript", "C#", "Gemini AI"],
    codeUrl: "https://github.com/No-Country-simulation/s19-10-ft-webapp",
    liveUrl: "#",
  },
  {
    name: "Petgram.blade.php",
    description: "Una app para encontrar mascotas perdidas, con autenticación y mapas en tiempo real.",
    tech: ["React", "TailwindCSS", "Laravel", "Cloudinary"],
    codeUrl: "https://github.com/No-Country-simulation/grupo-c21-37-n-php-react",
    liveUrl: "#",
  },
  {
    name: "GrasmanAutos.php",
    description: "Concesionaria de vehículos nuevos y usados",
    tech: ["PHP", "CSS3", "HTML5", "Wordpress"],
    codeUrl: "#",
    liveUrl: "https://www.grasmanautos.com/",
  },
];

const getFileIcon = (name: string) => {
  if (name.endsWith(".tsx")) return <SiTypescript size={16} className="text-blue-400" />;
  if (name.endsWith(".jsx")) return <FaReact size={16} className="text-blue-400" />;
  if (name.endsWith(".blade.php")) return <FaLaravel size={16} className="text-red-600" />;
  if (name.endsWith(".php")) return <FaPhp size={24} className="text-blue-400" />;
  return <FileText size={16} className="text-gray-400" />;
};

export default function Portfolio() {
  const [openProjects, setOpenProjects] = useState<string[]>([]);

  const toggleProject = (name: string) => {
    setOpenProjects((prev) =>
      prev.includes(name) ? prev.filter((p) => p !== name) : [...prev, name]
    );
  };

  return (
    <div className="h-screen bg-gray-950 text-gray-200 p-10 overflow-auto">
      {/* Sidebar con archivos */}
      <aside className="fixed top-[3.3rem] left-0.5 h-full w-1/6 bg-[#252526] border-r border-gray-700 p-4">
        <h3 className="flex gap-2 items-center text-gray-400 text-sm mb-4"><FaFolder size={16} /> Proyectos</h3>
        <ul className="space-y-2 ml-4">
          {projects.map((project) => (
            <motion.li
              key={project.name}
              onClick={() => toggleProject(project.name)}
              className="flex items-center space-x-2 cursor-pointer text-gray-300 hover:font-bold"
            >
              {getFileIcon(project.name)}
              <span>{project.name}</span>
            </motion.li>
          ))}
        </ul>
      </aside>

      {/* Contenido */}
      <div className="ml-52">
        {/* Pestañas abiertas */}
        <div className="flex space-x-1 border-b border-gray-700 p-2">
          {openProjects.map((name) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="flex items-center bg-[#2d2d2d] text-gray-300 px-3 py-2 rounded-t-md"
            >
              {getFileIcon(name)}
              <span className="ml-2">{name}</span>
              <button
                onClick={() => toggleProject(name)}
                className="ml-2 opacity-50 hover:opacity-100"
              >
                <X size={14} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Detalles de los proyectos */}
        <div className="m-4">
          {openProjects.map((name) => {
            const project = projects.find((p) => p.name === name);
            return project ? (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="p-5 m-2 bg-[#252526] border border-gray-700 rounded-lg space-y-4"
              >
                <h2 className="text-xl font-bold text-teal-400">{project.name}</h2>
                <p className="text-gray-300">{project.description}</p>
                <div className="flex space-x-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-gray-700 px-2 py-1 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 mt-3">
                  <Link target="_blank" href={project.codeUrl} className="text-sm text-teal-400 hover:underline">
                    📜 Ver Código
                  </Link>
                  <Link target="_blank" href={project.liveUrl} className="text-sm text-teal-400 hover:underline">
                    🔗 Ver Demo
                  </Link>
                </div>
              </motion.div>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
}
