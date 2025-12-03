# Guía de Aprendizaje de TypeScript

Esta guía cubre los conceptos esenciales de TypeScript con ejemplos claros y directos.

---

## 1. Tipos Básicos

TypeScript añade tipos a JavaScript para detectar errores antes de ejecutar el código.

```typescript
// Tipos primitivos
let nombre: string = "Juan";
let edad: number = 25;
let activo: boolean = true;
let nulo: null = null;
let indefinido: undefined = undefined;

// Arrays
let numeros: number[] = [1, 2, 3];
let nombres: Array<string> = ["Ana", "Luis"];

// Tuplas (array con tipos fijos)
let persona: [string, number] = ["María", 30];

// Any (evitar usarlo)
let cualquierCosa: any = "texto";
cualquierCosa = 42;

// Unknown (más seguro que any)
let desconocido: unknown = 10;

// Void (sin retorno)
function saludar(): void {
  console.log("Hola");
}

// Never (nunca retorna)
function error(): never {
  throw new Error("Error!");
}

// Object
let usuario: object = { nombre: "Pedro" };

// Inferencia de tipos
let auto = "Toyota"; // TypeScript infiere que es string
```

---

## 2. Type Union (Unión)

Permite que una variable tenga múltiples tipos posibles.

```typescript
// Unión simple
let id: string | number;
id = "ABC123"; // válido
id = 123; // válido

// Función con unión
function imprimir(valor: string | number) {
  console.log(valor);
}

// Array con unión
let datos: (string | number)[] = ["texto", 10, "otro", 20];

// Type con unión
type Estado = "activo" | "inactivo" | "pendiente";
let estado: Estado = "activo";
```

---

## 3. Type Intersection (Intersección)

Combina múltiples tipos en uno solo.

```typescript
type Persona = {
  nombre: string;
  edad: number;
};

type Empleado = {
  empresa: string;
  salario: number;
};

// Intersección
type PersonaEmpleado = Persona & Empleado;

let trabajador: PersonaEmpleado = {
  nombre: "Carlos",
  edad: 28,
  empresa: "TechCorp",
  salario: 50000
};
```

---

## 4. Enum

Los enums son conjuntos de constantes nombradas.

```typescript
// Enum numérico
enum Direccion {
  Arriba,    // 0
  Abajo,     // 1
  Izquierda, // 2
  Derecha    // 3
}

let movimiento: Direccion = Direccion.Arriba;

// Enum con valores personalizados
enum Estado {
  Activo = 1,
  Inactivo = 0,
  Pendiente = 2
}

// Enum de strings
enum Color {
  Rojo = "RED",
  Verde = "GREEN",
  Azul = "BLUE"
}

let colorFavorito: Color = Color.Rojo;
console.log(colorFavorito); // "RED"
```

---

## 5. Enum en Compilación

Los enums se compilan a objetos JavaScript.

### TypeScript:
```typescript
enum Rol {
  Admin = "ADMIN",
  Usuario = "USER",
  Invitado = "GUEST"
}
```

### JavaScript compilado:
```javascript
var Rol;
(function (Rol) {
    Rol["Admin"] = "ADMIN";
    Rol["Usuario"] = "USER";
    Rol["Invitado"] = "GUEST";
})(Rol || (Rol = {}));
```

### Enum constante (más optimizado):
```typescript
const enum Rol {
  Admin = "ADMIN",
  Usuario = "USER"
}

let miRol = Rol.Admin;

// Se compila a:
// let miRol = "ADMIN";
```

---

## 6. Genéricos

Permiten crear componentes reutilizables que funcionan con cualquier tipo.

```typescript
// Función genérica
function identidad<T>(valor: T): T {
  return valor;
}

let num = identidad<number>(42);
let texto = identidad<string>("hola");

// Array genérico
function primerElemento<T>(arr: T[]): T {
  return arr[0];
}

let primero = primerElemento([1, 2, 3]); // number

// Interface genérica
interface Caja<T> {
  contenido: T;
}

let cajaNumero: Caja<number> = { contenido: 100 };
let cajaTexto: Caja<string> = { contenido: "regalo" };

// Múltiples genéricos
function par<T, U>(primero: T, segundo: U): [T, U] {
  return [primero, segundo];
}

let resultado = par<string, number>("edad", 25);
```

---

## 7. Partial

Hace todas las propiedades opcionales.

