# Guía de Aprendizaje de React

Esta guía cubre los conceptos fundamentales de React con ejemplos claros y concisos.

---

## 1. Components (Componentes)

Los componentes son las piezas básicas de React. Son como bloques de construcción que puedes reutilizar.

### Componente Funcional

```jsx
function Saludo() {
  return <h1>¡Hola Mundo!</h1>;
}
```

### Uso del Componente

```jsx
function App() {
  return (
    <div>
      <Saludo />
      <Saludo />
    </div>
  );
}
```

---

## 2. Props

Las props son datos que pasas de un componente padre a un componente hijo. Son como argumentos de una función.

### Ejemplo Básico

```jsx
function Saludo(props) {
  return <h1>¡Hola {props.nombre}!</h1>;
}

function App() {
  return <Saludo nombre="María" />;
}
```

### Desestructuración de Props

```jsx
function Tarjeta({ titulo, descripcion }) {
  return (
    <div>
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
    </div>
  );
}

function App() {
  return (
    <Tarjeta 
      titulo="React" 
      descripcion="Una librería de JavaScript" 
    />
  );
}
```

---

## 3. Children

`children` es una prop especial que permite pasar contenido entre las etiquetas de apertura y cierre de un componente.

### Ejemplo

```jsx
function Contenedor({ children }) {
  return (
    <div style={{ border: '2px solid blue', padding: '10px' }}>
      {children}
    </div>
  );
}

function App() {
  return (
    <Contenedor>
      <h1>Título</h1>
      <p>Este es el contenido interno</p>
    </Contenedor>
  );
}
```

---

## 4. useState

`useState` es un hook que permite agregar estado a los componentes funcionales. El estado es información que puede cambiar con el tiempo.

### Sintaxis Básica

```jsx
import { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>
    </div>
  );
}
```

### Ejemplo con Input

```jsx
import { useState } from 'react';

function Formulario() {
  const [nombre, setNombre] = useState('');

  return (
    <div>
      <input 
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Escribe tu nombre"
      />
      <p>Hola {nombre}</p>
    </div>
  );
}
```

### Estado con Objeto

```jsx
import { useState } from 'react';

function Usuario() {
  const [usuario, setUsuario] = useState({
    nombre: '',
    edad: 0
  });

  return (
    <div>
      <input 
        value={usuario.nombre}
        onChange={(e) => setUsuario({...usuario, nombre: e.target.value})}
        placeholder="Nombre"
      />
      <input 
        type="number"
        value={usuario.edad}
        onChange={(e) => setUsuario({...usuario, edad: e.target.value})}
        placeholder="Edad"
      />
      <p>{usuario.nombre} tiene {usuario.edad} años</p>
    </div>
  );
}
```

---

## 5. useEffect

`useEffect` permite ejecutar código después de que el componente se renderiza. Es útil para operaciones secundarias como llamadas a APIs, suscripciones o actualizar el DOM.

### Sintaxis Básica

```jsx
import { useEffect, useState } from 'react';

function Ejemplo() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log('El componente se renderizó');
  });

  return <button onClick={() => setContador(contador + 1)}>{contador}</button>;
}
```

### useEffect con Array de Dependencias Vacío

Se ejecuta solo una vez cuando el componente se monta.

```jsx
import { useEffect, useState } from 'react';

function DatosUsuario() {
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    // Se ejecuta solo una vez al montar el componente
    fetch('https://api.example.com/usuario')
      .then(res => res.json())
      .then(data => setDatos(data));
  }, []); // Array vacío = solo al montar

  return <div>{datos ? datos.nombre : 'Cargando...'}</div>;
}
```

### useEffect con Dependencias

Se ejecuta cuando las dependencias cambian.

```jsx
import { useEffect, useState } from 'react';

function Buscador() {
  const [busqueda, setBusqueda] = useState('');
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    if (busqueda) {
      console.log('Buscando:', busqueda);
      // Aquí harías la búsqueda real
    }
  }, [busqueda]); // Se ejecuta cuando 'busqueda' cambia

  return (
    <input 
      value={busqueda}
      onChange={(e) => setBusqueda(e.target.value)}
      placeholder="Buscar..."
    />
  );
}
```

### useEffect con Limpieza (Cleanup)

Útil para cancelar suscripciones o timers.

```jsx
import { useEffect, useState } from 'react';

function Reloj() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date());
    }, 1000);

    // Función de limpieza
    return () => clearInterval(intervalo);
  }, []);

  return <p>Hora: {hora.toLocaleTimeString()}</p>;
}
```

---

## Ejemplo Completo

Aquí un ejemplo que combina todos los conceptos:

```jsx
import { useState, useEffect } from 'react';

function Tarjeta({ children }) {
  return (
    <div style={{ border: '1px solid gray', padding: '20px', margin: '10px' }}>
      {children}
    </div>
  );
}

function ListaTareas() {
  const [tarea, setTarea] = useState('');
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    console.log(`Tienes ${tareas.length} tareas`);
  }, [tareas]);

  const agregarTarea = () => {
    if (tarea.trim()) {
      setTareas([...tareas, tarea]);
      setTarea('');
    }
  };

  return (
    <Tarjeta>
      <h2>Lista de Tareas</h2>
      <input 
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={agregarTarea}>Agregar</button>
      <ul>
        {tareas.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </Tarjeta>
  );
}

export default ListaTareas;
```

---

## Resumen

- **Components**: Bloques de construcción reutilizables
- **Props**: Datos que pasan del padre al hijo
- **Children**: Contenido entre las etiquetas del componente
- **useState**: Maneja datos que cambian en el componente
- **useEffect**: Ejecuta código después del renderizado

¡Con estos conceptos ya puedes crear aplicaciones React funcionales!