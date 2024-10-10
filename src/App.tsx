import React from 'react'
import ThreeScene from './components/ThreeScene'
import { Github } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 text-white">
      <header className="p-6">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">3D Cube & Sphere</h1>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
            <Github size={24} />
          </a>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Experience 3D Magic</h2>
            <p className="text-xl mb-8">
              Dive into the world of 3D graphics with our interactive cube and sphere demo. Built with Three.js and React, this showcase demonstrates the power of web-based 3D rendering.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              Learn More
            </button>
          </div>
          <div className="h-96 bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <ThreeScene />
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-center p-4 mt-12">
        <p>&copy; 2024 3D Cube & Sphere Demo. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App