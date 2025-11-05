# Etiquetas Interactivas HTML

## 📋 Details y Summary

Crea secciones expandibles/colapsables sin JavaScript.

```html
<details>
  <summary>Haz clic para ver más</summary>
  <p>Este contenido está oculto hasta que se expande.</p>
</details>
```

### Con contenido abierto por defecto

```html
<details open>
  <summary>Información importante</summary>
  <p>Este contenido está visible desde el inicio.</p>
</details>
```

### Ejemplo práctico - FAQ

```html
<details>
  <summary>¿Qué es HTML?</summary>
  <p>HTML es el lenguaje de marcado para crear páginas web.</p>
</details>

<details>
  <summary>¿Qué es CSS?</summary>
  <p>CSS es el lenguaje para dar estilo a documentos HTML.</p>
</details>

<details>
  <summary>¿Qué es JavaScript?</summary>
  <p>JavaScript es un lenguaje de programación para páginas web interactivas.</p>
</details>
```

---

## 💬 Dialog - Modales

Crea diálogos y modales nativos.

### Básico

```html
<dialog id="miModal">
  <h2>Título del Modal</h2>
  <p>Contenido del modal...</p>
  <button onclick="document.getElementById('miModal').close()">Cerrar</button>
</dialog>

<button onclick="document.getElementById('miModal').showModal()">Abrir Modal</button>
```

### Como modal (con backdrop)

```html
<dialog id="modal">
  <form method="dialog">
    <h2>Confirmar acción</h2>
    <p>¿Estás seguro de continuar?</p>
    <button value="cancel">Cancelar</button>
    <button value="confirm">Confirmar</button>
  </form>
</dialog>

<script>
  const modal = document.getElementById('modal');
  // Abrir
  modal.showModal();
  // Cerrar
  modal.close();
</script>
```

### Como diálogo no modal

```html
<dialog id="info">
  <p>Esto es un mensaje informativo</p>
  <button onclick="this.parentElement.close()">OK</button>
</dialog>

<script>
  document.getElementById('info').show(); // No bloquea la página
</script>
```

---

## 🎈 Popover

Crea popovers nativos (HTML moderno).

```html
<button popovertarget="mipopover">Mostrar Popover</button>

<div id="mipopover" popover>
  <h3>Contenido del Popover</h3>
  <p>Este es un popover nativo de HTML.</p>
</div>
```

### Con cierre automático

```html
<button popovertarget="notificacion">Ver notificación</button>

<div id="notificacion" popover="auto">
  <p>¡Nueva notificación!</p>
</div>
```

### Manual (no se cierra automáticamente)

```html
<button popovertarget="menu" popovertargetaction="toggle">Menú</button>

<div id="menu" popover="manual">
  <ul>
    <li><a href="#perfil">Perfil</a></li>
    <li><a href="#configuracion">Configuración</a></li>
    <li><a href="#salir">Salir</a></li>
  </ul>
  <button popovertarget="menu" popovertargetaction="hide">Cerrar</button>
</div>
```

---

## 📝 Datalist

Crea un input con autocompletado de opciones.

```html
<label for="navegador">Elige tu navegador:</label>
<input list="navegadores" id="navegador" name="navegador">

<datalist id="navegadores">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Safari">
  <option value="Edge">
  <option value="Opera">
</datalist>
```

### Con descripciones

```html
<input list="ciudades" placeholder="Selecciona ciudad">

<datalist id="ciudades">
  <option value="Quito">Capital de Ecuador</option>
  <option value="Guayaquil">Puerto Principal</option>
  <option value="Cuenca">Ciudad Patrimonio</option>
</datalist>
```

### Ejemplo práctico

```html
<label for="email">Email:</label>
<input type="email" list="dominios" id="email" name="email">

<datalist id="dominios">
  <option value="@gmail.com">
  <option value="@hotmail.com">
  <option value="@yahoo.com">
  <option value="@outlook.com">
</datalist>
```

---

## 🎯 Select2 (Librería)

Select2 es una **librería externa** que mejora los elementos `<select>`.

**Nota:** Requiere jQuery y la librería Select2.

```html
<!-- Incluir librerías -->
<link href="https://cdn.jsdelivr.net/npm/select2@4.1.0/dist/css/select2.min.css" rel="stylesheet" />
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0/dist/js/select2.min.js"></script>

<!-- HTML -->
<select id="paises" multiple>
  <option value="ec">Ecuador</option>
  <option value="co">Colombia</option>
  <option value="pe">Perú</option>
  <option value="ve">Venezuela</option>
</select>

<!-- Inicializar -->
<script>
  $('#paises').select2({
    placeholder: "Selecciona países",
    allowClear: true
  });
</script>
```

**Características:**
- Búsqueda dentro del select
- Selección múltiple mejorada
- Carga dinámica de datos
- Personalización de estilos

---

## ✏️ WYSIWYG (What You See Is What You Get)

Editores de texto enriquecido. **Requieren librerías externas**.

### contenteditable (Nativo)

