'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
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
import { VscJson } from 'react-icons/vsc';
import { SiTypescript } from 'react-icons/si';
import { DiHtml5, DiReact } from 'react-icons/di';
import { FaLaravel, FaPhp } from 'react-icons/fa';
import { FiFileText } from 'react-icons/fi';
import Loader from './loading';
import { ModeToggle } from './components/ThemeButton';

// Lazy loading de componentes para mejor performance
const HomeScreen = React.lazy(() => import('./home'));
const About = React.lazy(() => import('./(sections)/about/page'));
const Contact = React.lazy(() => import('./(sections)/contact/page'));
const Curriculum = React.lazy(() => import('./curriculum'));

// Tipos mejorados con propiedades de accesibilidad
interface BaseFile {
  name: string;
  fileName: string;
  description: string;
  type: 'section' | 'project';
  ariaLabel: string;
}

interface Section extends BaseFile {
  type: 'section';
  icon: React.ReactElement;
  content: React.ReactElement;
  color: string;
  bgColor: string;
}

interface Project extends BaseFile {
  type: 'project';
  tech: string[];
  codeUrl: string;
  liveUrl: string;
  color: string;
  bgColor: string;
}

type NavigableFile = Section | Project;

// Hook personalizado para manejo del teclado
const useKeyboardNavigation = (
  activeTabs: NavigableFile[],
  activeTab: string | null,
  setActiveTab: (tab: string | null) => void,
  closeTab: (fileName: string, e?: React.MouseEvent) => void,
) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case 'w':
            e.preventDefault();
            if (activeTab) {
              closeTab(activeTab);
            }
            break;
          case 'Tab':
            e.preventDefault();
            const currentIndex = activeTabs.findIndex(
              (tab) => tab.name === activeTab,
            );
            const nextIndex = e.shiftKey
              ? (currentIndex - 1 + activeTabs.length) % activeTabs.length
              : (currentIndex + 1) % activeTabs.length;
            if (activeTabs[nextIndex]) {
              setActiveTab(activeTabs[nextIndex].name);
            }
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeTabs, activeTab, setActiveTab, closeTab]);
};

// Secciones con propiedades de accesibilidad mejoradas
const sections: Section[] = [
  {
    name: 'Inicio',
    fileName: 'index.html',
    description: 'Página principal con presentación y resumen de habilidades',
    type: 'section',
    ariaLabel: 'Abrir sección de inicio',
    icon: (
      <DiHtml5
        className="text-orange-400 dark:text-orange-300"
        size={16}
        aria-hidden="true"
      />
    ),
    content: (
      <React.Suspense fallback={<Loader />}>
        <HomeScreen />
      </React.Suspense>
    ),
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
  },
  {
    name: 'Acerca de',
    fileName: 'about.ts',
    description: 'Información personal, experiencia y habilidades técnicas',
    type: 'section',
    ariaLabel: 'Abrir sección acerca de',
    icon: (
      <SiTypescript
        className="text-blue-400 dark:text-blue-300"
        size={16}
        aria-hidden="true"
      />
    ),
    content: (
      <React.Suspense fallback={<Loader />}>
        <About />
      </React.Suspense>
    ),
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
  },
  {
    name: 'Contacto',
    fileName: 'contact.json',
    description: 'Formulario de contacto e información de contacto',
    type: 'section',
    ariaLabel: 'Abrir sección de contacto',
    icon: (
      <VscJson
        className="text-yellow-500 dark:text-yellow-400"
        size={16}
        aria-hidden="true"
      />
    ),
    content: (
      <React.Suspense fallback={<Loader />}>
        <Contact />
      </React.Suspense>
    ),
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
  },
  {
    name: 'CV',
    fileName: 'CV.txt',
    description: 'Curriculum Vitae',
    type: 'section',
    ariaLabel: 'Abrir curriculum vitae',
    icon: (
      <FiFileText
        className="text-gray-600 dark:text-gray-300"
        size={16}
        aria-hidden="true"
      />
    ),
    content: (
      <React.Suspense fallback={<Loader />}>
        <Curriculum />
      </React.Suspense>
    ),
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
  },
];

