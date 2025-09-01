'use client'

import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation'
import { useState, useEffect } from 'react'

export default function HomeScreen() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex flex-col items-center justify-center py-4">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Título con animación de escritura */}
      <div className="text-center my-12">
        <h1
          className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 
                         bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-500 
                         dark:from-blue-300 dark:via-purple-300 dark:to-cyan-300 
                         bg-clip-text text-transparent leading-tight"
        >
          <TypeAnimation
            sequence={[
              'CRISTIAN DIZEO',
              2000,
              'Fullstack developer',
              2000,
              'Systems analyst',
              2000,
              'Web & Mobile',
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            wrapper="span"
            cursor={true}
            style={{ display: 'inline-block', minHeight: '1.2em' }}
          />
        </h1>

        <p className="text-lg sm:text-xl text-gray-800 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Transformando ideas en código eficiente y escalable con tecnologías modernas.
        </p>
      </div>

      {/* Caja estilo terminal mejorada */}
      <div
        className="bg-gray-100 dark:bg-gray-900 backdrop-blur-sm 
             border border-gray-300 dark:border-gray-700
             text-gray-800 dark:text-gray-200 font-mono rounded-xl 
             shadow-2xl w-full max-w-3xl mx-auto relative
             hover:shadow-blue-500/10 transition-all duration-300"
      >
        {/* Barra superior del editor */}
        <div
          className="flex items-center justify-between 
               bg-gray-200 dark:bg-gray-800 
               px-4 py-3 rounded-t-xl 
               border-b border-gray-300 dark:border-gray-700"
        >
          <div className="flex items-center space-x-3">
            <div className="flex space-x-2">
              <span className="w-3 h-3 bg-red-500 hover:bg-red-400 rounded-full transition-colors cursor-pointer"></span>
              <span className="w-3 h-3 bg-yellow-500 hover:bg-yellow-400 rounded-full transition-colors cursor-pointer"></span>
              <span className="w-3 h-3 bg-green-500 hover:bg-green-400 rounded-full transition-colors cursor-pointer"></span>
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-300">developer.js</span>
          </div>
          <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
            <span>UTF-8</span>
            <span>•</span>
            <span>JavaScript</span>
          </div>
        </div>

        {/* Código con sintaxis destacada */}
        <div className="p-6 m-2 overflow-x-auto">
          <pre className="text-sm sm:text-base leading-relaxed">
            <code className="block">
              <span className="text-purple-600 dark:text-purple-400">const</span>{' '}
              <span className="text-blue-600 dark:text-blue-300">developer</span>{' '}
              <span className="text-gray-800 dark:text-gray-200">=</span>{' '}
              <span className="text-yellow-600 dark:text-yellow-300">{'{'}</span>
              <br />
              <span className="ml-4 text-cyan-500 dark:text-cyan-300">name</span>
              <span className="text-gray-300 dark:text-gray-200">:</span>{' '}
              <span className="text-green-500 dark:text-green-300">"Cristian Dizeo"</span>
              <span className="text-gray-300 dark:text-gray-200">,</span>
              <br />
              <span className="ml-4 text-cyan-500 dark:text-cyan-300">role</span>
              <span className="text-gray-300 dark:text-gray-200">:</span>{' '}
              <span className="text-yellow-400 dark:text-yellow-300">[</span>
              <span className="text-green-500 dark:text-green-300">"Full Stack Developer"</span>
              <span className="text-gray-300 dark:text-gray-200">,</span>{' '}
              <span className="text-green-500 dark:text-green-300">"Frontend Specialist"</span>
              <span className="text-yellow-400 dark:text-yellow-300">]</span>
              <span className="text-gray-300 dark:text-gray-200">,</span>
              <br />
              <span className="ml-4 text-cyan-500 dark:text-cyan-300">experience</span>
              <span className="text-gray-300 dark:text-gray-200">:</span>{' '}
              <span className="text-green-500 dark:text-green-300">"5+ years"</span>
              <span className="text-gray-300 dark:text-gray-200">,</span>
              <br />
              <span className="ml-4 text-cyan-500 dark:text-cyan-300">skills</span>
              <span className="text-gray-300 dark:text-gray-200">:</span>{' '}
              <span className="text-yellow-400 dark:text-yellow-300">[</span>
              <br />
              <span className="ml-8 text-green-500 dark:text-green-300">"React"</span>
              <span className="text-gray-300 dark:text-gray-200">,</span>{' '}
              <span className="text-green-500 dark:text-green-300">"React Native"</span>
              <span className="text-gray-300 dark:text-gray-200">,</span>{' '}
              <span className="text-green-500 dark:text-green-300">"Next.js"</span>
              <span className="text-gray-300 dark:text-gray-200">,</span>
              <br />
              <span className="ml-8 text-green-500 dark:text-green-300">"Supabase"</span>
              <span className="text-gray-300 dark:text-gray-200">,</span>{' '}
              <span className="text-green-500 dark:text-green-300">"TypeScript"</span>
              <br />
              <span className="ml-4 text-yellow-400 dark:text-yellow-300">]</span>
              <span className="text-gray-300 dark:text-gray-200">,</span>
              <br />
              <span className="ml-4 text-cyan-500 dark:text-cyan-300">currentlyLearning</span>
              <span className="text-gray-300 dark:text-gray-200">:</span>{' '}
              <span className="text-yellow-400 dark:text-yellow-300">[</span>
              <span className="text-green-500 dark:text-green-300">"English Conversation"</span>
              <span className="text-gray-300 dark:text-gray-200">,</span>{' '}
              <span className="text-green-500 dark:text-green-300">"AI Integrations"</span>
              <span className="text-yellow-400 dark:text-yellow-300">]</span>
              <span className="text-gray-300 dark:text-gray-200">,</span>
              <br />
              <span className="ml-4 text-cyan-500 dark:text-cyan-300">location</span>
              <span className="text-gray-300 dark:text-gray-200">:</span>{' '}
              <span className="text-green-500 dark:text-green-300">
                              <Link
                href="https://share.google/vOB3ZjpMrNg1QNwqa"
                className="text-green-500 dark:text-green-300 hover:text-green-300 dark:hover:text-green-200 
                           hover:underline transition-all duration-200 cursor-pointer"
              >
                "Santa Rosa, La Pampa, Argentina"
                </Link>
              </span>
              <span className="text-gray-300 dark:text-gray-200">,</span>
              <br />
              <span className="ml-4 text-cyan-500 dark:text-cyan-300">contact</span>
              <span className="text-gray-300 dark:text-gray-200">:</span>{' '}
              <span className="text-yellow-400 dark:text-yellow-300">{'{'}</span>
              <br />
              <span className="ml-8 text-cyan-500 dark:text-cyan-300">email</span>
              <span className="text-gray-300 dark:text-gray-200">:</span>{' '}
              <Link
                href="mailto:dizeocristian@gmail.com"
                className="text-green-500 dark:text-green-300 hover:text-green-300 dark:hover:text-green-200 
                           hover:underline transition-all duration-200 cursor-pointer"
              >
                "dizeocristian@gmail.com"
              </Link>
              <span className="text-gray-300 dark:text-gray-200">,</span>
              <br />
              <span className="ml-8 text-cyan-500 dark:text-cyan-300">linkedin</span>
              <span className="text-gray-300 dark:text-gray-200">:</span>{' '}
              <Link
                href="https://linkedin.com/in/cristian-dizeo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 dark:text-green-300 hover:text-green-300 dark:hover:text-green-200 
                           hover:underline transition-all duration-200 cursor-pointer"
              >
                "linkedin.com/in/cristian-dizeo"
              </Link>
              <span className="text-gray-300 dark:text-gray-200">,</span>
              <br />
              <span className="ml-8 text-cyan-500 dark:text-cyan-300">github</span>
              <span className="text-gray-300 dark:text-gray-200">:</span>{' '}
              <Link
                href="https://github.com/cristiandizeo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 dark:text-green-300 hover:text-green-300 dark:hover:text-green-200 
                           hover:underline transition-all duration-200 cursor-pointer"
              >
                "github.com/cristiandizeo"
              </Link>
              <br />
              <span className="ml-4 text-yellow-400 dark:text-yellow-300">{'}'}</span>
              <br />
              <span className="text-yellow-400 dark:text-yellow-300">{'}'}</span>
              <span className="text-gray-300 dark:text-gray-200">;</span>
              <br />
              <br />
              {/* Línea adicional con efecto de cursor parpadeante */}
              <span className="text-gray-500 dark:text-gray-600">
                // Ready to create amazing things ✨
              </span>
            </code>
          </pre>
        </div>
      </div>

      {/* Botón de acción (opcional) */}
      <div className="text-center">
        <div className="inline-flex items-center space-x-4">
          <div className="w-2 h-2 bg-green-400 dark:bg-green-300 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-400 dark:text-gray-500 font-mono">
            Available for new opportunities
          </span>
        </div>
      </div>
    </div>
  )
}
