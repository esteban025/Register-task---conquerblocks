# Etiquetas Semánticas HTML - Guía Completa

Las etiquetas semánticas son elementos HTML que describen claramente su significado tanto para el navegador como para el desarrollador, mejorando la estructura, accesibilidad y SEO de las páginas web.

## 🎯 ¿Por qué usar etiquetas semánticas?

### Ventajas principales:

1. **📈 Mejora el SEO**: Los motores de búsqueda entienden mejor la estructura del contenido
2. **♿ Mayor accesibilidad**: Los lectores de pantalla pueden navegar más fácilmente
3. **📖 Código más legible**: Otros desarrolladores entienden la estructura sin leer CSS
4. **🚫 Menos `<div>`**: Evita el exceso de divs genéricos sin significado

---

## 🏗️ Etiquetas Semánticas de Estructura

### `<header>` - Encabezado

Define el encabezado de una página o sección. Generalmente contiene logo, navegación y título principal.

**⚠️ Importante**: No confundir con `<head>` (metadatos del documento)

```html
<header>
  <img src="logo.png" alt="Logo de la empresa">
  <h1>Mi Sitio Web</h1>
  <!-- Resto de la navegación -->
</header>
```

---

### `<nav>` - Navegación

Contiene los enlaces de navegación principales del sitio.

```html
<nav>
  <ul>
    <li><a href="/">Inicio</a></li>
    <li><a href="/blog">Blog</a></li>
  </ul>
</nav>
```

---

### `<main>` - Contenido Principal

Representa el contenido principal del documento. Solo debe haber **uno por página**.

```html
<body>
  <header>
    <h1>Mi Blog</h1>
  </header>
  
  <main>
    <!-- Aquí ingresará el contenido principal de la página -->
  </main>
  
  <footer>
    <p>&copy; 2024 Mi Blog</p>
  </footer>
</body>
```

---

### `<article>` - Artículo

Contenido independiente que tiene sentido por sí mismo. Puede ser un artículo de blog, comentario, publicación de foro, etc.

```html
<article>
  <header>
    <h2>Introducción a HTML Semántico</h2>
    <p>Publicado el <time datetime="2024-11-03">3 de noviembre de 2024</time></p>
  </header>
  
  <p>El HTML semántico mejora la estructura de nuestras páginas web...</p>
  
  <footer>
    <p>Autor: Juan Pérez</p>
  </footer>
</article>
```

**Ejemplo con múltiples artículos:**

```html
<main>
  <h1>Últimas Noticias</h1>
  
  <article>
    <h2>Noticia 1</h2>
    <p>Contenido de la primera noticia...</p>
  </article>
  
  <article>
    <h2>Noticia 2</h2>
    <p>Contenido de la segunda noticia...</p>
  </article>
</main>
```

---

### `<section>` - Sección

Agrupa contenido relacionado temáticamente. Debe tener un encabezado (`<h1>`-`<h6>`).

```html
<main>
  <section>
    <h2>Acerca de Nosotros</h2>
    <p>Somos una empresa dedicada a...</p>
  </section>
  
  <section>
    <h2>Nuestros Servicios</h2>
    <ul>
      <li>Desarrollo Web</li>
      <li>Diseño Gráfico</li>
      <li>Marketing Digital</li>
    </ul>
  </section>
</main>
```

**Diferencia entre `<section>` y `<article>`:**
- `<section>`: Agrupa contenido relacionado dentro de un contexto mayor
- `<article>`: Contenido independiente que puede distribuirse por separado

---

### `<aside>` - Contenido Lateral

Contenido relacionado indirectamente con el contenido principal. Típicamente usado para barras laterales, información adicional o contenido relacionado.

```html
<main>
  <article>
    <h2>Guía de HTML</h2>
    <p>Aprende los fundamentos de HTML...</p>
  </article>
  
  <aside>
    <h3>Recursos Relacionados</h3>
    <ul>
      <li><a href="#">Guía de CSS</a></li>
      <li><a href="#">Guía de JavaScript</a></li>
    </ul>
  </aside>
</main>
```

**Ejemplo de sidebar:**

```html
<body>
  <main>
    <h1>Contenido Principal</h1>
    <p>Texto del artículo...</p>
  </main>
  
  <aside>
    <h3>Últimas Publicaciones</h3>
    <ul>
      <li>Artículo 1</li>
      <li>Artículo 2</li>
    </ul>
  </aside>
</body>
```

---

### `<footer>` - Pie de Página

Contiene información sobre el autor, copyright, enlaces relacionados o información de contacto.

