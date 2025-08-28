'use client'

import { JSX, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronRight,
  ChevronDown,
  FileText,
  Folder,
  FolderOpen,
  X,
  ExternalLink,
  Github,
  Menu,
  Sun,
  Moon,
} from 'lucide-react'
import { ModeToggle } from '@/app/components/ThemeButton'

interface Project {
  name: string
  fileName: string
  description: string
  tech: string[]
  codeUrl: string
  liveUrl: string
  color: string
  bgColor: string
}

const projects: Project[] = [
  {
    name: 'Vocaltech',
    fileName: 'Vocaltech.tsx',
    description:
      'Plataforma innovadora que combina la voz y la tecnología para potenciar marcas y desarrollar talento.',
    tech: ['React', 'TypeScript', 'Zustand'],
    codeUrl: 'https://github.com/No-Country-simulation/equipo-h4-01-vocaltech',
    liveUrl: 'https://equipo-h4-01-vocaltech.vercel.app/',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
  },
  {
    name: 'NotepadAI',
    fileName: 'NotepadAI.jsx',
    description: 'Clon ligero de NotebookLM con interacción avanzada de documentos.',
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
    tech: ['React', 'TailwindCSS', 'Laravel', 'Cloudinary'],
    codeUrl: 'https://github.com/No-Country-simulation/grupo-c21-37-n-php-react',
    liveUrl: '#',
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
  },
  {
    name: 'GrasmanAutos',
    fileName: 'GrasmanAutos.php',
    description: 'Concesionaria de vehículos nuevos y usados',
    tech: ['PHP', 'CSS3', 'HTML5', 'Wordpress'],
    codeUrl: '#',
    liveUrl: 'https://www.grasmanautos.com/',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
  },
  {
    name: 'GrasmanAutos',
    fileName: 'GrasmanAutos.php',
    description: 'Concesionaria de vehículos nuevos y usados',
    tech: ['PHP', 'CSS3', 'HTML5', 'Wordpress'],
    codeUrl: '#',
    liveUrl: 'https://www.grasmanautos.com/',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
  },
  {
    name: 'GrasmanAutos',
    fileName: 'GrasmanAutos.php',
    description: 'Concesionaria de vehículos nuevos y usados',
    tech: ['PHP', 'CSS3', 'HTML5', 'Wordpress'],
    codeUrl: '#',
    liveUrl: 'https://www.grasmanautos.com/',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
  },
  {
    name: 'GrasmanAutos',
    fileName: 'GrasmanAutos.php',
    description: 'Concesionaria de vehículos nuevos y usados',
    tech: ['PHP', 'CSS3', 'HTML5', 'Wordpress'],
    codeUrl: '#',
    liveUrl: 'https://www.grasmanautos.com/',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
  },
]

const getFileIcon = (fileName: string): string => {
  if (fileName.endsWith('.tsx')) return '⚛️'
  if (fileName.endsWith('.jsx')) return '⚛️'
  if (fileName.endsWith('.blade.php')) return '🅿️'
  if (fileName.endsWith('.php')) return '🐘'
  return '📄'
}

