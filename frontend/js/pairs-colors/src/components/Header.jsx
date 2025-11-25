export function Header() {
  return (
    <header className="bg-white/10 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white tracking-tight">
            🎨 Pairs Colors
          </h1>
          <nav className="flex gap-4">
            <button className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all duration-200 font-medium">
              Jugar
            </button>
            <button className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all duration-200 font-medium">
              Puntuaciones
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}
