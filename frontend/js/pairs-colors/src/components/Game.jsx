import { useState, useEffect, useCallback } from 'react'
import { GameBoard } from './GameBoard'
import { ScoreBoard } from './ScoreBoard'
import { GameControls } from './GameControls'

export function GameSection() {
  const [gameStarted, setGameStarted] = useState(false)
  const [gameCompleted, setGameCompleted] = useState(false)
  const [difficulty, setDifficulty] = useState(4) // 4x4 por defecto
  const [moves, setMoves] = useState(0)
  const [matches, setMatches] = useState(0)
  const [time, setTime] = useState(0)
  const [bestTime, setBestTime] = useState(null)
  const [bestMoves, setBestMoves] = useState(null)

  // Timer del juego
  useEffect(() => {
    let interval
    if (gameStarted && !gameCompleted) {
      interval = setInterval(() => {
        setTime(prev => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [gameStarted, gameCompleted])

  // Cargar récords del localStorage
  useEffect(() => {
    const savedBestTime = localStorage.getItem(`bestTime_${difficulty}`)
    const savedBestMoves = localStorage.getItem(`bestMoves_${difficulty}`)
    if (savedBestTime) setBestTime(parseInt(savedBestTime))
    if (savedBestMoves) setBestMoves(parseInt(savedBestMoves))
  }, [difficulty])

  const handleStart = useCallback(() => {
    setGameStarted(true)
    setGameCompleted(false)
    setMoves(0)
    setMatches(0)
    setTime(0)
  }, [])

  const handleReset = useCallback(() => {
    setGameStarted(false)
    setGameCompleted(false)
    setMoves(0)
    setMatches(0)
    setTime(0)
  }, [])

  const handleMove = useCallback(() => {
    setMoves(prev => prev + 1)
  }, [])

  const handleMatch = useCallback(() => {
    setMatches(prev => prev + 1)
  }, [])

  const handleComplete = useCallback(() => {
    setGameCompleted(true)
    
    // Actualizar récords
    const key = `bestTime_${difficulty}`
    const keyMoves = `bestMoves_${difficulty}`
    
    if (!bestTime || time < bestTime) {
      localStorage.setItem(key, time.toString())
      setBestTime(time)
    }
    
    if (!bestMoves || moves < bestMoves) {
      localStorage.setItem(keyMoves, moves.toString())
      setBestMoves(moves)
    }
  }, [time, moves, difficulty, bestTime, bestMoves])

  const handleDifficultyChange = useCallback((size) => {
    setDifficulty(size)
  }, [])

  return (
    <section id="game-section" className="container mx-auto px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-white text-center mb-8">
          🎮 Tablero de Juego
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Controles - 1 columna */}
          <div className="md:col-span-1">
            <GameControls
              onStart={handleStart}
              onReset={handleReset}
              gameStarted={gameStarted}
              gameCompleted={gameCompleted}
              difficulty={difficulty}
              onDifficultyChange={handleDifficultyChange}
            />
          </div>

          {/* Estadísticas - 2 columnas */}
          <div className="md:col-span-2">
            <ScoreBoard
              moves={moves}
              matches={matches}
              time={time}
              gameStarted={gameStarted}
              gameCompleted={gameCompleted}
              bestTime={bestTime}
              bestMoves={bestMoves}
            />
          </div>
        </div>

        {/* Tablero del juego */}
        <div className="flex justify-center">
          <GameBoard
            gridSize={difficulty}
            onMove={handleMove}
            onMatch={handleMatch}
            onComplete={handleComplete}
            gameStarted={gameStarted}
          />
        </div>
      </div>
    </section>
  )
}