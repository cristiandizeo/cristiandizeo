"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 2000); // Simula carga
    return () => clearTimeout(timer);
  }, []);

  return (
    isVisible && (
      <motion.div
        className="fixed inset-0 flex items-center justify-center bg-gray-950 text-white"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        onAnimationComplete={() => setIsVisible(false)}
      >
        <motion.div
          className="relative w-12 h-12 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        >
          <div className="absolute w-full h-full border-4 border-transparent border-t-gray-500 rounded-full"></div>
          <div className="absolute w-3/4 h-3/4 border-4 border-transparent border-t-gray-400 rounded-full"></div>
          <div className="absolute w-1/2 h-1/2 border-4 border-transparent border-t-gray-300 rounded-full"></div>
        </motion.div>
      </motion.div>
    )
  );
}
