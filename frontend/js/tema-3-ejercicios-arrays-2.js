// === EJERCICIOS ARRAYS 2 ===

// Crea un nuevo array donde cada elemento del array original se duplique
const arrayOriginal = [1, 2, 3, 4, 5, 6 ,7, 8, 9, 10];
const arrayDuplicated = arrayOriginal.map(num => num * 2);
console.log('Array Duplicado:', arrayDuplicated); // [2, 4, 6, 8, ..., 20]

// Calcula la suma de todos los elementos en el array creado en el ejercicio 1 e imprímelo.
const sumTotal = arrayOriginal.reduce((acc, curr) => acc + curr, 0);
console.log('Suma Total:', sumTotal); // 55


// Crea un nuevo array que contenga solo los números pares del array original.

const numbersPares = arrayOriginal.filter(num => num % 2 === 0);
console.log('Números Pares:', numbersPares); // [2, 4, 6, 8, 10]


// Pide al usuario que ingrese un número y verifica si está presente en el array.
// const numberInput = parseFloat(prompt("Ingresa un número para verificar si está en el array original (1-10):"));
const numberInput = 5; // Valor fijo para entornos sin prompt
const isNumberInArray = arrayOriginal.includes(numberInput)
isNumberInArray
  ? console.log(`El número ${numberInput} está presente en el array.`)
  : console.log(`El número ${numberInput} no está presente en el array.`);


// Ordena el array de numeros en orden descendente e imprímelo.
const arrayOrdenadoDesc = [...arrayOriginal].sort((a,b) => b - a);
console.log('Array Ordenado Descendente:', arrayOrdenadoDesc); // [10, 9, 8, ..., 1] 

// Dado dos arrays de numeros, crea una funcion que devuelva un nuevo array que contenga los elementos que son múltiplos de 3 y no sean múltipos de 5. Además, asegúrate de que el nuevo array no contenga duplicados.

const array1 = [2, 3, 5, 9, 12, 15];
const array2 = [4, 6, 9, 12, 18, 20];

const getMultiplesOf3Not5 = (arr1, arr2) => {
  const combinedArr = [...arr1, ...arr2]

  const filteredArr = combinedArr.filter((num, idx) => {
    return num % 3 === 0 && num % 5 !== 0 && combinedArr.indexOf(num) === idx;
  })
  return filteredArr;
}
const resultArray = getMultiplesOf3Not5(array1, array2);
console.log('Números múltiplos de 3 y no de 5 sin duplicados:', resultArray); // [3, 9, 6, 12, 18]

// Dado un array de objetos que representan libros, cada objeto tien propiedades como titulo, autoe y año de publicacion, filtra los libros que fueron publicados despues de 2000 y crea un nuevo array con los titulos de esos libros en mayusculas.

const books = [
  { titulo: "El código Da Vinci", autor: "Dan Brown", year: 2003 },
  { titulo: "Harry Potter y la piedra filosofal", autor: "J.K. Rowling", year: 1997 },
  { titulo: "El nombre del viento", autor: "Patrick Rothfuss", year: 2007 },
  { titulo: "1984", autor: "George Orwell", year: 1949 },
  { titulo: "Los juegos del hambre", autor: "Suzanne Collins", year: 2008 },
]

const booksAfter2000 = books
  .filter( book => book.year > 2000 )
  .map( book => book.titulo.toUpperCase() );
console.log('Libros publicados después del 2000 en mayúsculas:', booksAfter2000);

// filtrar los estudiantes qu tienen una edad mayor o igual a 18 años y guardalos en un nuevo array llamdo estudiantesMayoresDeEdad

const students = [
  { nombre: "Ana", edad: 17, calificaciones: [10, 97, 88] },
  { nombre: "Luis", edad: 19, calificaciones: [85, 76, 90] },
  { nombre: "María", edad: 16, calificaciones: [92, 81, 79] },
  { nombre: "Carlos", edad: 22, calificaciones: [70, 88, 95] },
  { nombre: "Sofía", edad: 18, calificaciones: [100, 89, 94]},
]

const studentsAdults = students.filter( student => student.edad >= 18)
console.log('Estudiantes mayores de edad:', studentsAdults); // [{nombre: "Luis", edad: 19}, {nombre: "Carlos", edad: 22}, {nombre: "Sofía", edad: 18}]

// calcula el promedio para cada estudiante en el array estudiantesMayoresDeEdad y almacena los resultados en un nuevo array llamado promediosCalicaciones.

const gradeAverages = []
students.map( student => {
  const average = student.calificaciones.reduce((acc, curr) => acc + curr, 0) / student.calificaciones.length;
  gradeAverages.push({
    nombre: student.nombre,
    promedio: average.toFixed(2)
  })
})

console.log('Promedios de calificaciones de los estudiantes:', gradeAverages); 
// [{nombre: "Ana", promedio: "65.00"}, {nombre: "Luis", promedio: "83.67"}, ... ]

// estudiante con la calificacion mas alta

const topStudent = students.reduce((top, curr) => {
  const currentAverage = curr.calificaciones.reduce((acc, curr) => acc + curr, 0) / curr.calificaciones.length;
  const topAverage = top.calificaciones.reduce((acc, curr) => acc + curr, 0) / top.calificaciones.length;
  return currentAverage > topAverage ? curr : top;
})
console.log('Estudiante con la calificación más alta:', topStudent.nombre, 'con su calificaicon más alta:', topStudent.calificaciones[0]); // Sofía con calificaciones: [100, 89, 94]

// filtra las ventas que tienen una cantidad mayor a 8 unidades y guardalas en un nuevo array llamado ventasElevadas

const sales = [
  { producto: "Laptop", cantidad: 5, precioUnitario: 800 },
  { producto: "Smartphone", cantidad: 12, precioUnitario: 600 },
  { producto: "Tablet", cantidad: 8, precioUnitario: 300 },
  { producto: "Monitor", cantidad: 15, precioUnitario: 200 },
  { producto: "Teclado", cantidad: 3, precioUnitario: 50 },
]

const highSales = sales.filter( sale => sale.cantidad > 8)
console.log('Ventas con cantidad mayor a 8 unidades:', highSales);

// calcula el total de ingresos para cada venta multiplicando la cantidad por el precio unitario y almacena los resultados en un nuevo array llamado ingresosTotales

const totalIncomes = sales.map( sale => {
  const totalPrice = sale.cantidad * sale.precioUnitario;
  return {
    producto: sale.producto,
    ingresoTotal: totalPrice
  }
})
console.log('Ingresos totales por venta:', totalIncomes);

// encuentra la venta con el ingraos total mas alto en el array ingresosTotales y muestra el producto y el ingreso en la consola

const topSale = totalIncomes.reduce((top, curr) => {
  return curr.ingresoTotal > top.ingresoTotal ? curr : top;
})
console.log(topSale);

// ordena el array original de ventas de manera ascendente segun la cantidad de productos vendidos

const salesSortedByQuantity = [...sales].sort((a, b) => a.cantidad - b.cantidad);
console.log('Ventas ordenadas por cantidad de productos vendidos (ascendente):', salesSortedByQuantity);