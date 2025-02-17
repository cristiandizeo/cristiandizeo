"use client";

import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <main className="h-screen overflow-auto flex flex-col items-center justify-center bg-gray-950 text-white px-6">
      {/* Título con animación de escritura */}
      <h1 className="relative text-5xl/[2] md:text-7xl/[2] font-bold text-center mb-4">
        <TypeAnimation
          sequence={[
            "CRISTIAN DIZEO",
            1500,
            "Desarrollador Web",
            1500,
            "React | Next.js | TypeScript",
            1500,
          ]}
          speed={50}
          repeat={Infinity}
        />
      </h1>

      <p className="text-xl text-gray-400 text-center mb-8">
        Transformando ideas en código eficiente y escalable.
      </p>

      {/* Caja estilo terminal con "Sobre Mí" */}
      <div className="bg-gray-950 text-gray-300 font-mono rounded-lg p-4 shadow-lg w-full max-w-2xl mx-auto relative">
  {/* Barra superior de VS Code */}
  <div className="flex items-center bg-[#252526] px-3 py-1 rounded-t-lg text-sm text-gray-400">
    <div className="flex space-x-2">
      <span className="w-3 h-3 bg-red-500 rounded-full"></span>
      <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
    </div>
    <span className="ml-3">developer.js</span>
  </div>

  {/* Código con sintaxis destacada */}
  <pre className="mt-2 text-sm leading-relaxed overflow-x-auto">
    <code>
      <span className="text-blue-400">const</span> developer = {"{"}
      <br />
      &nbsp;&nbsp;<span className="text-blue-200">name</span>: <span className="text-orange-400">"Cristian Dizeo"</span>,
      <br />
      &nbsp;&nbsp;<span className="text-blue-200">role</span>: [<span className="text-orange-400">"Frontend Developer"</span>, <span className="text-orange-400">"Backend Developer"</span>],
      <br />
      &nbsp;&nbsp;<span className="text-blue-200">years_xp</span>: <span className="text-red-400">5</span>,
      <br />
      &nbsp;&nbsp;<span className="text-blue-200">currentlyLearning</span>: [<span className="text-orange-400">"English conversation"</span>, <span className="text-orange-400">"AI Integrations"</span>],
      <br />
      &nbsp;&nbsp;<span className="text-blue-200">contact</span>: <span className="text-orange-400">"dizeoc@gmail.com"</span>
      <br />
      {"};"}
    </code>
  </pre>
</div>


    </main>
  );
}
