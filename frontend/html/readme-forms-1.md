# Formularios HTML - Básico

## 📝 ¿Qué es un formulario?

Permite a los usuarios enviar datos al servidor (login, registro, búsquedas, etc.).

---

## 🏗️ Etiqueta `<form>`

```html
<form action="/procesar" method="POST">
  <!-- inputs aquí -->
</form>
```

---

## 🔧 Atributos del Form

### `action` - Dónde se envían los datos
```html
<form action="/registro">
```

### `method` - Cómo se envían (GET o POST)
```html
<form method="POST">
```

### `name` - Nombre del formulario
```html
<form name="formularioContacto">
```

### `target` - Dónde abrir la respuesta
```html
<form target="_blank">  <!-- Nueva pestaña -->
<form target="_self">   <!-- Misma ventana (default) -->
```

---

## 📨 Métodos de Envío

### GET
- Datos visibles en la URL
- Para búsquedas y filtros

```html
<form action="/buscar" method="GET">
  <input type="text" name="q">
  <button type="submit">Buscar</button>
</form>
```
**Resultado:** `www.sitio.com/buscar?q=html`

### POST
- Datos ocultos en el cuerpo de la petición
- Para contraseñas, registro, archivos

```html
<form action="/login" method="POST">
  <input type="text" name="usuario">
  <input type="password" name="password">
  <button type="submit">Entrar</button>
</form>
```

---

## 📥 Tipos de Input

### Texto
```html
<input type="text" name="nombre" placeholder="Tu nombre">
```

### Email
```html
<input type="email" name="correo" placeholder="tu@email.com">
```

### Contraseña
```html
<input type="password" name="clave">
```

### Número
```html
<input type="number" name="edad" min="18" max="100">
```

### Teléfono
```html
<input type="tel" name="telefono">
```

### Fecha
```html
<input type="date" name="fechaNacimiento">
```

### Archivo
```html
<input type="file" name="documento">
```

### Oculto
```html
<input type="hidden" name="userId" value="12345">
```

### Botón de envío
```html
<button type="submit">Enviar</button>
<input type="submit" value="Enviar">
```

---

## 🎯 Atributos Importantes

### `name` - Identifica el campo (obligatorio)
```html
<input type="text" name="usuario">
```

### `value` - Valor inicial
```html
<input type="text" name="ciudad" value="Quito">
```

### `placeholder` - Texto de ayuda
```html
<input type="text" placeholder="Escribe aquí...">
```

### `required` - Campo obligatorio
```html
<input type="email" name="correo" required>
```

### `readonly` - Solo lectura
```html
<input type="text" value="No editable" readonly>
```

### `disabled` - Desactivado
```html
<input type="text" disabled>
```

### `maxlength` - Límite de caracteres
```html
<input type="text" maxlength="50">
```

### `min` y `max` - Límites numéricos
```html
<input type="number" min="1" max="100">
```

---

## 📝 Ejemplo Básico

```html
<form action="/contacto" method="POST" name="contacto">
  
  <input type="text" name="nombre" placeholder="Nombre" required>
  
  <input type="email" name="email" placeholder="Email" required>
  
  <input type="tel" name="telefono" placeholder="Teléfono">
  
  <textarea name="mensaje" rows="4" placeholder="Mensaje"></textarea>
  
  <button type="submit">Enviar</button>
</form>
```

---

## 📋 Elementos Adicionales

### Textarea - Texto multilínea
```html
<textarea name="comentario" rows="5" cols="30"></textarea>
```

### Select - Lista desplegable
```html
<select name="pais">
  <option value="">Selecciona</option>
  <option value="ec">Ecuador</option>
  <option value="co">Colombia</option>
</select>
```

---

## 🔄 GET vs POST

| GET | POST |
|-----|------|
| Datos en URL | Datos ocultos |
| Búsquedas | Login, registro |
| Limitado (~2KB) | Sin límite |

---

## 💡 Consejos

- ✅ Siempre usar `name` en los inputs
- ✅ Usar `POST` para contraseñas
- ✅ Usar `GET` para búsquedas
- ✅ Agregar `required` a campos obligatorios
- ✅ Usar el `type` correcto para cada dato