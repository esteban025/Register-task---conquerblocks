# Cascada y Especificidad en CSS

## 🌊 ¿Por qué "Estilos en Cascada"?

CSS significa **Cascading Style Sheets** (Hojas de Estilo en Cascada) porque los estilos "caen" o se aplican en un orden específico, como una cascada de agua.

### Principios de la Cascada

Cuando hay múltiples reglas para el mismo elemento, CSS decide cuál aplicar según:

1. **Importancia** (!important)
2. **Especificidad** (qué tan específico es el selector)
3. **Orden de aparición** (el último gana)

```css
/* Ejemplo de cascada */
p {
  color: blue;      /* Primera regla */
}

p {
  color: red;       /* Gana esta (última) */
}
```

---

## 🎯 Especificidad

Sistema de puntos que determina qué regla CSS se aplica cuando hay conflicto.

### Valores de Especificidad

| Selector | Puntos | Ejemplo |
|----------|--------|---------|
| **!important** | ∞ (máxima) | `color: red !important;` |
| **Inline styles** | 1000 | `<div style="color: red">` |
| **IDs** | 100 | `#header` |
| **Clases, atributos, pseudo-clases** | 10 | `.menu`, `[type="text"]`, `:hover` |
| **Elementos, pseudo-elementos** | 1 | `div`, `p`, `::before` |
| **Universal, combinadores** | 0 | `*`, `>`, `+`, `~` |

### Cálculo de Especificidad

```css
/* Especificidad: 1 (1 elemento) */
p {
  color: blue;
}

/* Especificidad: 10 (1 clase) */
.texto {
  color: green;
}

/* Especificidad: 100 (1 ID) */
#principal {
  color: orange;
}

/* Especificidad: 11 (1 elemento + 1 clase) */
p.texto {
  color: red;
}

/* Especificidad: 101 (1 ID + 1 elemento) */
#principal p {
  color: purple;
}

/* Especificidad: 111 (1 ID + 1 clase + 1 elemento) */
#principal p.texto {
  color: brown;
}

/* Especificidad: 1000 (inline) */
<p style="color: pink;">Texto</p>
```

### Ejemplo Práctico

```html
<style>
  p { color: black; }                    /* 1 */
  .destacado { color: blue; }            /* 10 */
  #titulo { color: red; }                /* 100 */
  p.destacado { color: green; }          /* 11 */
</style>

<p id="titulo" class="destacado">
  Este texto será ROJO (ID gana con 100 puntos)
</p>
```

---

## 🔄 Valores de Herencia

Algunas propiedades CSS se heredan de padres a hijos automáticamente.

### Propiedades que SE heredan

- **Texto**: `color`, `font-family`, `font-size`, `font-weight`, `line-height`, `text-align`
- **Lista**: `list-style`
- **Visibilidad**: `visibility`

### Propiedades que NO se heredan

- **Box model**: `width`, `height`, `margin`, `padding`, `border`
- **Posicionamiento**: `position`, `top`, `left`
- **Fondo**: `background`
- **Display**: `display`

### Ejemplo de Herencia

```html
<style>
  .padre {
    color: blue;           /* Se hereda */
    font-size: 18px;       /* Se hereda */
    border: 2px solid;     /* NO se hereda */
    padding: 20px;         /* NO se hereda */
  }
</style>

<div class="padre">
  Texto azul 18px
  <p>Este párrafo hereda color y font-size</p>
  <span>Este span también hereda</span>
</div>
```

---

## 🔧 Valores Especiales de Herencia

### `inherit` - Forzar herencia

```css
.hijo {
  border: inherit;    /* Hereda border del padre aunque no se hereda naturalmente */
}
```

### `initial` - Valor inicial del navegador

```css
.elemento {
  color: initial;     /* Vuelve al color predeterminado (negro) */
}
```

### `unset` - Hereda si es heredable, sino inicial

```css
.elemento {
  color: unset;       /* Se comporta como inherit */
  padding: unset;     /* Se comporta como initial */
}
```

### `revert` - Vuelve al estilo del navegador

```css
h1 {
  font-size: revert;  /* Vuelve al tamaño predeterminado del navegador */
}
```

---

## ⚠️ !important - NO Usar

`!important` rompe la cascada natural y hace el código difícil de mantener.

### Problema

