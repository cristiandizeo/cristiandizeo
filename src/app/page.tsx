"use client";

import { useState, useEffect } from "react";

export default function HomePage() {
  const roles = ["backend", "frontend", "fullstack"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let typingTimer: NodeJS.Timeout;

    const handleTyping = () => {
      const currentRole = roles[currentRoleIndex];
      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, -1));
      } else {
        setDisplayedText((prev) => currentRole.slice(0, prev.length + 1));
      }

      if (!isDeleting && displayedText === currentRole) {
        // Pausa después de escribir la palabra completa
        typingTimer = setTimeout(() => setIsDeleting(true), 3000);
      } else if (isDeleting && displayedText === "") {
        // Pasa al siguiente rol después de borrar
        setIsDeleting(false);
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    };

    typingTimer = setTimeout(handleTyping, isDeleting ? 50 : 100); // Velocidad de escritura y borrado
    return () => clearTimeout(typingTimer);
  }, [displayedText, isDeleting, currentRoleIndex]);

  useEffect(() => {
    // Controla el parpadeo del cursor
    const cursorTimer = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500); // Parpadea cada 500ms
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <main className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Fondo dinámico */}
      <div className="absolute inset-0 bg-gradient-to-tr from-gray-500 via-black to-slate-500 blur-3xl opacity-30 animate-pulse"></div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-8 px-6">
        {/* Nombre */}
        <h1 className="font-electrolize text-5xl md:text-8xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 to-neutral-400">
          CRISTIAN DIZEO
        </h1>

        {/* Descripción dinámica */}
        <p className="text-lg md:text-2xl text-gray-300">
          Desarrollador web{" "}
          <span className="text-teal-500 font-semibold">{displayedText}</span>
          {cursorVisible && (
            <span className="blinking-cursor">|</span>
          )}
        </p>
      </div>
    </main>
  );
}
