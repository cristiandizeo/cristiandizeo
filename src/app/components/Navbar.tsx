'use client';

import React from 'react';
import { X, Minimize2, Minus } from 'lucide-react';

export default function Navbar() {
  const handleClose = () => {
    window.location.href = 'https://www.google.com';
  };

  const handleMaximize = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div
      className="bg-white dark:bg-black w-full z-50
                    shadow-lg"
    >
      {/* Barra superior estilo VS Code */}
      <div
        className="hidden md:flex items-center justify-between h-8 px-2 
                      bg-gray-200 dark:bg-gray-900/80 
                      border-b border-gray-700/30 dark:border-gray-600/30"
      >
        {/* Controles de ventana */}
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 bg-red-500 hover:bg-red-400 rounded-full cursor-pointer transition-colors"></div>
            <div className="w-3 h-3 bg-yellow-500 hover:bg-yellow-400 rounded-full cursor-pointer transition-colors"></div>
            <div className="w-3 h-3 bg-green-500 hover:bg-green-400 rounded-full cursor-pointer transition-colors"></div>
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-100 ml-4">
            Cristian Dizeo - Full Stack Developer - Senior technician in
            computer systems analysis
          </span>
        </div>

        {/* Controles de ventana derecha */}
        <div className="flex items-center space-x-1">
          <button
            onClick={handleMaximize}
            className="p-1 hover:bg-gray-700 dark:hover:bg-gray-600 rounded transition-colors"
          >
            <Minus size={12} className="text-gray-400" />
          </button>
          <button
            onClick={handleMaximize}
            className="p-1 hover:bg-gray-700 dark:hover:bg-gray-600 rounded transition-colors"
          >
            <Minimize2 size={12} className="text-gray-400" />
          </button>
          <button
            onClick={handleClose}
            className="p-1 hover:bg-red-600 dark:hover:bg-red-500 rounded transition-colors group"
          >
            <X size={12} className="text-gray-400 group-hover:text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
