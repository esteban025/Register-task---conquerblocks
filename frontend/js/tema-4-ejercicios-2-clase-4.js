// === EJERCICIOS JS - CLASS ===

// ANOTADOR
class Anotador {
  #titulo
  #notas

  constructor(titulo) {
    this.#titulo = titulo
    this.#notas = this.notas = [] // Array de strings
  }

  // Métodos
  agregarNota(nota) {
    this.#notas.push(nota)
  } 
  actualizarNota(id, nota) {
    this.#notas[id -= 1] = nota
  }
  obtenerNota(id) {
    return this.#notas[id -= 1]
  }
  eliminarNota(id) {
    this.#notas.splice(id -= 1, 1)
  }
  eliminarNotas() {
    this.#notas = []
  }
  listarNotas() {
    // devuelve un string con todas las notas y sus respectivos ids
    let resultado = `Notas de ${this.#titulo}:\n`
    this.#notas.forEach((nota, index) => {
      resultado += `${index += 1}: ${nota}\n`
    })
    return resultado
  }
}

console.log('--- EJERCICIO ANOTADOR ---')
const miAnotador = new Anotador('Mi primer anotador')
miAnotador.agregarNota('Comprar leche')
miAnotador.agregarNota('Estudiar JavaScript')
console.log(miAnotador.listarNotas())
miAnotador.actualizarNota(2, 'Estudiar JavaScript y practicar ejercicios')
console.log(miAnotador.listarNotas())
miAnotador.actualizarNota(1, 'Comprar leche y pan')
console.log(miAnotador.listarNotas())
miAnotador.eliminarNota(1)
console.log(miAnotador.listarNotas())


// CELULAR
class Celular {
  #contactos
  #llamadas

  constructor() {
    this.#contactos = [] // Array de objetos { nombre, numero }
    this.#llamadas = [] // Array de objetos { string `` }
  }

  // Métodos
  agregarContacto(contacto){
    const enContactos = this.#contactos.find( c => c.nombre === contacto.nombre)
    if (!enContactos) {
      this.#contactos.push(contacto)
    }
  }
  buscarPorNombre(nombre) {
    const nombreEncontrado = this.#contactos.find( c => c.nombre === nombre)
    if (nombreEncontrado) {
      console.log(nombreEncontrado)
      return nombreEncontrado
    } else {
      console.log("Contacto no encontrado")
    }
  }
  buscarPorNumero(numero) {
    const numeroEncontrado = this.#contactos.find( c => c.numero === numero)
    numeroEncontrado ? console.log(numeroEncontrado) : console.log('Número no encontrado')
  }
  eliminarContacto(nombre) {
    this.#contactos = this.#contactos.splice(
      this.#contactos.findIndex( c => c.nombre === nombre), 1
    )
  }
  llamar(nombre) {
    const contacto = this.buscarPorNombre(nombre)
    if (contacto) {
      const llamada = `Llamando a ${contacto.nombre} al número ${contacto.numero}`
      this.#llamadas.push(llamada)
    } else {
      console.log('No se puede realizar la llamada. Contacto no encontrado.')
    }
  }
  verContactos() {
    return this.#contactos
  }
  verHistorial() {
    return this.#llamadas
  }
}

console.log('--- EJERCICIO CELULAR ---')
const miCelular = new Celular()
miCelular.agregarContacto({ nombre: 'Esteban', numero: '123456789' })
miCelular.agregarContacto({ nombre: 'Ana', numero: '987654321' })
miCelular.buscarPorNombre('Ana')
miCelular.buscarPorNumero('123456789')
miCelular.llamar('Paul')
console.log(miCelular.verContactos())
console.log(miCelular.verHistorial())


// BILLETERA VIRTUAL
class BilleteraVirtual {
  #monto
  #operaciones

  constructor(montoInicial) {
    this.#monto = montoInicial
    this.#operaciones = [] // Array de objetos
  }

  // Métodos
  addExpense(expense){
    const newExpense = {
      ...expense,
      type: 'expense'
    }
    this.#operaciones.push(newExpense)
    this.#monto -= expense.amount
    // console.log(this.#operaciones)
  }

  addProfit(profit){
    const newProfit = {
      ...profit,
      type: 'profit'
    }
    this.#operaciones.push(newProfit)
    this.#monto += profit.amount
    // console.log(this.#operaciones)
  }
  getExpensesByMonth(month){
    const getExpenses = this.#operaciones.filter( exp => {
      const expMonth = new Date(exp.date).getMonth() + 1
      return exp.type === 'expense' && expMonth === month
    })
    return getExpenses
  }
  getProfitsByMonth(month){
    const getProfits = this.#operaciones.filter( prof => {
      const profMonth = new Date(prof.date).getMonth() + 1
      return prof.type === 'profit' && profMonth === month
    })
    return getProfits
  }
  getExpensesByCategory(category){
    const getExpenses = this.#operaciones.filter( exp => {
      return exp.type === 'expense' && exp.category === category
    })
    return getExpenses
  }
  getProfitsByCategory(category){
    const getProfits = $this.#operaciones.filter( prof => {
      return prof.type === 'profit' && prof.category === category
    })
    return getProfits
  }
  calculateTotalByMonth(month){
    const getExp = this.getExpensesByMonth(month)
    const totalExp = getExp.reduce((acc, curr) => acc + curr.amount, 0)
    const getProf = this.getProfitsByMonth(month)
    const totalProf = getProf.reduce((acc, curr) => acc + curr.amount, 0)

    return totalProf - totalExp
  }
  calculateTotalByCategory(category){
    const getExp = this.getExpensesByCategory(category)
    const totalExp = getExp.reduce((acc, curr) => acc + curr.amount, 0)
    const getProf = this.getProfitsByCategory(category)
    const totalProf = getProf.reduce((acc, curr) => acc + curr.amount, 0)

    return totalProf - totalExp
  }
}

// expense or profit = {
//   amount: number,
//   category: string,
//   date: string (YYYY-MM-DD)
//   description: string 
// }

console.log('--- EJERCICIO BILLETERA VIRTUAL ---')
const myWallet = new BilleteraVirtual(1000)

myWallet.addExpense({ amount: 50, category: 'comida', date: '2024-06-15', description: 'Almuerzo' })
myWallet.addProfit({ amount: 200, category: 'sueldo', date: '2024-06-10',  description: 'Pago mensual' })
myWallet.addExpense({ amount: 30, category: 'transporte', date: '2024-05-20', description: 'Taxi' })
myWallet.addProfit({ amount: 150, category: 'freelance', date: '2024-05-25', description: 'Proyecto web' })

console.log('Gastos de Mayo:', myWallet.getExpensesByMonth(5))

const totalJune = myWallet.calculateTotalByMonth(6)
console.log('Total neto de Junio:', totalJune)

