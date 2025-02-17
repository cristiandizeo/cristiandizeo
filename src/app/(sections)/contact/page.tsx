"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Linkedin, Github, Phone, Code } from "lucide-react";
import { BsChatLeftQuote, BsDiscord } from "react-icons/bs";

export default function Contact() {
  return (
    <div className="h-screen bg-gray-950 text-gray-200 p-10 flex flex-col items-center justify-center">
      {/* Encabezado */}
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-teal-400 mb-6"
      >
        <BsChatLeftQuote /> CONTACTAME
      </motion.h1>

      {/* "Formulario" en formato JSON */}
      <motion.pre
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="overflow-x-auto bg-[#252526] border border-gray-700 p-5 rounded-lg text-gray-300 w-[90%] max-w-lg text-sm"
      >
        <code>
          {`{\n`}
          {`  "name": "Cristian Dizeo",\n`}
          {`  "email": `}
          <Link href="mailto:dizeoc@gmail.com" className="text-teal-400 hover:underline">
            "dizeoc@gmail.com"
          </Link>
          {`,\n`}
          {`  "github": `}
          <Link target="blank" href="https://github.com/cristiandizeo" className="text-teal-400 hover:underline">
            "github.com/cristiandizeo"
          </Link>
          {`,\n`}
          {`  "linkedin": `}
          <Link target="blank" href="https://linkedin.com/in/cristian-dizeo" className="text-teal-400 hover:underline">
            "linkedin.com/in/cristian-dizeo"
          </Link>
          {`,\n`}
          {`  "discord": `}
          <Link target="blank" href="https://discordapp.com/users/cdizeo" className="text-teal-400 hover:underline">
            "discordapp.com/users/cdizeo"
          </Link>
          {`,\n`}
          {`  "phone": "+54 29U1|d346+7o2&"\n`}
          {`}`}
        </code>
      </motion.pre>

      {/* Iconos de contacto */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex space-x-5 mt-6"
      >
        <Link href="mailto:dizeoc@gmail.com" className="text-gray-400 hover:text-teal-400">
          <Mail size={24} />
        </Link>
        <Link href="https://discordapp.com/users/cdizeo" className="text-gray-400 hover:text-teal-400">
          <BsDiscord size={24} />
        </Link>
        <Link target="blank" href="https://github.com/cristiandizeo" className="text-gray-400 hover:text-teal-400">
          <Github size={24} />
        </Link>
        <Link target="blank" href="https://linkedin.com/in/cristian-dizeo" className="text-gray-400 hover:text-teal-400">
          <Linkedin size={24} />
        </Link>
      </motion.div>

      {/* Mensaje de "Disponible para proyectos" */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-6 text-center text-gray-400 text-sm"
      >
        🚀 **Disponible para proyectos y colaboraciones.** ¡Escríbeme! 💬
      </motion.p>
    </div>
  );
}
