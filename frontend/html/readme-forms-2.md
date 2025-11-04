# Formularios HTML II

## ☑️ Checkbox vs Radio

### Checkbox - Selección múltiple
Permite seleccionar **varias opciones**.

```html
<input type="checkbox" name="hobbies" value="deportes"> Deportes
<input type="checkbox" name="hobbies" value="musica"> Música
<input type="checkbox" name="hobbies" value="lectura"> Lectura
```

### Radio - Selección única
Solo permite seleccionar **una opción** del grupo (mismo `name`).

```html
<input type="radio" name="genero" value="m"> Masculino
<input type="radio" name="genero" value="f"> Femenino
<input type="radio" name="genero" value="o"> Otro
```

**Diferencia clave:** Checkbox permite múltiples, Radio solo uno por grupo.

---

## 🎨 Color

Selector de color. Devuelve valor hexadecimal.

```html
<input type="color" name="favorito" value="#ff0000">
```

---

## 📅 Date

Selector de fecha.

```html
<input type="date" name="cumpleanos" min="1900-01-01" max="2024-12-31">
```

---

## 🕐 Datetime-local

Fecha y hora local (sin zona horaria).

```html
<input type="datetime-local" name="cita">
```

---

## 🎚️ Range

Control deslizante para valores numéricos.

```html
<input type="range" name="volumen" min="0" max="100" value="50">
```

---

## 🔍 Search

Campo de búsqueda con "x" para limpiar.

```html
<input type="search" name="buscar" placeholder="Buscar...">
```

---

## 🖼️ Image

Botón de envío como imagen.

```html
<input type="image" src="boton.png" alt="Enviar" width="100">
```

---

## 📝 Textarea

Área de texto multilínea.

```html
<textarea name="comentario" rows="5" cols="40" placeholder="Escribe aquí..."></textarea>
```

**Atributos:**
- `rows`: Alto en líneas
- `cols`: Ancho en caracteres

---

## 📋 Select

Lista desplegable.

### Básico
```html
<select name="ciudad">
  <option value="">Selecciona</option>
  <option value="quito">Quito</option>
  <option value="guayaquil">Guayaquil</option>
</select>
```

### Con opción preseleccionada
```html
<select name="pais">
  <option value="ec" selected>Ecuador</option>
  <option value="co">Colombia</option>
</select>
```

### Con grupos
```html
<select name="vehiculo">
  <optgroup label="Autos">
    <option value="sedan">Sedán</option>
    <option value="suv">SUV</option>
  </optgroup>
  <optgroup label="Motos">
    <option value="sport">Deportiva</option>
    <option value="cruiser">Cruiser</option>
  </optgroup>
</select>
```

### Selección múltiple
```html
<select name="idiomas" multiple size="4">
  <option value="es">Español</option>
  <option value="en">Inglés</option>
  <option value="fr">Francés</option>
  <option value="de">Alemán</option>
</select>
```

---

## 🏷️ Label

Etiqueta que mejora accesibilidad y usabilidad. Al hacer clic, activa el input.

### Con `for` e `id`
```html
<label for="nombre">Nombre:</label>
<input type="text" id="nombre" name="nombre">
```

### Envolviendo el input
```html
<label>
  Email:
  <input type="email" name="email">
</label>
```

### Con checkbox
```html
<label for="acepto">
  <input type="checkbox" id="acepto" name="acepto">
  Acepto términos y condiciones
</label>
```

---

## 📦 Fieldset y Legend

Agrupa campos relacionados con un borde visual.

```html
<fieldset>
  <legend>Información Personal</legend>
  
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre">
  
  <label for="edad">Edad:</label>
  <input type="number" id="edad" name="edad">
</fieldset>
```

### Ejemplo con opciones
```html
<fieldset>
  <legend>Selecciona tu plan</legend>
  
  <label>
    <input type="radio" name="plan" value="basico">
    Plan Básico - $9.99
  </label>
  
  <label>
    <input type="radio" name="plan" value="premium">
    Plan Premium - $19.99
  </label>
</fieldset>
```

---

## 🔑 Relación Label-Input

El atributo `id` del input debe coincidir con el `for` del label:

```html
<label for="email">Email:</label>
<input type="text" id="email" name="email">
```

**Ventajas:**
- ✅ Click en label activa el input
- ✅ Mejor accesibilidad
- ✅ Usabilidad en móviles

---

## 💡 Consejos

- ✅ Usa `label` siempre con inputs
- ✅ `id` debe ser único en la página
- ✅ `name` es para enviar datos
- ✅ `fieldset` mejora organización visual
- ✅ Radio necesita mismo `name` para funcionar como grupo
- ✅ Checkbox puede tener diferentes `name` o el mismo para grupos