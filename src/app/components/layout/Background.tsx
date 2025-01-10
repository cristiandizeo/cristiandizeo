"use client"

import React, { useEffect } from "react";

const SpaceBackground: React.FC = () => {
  useEffect(() => {
    const createSnowflake = () => {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      const initialLeft = Math.random() * window.innerWidth;
      const scale = Math.random() * 1.5 + 0.5;
      const speed = Math.random() * 2 + 1;

      snowflake.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: white;
        left: ${initialLeft}px;
        top: -5px;
        opacity: ${Math.random()};
        transform: scale(${scale});
      `;

      document.body.appendChild(snowflake);

      let posY = -5;
      let wobble = 0;

      const fall = () => {
        posY += speed;
        wobble += 0.02;

        snowflake.style.top = `${posY}px`;
        snowflake.style.left = `${initialLeft + Math.sin(wobble) * 2}px`;

        if (posY < window.innerHeight) {
          requestAnimationFrame(fall);
        } else {
          snowflake.remove();  // Remover el copo cuando sale de la ventana
        }
      };

      fall();
    };

    const interval = setInterval(createSnowflake, 100);

    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
  }, []);

  return (
    <>
      <style jsx>{`
        .snowflake {
          position: absolute;
          width: 4px;
          height: 4px;
          background-color: white;
        }
      `}</style>
    </>
  );
};

export default SpaceBackground;
