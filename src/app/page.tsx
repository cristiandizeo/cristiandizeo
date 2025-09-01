'use client';

import React, { useState } from 'react';
import { JSX } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  ChevronDown,
  Folder,
  FolderOpen,
  X,
  ExternalLink,
  Github,
  Menu,
} from 'lucide-react';
import HomeScreen from './home';
import { ModeToggle } from './components/ThemeButton';
import About from './(sections)/about/page';
import Contact from './(sections)/contact/page';
import { VscJson } from 'react-icons/vsc';
import { SiTypescript } from 'react-icons/si';
import { DiHtml5, DiReact } from 'react-icons/di';
import { FaLaravel, FaPhp } from 'react-icons/fa';

// Tipo base para archivos navegables
interface BaseFile {
  name: string;
  fileName: string;
  description: string;
  type: 'section' | 'project';
}

// Interfaz para secciones del sitio
interface Section extends BaseFile {
  type: 'section';
  icon: JSX.Element;
  content: JSX.Element;
  color: string;
  bgColor: string;
}

// Interfaz para proyectos (mantiene la estructura original)
interface Project extends BaseFile {
  type: 'project';
  tech: string[];
  codeUrl: string;
  liveUrl: string;
  color: string;
  bgColor: string;
}

// Tipo unión para todos los archivos navegables
type NavigableFile = Section | Project;

// Componente acerca de

// Componente de contacto

// Secciones principales del sitio
const sections: Section[] = [
  {
    name: 'Inicio',
    fileName: 'index.html',
    description: 'Página principal con presentación y resumen de habilidades',
    type: 'section',
    icon: (
      <DiHtml5 className="text-orange-400 dark:text-orange-300" size={16} />
    ),
    content: <HomeScreen />,
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
  },
  {
    name: 'Acerca de',
    fileName: 'about.tsx',
    description: 'Información personal, experiencia y habilidades técnicas',
    type: 'section',
    icon: (
      <SiTypescript className="text-blue-400 dark:text-blue-300" size={16} />
    ),
    content: <About />,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
  },
  {
    name: 'Contacto',
    fileName: 'contact.json',
    description: 'Formulario de contacto e información de contacto',
    type: 'section',
    icon: (
      <VscJson className="text-yellow-500 dark:text-yellow-400" size={16} />
    ),
    content: <Contact />,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
  },
];

// Proyectos (estructura original mantenida)
const projects: Project[] = [
  {
    name: 'Vocaltech',
    fileName: 'Vocaltech.tsx',
    description:
      'Plataforma innovadora que combina la voz y la tecnología para potenciar marcas y desarrollar talento.',
    type: 'project',
    tech: ['React', 'TypeScript', 'Zustand'],
    codeUrl: 'https://github.com/No-Country-simulation/equipo-h4-01-vocaltech',
    liveUrl: 'https://equipo-h4-01-vocaltech.vercel.app/',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
  },
  {
    name: 'NotepadAI',
    fileName: 'NotepadAI.jsx',
    description:
      'Clon ligero de NotebookLM con interacción avanzada de documentos.',
    type: 'project',
    tech: ['NextJS', 'TypeScript', 'C#', 'Gemini AI'],
    codeUrl: 'https://github.com/No-Country-simulation/s19-10-ft-webapp',
    liveUrl: '#',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
  },
  {
    name: 'Petgram',
    fileName: 'Petgram.blade.php',
    description:
      'Una app para encontrar mascotas perdidas, con autenticación y mapas en tiempo real.',
    type: 'project',
    tech: ['React', 'TailwindCSS', 'Laravel', 'Cloudinary'],
    codeUrl:
      'https://github.com/No-Country-simulation/grupo-c21-37-n-php-react',
    liveUrl: '#',
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
  },
  {
    name: 'GrasmanAutos',
    fileName: 'GrasmanAutos.php',
    description: 'Concesionaria de vehículos nuevos y usados',
    type: 'project',
    tech: ['PHP', 'CSS3', 'HTML5', 'Wordpress'],
    codeUrl: '#',
    liveUrl: 'https://www.grasmanautos.com/',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
  },
];

// Función para obtener el ícono según el tipo de archivo
const getFileIcon = (file: NavigableFile): JSX.Element | string => {
  if (file.type === 'section') {
    return file.icon;
  }

  // Para proyectos, mantener la lógica original
  if (file.fileName.endsWith('.tsx'))
    return <DiReact className="text-cyan-400 dark:text-cyan-300" size={16} />;
  if (file.fileName.endsWith('.jsx'))
    return <DiReact className="text-cyan-400 dark:text-cyan-300" size={16} />;
  if (file.fileName.endsWith('.blade.php'))
    return <FaLaravel size={16} className="text-red-600" />;
  if (file.fileName.endsWith('.php'))
    return <FaPhp size={24} className="text-blue-400" />;
  return '📄';
};

