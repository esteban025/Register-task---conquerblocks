import { useState, useEffect } from 'react'

export function Card({ card, onClick, isFlipped, isMatched, disabled }) {
  const [isFlipping, setIsFlipping] = useState(false)

  useEffect(() => {
    if (isFlipped) {
      setIsFlipping(true)
      const timer = setTimeout(() => setIsFlipping(false), 600)
      return () => clearTimeout(timer)
    }
  }, [isFlipped])

  const handleClick = () => {
    if (!disabled && !isFlipped && !isMatched) {
      onClick(card)
    }
  }

  return (
    <div
      onClick={handleClick}
      className={`
        relative aspect-square cursor-pointer transition-all duration-300
        ${disabled || isMatched ? 'cursor-not-allowed' : 'hover:scale-105'}
        ${isMatched ? 'opacity-50' : ''}
      `}
    >
      <div
        className={`
          relative w-full h-full transition-transform duration-600 transform-style-3d
          ${isFlipped || isMatched ? 'rotate-y-180' : ''}
        `}
        style={{ 
          transformStyle: 'preserve-3d',
          transform: isFlipped || isMatched ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        {/* Parte trasera de la carta */}
        <div
          className="absolute inset-0 backface-hidden rounded-xl bg-white/20 backdrop-blur-sm border-2 border-white/30 shadow-lg flex items-center justify-center"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="text-6xl"></div>
        </div>

        {/* Parte frontal de la carta (color) */}
        <div
          className="absolute inset-0 backface-hidden rounded-xl shadow-xl border-2 border-white/50 flex items-center justify-center"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            backgroundColor: card.color
          }}
        >
          {isMatched && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-xl">
              <span className="text-6xl">✓</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
