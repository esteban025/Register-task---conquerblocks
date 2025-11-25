import { useEffect } from 'react'

export function ScoreBoard({ 
  moves, 
  matches, 
  time, 
  gameStarted, 
  gameCompleted,
  bestTime,
  bestMoves 
}) {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl">
      <h3 className="text-2xl font-bold text-white mb-4 text-center">📊 Estadísticas</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Tiempo */}
        <div className="bg-white/10 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-white mb-1">
            {formatTime(time)}
          </div>
          <div className="text-sm text-white/70">⏱️ Tiempo</div>
        </div>

        {/* Movimientos */}
        <div className="bg-white/10 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-white mb-1">{moves}</div>
          <div className="text-sm text-white/70">🎯 Movimientos</div>
        </div>

        {/* Parejas encontradas */}
        <div className="bg-white/10 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-white mb-1">{matches}</div>
          <div className="text-sm text-white/70">✨ Parejas</div>
        </div>

        {/* Precisión */}
        <div className="bg-white/10 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-white mb-1">
            {moves === 0 ? '0' : Math.round((matches / moves) * 100)}%
          </div>
          <div className="text-sm text-white/70">🎪 Precisión</div>
        </div>
      </div>

      {/* Récords personales */}
      {(bestTime || bestMoves) && (
        <div className="mt-6 pt-4 border-t border-white/20">
          <h4 className="text-lg font-semibold text-white mb-3 text-center">🏆 Récords Personales</h4>
          <div className="grid grid-cols-2 gap-4">
            {bestTime && (
              <div className="text-center">
                <div className="text-xl font-bold text-yellow-300">{formatTime(bestTime)}</div>
                <div className="text-xs text-white/60">Mejor tiempo</div>
              </div>
            )}
            {bestMoves && (
              <div className="text-center">
                <div className="text-xl font-bold text-yellow-300">{bestMoves}</div>
                <div className="text-xs text-white/60">Menos movimientos</div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mensaje de victoria */}
      {gameCompleted && (
        <div className="mt-4 bg-green-500/20 border-2 border-green-400 rounded-lg p-4 text-center">
          <div className="text-3xl mb-2">🎉</div>
          <div className="text-xl font-bold text-white mb-1">¡Felicitaciones!</div>
          <div className="text-sm text-white/80">
            Completaste el juego en {formatTime(time)} con {moves} movimientos
          </div>
        </div>
      )}
    </div>
  )
}
