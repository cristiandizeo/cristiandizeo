"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw, X, Menu, Minimize2, Maximize2, Minus } from "lucide-react";
import Link from "next/link";
import { DiCss3, DiHtml5, DiReact } from "react-icons/di";
import { SiJson, SiTypescript } from "react-icons/si";
import { VscJson } from "react-icons/vsc";

// Mock ModeToggle component since it's not available
const ModeToggle = () => {
  const [isDark, setIsDark] = useState(true);
  
  useEffect(() => {
    // Simulate theme detection
    const theme = localStorage?.getItem('theme') || 'dark';
    setIsDark(theme === 'dark');
  }, []);
  
  const toggleTheme = () => {
    setIsDark(!isDark);
    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', !isDark ? 'dark' : 'light');
    }
  };
  
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md bg-gray-800/80 dark:bg-gray-700/80 
                 hover:bg-gray-700 dark:hover:bg-gray-600 
                 border border-gray-600/50 dark:border-gray-500/50
                 text-gray-300 hover:text-white transition-all duration-200
                 backdrop-blur-sm"
      title="Toggle theme"
    >
      {isDark ? (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
};

const initialTabs = [
  { 
    name: "Home.html", 
    href: "/", 
    icon: <DiHtml5 className="text-orange-400 dark:text-orange-300" size={16} />,
    modified: false
  },
  { 
    name: "About.ts", 
    href: "/about", 
    icon: <SiTypescript className="text-blue-400 dark:text-blue-300" size={16} />,
    modified: true
  },
  { 
    name: "Portfolio.jsx", 
    href: "/portfolio", 
    icon: <DiReact className="text-cyan-400 dark:text-cyan-300" size={16} />,
    modified: false
  },
  { 
    name: "Contact.json", 
    href: "/contact", 
    icon: <VscJson className="text-yellow-500 dark:text-yellow-400" size={16} />,
    modified: false
  },
];

export default function Navbar() {
  const [tabs, setTabs] = useState(initialTabs);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeTab = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setTabs((prev) => prev.filter((tab) => tab.href !== href));
  };

  const resetTabs = () => {
    setTabs(initialTabs);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative mb-20">
    <div className="fixed mb-20 top-0 w-full z-50
                    shadow-lg">
      
      {/* Barra superior estilo VS Code */}
      <div className="hidden md:flex items-center justify-between h-8 px-2 
                      bg-gray-200 dark:bg-gray-900/80 
                      border-b border-gray-700/30 dark:border-gray-600/30">
        
        {/* Controles de ventana */}
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 bg-red-500 hover:bg-red-400 rounded-full cursor-pointer transition-colors"></div>
            <div className="w-3 h-3 bg-yellow-500 hover:bg-yellow-400 rounded-full cursor-pointer transition-colors"></div>
            <div className="w-3 h-3 bg-green-500 hover:bg-green-400 rounded-full cursor-pointer transition-colors"></div>
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-100 ml-4">
            Portfolio - Cristian Dizeo Code
          </span>
        </div>

        {/* Controles de ventana derecha */}
        <div className="flex items-center space-x-1">
          <button className="p-1 hover:bg-gray-700 dark:hover:bg-gray-600 rounded transition-colors">
            <Minus size={12} className="text-gray-400" />
          </button>
          <button className="p-1 hover:bg-gray-700 dark:hover:bg-gray-600 rounded transition-colors">
            <Minimize2 size={12} className="text-gray-400" />
          </button>
          <button className="p-1 hover:bg-red-600 dark:hover:bg-red-500 rounded transition-colors group">
            <X size={12} className="text-gray-400 group-hover:text-white" />
          </button>
        </div>
      </div>

      {/* Barra de pestañas */}
      <div className="flex items-center justify-between px-2 md:px-4 pt-2 h-12">
        
        {/* Contenedor izquierdo: reset + tabs */}
        <div className="flex items-center space-x-1 flex-1 min-w-0">
          
          {/* Botón de reset */}
          <AnimatePresence>
            {tabs.length < initialTabs.length && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={resetTabs}
                className="flex-shrink-0 p-2 text-gray-400 hover:text-white 
                          hover:bg-gray-700/50 dark:hover:bg-gray-600/50 
                          rounded-md transition-all duration-200"
                title="Restore all tabs"
              >
                <RotateCcw size={16} />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Pestañas para desktop */}
          <div className="hidden sm:flex items-center space-x-0.5 flex-1 min-w-0 overflow-hidden scrollbar-hide">
            <AnimatePresence mode="popLayout">
              {tabs.map((tab, index) => (
                <motion.div
                  key={tab.href}
                  layout
                  initial={{ opacity: 0, x: -20, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -20, scale: 0.9 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  className={`group relative flex items-center px-3 py-2 text-sm 
                            rounded-t-lg border-t border-l border-r 
                            transition-all duration-200 cursor-pointer
                            ${
                              pathname === tab.href
                                ? `bg-gray-200 dark:bg-gray-900 text-black dark:text-white 
                                   border-gray-600 dark:border-gray-500
                                   shadow-lg`
                                : `bg-gray-700/50 dark:bg-gray-800/50 text-gray-300 dark:text-gray-400 
                                   border-gray-600/50 dark:border-gray-500/50 
                                   hover:bg-gray-600 dark:hover:bg-gray-800
                                   hover:text-white`
                            }`}
                >
                  {/* Indicador de pestaña activa */}
                  {pathname === tab.href && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-px left-0 right-0 h-0.5 
                                bg-blue-400 dark:bg-blue-300 rounded-full"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  
                  <div className="flex items-center space-x-2 flex-shrink-0">
                    {tab.icon}
                    <Link href={tab.href} className="truncate max-w-32">
                      {tab.name}
                    </Link>
                    
                    {/* Indicador de archivo modificado */}
                    {tab.modified && (
                      <div className="w-1.5 h-1.5 bg-orange-400 dark:bg-orange-300 rounded-full flex-shrink-0" />
                    )}
                  </div>
                  
                  <button
                    onClick={(e) => closeTab(tab.href, e)}
                    className="ml-2 opacity-0 group-hover:opacity-100 
                              hover:bg-gray-600 dark:hover:bg-gray-700 
                              p-0.5 rounded transition-all duration-200 flex-shrink-0"
                    title={`Close ${tab.name}`}
                  >
                    <X size={12} />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Menú móvil toggle */}
          <button
            onClick={toggleMobileMenu}
            className="sm:hidden p-2 text-gray-300 hover:text-white 
                      hover:bg-gray-700/50 dark:hover:bg-gray-600/50 
                      rounded-md transition-all duration-200"
          >
            <Menu size={20} />
          </button>
        </div>

        {/* Contenedor derecho: ModeToggle */}
        <div className="flex-shrink-0 ml-4">
          <ModeToggle />
        </div>
      </div>

      {/* Menú móvil desplegable */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden border-t border-gray-700/50 dark:border-gray-600/50
                      bg-gray-800/95 dark:bg-gray-900/95 backdrop-blur-md"
          >
            <div className="px-4 py-3 space-y-2">
              {tabs.map((tab, index) => (
                <motion.div
                  key={tab.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center justify-between p-3 rounded-lg 
                            transition-all duration-200
                            ${
                              pathname === tab.href
                                ? "bg-gray-700 dark:bg-gray-800 text-white"
                                : "text-gray-300 hover:bg-gray-700/50 dark:hover:bg-gray-800/50"
                            }`}
                >
                  <Link 
                    href={tab.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-3 flex-1"
                  >
                    {tab.icon}
                    <span>{tab.name}</span>
                    {tab.modified && (
                      <div className="w-2 h-2 bg-orange-400 dark:bg-orange-300 rounded-full" />
                    )}
                  </Link>
                  
                  <button
                    onClick={(e) => closeTab(tab.href, e)}
                    className="p-1 hover:bg-gray-600 dark:hover:bg-gray-700 
                              rounded transition-colors"
                  >
                    <X size={16} />
                  </button>
                </motion.div>
              ))}
              
              {/* Botón reset en móvil */}
              {tabs.length < initialTabs.length && (
                <button
                  onClick={resetTabs}
                  className="w-full flex items-center justify-center space-x-2 
                            p-3 text-gray-400 hover:text-white 
                            hover:bg-gray-700/50 dark:hover:bg-gray-800/50 
                            rounded-lg transition-all duration-200"
                >
                  <RotateCcw size={16} />
                  <span>Restore all tabs</span>
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay para cerrar menú móvil */}
      {isMobileMenuOpen && (
        <div
          className="sm:hidden fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
    </div>
  );
}