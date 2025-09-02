'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-gray-950 text-white z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
    >
      <motion.img
        src="/icon.svg" // poné acá la ruta de tu logo
        alt="Logo"
        className="w-20 h-20" // ajustá el tamaño
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1 }}
      />
    </motion.div>
  );
}