const projects: Project[] = [
  {
    name: 'Algorífica',
    fileName: 'Algorifica.tsx',
    description:
      'Diseño, desarrollo y gestión de presencia digital con un enfoque estratégico y personalizado.',
    type: 'project',
    ariaLabel: 'Ver proyecto Algorífica',
    tech: ['React', 'TypeScript', 'Nextjs', 'Tailwind'],
    codeUrl: '#',
    liveUrl: 'https://algorifica.com.ar/',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
  },
  {
    name: 'Vocaltech',
    fileName: 'Vocaltech.tsx',
    description:
      'Plataforma innovadora que combina la voz y la tecnología para potenciar marcas y desarrollar talento.',
    type: 'project',
    ariaLabel: 'Ver proyecto Vocaltech',
    tech: ['React', 'TypeScript', 'Zustand', 'Tailwind'],
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
    ariaLabel: 'Ver proyecto NotepadAI',
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
    ariaLabel: 'Ver proyecto Petgram',
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
    ariaLabel: 'Ver proyecto GrasmanAutos',
    tech: ['PHP', 'CSS3', 'HTML5', 'Wordpress'],
    codeUrl: '#',
    liveUrl: 'https://www.grasmanautos.com/',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
  },
];

const getFileIcon = (file: NavigableFile): React.ReactElement => {
  if (file.type === 'section') {
    return file.icon;
  }

  if (file.fileName.endsWith('.tsx'))
    return (
      <DiReact
        className="text-cyan-400 dark:text-cyan-300"
        size={16}
        aria-hidden="true"
      />
    );
  if (file.fileName.endsWith('.jsx'))
    return (
      <DiReact
        className="text-cyan-400 dark:text-cyan-300"
        size={16}
        aria-hidden="true"
      />
    );
  if (file.fileName.endsWith('.blade.php'))
    return <FaLaravel size={16} className="text-red-600" aria-hidden="true" />;
  if (file.fileName.endsWith('.php'))
    return <FaPhp size={16} className="text-blue-400" aria-hidden="true" />;
  return <FiFileText size={16} className="text-gray-400" aria-hidden="true" />;
};