```typescript
interface Usuario {
  nombre: string;
  edad: number;
  email: string;
}

// Todas las propiedades son opcionales
function actualizar(usuario: Partial<Usuario>) {
  console.log(usuario);
}

actualizar({ nombre: "Ana" }); // válido
actualizar({ edad: 30, email: "ana@email.com" }); // válido
```

---

## 8. Required

Hace todas las propiedades obligatorias.

```typescript
interface Config {
  host?: string;
  puerto?: number;
}

// Ahora todas son requeridas
type ConfigCompleta = Required<Config>;

let config: ConfigCompleta = {
  host: "localhost", // obligatorio
  puerto: 3000       // obligatorio
};
```

---

## 9. Readonly

Hace todas las propiedades de solo lectura.

```typescript
interface Punto {
  x: number;
  y: number;
}

let punto: Readonly<Punto> = { x: 10, y: 20 };

// punto.x = 5; // Error: no se puede modificar

// Array readonly
let numeros: ReadonlyArray<number> = [1, 2, 3];
// numeros.push(4); // Error
```

---

## 10. Record

Crea un tipo con claves específicas y valores del mismo tipo.

```typescript
// Record<Clave, Valor>
type Calificaciones = Record<string, number>;

let notas: Calificaciones = {
  matematicas: 90,
  historia: 85,
  ciencias: 95
};

// Con tipos literales
type Dia = "lunes" | "martes" | "miercoles";
type Horario = Record<Dia, string>;

let miHorario: Horario = {
  lunes: "9:00 AM",
  martes: "10:00 AM",
  miercoles: "8:00 AM"
};
```

---

## 11. Omit

Crea un tipo excluyendo ciertas propiedades.

```typescript
interface Usuario {
  id: number;
  nombre: string;
  email: string;
  password: string;
}

// Omitir password
type UsuarioPublico = Omit<Usuario, "password">;

let usuario: UsuarioPublico = {
  id: 1,
  nombre: "Pedro",
  email: "pedro@email.com"
  // password no está disponible
};

// Omitir múltiples propiedades
type UsuarioBasico = Omit<Usuario, "email" | "password">;
```

---

## 12. Exclude

Excluye tipos de una unión.

```typescript
type Todos = "a" | "b" | "c" | "d";

// Excluir "a" y "b"
type Algunos = Exclude<Todos, "a" | "b">;
// Resultado: "c" | "d"

let valor: Algunos = "c"; // válido
// let otro: Algunos = "a"; // Error

// Ejemplo práctico
type TiposPrimitivos = string | number | boolean | null;
type SinNull = Exclude<TiposPrimitivos, null>;
// Resultado: string | number | boolean
```

---

## 13. Extract

Extrae tipos de una unión que son asignables a otro tipo.

```typescript
type Todos = "a" | "b" | "c" | "d";

// Extraer solo "a" y "b"
type Seleccionados = Extract<Todos, "a" | "b">;
// Resultado: "a" | "b"

// Ejemplo con tipos
type Formas = "circulo" | "cuadrado" | 10 | 20;
type SoloStrings = Extract<Formas, string>;
// Resultado: "circulo" | "cuadrado"
```

---

## 14. Pick

Crea un tipo seleccionando solo ciertas propiedades.

```typescript
interface Usuario {
  id: number;
  nombre: string;
  email: string;
  edad: number;
  password: string;
}

// Seleccionar solo id y nombre
type UsuarioResumido = Pick<Usuario, "id" | "nombre">;

let usuario: UsuarioResumido = {
  id: 1,
  nombre: "Laura"
  // solo estas propiedades
};
```

---

## 15. Function Overloading

Permite definir múltiples firmas para una función.

```typescript
// Firmas
function procesar(valor: string): string;
function procesar(valor: number): number;
function procesar(valor: boolean): string;

// Implementación
function procesar(valor: string | number | boolean): string | number {
  if (typeof valor === "string") {
    return valor.toUpperCase();
  }
  if (typeof valor === "number") {
    return valor * 2;
  }
  return valor ? "sí" : "no";
}

let texto = procesar("hola");    // string
let numero = procesar(10);       // number
let booleano = procesar(true);   // string
```

---

## 16. typeof

Obtiene el tipo de una variable o propiedad.