```html
<div contenteditable="true" style="border: 1px solid #ccc; padding: 10px;">
  Este contenido es editable. Puedes escribir aquí...
</div>
```

### TinyMCE (Librería popular)

```html
<textarea id="editor"></textarea>

<script src="https://cdn.tiny.cloud/1/YOUR_API_KEY/tinymce/6/tinymce.min.js"></script>
<script>
  tinymce.init({
    selector: '#editor',
    plugins: 'lists link image',
    toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | bullist numlist'
  });
</script>
```

### Quill (Librería moderna)

```html
<link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
<div id="editor"></div>

<script src="https://cdn.quilljs.com/1.3.6/quill.js"></script>
<script>
  const quill = new Quill('#editor', {
    theme: 'snow',
    modules: {
      toolbar: [
        ['bold', 'italic', 'underline'],
        ['link', 'image'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }]
      ]
    }
  });
</script>
```

**Librerías populares:**
- TinyMCE
- Quill
- CKEditor
- Summernote

---

## ⚠️ Ocultación Semántica

Diferencias entre ocultar contenido:

### `hidden` (HTML)
Oculta completamente del DOM y lectores de pantalla.

```html
<p hidden>Este contenido está oculto</p>
```

### `display: none` (CSS)
Oculta visual y semánticamente.

```html
<p style="display: none;">Oculto con CSS</p>
```

### `visibility: hidden` (CSS)
Oculta visualmente pero ocupa espacio.

```html
<p style="visibility: hidden;">Invisible pero ocupa espacio</p>
```

### `aria-hidden` (Accesibilidad)
Oculta solo para lectores de pantalla.

```html
<span aria-hidden="true">🎉</span> <!-- Emoji oculto para lectores -->
```

---

## 🚫 Cuidado: Uso sin Sentido

**❌ NO usar solo por estética:**

```html
<!-- MAL: Details usado sin propósito -->
<details>
  <summary>Título</summary>
  <p>Contenido que siempre debería estar visible</p>
</details>
```

**✅ Usar cuando tenga sentido:**

```html
<!-- BIEN: FAQ, contenido adicional opcional -->
<details>
  <summary>Especificaciones técnicas</summary>
  <ul>
    <li>Procesador: Intel i7</li>
    <li>RAM: 16GB</li>
  </ul>
</details>
```

**Reglas:**
- `<details>` → Para contenido secundario u opcional
- `<dialog>` → Para acciones que requieren atención
- `<datalist>` → Para sugerencias, no para validación estricta
- Etiquetas semánticas tienen propósito, no son para diseño

---

## 📝 Ejemplo Completo

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Etiquetas Interactivas</title>
</head>
<body>

  <!-- FAQ con details -->
  <h2>Preguntas Frecuentes</h2>
  <details>
    <summary>¿Cómo me registro?</summary>
    <p>Haz clic en el botón "Registrarse" en la parte superior.</p>
  </details>

  <!-- Input con datalist -->
  <label for="pais">País:</label>
  <input list="paises" id="pais">
  <datalist id="paises">
    <option value="Ecuador">
    <option value="Colombia">
    <option value="Perú">
  </datalist>

  <!-- Modal -->
  <button onclick="document.getElementById('confirmDialog').showModal()">
    Eliminar cuenta
  </button>

  <dialog id="confirmDialog">
    <h2>Confirmar eliminación</h2>
    <p>¿Estás seguro? Esta acción no se puede deshacer.</p>
    <form method="dialog">
      <button value="cancel">Cancelar</button>
      <button value="confirm">Eliminar</button>
    </form>
  </dialog>

  <!-- Popover -->
  <button popovertarget="ayuda">?</button>
  <div id="ayuda" popover>
    <p>Aquí puedes encontrar ayuda sobre esta función.</p>
  </div>

</body>
</html>
```

---

## 💡 Consejos

- ✅ `<details>` es nativo, no necesita JavaScript
- ✅ `<dialog>` mejora la accesibilidad de modales
- ✅ `popover` es moderno (verifica compatibilidad)
- ✅ `<datalist>` no restringe, solo sugiere
- ⚠️ Select2 y WYSIWYG requieren librerías externas
- ⚠️ Usa etiquetas semánticas con propósito, no por diseño
- ✅ Prefiere soluciones nativas antes que librerías

---

## 🔗 Compatibilidad

| Etiqueta | Soporte |
|----------|---------|
| `<details>` | Excelente (todos los navegadores modernos) |
| `<dialog>` | Bueno (desde 2022) |
| `popover` | Nuevo (Chrome 114+, verificar soporte) |
| `<datalist>` | Excelente |

**Verifica:** [Can I Use](https://caniuse.com/)

---

## 📚 Recursos

- [MDN - Details](https://developer.mozilla.org/es/docs/Web/HTML/Element/details)
- [MDN - Dialog](https://developer.mozilla.org/es/docs/Web/HTML/Element/dialog)
- [Select2 Docs](https://select2.org/)
- [Quill Editor](https://quilljs.com/)
- [TinyMCE](https://www.tiny.cloud/)