export default function VSCodePortfolio(): React.ReactElement {
  const [openSections, setOpenSections] = useState<string[]>([
    'sections',
    'projects',
  ]);
  const [activeTabs, setActiveTabs] = useState<NavigableFile[]>([]);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const sidebarRef = useRef<HTMLElement>(null);

  // Detectar dispositivos móviles
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setSidebarCollapsed(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleSection = useCallback((sectionName: string): void => {
    setOpenSections((prev) =>
      prev.includes(sectionName)
        ? prev.filter((s) => s !== sectionName)
        : [...prev, sectionName],
    );
  }, []);

  const openFile = useCallback(
    (file: NavigableFile): void => {
      setActiveTabs((prev) => {
        if (!prev.find((tab) => tab.name === file.name)) {
          return [...prev, file];
        }
        return prev;
      });
      setActiveTab(file.name);

      // Colapsar sidebar en móvil después de abrir archivo
      if (isMobile) {
        setSidebarCollapsed(true);
      }
    },
    [isMobile],
  );

  const closeTab = useCallback(
    (fileName: string, e?: React.MouseEvent): void => {
      if (e) {
        e.stopPropagation();
      }

      setActiveTabs((prev) => {
        const newTabs = prev.filter((tab) => tab.name !== fileName);

        if (activeTab === fileName) {
          const newActiveTab =
            newTabs.length > 0 ? newTabs[newTabs.length - 1].name : null;
          setActiveTab(newActiveTab);
        }

        return newTabs;
      });
    },
    [activeTab],
  );

  // Hook para navegación por teclado
  useKeyboardNavigation(activeTabs, activeTab, setActiveTab, closeTab);

  const activeFile: NavigableFile | undefined = activeTabs.find(
    (tab) => tab.name === activeTab,
  );

  return (
    <div className="flex w-full min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-mono transition-colors duration-300">
      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`${
          sidebarCollapsed
            ? isMobile
              ? 'w-0 -translate-x-full'
              : 'w-12'
            : 'w-64 md:w-56'
        } bg-gray-100 dark:bg-gray-800 border-r border-gray-300 dark:border-gray-700 
        flex flex-col transition-all duration-300 flex-shrink-0 ${
          isMobile ? 'fixed inset-y-0 left-0 z-40 shadow-lg' : 'relative'
        }`}
        aria-label="Explorador de archivos"
      >
        {/* Sidebar Header */}
        <header className="flex items-center justify-between p-3 border-b border-gray-300 dark:border-gray-700 flex-shrink-0">
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label={
              sidebarCollapsed ? 'Expandir sidebar' : 'Colapsar sidebar'
            }
          >
            <Menu size={16} aria-hidden="true" />
          </button>

          {!sidebarCollapsed && (
            <div className="flex items-center justify-between gap-2 px-2 py-1">
              <ModeToggle />
              <button
                className="flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-lg 
                         bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 
                         hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Cambiar idioma - actualmente español"
              >
                ES
              </button>
            </div>
          )}
        </header>

        {!sidebarCollapsed && (
          <nav
            className="flex-1 overflow-y-auto min-h-0"
            aria-label="Navegación principal"
          >
            {/* Secciones del sitio */}
            <section className="p-2">
              <button
                onClick={() => toggleSection('sections')}
                className="flex items-center gap-1 w-full text-left text-sm font-semibold 
                         text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 
                         p-1 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-expanded={openSections.includes('sections')}
                aria-controls="sections-list"
                aria-label="Alternar secciones del sitio"
              >
                {openSections.includes('sections') ? (
                  <ChevronDown size={16} aria-hidden="true" />
                ) : (
                  <ChevronRight size={16} aria-hidden="true" />
                )}
                {openSections.includes('sections') ? (
                  <FolderOpen size={16} aria-hidden="true" />
                ) : (
                  <Folder size={16} aria-hidden="true" />
                )}
                <span>SECCIONES</span>
              </button>

              <AnimatePresence>
                {openSections.includes('sections') && (
                  <motion.div
                    id="sections-list"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-4 mt-2 space-y-1"
                    role="group"
                    aria-labelledby="sections-heading"
                  >
                    {sections.map((section) => (
                      <motion.button
                        key={section.name}
                        onClick={() => openFile(section)}
                        className={`flex items-center gap-2 w-full text-left p-1.5 rounded text-sm 
                                  transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                    activeTab === section.name
                                      ? 'bg-blue-100 dark:bg-gray-700 text-blue-900 dark:text-white'
                                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                  }`}
                        whileHover={{ x: 2 }}
                        whileTap={{ scale: 0.98 }}
                        aria-label={section.ariaLabel}
                        aria-current={
                          activeTab === section.name ? 'page' : undefined
                        }
                      >
                        {getFileIcon(section)}
                        <span className="truncate">{section.fileName}</span>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </section>

            {/* Proyectos */}
            <section className="p-2">
              <button
                onClick={() => toggleSection('projects')}
                className="flex items-center gap-1 w-full text-left text-sm font-semibold 
                         text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 
                         p-1 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-expanded={openSections.includes('projects')}
                aria-controls="projects-list"
                aria-label="Alternar proyectos"
              >
                {openSections.includes('projects') ? (
                  <ChevronDown size={16} aria-hidden="true" />
                ) : (
                  <ChevronRight size={16} aria-hidden="true" />
                )}
                {openSections.includes('projects') ? (
                  <FolderOpen size={16} aria-hidden="true" />
                ) : (
                  <Folder size={16} aria-hidden="true" />
                )}
                <span>PROYECTOS</span>
              </button>

              <AnimatePresence>
                {openSections.includes('projects') && (
                  <motion.div
                    id="projects-list"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-4 mt-2 space-y-1"
                    role="group"
                    aria-labelledby="projects-heading"
                  >
                    {projects.map((project) => (
                      <motion.button
                        key={project.name}
                        onClick={() => openFile(project)}
                        className={`flex items-center gap-2 w-full text-left p-1.5 rounded text-sm 
                                  transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                    activeTab === project.name
                                      ? 'bg-blue-100 dark:bg-gray-700 text-blue-900 dark:text-white'
                                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                  }`}
                        whileHover={{ x: 2 }}
                        whileTap={{ scale: 0.98 }}
                        aria-label={project.ariaLabel}
                        aria-current={
                          activeTab === project.name ? 'page' : undefined
                        }
                      >
                        {getFileIcon(project)}
                        <span className="truncate">{project.fileName}</span>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </section>
          </nav>
        )}
      </aside>

      {/* Overlay para móvil */}
      {isMobile && !sidebarCollapsed && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setSidebarCollapsed(true)}
          aria-label="Cerrar menu"
        />
      )}

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Tabs */}
        {activeTabs.length > 0 && (
          <div
            className="flex bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700 
                        overflow-x-auto flex-shrink-0"
            role="tablist"
            aria-label="Pestañas abiertas"
          >
            <div className="flex min-w-max">
              {activeTabs.map((tab) => (
                <div
                  key={tab.name}
                  className={`flex items-center gap-2 min-w-[10rem] max-w-[12rem] justify-between px-2 py-2 
                            text-sm border-r border-gray-300 dark:border-gray-700 whitespace-nowrap 
                            transition-colors cursor-pointer ${
                              activeTab === tab.name
                                ? 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-b-2 border-blue-500 dark:border-blue-400'
                                : 'text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                            }`}
                  onClick={() => setActiveTab(tab.name)}
                  role="tab"
                  aria-selected={activeTab === tab.name}
                  aria-controls={`panel-${tab.name}`}
                  tabIndex={activeTab === tab.name ? 0 : -1}
                >
                  {getFileIcon(tab)}
                  <span className="truncate flex-1">{tab.fileName}</span>
                  <button
                    onClick={(e) => closeTab(tab.name, e)}
                    className="ml-2 hover:bg-gray-300 dark:hover:bg-gray-600 rounded p-0.5 
                             transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label={`Cerrar ${tab.name}`}
                  >
                    <X size={12} aria-hidden="true" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Editor Content */}
        <div className="flex-1 overflow-hidden min-h-0">
          {!activeFile ? (
            <div className="flex items-center justify-center h-full bg-white dark:bg-gray-900 p-4">
              <div className="text-center max-w-md">
                <div className="text-6xl mb-4" aria-hidden="true">
                  👋
                </div>
                <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2">
                  ¡Hola! Bienvenid@ a mi sitio
                </h1>
                <p className="text-gray-600 dark:text-gray-500">
                  Para empezar, selecciona una sección o proyecto del explorador
                </p>
                {isMobile && (
                  <button
                    onClick={() => setSidebarCollapsed(false)}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg 
                             hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Abrir menú
                  </button>
                )}
              </div>
            </div>
          ) : activeFile.type === 'section' ? (
            <div
              className="h-full overflow-y-auto bg-white dark:bg-gray-900"
              role="tabpanel"
              id={`panel-${activeFile.name}`}
              aria-labelledby={`tab-${activeFile.name}`}
            >
              {activeFile.content}
            </div>
          ) : (
            <ProjectView activeFile={activeFile as Project} />
          )}
        </div>
      </main>
    </div>
  );
}

// Componente separado para la vista de proyectos
const ProjectView = React.memo(({ activeFile }: { activeFile: Project }) => (
  <div className="flex-1 flex flex-col min-h-0 bg-white dark:bg-gray-900 overflow-hidden">
    {/* Code Header */}
    <header
      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border-b 
                     border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex-shrink-0 gap-4"
    >
      <div className="flex items-center gap-3 min-w-0">
        {getFileIcon(activeFile)}
        <div className="min-w-0">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white truncate">
            {activeFile.name}
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
            {activeFile.fileName}
          </p>
        </div>
      </div>
      <div className="flex gap-2 flex-shrink-0">
        {activeFile.codeUrl !== '#' && (
          <a
            href={activeFile.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 bg-gray-200 dark:bg-gray-700 
                     hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white 
                     rounded text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label={`Ver código fuente de ${activeFile.name}`}
          >
            <Github size={16} aria-hidden="true" />
            <span className="hidden sm:inline">Código</span>
          </a>
        )}
        {activeFile.liveUrl !== '#' && (
          <a
            href={activeFile.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 
                     rounded text-sm transition-colors text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label={`Ver demo en vivo de ${activeFile.name}`}
          >
            <ExternalLink size={16} aria-hidden="true" />
            <span className="hidden sm:inline">Demo</span>
          </a>
        )}
      </div>
    </header>

    {/* Project Content */}
    <div className="flex-1 flex flex-col lg:flex-row min-h-0 overflow-hidden">
      {/* Code Preview */}
      <section
        className="w-full lg:w-1/2 p-4 bg-gray-50 dark:bg-gray-900 
                       border-b lg:border-b-0 lg:border-r border-gray-300 dark:border-gray-700 
                       overflow-y-auto"
        aria-label="Vista previa del código"
      >
        <div
          className="p-4 rounded-lg bg-white dark:bg-gray-800/50 border 
                      border-gray-200 dark:border-gray-700 shadow-sm"
        >
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
                {activeFile.tech?.map((tech, index) => (
                  <div
                    key={tech}
                    className="text-green-600 dark:text-green-400"
                  >
                    &quot;{tech}&quot;
                    {index < activeFile.tech.length - 1 ? ',' : ''}
                  </div>
                ))}
              </div>
              <div className="text-gray-800 dark:text-gray-300">];</div>
              <div className="mt-4 text-purple-600 dark:text-purple-400">
                return{' '}
                <span className="text-blue-600 dark:text-blue-400">{'<'}</span>
                <span className="text-red-600 dark:text-red-400">
                  ProjectComponent
                </span>{' '}
                <span className="text-blue-600 dark:text-blue-400">
                  {'/>'};
                </span>
              </div>
            </div>
            <div className="text-blue-600 dark:text-blue-400">{'}'}</div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-6">
          <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">
            TECNOLOGÍAS UTILIZADAS
          </h2>
          <div className="flex flex-wrap gap-2">
            {activeFile.tech?.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 border 
                         border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 
                         text-xs rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Live Preview */}
      <section
        className="w-full lg:w-1/2 bg-gray-100 dark:bg-gray-800 flex flex-col overflow-hidden"
        aria-label="Vista previa en vivo"
      >
        <div className="p-3 border-b border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 flex-shrink-0">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <div
              className="w-3 h-3 rounded-full bg-red-500"
              aria-hidden="true"
            ></div>
            <div
              className="w-3 h-3 rounded-full bg-yellow-500"
              aria-hidden="true"
            ></div>
            <div
              className="w-3 h-3 rounded-full bg-green-500"
              aria-hidden="true"
            ></div>
            <span className="ml-2 text-xs truncate">{activeFile.liveUrl}</span>
          </div>
        </div>
        <div className="flex-1 overflow-hidden">
          {activeFile.liveUrl !== '#' ? (
            <iframe
              src={activeFile.liveUrl}
              className="w-full h-full bg-white"
              title={`Vista previa de ${activeFile.name}`}
              loading="lazy"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-500 p-4">
              <div className="text-center">
                <div className="text-4xl mb-4" aria-hidden="true">
                  🚧
                </div>
                <p>Vista previa no disponible</p>
                <p className="text-sm mt-2">Este proyecto está en desarrollo</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  </div>
));
ProjectView.displayName = 'ProjectView';
