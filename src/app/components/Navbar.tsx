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
    <div className="relative bg-white dark:bg-black top-0 w-full z-50
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

    </div>
  );}
