# Etiquetas de Agrupación HTML

## 📦 ¿Qué son?

Las etiquetas de agrupación sirven para **organizar y agrupar elementos** relacionados dentro de un documento HTML.

## 🎯 ¿Para qué agrupar?

- **CSS**: Aplicar estilos a un conjunto de elementos
- **JavaScript**: Manipular grupos de elementos juntos
- **Organización**: Estructurar mejor el código
- **Accesibilidad**: Facilitar la navegación con lectores de pantalla

---

## 🔧 Etiquetas Principales

### `<div>` - División en Bloque

Contenedor genérico de nivel de bloque. Ocupa todo el ancho disponible.

```html
<div class="contenedor">
  <h2>Título</h2>
  <p>Contenido dentro del div</p>
</div>
```

**Uso común:**
```html
<div class="card">
  <div class="card-header">Encabezado</div>
  <div class="card-body">Contenido</div>
</div>
```

---

### `<span>` - División en Línea

Contenedor genérico de nivel de línea. Solo ocupa el espacio de su contenido.

```html
<p>Este es un <span class="destacado">texto destacado</span> en el párrafo.</p>
```

**Uso común:**
```html
<p>El precio es <span class="precio">$99.99</span></p>
```

---

### `<hr>` - Línea Horizontal

Representa una separación temática entre contenidos. Se auto-cierra.

```html
<section>
  <h2>Sección 1</h2>
  <p>Contenido de la primera sección</p>
</section>

<hr>

<section>
  <h2>Sección 2</h2>
  <p>Contenido de la segunda sección</p>
</section>
```

---

## 📋 Listas

### `<ul>` - Lista no ordenada

Lista con viñetas (bullets). No tiene orden específico.

```html
<ul>
  <li>Manzanas</li>
  <li>Naranjas</li>
  <li>Plátanos</li>
</ul>
```

---

### `<ol>` - Lista ordenada

Lista numerada. El orden es importante.

```html
<ol>
  <li>Primer paso</li>
  <li>Segundo paso</li>
  <li>Tercer paso</li>
</ol>
```

**Con atributos:**
```html
<!-- Empezar en 5 -->
<ol start="5">
  <li>Item 5</li>
  <li>Item 6</li>
</ol>

<!-- Letras en lugar de números -->
<ol type="A">
  <li>Opción A</li>
  <li>Opción B</li>
</ol>

<!-- Números romanos -->
<ol type="I">
  <li>Capítulo I</li>
  <li>Capítulo II</li>
</ol>
```

---

### `<dl>` - Lista de Definiciones

Lista para términos y definiciones.

- `<dt>`: Término (definition term)
- `<dd>`: Definición (definition description)

```html
<dl>
  <dt>HTML</dt>
  <dd>Lenguaje de marcado para crear páginas web</dd>
  
  <dt>CSS</dt>
  <dd>Lenguaje para dar estilo a documentos HTML</dd>
  
  <dt>JavaScript</dt>
  <dd>Lenguaje de programación para páginas web interactivas</dd>
  <dd>Todas las definiciones posibles..</dd>
</dl>
```
---

## 🖼️ Figuras

### `<figure>` - Figura

Contenedor para contenido autónomo como imágenes, diagramas, código o ilustraciones.

### `<figcaption>` - Título de Figura

Leyenda o descripción de la figura. Debe estar dentro de `<figure>`.

```html
<figure>
  <img src="paisaje.jpg" alt="Paisaje montañoso">
  <figcaption>Vista de las montañas al atardecer</figcaption>
</figure>
```

**Con código:**
```html
<figure>
  <pre><code>
function saludar() {
  console.log("Hola Mundo");
}
  </code></pre>
  <figcaption>Función básica de saludo en JavaScript</figcaption>
</figure>
```

**Con gráfico:**
```html
<figure>
  <svg width="200" height="100">
    <rect width="200" height="100" fill="blue"/>
  </svg>
  <figcaption>Rectángulo azul de ejemplo</figcaption>
</figure>
```

---

## 🔍 Diferencias Clave

| Etiqueta | Tipo | Uso Principal |
|----------|------|---------------|
| `<div>` | Bloque | Agrupación general |
| `<span>` | Línea | Agrupación inline |
| `<ul>` | Bloque | Lista sin orden |
| `<ol>` | Bloque | Lista ordenada |
| `<dl>` | Bloque | Términos y definiciones |
| `<figure>` | Bloque | Contenido multimedia |


---

## 🛠️ Herramienta Útil

**¿Puedo incluir una etiqueta dentro de otra?**

Verifica la compatibilidad en: [caninclude.onrender.com](https://caninclude.onrender.com/)

**Ejemplos de consultas:**
- ¿Puedo poner `<div>` dentro de `<span>`? ❌ No
- ¿Puedo poner `<span>` dentro de `<div>`? ✅ Sí
- ¿Puedo poner `<ul>` dentro de `<figure>`? ✅ Sí

---

## 💡 Consejos Rápidos

1. ✅ Usar `<div>` para estructuras grandes
2. ✅ Usar `<span>` para pequeñas partes de texto
3. ✅ `<ul>` cuando el orden NO importa
4. ✅ `<ol>` cuando el orden SÍ importa
5. ✅ `<dl>` para glosarios o términos técnicos
6. ✅ `<figure>` siempre con `<figcaption>` para mejor accesibilidad
7. ✅ Prefiere etiquetas semánticas sobre `<div>` cuando sea posible

---

## 📚 Recursos

- [MDN - Agrupación de contenido](https://developer.mozilla.org/es/docs/Web/HTML)
- [Can I Include](https://caninclude.onrender.com/) - Validador de anidación