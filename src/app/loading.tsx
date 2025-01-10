import React from 'react';

export default function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center animate-gradient">
      {/* Texto animado */}
      {/* Efecto de círculos animados */}
      <div className="relative flex justify-center items-center">
        <div className="w-16 h-16 border-4 border-white rounded-full animate-spin border-t-transparent"></div>
        <div className="absolute w-12 h-12 border-4 border-white rounded-full animate-ping border-t-transparent"></div>
      </div>
    </div>
  );
}
