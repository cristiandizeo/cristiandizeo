import React from 'react';

export default function Curriculum() {
  return (
    <div className="w-full h-screen">
      <iframe
        src="/cv.pdf" // ruta de tu archivo PDF en la carpeta public
        className="w-full h-full"
        title="Curriculum Vitae"
      />
    </div>
  );
}
