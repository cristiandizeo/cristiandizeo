'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { X, FileText, XCircle } from 'lucide-react';
import { SiTypescript } from 'react-icons/si';
import { FaFolder, FaLaravel, FaPhp, FaReact } from 'react-icons/fa';
import Image from 'next/image';

const projects = [
  {
    name: 'Vocaltech.tsx',
    description:
      'Plataforma innovadora que combina la voz y la tecnología para potenciar marcas y desarrollar talento.',
    tech: ['React', 'TypeScript', 'Zustand'],
    codeUrl: 'https://github.com/No-Country-simulation/equipo-h4-01-vocaltech',
    liveUrl: 'https://equipo-h4-01-vocaltech.vercel.app/',
    imageUrl: '/vocaltech.webp',
  },
  {
    name: 'NotepadAI.jsx',
    description:
      'Clon ligero de NotebookLM con interacción avanzada de documentos.',
    tech: ['NextJS', 'TypeScript', 'C#', 'Gemini AI'],
    codeUrl: 'https://github.com/No-Country-simulation/s19-10-ft-webapp',
    liveUrl: '#',
    imageUrl: '/notepadai.webp',
  },
  {
    name: 'Petgram.blade.php',
    description:
      'Una app para encontrar mascotas perdidas, con autenticación y mapas en tiempo real.',
    tech: ['React', 'TailwindCSS', 'Laravel', 'Cloudinary'],
    codeUrl:
      'https://github.com/No-Country-simulation/grupo-c21-37-n-php-react',
    liveUrl: '#',
    imageUrl: '/petgram.webp',
  },
  {
    name: 'GrasmanAutos.php',
    description: 'Concesionaria de vehículos nuevos y usados',
    tech: ['PHP', 'CSS3', 'HTML5', 'Wordpress'],
    codeUrl: '#',
    liveUrl: 'https://www.grasmanautos.com/',
    imageUrl: '/grasmanautos.webp',
  },
];

const getFileIcon = (name: string) => {
  if (name.endsWith('.tsx'))
    return <SiTypescript size={16} className='text-blue-400' />;
  if (name.endsWith('.jsx'))
    return <FaReact size={16} className='text-blue-400' />;
  if (name.endsWith('.blade.php'))
    return <FaLaravel size={16} className='text-red-600' />;
  if (name.endsWith('.php'))
    return <FaPhp size={24} className='text-blue-400' />;
  return <FileText size={16} className='text-gray-400' />;
};

export default function Portfolio() {
  const [openProjects, setOpenProjects] = useState<string[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar el menú

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Cambia el estado al hacer clic
  };

  const toggleProject = (name: string) => {
    setOpenProjects((prev) =>
      prev.includes(name) ? prev.filter((p) => p !== name) : [...prev, name]
    );
  };

  return (
    <div className='flex flex-col md:flex-row h-screen bg-gray-950 text-gray-200 overflow-auto'>
      {/* Sidebar con archivos */}
      <aside className='w-full md:w-1/3 lg:w-1/4 md:h-full bg-[#252526] border-r border-gray-700 p-4'>
        {/* Botón para abrir/cerrar el menú */}
        <button
          onClick={toggleMenu}
          className='flex gap-2 items-center text-gray-400 text-sm w-full hover:text-gray-200 focus:outline-none'
        >
          <FaFolder size={16} /> Proyectos
        </button>

        {/* Menú desplegable */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'max-h-96' : 'max-h-0'
          } md:max-h-full`}
        >
          <ul className={`space-y-2 m-2`}>
            {projects.map((project) => (
              <motion.li
                key={project.name}
                onClick={() => toggleProject(project.name)}
                className='flex items-center space-x-2 cursor-pointer text-gray-300 hover:font-bold'
              >
                {getFileIcon(project.name)}
                <span>{project.name}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Contenido */}
      <div className='w-full md:w-5/6 h-full'>
        {openProjects.length === 0 && (
          <div className='flex p-4 justify-center items-center'>
            <p className='text-gray-400 text-center text-lg md:text-3xl'>
              ¡Hola! Podés ver mis proyectos haciendo click en ellos
            </p>
          </div>
        )}
        <div className='w-full h-full p-4'>
          {openProjects.length > 0 &&
            openProjects.map((name) => {
              const project = projects.find((p) => p.name === name);
              return project ? (
                <>
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className='h-full bg-[#252526] border border-gray-700 rounded-lg overflow-hidden shadow-lg'
                  >

<div className='relative h-5/6 iframe-container'>
                  <button
                    onClick={() => toggleProject(name)}
                    aria-label='Cerrar proyecto'
                    className='absolute top-2 right-2 bg-black/50 p-1 rounded-full hover:bg-black transition-all'
                  >
                    <XCircle size={24} className='text-white' />
                  </button>
                    <iframe
                      src={project.liveUrl}
                      width='100%'
                      height='100%'
                    >
                      Su navegador no soporta iframes.
                    </iframe>
                    </div> 
                    {/* Contenido del Proyecto */}
                    <div className='h-1/6 p-5 space-y-3'>
                      <h2 className='text-xl font-bold text-teal-400'>
                        {project.name}
                      </h2>
                      <p className='text-gray-300'>{project.description}</p>

                      {/* Tecnologías */}
                      <div className='flex flex-wrap gap-2'>
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className='bg-gray-700 px-2 py-1 text-xs rounded'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className='flex justify-between mt-3'>
                        <Link
                          target='_blank'
                          href={project.codeUrl}
                          className='text-sm text-teal-400 hover:underline'
                        >
                          📜 Ver Código
                        </Link>
                        <Link
                          target='_blank'
                          href={project.liveUrl}
                          className='text-sm text-teal-400 hover:underline'
                        >
                          🔗 Ver Demo
                        </Link>
                      </div>
                    </div>
              
                  </motion.div>
                  
                </>
              ) : null;
            })}
        </div>
      </div>
    </div>
  );
}
