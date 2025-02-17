"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Technologies from "./components/Technologies";
import { FaChild, FaGamepad, FaHeart, FaUserGraduate } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

export default function About() {
  return (
    <div className="h-screen my-auto justify-center bg-gray-950 text-gray-200 overflow-auto">
    <div className="flex flex-col md:flex-row h-full">
      {/* Columna Izquierda - Imagen */}
      <div className="w-full md:w-1/3 flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/about.webp" // Reemplázalo con tu imagen
            alt="Cristian Dizeo"
            width={250}
            height={250}
            className="mx-auto grayscale rounded-full border-2 border-white"
          />
           {/* Información Personal */}
           <div className="mt-6 space-y-3 bg-gray-900 p-4 rounded-lg w-full text-sm">
           <div className="flex items-center space-x-2">
            <FaLocationPin className="text-red-400" />
            <span><strong>Vivo en:</strong> Santa Rosa, La Pampa, Argentina</span>
          </div>
           <div className="flex items-center space-x-2">
            <FaUserGraduate className="text-blue-400" />
            <span><strong>Estudios:</strong> Analista de sistemas informáticos</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaChild className="text-yellow-400" />
            <span><strong>Hijos:</strong> 3 niñas</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaHeart className="text-red-500" />
            <span><strong>Situación Sentimental:</strong> Casado</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaGamepad className="text-green-400" />
            <span><strong>Hobbies:</strong> Fútbol, Viajes, Videojuegos</span>
          </div>

        </div>
        </motion.div>
      </div>

      <div className="w-full md:w-2/3 space-y-4 py-4">
        <h2 className="text-4xl font-bold text-teal-400">Sobre mí</h2>
        <p className="text-lg leading-relaxed text-gray-300">
          Soy <span className="text-teal-400">Cristian Dizeo</span>, un desarrollador web 
          apasionado por crear experiencias digitales innovadoras. Actualmente me gusta trabajar con 
          <span className="text-teal-400"> Next.js, Tailwind y TypeScript</span>, aunque siempre estoy abierto a cualquier tecnología.
        </p>
        <p className="text-sm font-mono text-gray-400 bg-gray-900 p-3 rounded">
          {`> console.log("Construyendo el futuro, una línea de código a la vez.");`}
        </p>
      <Technologies />
      </div>
      
    </div>
    </div>
  );
}