export default function VSCodePortfolio(): JSX.Element {
  const [openSections, setOpenSections] = useState<string[]>([
    'sections',
    'projects',
  ]);
  const [activeTabs, setActiveTabs] = useState<NavigableFile[]>([]);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);

  // Combinar todas las opciones navegables

  const toggleSection = (sectionName: string): void => {
    setOpenSections((prev) =>
      prev.includes(sectionName)
        ? prev.filter((s) => s !== sectionName)
        : [...prev, sectionName],
    );
  };

  const openFile = (file: NavigableFile): void => {
    if (!activeTabs.find((tab) => tab.name === file.name)) {
      setActiveTabs([...activeTabs, file]);
    }
    setActiveTab(file.name);
  };

  const closeTab = (fileName: string, e: React.MouseEvent): void => {
    e.stopPropagation();
    const newTabs = activeTabs.filter((tab) => tab.name !== fileName);
    setActiveTabs(newTabs);

    if (activeTab === fileName) {
      setActiveTab(
        newTabs.length > 0 ? newTabs[newTabs.length - 1].name : null,
      );
    }
  };

  const activeFile: NavigableFile | undefined = activeTabs.find(
    (tab) => tab.name === activeTab,
  );

  return (
    <div className="flex w-full min-h-svh bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-mono transition-colors duration-300">
      {/* Sidebar */}
      <div
        className={`${
          sidebarCollapsed ? 'w-12' : 'w-56'
        } bg-gray-100 dark:bg-gray-800 border-r 
                border-gray-300 dark:border-gray-700 flex flex-col transition-all duration-300 flex-shrink-0`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-3 border-b border-gray-300 dark:border-gray-700 flex-shrink-0">
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
          >
            <Menu size={16} />
          </button>
          {!sidebarCollapsed && (
            <div className="flex items-center justify-between gap-2 px-2 py-1">
              {/* Switch tema oscuro */}
              <ModeToggle />

              {/* Switch idioma */}
              <button
                className="flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-lg 
                       bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 
                       hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                ES
              </button>
            </div>
          )}
        </div>

        {!sidebarCollapsed && (
          <div className="flex-1 overflow-y-auto min-h-0">
            {/* Secciones del sitio */}
            <div className="p-2">
              <button
                onClick={() => toggleSection('sections')}
                className="flex items-center gap-1 w-full text-left text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 p-1 rounded transition-colors"
              >
                {openSections.includes('sections') ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
                {openSections.includes('sections') ? (
                  <FolderOpen size={16} />
                ) : (
                  <Folder size={16} />
                )}
                <span>SECCIONES</span>
              </button>

              <AnimatePresence>
                {openSections.includes('sections') && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-4 mt-2 space-y-1"
                  >
                    {sections.map((section) => (
                      <motion.button
                        key={section.name}
                        onClick={() => openFile(section)}
                        className={`flex items-center gap-2 w-full text-left p-1.5 rounded text-sm transition-colors ${
                          activeTab === section.name
                            ? 'bg-blue-100 dark:bg-gray-700 text-blue-900 dark:text-white'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                        }`}
                        whileHover={{ x: 2 }}
                      >
                        {getFileIcon(section)}
                        <span className="truncate">{section.fileName}</span>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Proyectos */}
            <div className="p-2">
              <button
                onClick={() => toggleSection('projects')}
                className="flex items-center gap-1 w-full text-left text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 p-1 rounded transition-colors"
              >
                {openSections.includes('projects') ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
                {openSections.includes('projects') ? (
                  <FolderOpen size={16} />
                ) : (
                  <Folder size={16} />
                )}
                <span>PROYECTOS</span>
              </button>

              <AnimatePresence>
                {openSections.includes('projects') && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-4 mt-2 space-y-1"
                  >
                    {projects.map((project) => (
                      <motion.button
                        key={project.name}
                        onClick={() => openFile(project)}
                        className={`flex items-center gap-2 w-full text-left p-1.5 rounded text-sm transition-colors ${
                          activeTab === project.name
                            ? 'bg-blue-100 dark:bg-gray-700 text-blue-900 dark:text-white'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                        }`}
                        whileHover={{ x: 2 }}
                      >
                        <span className="text-base">
                          {getFileIcon(project)}
                        </span>
                        <span className="truncate">{project.fileName}</span>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Tabs */}
        <div className="flex bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700 overflow-x-auto flex-shrink-0">
          <div className="flex min-w-max">
            {activeTabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center gap-2 px-4 py-2 text-sm border-r border-gray-300 dark:border-gray-700 whitespace-nowrap transition-colors ${
                  activeTab === tab.name
                    ? 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-b-2 border-blue-500 dark:border-blue-400'
                    : 'text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {typeof getFileIcon(tab) === 'string' ? (
                  <span>{getFileIcon(tab)}</span>
                ) : (
                  getFileIcon(tab)
                )}
                <span>{tab.fileName}</span>
                <button
                  onClick={(e) => closeTab(tab.name, e)}
                  className="ml-2 hover:bg-gray-300 dark:hover:bg-gray-600 rounded p-0.5 transition-colors"
                >
                  <X size={12} />
                </button>
              </button>
            ))}
          </div>
        </div>

        {/* Editor Content */}
        <div className="flex-1 overflow-hidden min-h-0">
          {!activeFile ? (
            <div className="flex items-center justify-center h-full bg-white dark:bg-gray-900">
              <div className="text-center">
                <div className="text-6xl mb-4">👋</div>
                <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2">
                  ¡Hola! Bienvenido a mi sitio
                </h2>
                <p className="text-gray-600 dark:text-gray-500">
                  Para empezar, selecciona una sección o proyecto del explorador
                </p>
              </div>
            </div>
          ) : activeFile.type === 'section' ? (
            // Renderizar contenido de sección
            <div className="h-full overflow-y-auto bg-white dark:bg-gray-900">
              {activeFile.content}
            </div>
          ) : (
            // Renderizar contenido de proyecto (lógica original)
            <div className="flex-1 flex flex-col min-h-0 bg-white dark:bg-gray-900 overflow-hidden">
              {/* Code Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex-shrink-0">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{getFileIcon(activeFile)}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {activeFile.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {activeFile.fileName}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {(activeFile as Project).codeUrl !== '#' && (
                    <a
                      href={(activeFile as Project).codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-1.5 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded text-sm transition-colors"
                    >
                      <Github size={16} />
                      Código
                    </a>
                  )}
                  {(activeFile as Project).liveUrl !== '#' && (
                    <a
                      href={(activeFile as Project).liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 rounded text-sm transition-colors text-white"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="flex-1 flex min-h-0 overflow-hidden">
                {/* Code Preview (fake code) */}
                <div className="w-1/2 p-4 bg-gray-50 dark:bg-gray-900 border-r border-gray-300 dark:border-gray-700 overflow-y-auto">
                  <div className="p-4 rounded-lg bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 shadow-sm">
                    <div className="space-y-3 text-sm">
                      <div className="text-gray-500 dark:text-gray-500">
                        {'//'} {activeFile.fileName}
                      </div>
                      <div className="text-blue-600 dark:text-blue-400">
                        export default function{' '}
                        <span className="text-orange-600 dark:text-yellow-300">
                          {activeFile.name}
                        </span>
                        () {'{'}
                      </div>
                      <div className="ml-4 space-y-2">
                        <div className="text-gray-800 dark:text-gray-300">
                          <span className="text-purple-600 dark:text-purple-400">
                            const
                          </span>{' '}
                          description ={' '}
                          <span className="text-green-600 dark:text-green-400">
                            &quot;{activeFile.description}&quot;
                          </span>
                          ;
                        </div>
                        <div className="text-gray-800 dark:text-gray-300">
                          <span className="text-purple-600 dark:text-purple-400">
                            const
                          </span>{' '}
                          technologies = [
                        </div>
                        <div className="ml-4 space-y-1">
                          {(activeFile as Project).tech?.map((tech, index) => (
                            <div
                              key={tech}
                              className="text-green-600 dark:text-green-400"
                            >
                              &quot;{tech}&quot;
                              {index < (activeFile as Project).tech.length - 1
                                ? ','
                                : ''}
                            </div>
                          ))}
                        </div>
                        <div className="text-gray-800 dark:text-gray-300">
                          ];
                        </div>
                        <div className="mt-4 text-purple-600 dark:text-purple-400">
                          return{' '}
                          <span className="text-blue-600 dark:text-blue-400">
                            {'<'}
                          </span>
                          <span className="text-red-600 dark:text-red-400">
                            ProjectComponent
                          </span>{' '}
                          <span className="text-blue-600 dark:text-blue-400">
                            {'/>'}
                          </span>
                          ;
                        </div>
                      </div>
                      <div className="text-blue-600 dark:text-blue-400">
                        {'}'}
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">
                      TECNOLOGÍAS UTILIZADAS
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {(activeFile as Project).tech?.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Live Preview */}
                <div className="w-1/2 bg-gray-100 dark:bg-gray-800 flex flex-col overflow-hidden">
                  <div className="p-3 border-b border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 flex-shrink-0">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="ml-2 text-xs">
                        {(activeFile as Project).liveUrl}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    {(activeFile as Project).liveUrl !== '#' ? (
                      <iframe
                        src={(activeFile as Project).liveUrl}
                        className="w-full h-full bg-white"
                        title={`Preview of ${activeFile.name}`}
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-500">
                        <div className="text-center">
                          <div className="text-4xl mb-4">🚧</div>
                          <p>Vista previa no disponible</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
