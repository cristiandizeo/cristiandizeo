"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
// Datos de las habilidades
const skills = [
  { name: "TypeScript", icon: "/img/typescript_logo.svg" },
  { name: "Laravel", icon: "/img/laravel_logo.svg" },
  { name: "Node.js", icon: "/img/nodejs_logo.svg" },
  { name: "ChatGPT", icon: "/img/chatgpt_logo.svg" },
  { name: "MySQL", icon: "/img/mysql_logo.svg" },
];

export default function SkillsMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;

    if (!marquee) return;

    // Configuración del desplazamiento
    const interval = setInterval(() => {
      if (marquee.scrollLeft >= marquee.scrollWidth / 2) {
        // Reinicia el desplazamiento cuando llegue al final
        marquee.scrollLeft = 0;
      } else {
        // Incrementa el desplazamiento
        marquee.scrollLeft += 1;
      }
    }, 20); // Velocidad del desplazamiento

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, []);

  return (
    <div className="relative">
      <div
        ref={marqueeRef}
        className="flex overflow-x-hidden whitespace-nowrap space-x-8 py-4 border-t border-gray-300 dark:border-gray-700"
        style={{ scrollBehavior: "smooth" }}
      >
        {/* Duplicar los ítems para un efecto de bucle continuo */}
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-32 space-y-2 flex-shrink-0"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-16 h-16 object-contain"
            />
            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
