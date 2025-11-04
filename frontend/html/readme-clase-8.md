# Tablas HTML - Guía Básica

## 📊 ¿Qué son las tablas?

Las tablas HTML sirven para organizar y mostrar **datos estructurados** en filas y columnas. Son ideales para información tabular como horarios, precios, estadísticas, etc.

**⚠️ Importante:** Las tablas son para datos, NO para diseño o layout de páginas.

---

## 🔧 Etiquetas Principales

### `<table>` - Tabla

Contenedor principal de la tabla.

**Atributo `summary` (obsoleto en HTML5):**
- Antes se usaba para describir la tabla
- Ahora se recomienda usar `<caption>` o `aria-describedby`

```html
<table>
  <!-- Contenido de la tabla -->
</table>
```

---

### `<tr>` - Fila (Table Row)

Define una fila de la tabla.

```html
<table>
  <tr>
    <!-- Celdas aquí -->
  </tr>
  <tr>
    <!-- Otra fila -->
  </tr>
</table>
```

---

### `<th>` - Encabezado (Table Header)

Celda de encabezado. Se muestra en **negrita** y centrado por defecto.

```html
<tr>
  <th>Nombre</th>
  <th>Edad</th>
  <th>Ciudad</th>
</tr>
```

---

### `<td>` - Celda de Datos (Table Data)

Celda normal con datos.

```html
<tr>
  <td>Juan</td>
  <td>25</td>
  <td>Madrid</td>
</tr>
```

---

### `<caption>` - Título de Tabla

Título o descripción de la tabla. Debe ser el primer elemento dentro de `<table>`.

```html
<table>
  <caption>Lista de Estudiantes 2024</caption>
  <!-- Resto de la tabla -->
</table>
```

---

## 📝 Ejemplo Básico

```html
<table>
  <caption>Productos Disponibles</caption>
  <tr>
    <th>Producto</th>
    <th>Precio</th>
    <th>Stock</th>
  </tr>
  <tr>
    <td>Laptop</td>
    <td>$899</td>
    <td>15</td>
  </tr>
  <tr>
    <td>Mouse</td>
    <td>$25</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Teclado</td>
    <td>$45</td>
    <td>30</td>
  </tr>
</table>
```

**Resultado visual:**

| Producto | Precio | Stock |
|----------|--------|-------|
| Laptop   | $899   | 15    |
| Mouse    | $25    | 50    |
| Teclado  | $45    | 30    |

---

## ⚡ Diferencias Clave

| Etiqueta | Propósito | Estilo por defecto |
|----------|-----------|-------------------|
| `<table>` | Contenedor principal | - |
| `<caption>` | Título de la tabla | Centrado, arriba |
| `<tr>` | Fila | - |
| `<th>` | Encabezado | **Negrita**, centrado |
| `<td>` | Datos | Normal, alineado izq. |

---

## 💡 Consejos Rápidos

1. ✅ Usar `<caption>` para describir la tabla
2. ✅ Usar `<th>` para encabezados, NO `<td>` en negrita
3. ✅ Cada fila debe tener el mismo número de columnas
4. ✅ Las tablas son para datos, usa CSS Grid/Flexbox para layouts
5. ✅ Añade `border="1"` temporalmente para visualizar la estructura
6. ⚠️ El atributo `summary` está obsoleto, usa `<caption>` en su lugar

---

## ❌ Errores Comunes

```html
<!-- ❌ INCORRECTO: caption fuera de lugar -->
<caption>Título</caption>
<table>
  <!-- ... -->
</table>

<!-- ✅ CORRECTO -->
<table>
  <caption>Título</caption>
  <!-- ... -->
</table>
```