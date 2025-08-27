"use client";

import { JSX, useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGit,
  FaDocker,
  FaLaravel,
  FaPhp,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiNestjs,
  SiTypescript,
  SiSupabase,
} from "react-icons/si";

// Categorías con porcentaje de dominio
const categories: Record<
  string,
  { name: string; icon: JSX.Element; proficiency: number }[]
> = {
  Frontend: [
    { name: "React", icon: <FaReact />, proficiency: 80 },
    { name: "React Native", icon: <FaReact />, proficiency: 80 },
    { name: "Next.js", icon: <SiNextdotjs />, proficiency: 85 },
    { name: "TypeScript", icon: <SiTypescript />, proficiency: 80 },
    { name: "TailwindCSS", icon: <SiTailwindcss />, proficiency: 90 },
    { name: "JavaScript", icon: <FaJs />, proficiency: 85 },
    { name: "HTML5", icon: <FaHtml5 />, proficiency: 95 },
    { name: "CSS3", icon: <FaCss3Alt />, proficiency: 90 },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs />, proficiency: 80 },
    { name: "Supabase", icon: <SiSupabase />, proficiency: 80 },
    { name: "PHP", icon: <FaPhp />, proficiency: 75 },
    { name: "Laravel", icon: <FaLaravel />, proficiency: 70 },
    { name: "MongoDB", icon: <SiMongodb />, proficiency: 60 },
    { name: "Firebase", icon: <SiFirebase />, proficiency: 60 },
  ],
  DevOps: [
    { name: "Git/Github", icon: <FaGit />, proficiency: 85 },
    { name: "Docker", icon: <FaDocker />, proficiency: 70 },
  ],
};

export default function Technologies() {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  return (
    <div className="text-center">
      {/* Botones de categorías */}
      <div className="flex justify-center space-x-4 mb-4">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all 
              ${
                activeCategory === category
                  ? "bg-teal-600 text-white"
                  : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Lista de tecnologías */}
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4"
      >
        {categories[activeCategory].map((tech, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center p-4 rounded-lg shadow-md 
                       overflow-hidden bg-white text-gray-800
                       dark:bg-gray-800 dark:text-gray-200 transition-colors"
          >
            {/* Ícono y Nombre */}
            <div className="text-4xl">{tech.icon}</div>
            <p className="mt-2 text-sm font-semibold">{tech.name}</p>
            <p className="text-xs mt-1">Dominio: {tech.proficiency}%</p>

            {/* Barra de Progreso Animada */}
            <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded-full mt-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${tech.proficiency}%` }}
                transition={{ duration: 1 }}
                className="h-full bg-teal-500"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
