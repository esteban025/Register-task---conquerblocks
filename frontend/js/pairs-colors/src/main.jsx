import './global.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './components/Header.jsx'
import { GameDescription } from './components/GameDescription.jsx'
import { GameSection } from './components/Game.jsx'

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-600 via-pink-500 to-orange-400">
      <Header />
      <GameDescription />
      <GameSection />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