```css
p {
  color: blue !important;
}

/* Esto NO funcionará */
p {
  color: red;
}

/* Ni esto */
p.especial {
  color: green;
}

/* Ni siquiera esto */
#unico {
  color: orange;
}

/* Solo esto funciona */
p {
  color: purple !important;  /* Tiene que usar !important también */
}
```

### Cuándo está permitido (casos extremos)

1. Sobrescribir estilos de librerías de terceros
2. Clases de utilidad que siempre deben aplicarse
3. Pruebas temporales (¡eliminar después!)

```css
/* Único caso aceptable */
.d-none {
  display: none !important;  /* Siempre debe ocultar */
}
```

### Alternativas a !important

**❌ Mal:**
```css
p {
  color: blue;
}

.texto {
  color: red !important;  /* Malo */
}
```

**✅ Bien:**
```css
p {
  color: blue;
}

p.texto {
  color: red;  /* Mayor especificidad */
}
```

---

## 📊 Orden de Prioridad Completo

De mayor a menor prioridad:

1. `!important` en inline styles
2. `!important` en estilos internos/externos
3. Inline styles (`style=""`)
4. IDs
5. Clases, atributos, pseudo-clases
6. Elementos, pseudo-elementos
7. Herencia del padre
8. Estilos predeterminados del navegador

```html
<style>
  * { color: gray; }                          /* 0 - Nunca gana */
  p { color: black; }                         /* 1 */
  .texto { color: blue; }                     /* 10 */
  p.texto { color: green; }                   /* 11 */
  #principal { color: orange; }               /* 100 */
  #principal.texto { color: purple; }         /* 110 */
  p { color: red !important; }                /* ∞ - Siempre gana */
</style>

<p id="principal" class="texto" style="color: pink;">
  ¿Qué color tendrá?
  <!-- Respuesta: ROJO (!important gana siempre) -->
</p>
```

---

## 💡 Consejos

### Buenas Prácticas

1. ✅ **Usa clases** para la mayoría de estilos
2. ✅ **IDs solo para JavaScript** o anclajes
3. ✅ **Evita !important** completamente
4. ✅ **Aumenta especificidad** en lugar de usar !important
5. ✅ **Organiza tu CSS** de menos a más específico
6. ✅ **Aprovecha la herencia** para propiedades de texto

### Errores Comunes

```css
/* ❌ Demasiado específico */
div#header nav.menu ul li a.link {
  color: blue;
}

/* ✅ Mejor */
.menu-link {
  color: blue;
}

/* ❌ Abuso de !important */
.texto {
  color: red !important;
  font-size: 16px !important;
  margin: 10px !important;
}

/* ✅ Sin !important */
.texto {
  color: red;
  font-size: 16px;
  margin: 10px;
}
```

---

## 📝 Ejemplo Completo

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <style>
    /* Especificidad: 1 */
    p {
      color: black;
      font-size: 16px;
    }

    /* Especificidad: 10 */
    .destacado {
      color: blue;
      font-weight: bold;
    }

    /* Especificidad: 11 - GANA para el párrafo con clase */
    p.destacado {
      color: green;
    }

    /* Especificidad: 100 - GANA si hay ID */
    #principal {
      color: red;
    }

    /* Herencia */
    .contenedor {
      color: purple;     /* Se hereda a los hijos */
      border: 2px solid; /* NO se hereda */
    }
  </style>
</head>
<body>
  <p>Negro (especificidad: 1)</p>
  
  <p class="destacado">Verde (especificidad: 11)</p>
  
  <p id="principal" class="destacado">Rojo (especificidad: 100)</p>
  
  <div class="contenedor">
    Texto púrpura
    <p>Este párrafo hereda el color púrpura, pero NO el border</p>
  </div>
</body>
</html>
```

---

## 🎯 Resumen

- **Cascada**: Los estilos se aplican en orden según importancia, especificidad y posición
- **Especificidad**: Sistema de puntos (inline=1000, ID=100, clase=10, elemento=1)
- **Herencia**: Propiedades de texto se heredan, box model NO
- **!important**: Nunca usar (excepto casos muy específicos)
- **Buena práctica**: Usa clases, evita IDs para estilos, nunca uses !important

---

## 📚 Recursos

- [MDN - Cascada](https://developer.mozilla.org/es/docs/Web/CSS/Cascade)
- [MDN - Especificidad](https://developer.mozilla.org/es/docs/Web/CSS/Specificity)
- [Specificity Calculator](https://specificity.keegan.st/)