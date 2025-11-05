# Unidades de Medida en CSS

## 📏 Tipos de Unidades

### Absolutas
Tamaño fijo, no cambia según el contexto.

| Unidad | Nombre | Uso |
|--------|--------|-----|
| **px** | Píxeles | Pantallas (más común) |
| **pt** | Puntos | Impresión |
| **cm** | Centímetros | Impresión |
| **mm** | Milímetros | Impresión |
| **in** | Pulgadas | Impresión |

```css
.box {
  width: 300px;        /* Píxeles */
  border: 2px solid;   /* Más común */
}
```

---

### Relativas
Tamaño depende de otro valor (responsive).

| Unidad | Relativa a | Uso común |
|--------|------------|-----------|
| **%** | Elemento padre | Layouts, anchos |
| **em** | Font-size del elemento | Tipografía, espaciados |
| **rem** | Font-size del root (html) | Tipografía (recomendado) |
| **vw** | 1% del ancho del viewport | Anchos responsive |
| **vh** | 1% del alto del viewport | Alturas responsive |
| **vmin** | 1% del lado más pequeño | Elementos cuadrados |
| **vmax** | 1% del lado más grande | Elementos cuadrados |

---

## 🔤 Unidades Más Utilizadas

### px - Píxeles
```css
.elemento {
  width: 200px;
  height: 100px;
  font-size: 16px;
}
```

### % - Porcentaje
```css
.contenedor {
  width: 80%;          /* 80% del padre */
  margin: 0 auto;      /* Centrar */
}

.hijo {
  width: 50%;          /* 50% del contenedor */
}
```

### em - Relativo al font-size
```css
.padre {
  font-size: 16px;
}

.hijo {
  font-size: 2em;      /* 32px (16 * 2) */
  padding: 1em;        /* 32px (usa su propio font-size) */
  margin: 0.5em;       /* 16px */
}
```

### rem - Relativo al root
```css
html {
  font-size: 16px;     /* Base */
}

h1 {
  font-size: 2rem;     /* 32px (16 * 2) */
}

p {
  font-size: 1rem;     /* 16px */
  margin: 1.5rem;      /* 24px */
}
```

### vw/vh - Viewport
```css
.hero {
  width: 100vw;        /* Ancho completo de pantalla */
  height: 100vh;       /* Alto completo de pantalla */
}

.sidebar {
  width: 25vw;         /* 25% del ancho de pantalla */
}

h1 {
  font-size: 5vw;      /* Texto responsive */
}
```

---

## 📊 Comparación: em vs rem

```css
html {
  font-size: 16px;
}

.container {
  font-size: 20px;
}

.em-example {
  font-size: 2em;      /* 40px (20 * 2) - relativo al padre */
}

.rem-example {
  font-size: 2rem;     /* 32px (16 * 2) - siempre relativo al root */
}
```

**Recomendación:** Usa `rem` para tamaños consistentes.

---

## 🧮 Función calc()

Realiza cálculos matemáticos en CSS.

### Sintaxis
```css
calc(expresión)
```

### Operadores
- `+` Suma
- `-` Resta
- `*` Multiplicación
- `/` División

### Ejemplos

**Combinando unidades:**
```css
.elemento {
  width: calc(100% - 50px);
  height: calc(100vh - 80px);
  margin: calc(1rem + 10px);
}
```

**Con variables:**
```css
:root {
  --sidebar: 250px;
}

.contenido {
  width: calc(100% - var(--sidebar));
}
```

**Operaciones complejas:**
```css
.box {
  width: calc((100% - 60px) / 3);     /* 3 columnas con gaps */
  padding: calc(1rem * 2);            /* 2rem */
  margin: calc(100vw / 12);           /* Grid de 12 columnas */
}
```

**Caso práctico:**
```css
/* Header fijo + contenido */
header {
  height: 60px;
  position: fixed;
}

main {
  height: calc(100vh - 60px);
  margin-top: 60px;
}
```

---

## 🎨 Formatos de Color

### Hexadecimal (#hex)

**Formato:** `#RRGGBB` o `#RGB`

```css
.elemento {
  color: #ff0000;              /* Rojo */
  background: #00ff00;         /* Verde */
  border-color: #0000ff;       /* Azul */
}

/* Formato corto */
.otro {
  color: #f00;                 /* Rojo (#ff0000) */
  background: #0f0;            /* Verde (#00ff00) */
  border-color: #00f;          /* Azul (#0000ff) */
}

/* Con transparencia (8 dígitos) */
.transparente {
  background: #ff000080;       /* Rojo 50% opaco */
}
```

---

### rgb() y rgba()

**RGB:** `rgb(red, green, blue)` - Valores 0-255

**RGBA:** `rgba(red, green, blue, alpha)` - Alpha 0-1

```css
.elemento {
  color: rgb(255, 0, 0);              /* Rojo */
  background: rgb(0, 255, 0);         /* Verde */
  border: rgb(0, 0, 255);             /* Azul */
}

/* Con transparencia */
.transparente {
  background: rgba(255, 0, 0, 0.5);   /* Rojo 50% opaco */
  color: rgba(0, 0, 0, 0.8);          /* Negro 80% opaco */
}

/* Colores personalizados */
.custom {
  background: rgb(52, 152, 219);      /* Azul personalizado */
  border: rgba(46, 204, 113, 0.3);    /* Verde transparente */
}
```

---

## 📝 Ejemplo Completo

```css
:root {
  --header-height: 80px;
  --primary-color: #3498db;
}

html {
  font-size: 16px;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
}

/* Unidades absolutas */
.logo {
  width: 150px;
  height: 50px;
}

/* Unidades relativas */
header {
  height: var(--header-height);
  background: var(--primary-color);
  padding: 0 5%;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

/* Viewport units */
.hero {
  height: 100vh;
  background: rgba(52, 152, 219, 0.9);
}

/* rem para tipografía */
h1 {
  font-size: 2.5rem;        /* 40px */
  margin: 1rem 0;           /* 16px */
}

p {
  font-size: 1rem;          /* 16px */
  line-height: 1.6;
}

/* calc() */
main {
  min-height: calc(100vh - var(--header-height));
  padding: 2rem;
}

.columna {
  width: calc(33.333% - 20px);
  margin: 10px;
}

/* Colores */
.boton {
  background: #3498db;
  color: #ffffff;
  border: 2px solid rgb(41, 128, 185);
}

.boton:hover {
  background: rgba(52, 152, 219, 0.8);
}
```

---

## 💡 Recomendaciones

### Unidades
- ✅ **px**: Bordes, sombras, elementos fijos
- ✅ **rem**: Tipografía, espaciados (padding, margin)
- ✅ **%**: Anchos de layout
- ✅ **vw/vh**: Secciones full-screen
- ⚠️ **em**: Cuidado con herencia anidada

### calc()
- ✅ Usa espacios alrededor de `+` y `-`
- ✅ Combina diferentes unidades
- ✅ Útil para layouts responsive

### Colores
- ✅ **#hex**: Colores sólidos, código compacto
- ✅ **rgb/rgba**: Cuando necesitas transparencia
- ✅ Usa formato corto cuando sea posible (#fff vs #ffffff)
- ✅ rgba para overlays y sombras

---

## 📚 Recursos

- [MDN - Valores y unidades CSS](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Values_and_Units)
- [MDN - calc()](https://developer.mozilla.org/es/docs/Web/CSS/calc)
- [Color Picker](https://htmlcolorcodes.com/)