```html
<footer>
  <p>&copy; 2024 ConquerBloks. Todos los derechos reservados.</p>
  <address>
    Contacto: <a href="mailto:info@conquerbloks.com">info@conquerbloks.com</a>
  </address>
  <nav>
    <a href="/privacidad">Política de Privacidad</a>
    <a href="/terminos">Términos de Uso</a>
  </nav>
</footer>
```

---

## 📝 Etiquetas Semánticas de Texto

### `<time>` - Fecha y Hora

Representa una fecha, hora o duración específica. El atributo `datetime` permite a las máquinas leer el formato.

```html
<!-- Fecha específica -->
<p>Publicado el <time datetime="2024-11-03">3 de noviembre de 2024</time></p>

<!-- Hora específica -->
<p>El evento comienza a las <time datetime="14:30">2:30 PM</time></p>

<!-- Fecha y hora completas -->
<time datetime="2024-11-03T14:30:00">3 de noviembre de 2024 a las 2:30 PM</time>

<!-- Duración -->
<p>La conferencia dura <time datetime="PT2H30M">2 horas y 30 minutos</time></p>
```

**Formatos comunes de `datetime`:**
- `2024-11-03` → Fecha
- `14:30` → Hora
- `2024-11-03T14:30` → Fecha y hora
- `PT2H30M` → Duración (2 horas 30 minutos)

---

### `<address>` - Información de Contacto

Define información de contacto del autor o propietario del documento.

```html
<footer>
  <address>
    Escrito por: <a href="mailto:juan@ejemplo.com">Juan Pérez</a><br>
    Visítanos en: <a href="https://ejemplo.com">ejemplo.com</a><br>
    Dirección: Calle Principal 123, Ciudad, País<br>
    Teléfono: <a href="tel:+593987654321">+593 98 765 4321</a>
  </address>
</footer>
```

**Ejemplo en un artículo:**

```html
<article>
  <h2>Tutorial de JavaScript</h2>
  <p>Contenido del tutorial...</p>
  
  <footer>
    <address>
      Autor: <a href="/perfil/maria">María González</a><br>
      Contacto: <a href="mailto:maria@dev.com">maria@dev.com</a>
    </address>
  </footer>
</article>
```

---

## ⚠️ Etiquetas NO Recomendadas Actualmente

Estas etiquetas aún funcionan pero **no son semánticas** y deben evitarse:

### `<b>` - Negrita (NO usar)

**❌ Incorrecto:**
```html
<p>Este texto es <b>importante</b></p>
```

**✅ Correcto:**
```html
<p>Este texto es <strong>importante</strong></p>
```

---

### `<i>` - Cursiva (NO usar)

**❌ Incorrecto:**
```html
<p>Este es un término en <i>inglés</i></p>
```

**✅ Correcto:**
```html
<p>Este es un término en <em>inglés</em></p>
```

---

### `<u>` - Subrayado (NO usar)

**❌ Incorrecto:**
```html
<p>Este texto está <u>subrayado</u></p>
```

**✅ Correcto (usa CSS):**
```html
<p>Este texto está <span style="text-decoration: underline;">subrayado</span></p>
```

O mejor aún:
```html
<p>Este texto está <mark>resaltado</mark></p> <!-- Para resaltar -->
<p>Leer el <cite>título del libro</cite></p> <!-- Para títulos -->
```

---

### `<small>` - Texto pequeño (uso limitado)

**❌ Incorrecto (solo para hacer texto pequeño):**
```html
<small>Este texto es pequeño</small>
```

**✅ Correcto (para texto legal o notas al pie):**
```html
<footer>
  <small>&copy; 2024 Todos los derechos reservados</small>
</footer>
```

---

## 🎯 Buenas Prácticas

1. ✅ Usar etiquetas semánticas en lugar de `<div>` cuando sea posible
2. ✅ Incluir solo un `<main>` por página
3. ✅ Usar `<article>` para contenido independiente
4. ✅ Usar `<section>` para agrupar contenido relacionado
5. ✅ Agregar `aria-label` a múltiples `<nav>` para diferenciarlos
6. ✅ Usar `<time>` con `datetime` para fechas
7. ✅ Reemplazar `<b>`, `<i>`, `<u>` con alternativas semánticas
8. ✅ Incluir encabezados en `<section>` y `<article>`

---

## 📚 Recursos Adicionales

- [MDN - HTML Semántico](https://developer.mozilla.org/es/docs/Glossary/Semantics)
- [W3C - HTML5 Semantic Elements](https://www.w3.org/TR/html5/)
- [WebAIM - Accesibilidad Web](https://webaim.org/)

---

**💡 Recuerda:** El HTML semántico no solo mejora tu código, también hace la web más accesible para todos los usuarios.