export default function VSCodePortfolio(): JSX.Element {
  const [openProjects, setOpenProjects] = useState<string[]>([])
  const [activeTabs, setActiveTabs] = useState<Project[]>([])
  const [activeTab, setActiveTab] = useState<string | null>(null)
  const [explorerOpen, setExplorerOpen] = useState<boolean>(true)
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true)

  const openProject = (project: Project): void => {
    if (!activeTabs.find((tab) => tab.name === project.name)) {
      setActiveTabs([...activeTabs, project])
    }
    setActiveTab(project.name)
  }

  const closeTab = (projectName: string, e: React.MouseEvent): void => {
    e.stopPropagation()
    const newTabs = activeTabs.filter((tab) => tab.name !== projectName)
    setActiveTabs(newTabs)

    if (activeTab === projectName) {
      setActiveTab(newTabs.length > 0 ? newTabs[newTabs.length - 1].name : null)
    }
  }

  const activeProject: Project | undefined = activeTabs.find((tab) => tab.name === activeTab)

  return (
    <div className="flex h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-mono transition-colors duration-300">
      {/* Sidebar */}
      <div
        className={`${sidebarCollapsed ? 'w-12' : 'w-80'} bg-gray-100 dark:bg-gray-800 border-r border-gray-300 dark:border-gray-700 flex flex-col transition-all duration-300`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-3 border-b border-gray-300 dark:border-gray-700">
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
    >ES
    </button>
  </div>
          )}
        </div>

        {!sidebarCollapsed && (
          <>
          <div className="overflow-y-auto">
            {/* Projects Folder */}
            <div className="p-2">
              <button
                onClick={() => setExplorerOpen(!explorerOpen)}
                className="flex items-center gap-1 w-full text-left text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 p-1 rounded transition-colors"
              >
                {explorerOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                {explorerOpen ? <FolderOpen size={16} /> : <Folder size={16} />}
                <span>PORTFOLIO</span>
              </button>

              <AnimatePresence>
                {explorerOpen && (
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
                        onClick={() => openProject(project)}
                        className={`flex items-center gap-2 w-full text-left p-1.5 rounded text-sm transition-colors ${
                          activeTab === project.name
                            ? 'bg-blue-100 dark:bg-gray-700 text-blue-900 dark:text-white'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                        }`}
                        whileHover={{ x: 2 }}
                      >
                        <span className="text-base">{getFileIcon(project.fileName)}</span>
                        <span className="truncate">{project.fileName}</span>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          </>
        )}
      </div>

      {/* Main Editor Area */}
      <div className="flex-1 flex flex-col">
        {/* Tabs */}
        <div className="flex bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700 overflow-x-auto">
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
              <span>{getFileIcon(tab.fileName)}</span>
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

        {/* Editor Content */}
        <div className="flex-1 overflow-hidden">
          {!activeProject ? (
            <div className="flex items-center justify-center h-full bg-white dark:bg-gray-900">
              <div className="text-center">
                <div className="text-6xl mb-4">👋</div>
                <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2">
                  ¡Hola! Gracias por visitar mi sitio
                </h2>
                <p className="text-gray-600 dark:text-gray-500">
                  Para empezar, selecciona un archivo del explorador
                </p>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col bg-white dark:bg-gray-900">
              {/* Code Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{getFileIcon(activeProject.fileName)}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {activeProject.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {activeProject.fileName}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {activeProject.codeUrl !== '#' && (
                    <a
                      href={activeProject.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-1.5 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded text-sm transition-colors"
                    >
                      <Github size={16} />
                      Código
                    </a>
                  )}
                  {activeProject.liveUrl !== '#' && (
                    <a
                      href={activeProject.liveUrl}
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
              <div className="flex-1 flex">
                {/* Code Preview (fake code) */}
                <div className="w-1/2 p-4 bg-gray-50 dark:bg-gray-900 border-r border-gray-300 dark:border-gray-700 overflow-y-auto">
                  <div className="p-4 rounded-lg bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 shadow-sm">
                    <div className="space-y-3 text-sm">
                      <div className="text-gray-500 dark:text-gray-500">
                        // {activeProject.fileName}
                      </div>
                      <div className="text-blue-600 dark:text-blue-400">
                        export default function{' '}
                        <span className="text-orange-600 dark:text-yellow-300">
                          {activeProject.name}
                        </span>
                        () {'{'}
                      </div>
                      <div className="ml-4 space-y-2">
                        <div className="text-gray-800 dark:text-gray-300">
                          <span className="text-purple-600 dark:text-purple-400">const</span>{' '}
                          description ={' '}
                          <span className="text-green-600 dark:text-green-400">
                            "{activeProject.description}"
                          </span>
                          ;
                        </div>
                        <div className="text-gray-800 dark:text-gray-300">
                          <span className="text-purple-600 dark:text-purple-400">const</span>{' '}
                          technologies = [
                        </div>
                        <div className="ml-4 space-y-1">
                          {activeProject.tech.map((tech, index) => (
                            <div key={tech} className="text-green-600 dark:text-green-400">
                              "{tech}"{index < activeProject.tech.length - 1 ? ',' : ''}
                            </div>
                          ))}
                        </div>
                        <div className="text-gray-800 dark:text-gray-300">];</div>
                        <div className="mt-4 text-purple-600 dark:text-purple-400">
                          return <span className="text-blue-600 dark:text-blue-400">{'<'}</span>
                          <span className="text-red-600 dark:text-red-400">
                            ProjectComponent
                          </span>{' '}
                          <span className="text-blue-600 dark:text-blue-400">{'/>'}</span>;
                        </div>
                      </div>
                      <div className="text-blue-600 dark:text-blue-400">{'}'}</div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">
                      TECNOLOGÍAS UTILIZADAS
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.tech.map((tech) => (
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
                <div className="w-1/2 bg-gray-100 dark:bg-gray-800 flex flex-col">
                  <div className="p-3 border-b border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="ml-2 text-xs">{activeProject.liveUrl}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    {activeProject.liveUrl !== '#' ? (
                      <iframe
                        src={activeProject.liveUrl}
                        className="w-full h-full bg-white"
                        title={`Preview of ${activeProject.name}`}
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
  )
}
