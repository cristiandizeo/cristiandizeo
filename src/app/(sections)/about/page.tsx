'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Technologies from './components/Technologies'
import { FaChild, FaGamepad, FaHeart, FaUserGraduate } from 'react-icons/fa'
import { FaLocationPin } from 'react-icons/fa6'

export default function About() {
  return (
    <div className="h-screen p-4 justify-center overflow-auto">
      <div className="flex flex-col md:flex-row h-full space-x-4 space-y-4">
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
              priority
            />
            {/* Información Personal */}
            <div
              className="mt-6 w-full rounded-xl p-6 shadow-lg 
             bg-gray-100 dark:bg-gray-900 
             text-gray-800 dark:text-gray-200 
             transition-colors duration-300"
            >
              <h2 className="text-lg font-semibold border-b border-gray-300 dark:border-gray-700 pb-2">
                Sobre mí
              </h2>

              <p className="mt-4 leading-relaxed text-justify">
                Vivo en <span className="font-semibold">Santa Rosa, La Pampa, Argentina</span>. Soy{' '}
                <span className="font-semibold">Analista de sistemas informáticos</span> y orgulloso
                papá de <span className="font-semibold">3 niñas</span>. Estoy{' '}
                <span className="font-semibold">casado</span> y disfruto mucho compartir mi tiempo
                libre jugando al <span className="font-semibold">fútbol</span>,{' '}
                <span className="font-semibold">viajando</span>, explorando la{' '}
                <span className="font-semibold">astrofotografía</span> y jugando{' '}
                <span className="font-semibold">videojuegos</span>.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="w-full md:w-2/3 space-y-6 p-4">
          <h2 className="text-4xl font-bold text-teal-500 dark:text-teal-300">Sobre mí</h2>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            Soy <span className="text-teal-500 dark:text-teal-300">Cristian Dizeo</span>, un
            desarrollador web apasionado por crear experiencias digitales innovadoras. Actualmente
            me gusta trabajar con
            <span className="text-teal-500 dark:text-teal-300">
              {' '}
              Next.js, Tailwind y TypeScript
            </span>
            , aunque siempre estoy abierto a cualquier tecnología.
          </p>
          <p
            className="text-sm font-mono 
             text-gray-700 dark:text-gray-300 
             bg-gray-100 dark:bg-gray-900 
             border border-gray-300 dark:border-gray-700
             p-3 rounded-lg shadow-sm"
          >
            {`> console.log("Construyendo el futuro, una línea de código a la vez.");`}
          </p>

          <Technologies />
        </div>
      </div>
    </div>
  )
}
