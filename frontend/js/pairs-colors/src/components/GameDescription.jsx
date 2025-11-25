export function GameDescription() {
  const detailsCards = [
    {
      title: 'Ejercita tu Memoria', 
      icon: '🧠', 
      description: 'Mejora tu capacidad de recordar patrones y colores'
    },
    {
      title: 'Desafío Rápido',
      icon: '⚡',
      description: 'Completa los niveles lo más rápido posible'
    },
    {
      title: 'Gana puntos',
      icon: '🏆',
      description: 'Compite por el mejor puntaje y récord de tiempo'
    }
  ]

  return (
    <main className="container mx-auto px-6 py-12">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
          ¡Encuentra las Parejas de Colores!
        </h2>
        <p className="text-xl text-white/90 leading-relaxed">
          Pon a prueba tu memoria en este emocionante juego de parejas. 
          Voltea las cartas y encuentra los colores que coinciden en tu mejor tiempo.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {
            detailsCards.map(card => (
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 shadow-xl hover:scale-105 transition-transform duration-200">
                <div className="text-4xl mb-3">{card.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-white/80">{card.description}</p>
              </div>
            ))
          }
        </div>
        <a 
          href="#game-section"
          className="mt-10 px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg shadow-2xl hover:shadow-white/50 hover:scale-110 transition-all duration-300 inline-block mx-auto"
        >
          Comenzar
        </a>
      </div>
    </main>
  )
}
