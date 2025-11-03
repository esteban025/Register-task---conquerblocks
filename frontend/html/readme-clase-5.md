# Fundamentos de HTML - Etiquetas Básicas

Esta guía empezaremos viendo un poco de etiquetas que normalmente se utilizarían en un archivo html.

## 📄 Extensión de Archivos

Los archivos HTML utilizan la extensión `.html` o `.htm`

---

## 🔤 Etiquetas de Títulos (Headings)

Las etiquetas de encabezado van desde `<h1>` hasta `<h6>`, donde `<h1>` es el más importante y `<h6>` el menos importante.

### Ejemplo:

```html
<h1>Mi título principal</h1>
<h2>Mi subtítulo de la página</h2>
<h3>Sección importante</h3>
<h4>Subsección</h4>
<h5>Detalle menor</h5>
<h6>Nota al pie</h6>
```

**Buenas prácticas:**
- Usar solo un `<h1>` por página
- Mantener una jerarquía lógica
- No saltar niveles (ej: no ir de `<h1>` a `<h3>`)

---

## 📝 Párrafos

La etiqueta `<p>` se utiliza para crear párrafos de texto.

### Ejemplo:

```html
<p>Este es un párrafo de texto que describe información importante sobre mi página web.</p>

<p>Este es otro párrafo separado del anterior.</p>
```

---

## 📌 Citas y Referencias

### Blockquote - Citas largas

La etiqueta `<blockquote>` indica que el texto pertenece a una fuente externa. Se puede agregar el atributo `cite` para referenciar la fuente original.

```html
<blockquote cite="https://www.ejemplo.com/articulo">
  "La inteligencia artificial está transformando la manera en que desarrollamos software."
</blockquote>
```

### Cite - Citas cortas

La etiqueta `<cite>` se renderiza en cursiva y se usa para títulos de obras o referencias.

```html
<p>Como se menciona en <cite>El arte de la programación</cite>, la práctica constante es esencial.</p>
```

---

## 💻 Código

La etiqueta `<code>` indica al navegador que el contenido es código de programación.

### Ejemplo:

```html
<p>Para obtener datos del usuario utiliza: <code>const {data, error} = await getUserInfo()</code></p>
```

### Para bloques de código más grandes:

```html
<pre>
  <code>
    function saludar(nombre) {
      return `Hola, ${nombre}!`;
    }
  </code>
</pre>
```

---

## ✨ Énfasis e Importancia

### Strong - Texto importante

La etiqueta `<strong>` se usa para resaltar palabras clave o información importante. Se renderiza en **negrita**.

```html
<p>Este elemento es muy <strong>importante</strong> para la comprensión del tema.</p>
```

### Em - Énfasis

La etiqueta `<em>` enfatiza texto y se renderiza en *cursiva*.

```html
<p>Me he matriculado en <em>ConquerBloks</em> para aprender desarrollo web.</p>
```

---

## 🔗 Enlaces (Links)

La etiqueta `<a>` (anchor) sirve para crear enlaces a otras páginas, tanto internas como externas.

### Atributos principales:

- **href**: URL de destino
- **target**: Dónde abrir el enlace (`_blank` para nueva pestaña)
- **download**: Indica que el recurso debe descargarse

### Ejemplos:

```html
<!-- Enlace interno -->
<a href="/README.md">Ir al README del proyecto</a>

<!-- Enlace externo (nueva pestaña) -->
<a href="https://google.com" target="_blank">Buscar en Google</a>

<!-- Enlace de descarga -->
<a href="/documentos/guia.pdf" download>Descargar guía en PDF</a>

<!-- Enlace a sección de la misma página -->
<a href="#seccion-contacto">Ir a Contacto</a>
```

---

## 📏 Espacios en Blanco

HTML ignora múltiples espacios y saltos de línea por defecto. Aquí están las formas de controlarlos:

### Espacio manual

```html
<p>Palabra1&nbsp;&nbsp;&nbsp;Palabra2</p>
```

Resultado: Palabra1   Palabra2

### Salto de línea

```html
<p>Primera línea<br>Segunda línea</p>
```

### Salto de palabra sugerido

```html
<p>Supercalifragilistico<wbr>espialidoso</p>
```

La etiqueta `<wbr>` indica dónde puede cortarse una palabra larga si es necesario.

### Texto preformateado

```html
<pre>
  Este    texto    respeta
  todos   los      espacios
  y       saltos   de línea
</pre>
```

---

## 🎯 Buenas Prácticas

1. ✅ Usar etiquetas semánticas apropiadas
2. ✅ Mantener una estructura jerárquica clara con los headings
3. ✅ Agregar atributos `alt` en imágenes
4. ✅ Usar `target="_blank"` con `rel="noopener noreferrer"` para enlaces externos
5. ✅ Validar el código HTML regularmente
6. ✅ Mantener el código limpio y bien indentado

---

## 📚 Recursos Adicionales

- [MDN Web Docs - HTML](https://developer.mozilla.org/es/docs/Web/HTML)
- [W3C HTML Validator](https://validator.w3.org/)
- [Can I Use](https://caniuse.com/) - Compatibilidad de navegadores
