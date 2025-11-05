
# Tipos de Etiquetas en CSS

## 📦 Etiquetas de Bloque vs Línea

### Características

| Característica | Bloque | Línea |
|----------------|--------|-------|
| **Ancho** | Ocupa todo el ancho disponible | Solo el espacio necesario |
| **Nueva línea** | Sí, empieza en nueva línea | No, continúa en la misma línea |
| **Width/Height** | ✅ Acepta | ❌ Ignora |
| **Margin** | ✅ Todos los lados | ⚠️ Solo horizontal |
| **Padding** | ✅ Todos los lados | ⚠️ Afecta visualmente, no empuja |

---

### Etiquetas de Bloque

| Etiqueta | Descripción |
|----------|-------------|
| `<div>` | Contenedor genérico |
| `<p>` | Párrafo |
| `<h1>` a `<h6>` | Títulos |
| `<ul>`, `<ol>`, `<li>` | Listas |
| `<header>` | Encabezado |
| `<nav>` | Navegación |
| `<main>` | Contenido principal |
| `<section>` | Sección |
| `<article>` | Artículo |
| `<aside>` | Contenido lateral |
| `<footer>` | Pie de página |
| `<form>` | Formulario |
| `<table>` | Tabla |
| `<blockquote>` | Cita en bloque |

---

### Etiquetas de Línea (Inline)

| Etiqueta | Descripción |
|----------|-------------|
| `<span>` | Contenedor genérico |
| `<a>` | Enlace |
| `<strong>` | Texto importante (negrita) |
| `<em>` | Énfasis (cursiva) |
| `<b>` | Negrita |
| `<i>` | Cursiva |
| `<small>` | Texto pequeño |
| `<code>` | Código |
| `<img>` | Imagen |
| `<input>` | Campo de formulario |
| `<button>` | Botón |
| `<label>` | Etiqueta |
| `<br>` | Salto de línea |

---

### Inline-Block (Híbrido)

Combina ventajas de ambos: se comporta como inline pero acepta dimensiones.

```css
.elemento {
  display: inline-block;
  width: 200px;           /* ✅ Funciona */
  height: 100px;          /* ✅ Funciona */
  margin: 10px;           /* ✅ Funciona */
  vertical-align: top;    /* ✅ Útil para alineación */
}
```

**Ejemplo:**
```html
<style>
  .caja {
    display: inline-block;
    width: 150px;
    height: 100px;
    background: coral;
    margin: 10px;
  }
</style>

<div class="caja">Caja 1</div>
<div class="caja">Caja 2</div>
<div class="caja">Caja 3</div>
```

---

## 📊 Tabla Comparativa Completa

| Propiedad | Block | Inline | Inline-Block |
|-----------|-------|--------|--------------|
| **Ancho** | 100% disponible | Contenido | Definible |
| **Nueva línea** | ✅ Sí | ❌ No | ❌ No |
| **width** | ✅ | ❌ | ✅ |
| **height** | ✅ | ❌ | ✅ |
| **margin top/bottom** | ✅ | ❌ | ✅ |
| **margin left/right** | ✅ | ✅ | ✅ |
| **padding** | ✅ Todos | ⚠️ Visual | ✅ Todos |
| **vertical-align** | ❌ | ✅ | ✅ |

---

## 🔄 Cambiar el Display

Puedes cambiar el comportamiento con CSS:

```css
/* Convertir bloque a línea */
div {
  display: inline;
}

/* Convertir línea a bloque */
span {
  display: block;
}

/* Usar inline-block */
a {
  display: inline-block;
  padding: 10px 20px;
}

/* Ocultar elemento */
.oculto {
  display: none;
}
```

---

## 🔍 Reset vs Normalize

| Aspecto | Reset | Normalize |
|---------|-------|-----------|
| **Objetivo** | Eliminar TODO | Corregir inconsistencias |
| **Estilos base** | Ninguno | Mantiene útiles |
| **Tamaño** | Pequeño | Mediano |
| **Mantenimiento** | Debes definir todo | Menos trabajo |
| **Uso recomendado** | Control absoluto | Proyectos generales |

---

## 💡 Recomendación Moderna

Combina lo mejor de ambos:

```css
/* Reset + normalización personalizada */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
  line-height: 1.5;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: #333;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

button, input, textarea, select {
  font: inherit;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: bold;
  line-height: 1.2;
}

a {
  color: inherit;
  text-decoration: none;
}
```

---

## 💡 Consejos

- ✅ Usa **Reset** o **Normalize** al inicio de tu proyecto
- ✅ `box-sizing: border-box` es esencial
- ✅ Prefiere Normalize para proyectos generales
- ✅ `inline-block` útil para layouts horizontales simples
- ✅ Conoce cuándo usar block vs inline para evitar problemas
- ⚠️ No uses reset y normalize juntos

---

## 📚 Recursos

- [Normalize.css](https://necolas.github.io/normalize.css/)
- [Eric Meyer Reset](https://meyerweb.com/eric/tools/css/reset/)
- [MDN - Display](https://developer.mozilla.org/es/docs/Web/CSS/display)