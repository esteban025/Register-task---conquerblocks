# Contenido Incrustado en HTML

## 🌐 Iframe

Incrusta otra página web dentro de tu página.

```html
<iframe src="https://www.ejemplo.com" width="600" height="400"></iframe>
```

### Atributos importantes

```html
<iframe 
  src="https://www.youtube.com/embed/VIDEO_ID"
  width="560" 
  height="315"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media"
  allowfullscreen>
</iframe>
```

### Ejemplos comunes

**YouTube:**
```html
<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
        width="560" height="315" allowfullscreen></iframe>
```

**Google Maps:**
```html
<iframe src="https://www.google.com/maps/embed?pb=..." 
        width="600" height="450" loading="lazy"></iframe>
```

---

## 📦 Embed

Incrusta contenido externo (PDF, multimedia, plugins).

```html
<embed src="documento.pdf" type="application/pdf" width="600" height="400">
```

### Tipos comunes

```html
<!-- PDF -->
<embed src="manual.pdf" type="application/pdf" width="100%" height="600">

<!-- Video -->
<embed src="video.mp4" type="video/mp4" width="640" height="360">

<!-- Audio -->
<embed src="audio.mp3" type="audio/mpeg">
```

**Nota:** `<embed>` es menos flexible que `<iframe>`, `<video>` o `<audio>`.

---

## 🎬 Video

Reproduce videos nativamente en el navegador.

```html
<video src="video.mp4" controls width="640" height="360"></video>
```

### Con múltiples fuentes

```html
<video controls width="640" height="360">
  <source src="video.webm" type="video/webm">
  <source src="video.mp4" type="video/mp4">
  Tu navegador no soporta video HTML5.
</video>
```

### Atributos

```html
<video 
  src="video.mp4"
  controls          <!-- Muestra controles -->
  autoplay          <!-- Inicia automáticamente -->
  muted             <!-- Sin sonido (necesario para autoplay) -->
  loop              <!-- Reproduce en bucle -->
  poster="imagen.jpg"  <!-- Imagen previa -->
  width="800"
  height="450">
</video>
```

### Ejemplo completo

```html
<video controls width="100%" poster="thumbnail.jpg">
  <source src="video.webm" type="video/webm">
  <source src="video.mp4" type="video/mp4">
  <track src="subtitles-es.vtt" kind="subtitles" srclang="es" label="Español">
  Tu navegador no soporta video.
</video>
```

---

## 🎵 Audio

Reproduce archivos de audio.

```html
<audio src="cancion.mp3" controls></audio>
```

### Con múltiples fuentes

```html
<audio controls>
  <source src="audio.ogg" type="audio/ogg">
  <source src="audio.mp3" type="audio/mpeg">
  Tu navegador no soporta audio HTML5.
</audio>
```

### Atributos

```html
<audio 
  src="musica.mp3"
  controls          <!-- Muestra controles -->
  autoplay          <!-- Inicia automáticamente -->
  loop              <!-- Reproduce en bucle -->
  muted             <!-- Sin sonido -->
  preload="auto">   <!-- auto, metadata, none -->
</audio>
```

### Formatos recomendados

| Formato | Uso |
|---------|-----|
| **MP3** | Compatible universalmente |
| **OGG** | Código abierto |
| **WAV** | Alta calidad (pesado) |

---

## 🎨 Canvas

Lienzo para dibujar gráficos con JavaScript.

```html
<canvas id="miCanvas" width="500" height="300"></canvas>
```

### Ejemplo con JavaScript

```html
<canvas id="miCanvas" width="400" height="200"></canvas>

<script>
  const canvas = document.getElementById('miCanvas');
  const ctx = canvas.getContext('2d');
  
  // Rectángulo
  ctx.fillStyle = 'blue';
  ctx.fillRect(50, 50, 100, 80);
  
  // Círculo
  ctx.beginPath();
  ctx.arc(250, 90, 40, 0, 2 * Math.PI);
  ctx.fillStyle = 'red';
  ctx.fill();
</script>
```

**Usos comunes:**
- Gráficos dinámicos
- Juegos
- Visualizaciones de datos
- Edición de imágenes

---

## 🗺️ Map y Area

Crea áreas clickeables en una imagen (mapa de imagen).

```html
<img src="mapa.jpg" alt="Mapa" usemap="#imagemap">

<map name="imagemap">
  <area shape="rect" coords="0,0,100,100" href="seccion1.html" alt="Sección 1">
  <area shape="circle" coords="200,200,50" href="seccion2.html" alt="Sección 2">
  <area shape="poly" coords="300,50,350,150,250,150" href="seccion3.html" alt="Sección 3">
</map>
```

### Formas disponibles

**Rectángulo:**
```html
<area shape="rect" coords="x1,y1,x2,y2" href="link.html" alt="Descripción">
```

**Círculo:**
```html
<area shape="circle" coords="x,y,radio" href="link.html" alt="Descripción">
```

**Polígono:**
```html
<area shape="poly" coords="x1,y1,x2,y2,x3,y3,..." href="link.html" alt="Descripción">
```

### Ejemplo práctico

```html
<img src="oficina.jpg" alt="Plano de oficina" usemap="#oficina">

<map name="oficina">
  <area shape="rect" coords="10,10,110,110" 
        href="sala-reuniones.html" alt="Sala de reuniones">
  <area shape="circle" coords="200,100,40" 
        href="recepcion.html" alt="Recepción">
  <area shape="rect" coords="250,10,350,110" 
        href="oficina-director.html" alt="Oficina del director">
</map>
```

**Herramienta útil:** [Image Map Generator](https://www.image-map.net/)

---

## 📝 Comparación Rápida

| Etiqueta | Uso |
|----------|-----|
| `<iframe>` | Incrustar páginas web completas |
| `<embed>` | Contenido externo genérico (legacy) |
| `<video>` | Reproducir videos |
| `<audio>` | Reproducir audio |
| `<canvas>` | Dibujar gráficos con JS |
| `<map>` + `<area>` | Áreas clickeables en imágenes |

---

## 💡 Consejos

### Iframe
- ✅ Usa `loading="lazy"` para iframes fuera del viewport
- ⚠️ Cuidado con seguridad (XSS)
- ✅ Agrega `sandbox` para restringir permisos

### Video/Audio
- ✅ Siempre incluye múltiples formatos
- ✅ `autoplay` solo funciona con `muted`
- ✅ Usa `poster` en videos para mejor UX
- ✅ Incluye texto alternativo para accesibilidad

### Canvas
- ✅ Siempre verifica soporte: `canvas.getContext('2d')`
- ✅ Especifica `width` y `height` en HTML, no CSS

### Map/Area
- ✅ Siempre agrega `alt` descriptivo
- ✅ Usa herramientas online para generar coordenadas
- ⚠️ Asegúrate que la imagen tenga `usemap="#nombre"`

---

## 🔒 Seguridad en Iframes

```html
<!-- Restringir permisos -->
<iframe 
  src="https://ejemplo.com" 
  sandbox="allow-scripts allow-same-origin">
</iframe>

<!-- Sin seguimiento -->
<iframe 
  src="https://ejemplo.com"
  referrerpolicy="no-referrer">
</iframe>
```

---

## 📚 Recursos

- [MDN - Contenido incrustado](https://developer.mozilla.org/es/docs/Web/HTML/Element)
- [Can I Use](https://caniuse.com/) - Compatibilidad de navegadores
- [Image Map Generator](https://www.image-map.net/) - Generador de mapas de imagen