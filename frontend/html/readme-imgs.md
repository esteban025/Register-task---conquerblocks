# Imágenes en HTML

## 🖼️ Etiqueta `<img>`

Elemento para insertar imágenes. Se auto-cierra.

```html
<img src="imagen.jpg" alt="Descripción de la imagen">
```

---

## 🔧 Atributos Principales

### `src` - Fuente (obligatorio)
Ruta de la imagen.

```html
<!-- Ruta relativa -->
<img src="images/foto.jpg" alt="Foto">

<!-- Ruta absoluta -->
<img src="/assets/logo.png" alt="Logo">

<!-- URL externa -->
<img src="https://ejemplo.com/imagen.jpg" alt="Imagen">
```

### `alt` - Texto alternativo (obligatorio)
Describe la imagen para accesibilidad y cuando no carga.

```html
<img src="perro.jpg" alt="Perro labrador dorado corriendo en el parque">
```

### `width` y `height` - Dimensiones
```html
<img src="foto.jpg" alt="Foto" width="300" height="200">
```

### `loading` - Carga diferida
Optimiza el rendimiento.

```html
<!-- Carga inmediata (default) -->
<img src="hero.jpg" alt="Banner" loading="eager">

<!-- Carga cuando sea necesario (lazy loading) -->
<img src="imagen-abajo.jpg" alt="Contenido" loading="lazy">
```

**Uso:** `lazy` para imágenes fuera de la vista inicial.

### `title` - Tooltip
Texto que aparece al pasar el mouse.

```html
<img src="icono.png" alt="Ayuda" title="Haz clic para más información">
```

---

## 📁 Formatos de Imagen

### Recomendados

| Formato | Uso | Ventajas |
|---------|-----|----------|
| **JPEG/JPG** | Fotos, imágenes complejas | Buen tamaño, buena calidad |
| **PNG** | Logos, íconos, transparencias | Soporta transparencia |
| **SVG** | Íconos, gráficos vectoriales | Escalable sin perder calidad |
| **WebP** | General (moderno) | Mejor compresión que JPEG/PNG |
| **AVIF** | General (muy moderno) | Mejor compresión que WebP |

### Ejemplo por tipo
```html
<!-- Foto -->
<img src="paisaje.jpg" alt="Paisaje">

<!-- Logo con transparencia -->
<img src="logo.png" alt="Logo de la empresa">

<!-- Ícono vectorial -->
<img src="icono.svg" alt="Menú">

<!-- Imagen moderna -->
<img src="foto.webp" alt="Foto optimizada">
```

---

## 🎨 Figure y Figcaption

Contenedor semántico para imágenes con descripción.

```html
<figure>
  <img src="grafico.png" alt="Gráfico de ventas 2024">
  <figcaption>Ventas anuales por trimestre</figcaption>
</figure>
```

### Múltiples imágenes
```html
<figure>
  <img src="foto1.jpg" alt="Producto vista frontal">
  <img src="foto2.jpg" alt="Producto vista lateral">
  <figcaption>Vistas del producto XYZ</figcaption>
</figure>
```

---

## 📱 Imágenes Responsivas

### Atributo `srcset`

Permite al navegador elegir la mejor imagen según el dispositivo.

```html
<img 
  src="imagen-small.jpg" 
  srcset="imagen-small.jpg 480w,
          imagen-medium.jpg 768w,
          imagen-large.jpg 1200w"
  sizes="(max-width: 600px) 480px,
         (max-width: 900px) 768px,
         1200px"
  alt="Imagen responsiva">
```

**Explicación:**
- `480w`: Imagen de 480px de ancho
- `sizes`: Indica qué tamaño usar según el viewport

### Ejemplo simple
```html
<img 
  src="foto.jpg"
  srcset="foto-small.jpg 400w, foto-large.jpg 800w"
  alt="Foto">
```

---

## 🖼️ Elemento `<picture>`

Ofrece múltiples fuentes según condiciones.

### Por tipo de formato
```html
<picture>
  <source srcset="imagen.avif" type="image/avif">
  <source srcset="imagen.webp" type="image/webp">
  <img src="imagen.jpg" alt="Imagen con fallback">
</picture>
```

### Por tamaño de pantalla
```html
<picture>
  <source media="(min-width: 800px)" srcset="imagen-desktop.jpg">
  <source media="(min-width: 400px)" srcset="imagen-tablet.jpg">
  <img src="imagen-mobile.jpg" alt="Imagen responsiva">
</picture>
```

### Combinado
```html
<picture>
  <source 
    media="(min-width: 800px)" 
    srcset="hero-large.webp" 
    type="image/webp">
  <source 
    media="(min-width: 800px)" 
    srcset="hero-large.jpg">
  <source 
    srcset="hero-small.webp" 
    type="image/webp">
  <img src="hero-small.jpg" alt="Imagen hero">
</picture>
```

---

## 🔍 Elemento `<source>`

Define fuentes alternativas dentro de `<picture>`.

### Atributos principales

**`srcset`** - Ruta de la imagen
```html
<source srcset="imagen.webp">
```

**`type`** - Tipo MIME
```html
<source srcset="imagen.webp" type="image/webp">
```

**`media`** - Media query
```html
<source media="(min-width: 768px)" srcset="imagen-grande.jpg">
```

---

## 📝 Ejemplo Completo

```html
<figure>
  <picture>
    <!-- Formato moderno para pantallas grandes -->
    <source 
      media="(min-width: 1024px)" 
      srcset="banner-desktop.webp" 
      type="image/webp">
    
    <!-- Fallback JPEG para pantallas grandes -->
    <source 
      media="(min-width: 1024px)" 
      srcset="banner-desktop.jpg">
    
    <!-- Formato moderno para móviles -->
    <source 
      srcset="banner-mobile.webp" 
      type="image/webp">
    
    <!-- Imagen por defecto -->
    <img 
      src="banner-mobile.jpg" 
      alt="Banner promocional de verano 2024"
      loading="lazy"
      width="800"
      height="400">
  </picture>
  <figcaption>Promoción de verano - 50% de descuento</figcaption>
</figure>
```

---

## 🌐 Importancia de las URLs

### URLs Relativas
```html
<!-- Mismo directorio -->
<img src="foto.jpg" alt="Foto">

<!-- Carpeta específica -->
<img src="images/foto.jpg" alt="Foto">

<!-- Nivel superior -->
<img src="../images/foto.jpg" alt="Foto">
```

### URLs Absolutas
```html
<!-- Desde la raíz del sitio -->
<img src="/assets/images/logo.png" alt="Logo">

<!-- URL completa externa -->
<img src="https://ejemplo.com/imagen.jpg" alt="Imagen">
```

**Recomendación:** Usa rutas relativas para imágenes locales y absolutas para CDN externos.

---

## 💡 Consejos

- ✅ Siempre usa `alt` descriptivo
- ✅ Especifica `width` y `height` para evitar saltos de layout
- ✅ Usa `loading="lazy"` para imágenes fuera del viewport inicial
- ✅ Prefiere WebP/AVIF sobre JPEG/PNG para mejor compresión
- ✅ Usa `<picture>` para servir imágenes optimizadas por dispositivo
- ✅ Combina `<figure>` con `<figcaption>` para mejor semántica
- ⚠️ No uses imágenes muy pesadas (optimiza antes de subir)

---

## 📚 Recursos

- [MDN - Imágenes responsivas](https://developer.mozilla.org/es/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [Squoosh](https://squoosh.app/) - Optimizador de imágenes online