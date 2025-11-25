import { useState, useEffect } from 'react'
import { Card } from './Card'

// Paleta de colores vibrantes
const COLORS = [
  '#FF6B6B', // Rojo
  '#4ECDC4', // Turquesa
  '#45B7D1', // Azul
  '#FFA07A', // Salmón
  '#98D8C8', // Verde menta
  '#F7DC6F', // Amarillo
  '#BB8FCE', // Púrpura
  '#85C1E2', // Celeste
  '#F8B739', // Naranja
  '#52BE80', // Verde
  '#EC7063', // Rosa
  '#5DADE2', // Azul claro
]

// Generar tablero con parejas
const generateBoard = (gridSize) => {
  const numPairs = (gridSize * gridSize) / 2
  const selectedColors = COLORS.slice(0, numPairs)
  
  // Crear parejas
  const cards = selectedColors.flatMap((color, index) => [
    { id: `${index}-a`, color, pairId: index },
    { id: `${index}-b`, color, pairId: index }
  ])
  
  // Mezclar
  return cards.sort(() => Math.random() - 0.5)
}

export function GameBoard({ gridSize, onMove, onMatch, onComplete, gameStarted }) {
  const [cards, setCards] = useState([])
  const [flippedCards, setFlippedCards] = useState([])
  const [matchedPairs, setMatchedPairs] = useState([])
  const [disabled, setDisabled] = useState(false)

  // Inicializar tablero
  useEffect(() => {
    if (gameStarted) {
      setCards(generateBoard(gridSize))
      setFlippedCards([])
      setMatchedPairs([])
      setDisabled(false)
    }
  }, [gridSize, gameStarted])

  // Verificar parejas
  useEffect(() => {
    if (flippedCards.length === 2) {
      setDisabled(true)
      onMove()

      const [first, second] = flippedCards
      
      if (first.pairId === second.pairId) {
        // ¡Pareja encontrada!
        setTimeout(() => {
          setMatchedPairs(prev => [...prev, first.pairId])
          setFlippedCards([])
          setDisabled(false)
          onMatch()
        }, 800)
      } else {
        // No coinciden
        setTimeout(() => {
          setFlippedCards([])
          setDisabled(false)
        }, 1200)
      }
    }
  }, [flippedCards, onMove, onMatch])

  // Verificar victoria
  useEffect(() => {
    if (matchedPairs.length > 0 && matchedPairs.length === (gridSize * gridSize) / 2) {
      setTimeout(() => {
        onComplete()
      }, 500)
    }
  }, [matchedPairs, gridSize, onComplete])

  const handleCardClick = (card) => {
    if (flippedCards.length < 2 && !flippedCards.find(c => c.id === card.id)) {
      setFlippedCards(prev => [...prev, card])
    }
  }

  if (!gameStarted) {
    return null
  }

  return (
    <div
      className="grid gap-3 md:gap-4 mx-auto max-w-2xl"
      style={{ 
        gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
      }}
    >
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          onClick={handleCardClick}
          isFlipped={flippedCards.some(c => c.id === card.id)}
          isMatched={matchedPairs.includes(card.pairId)}
          disabled={disabled}
        />
      ))}
    </div>
  )
}
