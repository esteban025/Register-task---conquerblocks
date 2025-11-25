export function GameControls({ 
  onStart, 
  onReset, 
  gameStarted, 
  gameCompleted,
  difficulty,
  onDifficultyChange 
}) {
  const difficulties = [
    { name: 'Fácil', size: 4, label: '4x4' },
    { name: 'Medio', size: 6, label: '6x6' },
    { name: 'Difícil', size: 8, label: '8x8' }
  ]

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl">
      {/* Selector de dificultad */}
      {!gameStarted && (
        <div className="mb-6">
          <h3 className="text-xl font-bold text-white mb-3 text-center">🎮 Selecciona la Dificultad</h3>
          <div className="grid grid-cols-3 gap-3">
            {difficulties.map((diff) => (
              <button
                key={diff.size}
                onClick={() => onDifficultyChange(diff.size)}
                className={`
                  py-3 px-4 rounded-lg font-semibold transition-all duration-200
                  ${difficulty === diff.size 
                    ? 'bg-white text-purple-600 shadow-lg scale-105' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                  }
                `}
              >
                <div className="text-sm">{diff.name}</div>
                <div className="text-xs opacity-75">{diff.label}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Botones de control */}
      <div className="flex gap-3">
        {!gameStarted ? (
          <button
            onClick={onStart}
            className="flex-1 bg-linear-to-r from-green-400 to-blue-500 text-white font-bold py-4 px-6 rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200"
          >
            <span className="text-xl">🚀</span>
            <span className="ml-2">Iniciar Juego</span>
          </button>
        ) : (
          <>
            <button
              onClick={onReset}
              className="flex-1 bg-linear-to-r from-orange-400 to-red-500 text-white font-bold py-4 px-6 rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200"
            >
              <span className="text-xl">🔄</span>
              <span className="ml-2">Reiniciar</span>
            </button>
            {gameCompleted && (
              <button
                onClick={onStart}
                className="flex-1 bg-linear-to-r from-green-400 to-blue-500 text-white font-bold py-4 px-6 rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200"
              >
                <span className="text-xl">🎯</span>
                <span className="ml-2">Jugar Otra Vez</span>
              </button>
            )}
          </>
        )}
      </div>

      {/* Instrucciones */}
      {!gameStarted && (
        <div className="mt-4 p-4 bg-white/5 rounded-lg">
          <h4 className="text-sm font-semibold text-white mb-2">📝 Cómo Jugar:</h4>
          <ul className="text-xs text-white/70 space-y-1">
            <li>• Voltea dos cartas en cada turno</li>
            <li>• Encuentra todas las parejas de colores</li>
            <li>• Completa el juego en el menor tiempo posible</li>
          </ul>
        </div>
      )}
    </div>
  )
}