```typescript
let persona = {
  nombre: "Carlos",
  edad: 30
};

// Extraer el tipo
type Persona = typeof persona;

let otraPersona: Persona = {
  nombre: "Ana",
  edad: 25
};

// Con funciones
function calcular(a: number, b: number) {
  return a + b;
}

type TipoCalcular = typeof calcular;
// (a: number, b: number) => number
```

---

## 17. ReturnType

Extrae el tipo de retorno de una función.

```typescript
function obtenerUsuario() {
  return {
    id: 1,
    nombre: "Pedro",
    activo: true
  };
}

// Extraer el tipo de retorno
type Usuario = ReturnType<typeof obtenerUsuario>;

let usuario: Usuario = {
  id: 2,
  nombre: "María",
  activo: false
};

// Ejemplo con función genérica
function crear<T>(valor: T): T {
  return valor;
}

type TipoRetorno = ReturnType<typeof crear>;
// T (genérico)
```

---

## 18. Utility Types (Resumen)

TypeScript incluye muchos tipos de utilidad:

```typescript
// Partial: hace todo opcional
type A = Partial<{ x: number; y: number }>;

// Required: hace todo requerido
type B = Required<{ x?: number }>;

// Readonly: hace todo solo lectura
type C = Readonly<{ x: number }>;

// Record: objeto con claves y valores
type D = Record<string, number>;

// Pick: selecciona propiedades
type E = Pick<{ a: number; b: string }, "a">;

// Omit: excluye propiedades
type F = Omit<{ a: number; b: string }, "b">;

// Exclude: excluye de unión
type G = Exclude<"a" | "b" | "c", "a">;

// Extract: extrae de unión
type H = Extract<"a" | "b" | "c", "a" | "b">;

// NonNullable: excluye null y undefined
type I = NonNullable<string | null | undefined>;

// Parameters: tipos de parámetros de función
type J = Parameters<(a: number, b: string) => void>;

// ReturnType: tipo de retorno
type K = ReturnType<() => string>;
```

---

## 19. as const

Hace que los valores sean literales e inmutables.

```typescript
// Sin as const
let colores = ["rojo", "verde"];
// tipo: string[]

// Con as const
let coloresConst = ["rojo", "verde"] as const;
// tipo: readonly ["rojo", "verde"]

// coloresConst.push("azul"); // Error

// Objeto con as const
let config = {
  host: "localhost",
  puerto: 3000
} as const;

// tipo: { readonly host: "localhost"; readonly puerto: 3000 }

// config.puerto = 4000; // Error

// Uso práctico
const RUTAS = {
  home: "/",
  perfil: "/perfil",
  config: "/configuracion"
} as const;

type Ruta = typeof RUTAS[keyof typeof RUTAS];
// "/" | "/perfil" | "/configuracion"
```

---

## Ejemplo Completo

```typescript
// Tipos base
interface Usuario {
  id: number;
  nombre: string;
  email: string;
  rol: "admin" | "user";
}

// Utility types
type UsuarioActualizable = Partial<Usuario>;
type UsuarioPublico = Omit<Usuario, "email">;
type CamposUsuario = keyof Usuario;

// Genéricos
function buscar<T>(items: T[], predicado: (item: T) => boolean): T | undefined {
  return items.find(predicado);
}

// Enum
enum Estado {
  Activo = "ACTIVO",
  Inactivo = "INACTIVO"
}

// Constantes
const CONFIG = {
  apiUrl: "https://api.ejemplo.com",
  timeout: 5000
} as const;

// Function overloading
function formatear(valor: string): string;
function formatear(valor: number): string;
function formatear(valor: string | number): string {
  return typeof valor === "string" 
    ? valor.toUpperCase() 
    : valor.toFixed(2);
}

// Uso
let usuarios: Usuario[] = [
  { id: 1, nombre: "Ana", email: "ana@email.com", rol: "admin" },
  { id: 2, nombre: "Luis", email: "luis@email.com", rol: "user" }
];

let admin = buscar(usuarios, u => u.rol === "admin");
```

---

## Resumen

TypeScript añade seguridad de tipos a JavaScript mediante:

- **Tipos básicos**: string, number, boolean, etc.
- **Union/Intersection**: combinar tipos
- **Enums**: constantes nombradas
- **Genéricos**: código reutilizable
- **Utility Types**: transformar tipos fácilmente
- **Type Guards**: verificar tipos en tiempo de ejecución
- **as const**: valores literales inmutables

¡Con estos conceptos puedes escribir código TypeScript robusto y seguro!