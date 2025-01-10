"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Code, Briefcase, GraduationCap, Brain, Users } from "lucide-react";
import SkillsMarquee from "./components/Marquee";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Introducción Personal",
    icon: Users,
    content: (
      <p>¡Hola! Soy Cristian Dizeo, <b>Desarrollador web Fullstack</b> y <b>Analista de sistemas</b>, apasionado por crear soluciones tecnológicas innovadoras y eficientes. Mi enfoque está en construir y colaborar con aplicaciones modernas y escalables utilizando herramientas como Laravel, React, Next.js, Node.js y tecnologías complementarias como Firebase, Cloudinary y Tailwind CSS, entre otras. <br /> Soy una persona resiliente y comprometida, decidido a afrontar retos con determinación y creatividad, características que aplico en cada proyecto en el que participo. Si buscas a alguien apasionado por la innovación, que combine habilidades técnicas, experiencia en gestión de proyectos y una visión creativa, estoy listo para aportar a tu equipo.</p>
    ),
  },
  {
    id: 2,
    title: "Habilidades",
    icon: Code,
    content: (
      <SkillsMarquee />
    ),
  },
  {
    id: 3,
    title: "Experiencia y Logros",
    icon: Briefcase,
    content:
      "• Lideré el desarrollo de múltiples proyectos web exitosos\n• Optimicé el rendimiento de aplicaciones, mejorando los tiempos de carga en un 40%\n• Implementé soluciones escalables utilizando arquitecturas modernas",
  },
  {
    id: 4,
    title: "Educación",
    icon: GraduationCap,
    content:
      "• Ingeniero en Sistemas Computacionales\n• Certificación en Desarrollo Web Full Stack\n• Múltiples cursos especializados en tecnologías modernas",
  },
  {
    id: 5,
    title: "Mi Filosofía de Trabajo",
    icon: Brain,
    content:
      "Creo firmemente en el aprendizaje continuo y la mejora constante. Mi enfoque se centra en crear soluciones eficientes y mantenibles, siempre considerando las mejores prácticas y tendencias actuales en desarrollo de software.",
  },
];

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Retraso simulado sin necesidad de async en la función principal
  useEffect(() => {
    const timer = setTimeout(() => {
      // Código que deseas ejecutar después de los 2 segundos
    }, 2000);

    // Limpiar el temporizador cuando el componente se desmonte
    return () => clearTimeout(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const IconComponent = slides[currentSlide].icon;
  return (
    <section className="relative flex items-center justify-center min-h-screen ">
      {/* Header with photo */}
      <div className="px-8 m-5 flex items-center justify-center">
        <div className="text-center">
          <div className="w-56 h-56 rounded-full overflow-hidden mx-auto mb-4 border-4 border-gray-300">
            <Image
              src="/img/about.png"
              alt="Profile"
              className="rounded-full"
              width={500} // Especifica el ancho deseado
              height={500} // Especifica la altura deseada
            />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Cristian Dizeo</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Desarrollador Full Stack <br />Analista de sistemas</p>
        </div>
      </div>

      {/* Main content slider */}
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="max-w-2xl w-full">
          <div className="bg-gray-300/50 backdrop-blur-sm dark:bg-gray-800/50 rounded-lg shadow-lg p-8 transition-all duration-500">
            <div className="flex items-center gap-4 mb-6">
              <IconComponent className="w-8 h-8 text-gray-700 dark:text-gray-300" />
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                {slides[currentSlide].title}
              </h2>
            </div>
            <div className="min-h-[200px] text-white">
              {typeof slides[currentSlide].content === "string" ? (
                <p className="whitespace-pre-line">{slides[currentSlide].content}</p>
              ) : (
                slides[currentSlide].content
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-6 items-center">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-gray-700 text-gray-200 hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? "bg-gray-700 dark:bg-gray-300" : "bg-gray-300 dark:bg-gray-600"}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-gray-700 text-gray-200 hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
