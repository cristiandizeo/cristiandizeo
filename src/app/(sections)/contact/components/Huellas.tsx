import { useState } from 'react'

type Huella = {
  nombre: string
  mensaje: string
  emoji: string
  fecha: string
}

export default function Huellas() {
  const [huellas, setHuellas] = useState<Huella[]>([])
  const [nombre, setNombre] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [emoji, setEmoji] = useState('🐾')

  const agregarHuella = () => {
    if (!nombre || !mensaje) return
    const nueva: Huella = {
      nombre,
      mensaje,
      emoji,
      fecha: new Date().toLocaleDateString(),
    }
    setHuellas([nueva, ...huellas])
    setNombre('')
    setMensaje('')
  }

  return (
    <div
      className="mt-10 w-full max-w-xl mx-auto p-6 rounded-xl 
                    bg-gray-100 dark:bg-gray-900 
                    text-gray-800 dark:text-gray-200 shadow-lg"
    >
      <h2 className="text-xl font-bold mb-4">🐾 Deja tu huella</h2>

      <div className="space-y-3">
        <input
          type="text"
          placeholder="Tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full p-2 rounded-md border dark:border-gray-700 dark:bg-gray-800"
        />
        <textarea
          placeholder="Escribe un mensaje..."
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          className="w-full p-2 rounded-md border dark:border-gray-700 dark:bg-gray-800"
        />
        <select
          value={emoji}
          onChange={(e) => setEmoji(e.target.value)}
          className="p-2 rounded-md border dark:border-gray-700 dark:bg-gray-800"
        >
          <option>🐾</option>
          <option>🚀</option>
          <option>✨</option>
          <option>❤️</option>
          <option>🌎</option>
        </select>
        <button
          onClick={agregarHuella}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition"
        >
          Dejar huella
        </button>
      </div>

      <div className="mt-6 space-y-3">
        {huellas.map((h, i) => (
          <div
            key={i}
            className="p-3 rounded-lg bg-white dark:bg-gray-800 shadow border dark:border-gray-700"
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold">
                {h.emoji} {h.nombre}
              </span>
              <span className="text-xs text-gray-500">{h.fecha}</span>
            </div>
            <p className="text-sm mt-1">{h.mensaje}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
