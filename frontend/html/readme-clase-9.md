# Tablas HTML Avanzadas

## 🚀 Atributos de Expansión

### `colspan` - Expandir Columnas

Permite que una celda ocupe **múltiples columnas**.

**Ejemplo básico:**

```html
<table border="1">
  <tr>
    <th colspan="3">Información Personal</th>
  </tr>
  <tr>
    <th>Nombre</th>
    <th>Edad</th>
    <th>Ciudad</th>
  </tr>
  <tr>
    <td>Juan</td>
    <td>25</td>
    <td>Madrid</td>
  </tr>
</table>
```

**Resultado visual:**

```
┌─────────────────────────────┐
│   Información Personal      │  ← Ocupa 3 columnas
├─────────┬──────┬────────────┤
│ Nombre  │ Edad │   Ciudad   │
├─────────┼──────┼────────────┤
│  Juan   │  25  │   Madrid   │
└─────────┴──────┴────────────┘
```

**Ejemplo práctico - Horario:**

```html
<table border="1">
  <caption>Horario Semanal</caption>
  <tr>
    <th>Hora</th>
    <th colspan="2">Lunes a Viernes</th>
    <th>Sábado</th>
  </tr>
  <tr>
    <td>9:00-11:00</td>
    <td>Matemáticas</td>
    <td>Laboratorio</td>
    <td>Descanso</td>
  </tr>
</table>
```

---

### `rowspan` - Expandir Filas

Permite que una celda ocupe **múltiples filas**.

**Ejemplo básico:**

```html
<table border="1">
  <tr>
    <th rowspan="3">Categoría</th>
    <th>Producto</th>
    <th>Precio</th>
  </tr>
  <tr>
    <td>Laptop</td>
    <td>$899</td>
  </tr>
  <tr>
    <td>Mouse</td>
    <td>$25</td>
  </tr>
</table>
```

**Resultado visual:**

```
┌───────────┬──────────┬────────┐
│           │ Producto │ Precio │
│           ├──────────┼────────┤
│ Categoría │  Laptop  │ $899   │
│           ├──────────┼────────┤
│           │  Mouse   │  $25   │
└───────────┴──────────┴────────┘
```

**Ejemplo práctico - Contactos:**

```html
<table border="1">
  <tr>
    <th>Departamento</th>
    <th>Nombre</th>
    <th>Email</th>
  </tr>
  <tr>
    <td rowspan="2">Ventas</td>
    <td>Ana García</td>
    <td>ana@empresa.com</td>
  </tr>
  <tr>
    <td>Luis Pérez</td>
    <td>luis@empresa.com</td>
  </tr>
  <tr>
    <td rowspan="2">Soporte</td>
    <td>María López</td>
    <td>maria@empresa.com</td>
  </tr>
  <tr>
    <td>Carlos Ruiz</td>
    <td>carlos@empresa.com</td>
  </tr>
</table>
```

---

### Combinando `colspan` y `rowspan`

```html
<table border="1">
  <tr>
    <th colspan="2" rowspan="2">Encabezado Principal</th>
    <th>Columna 1</th>
    <th>Columna 2</th>
  </tr>
  <tr>
    <td>Dato A</td>
    <td>Dato B</td>
  </tr>
  <tr>
    <td>Fila 2</td>
    <td>Dato C</td>
    <td>Dato D</td>
    <td>Dato E</td>
  </tr>
</table>
```

---

## 🏗️ Etiquetas Semánticas de Tabla

Organizan la tabla en secciones lógicas para mejor estructura y accesibilidad.

### `<thead>` - Encabezado de Tabla

Agrupa las filas de encabezado. Útil para:
- Repetir encabezados al imprimir tablas largas
- Aplicar estilos específicos
- Mejorar accesibilidad

```html
<table>
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Precio</th>
      <th>Stock</th>
    </tr>
  </thead>
</table>
```

---

### `<tbody>` - Cuerpo de Tabla

Agrupa las filas de datos principales.

```html
<table>
  <tbody>
    <tr>
      <td>Producto 1</td>
      <td>$50</td>
      <td>100</td>
    </tr>
    <tr>
      <td>Producto 2</td>
      <td>$75</td>
      <td>50</td>
    </tr>
  </tbody>
</table>
```

---

### `<tfoot>` - Pie de Tabla

Agrupa filas de resumen o totales. Se coloca **antes de `<tbody>`** en el código, pero se muestra al final.

```html
<table>
  <tfoot>
    <tr>
      <th>Total</th>
      <td colspan="2">$125</td>
    </tr>
  </tfoot>
</table>
```

---

## 📊 Ejemplo Completo con Semántica

```html
<table border="1">
  <caption>Ventas del Mes</caption>
  
  <thead>
    <tr>
      <th>Producto</th>
      <th>Cantidad</th>
      <th>Precio Unit.</th>
      <th>Total</th>
    </tr>
  </thead>
  
  <tbody>
    <tr>
      <td>Laptop</td>
      <td>5</td>
      <td>$899</td>
      <td>$4,495</td>
    </tr>
    <tr>
      <td>Mouse</td>
      <td>20</td>
      <td>$25</td>
      <td>$500</td>
    </tr>
    <tr>
      <td>Teclado</td>
      <td>15</td>
      <td>$45</td>
      <td>$675</td>
    </tr>
  </tbody>
  
  <tfoot>
    <tr>
      <th colspan="3">Total General</th>
      <th>$5,670</th>
    </tr>
  </tfoot>
</table>
```

---

## 🔍 Comparación de Etiquetas

| Etiqueta | Ubicación | Propósito |
|----------|-----------|-----------|
| `<thead>` | Inicio | Encabezados de columnas |
| `<tbody>` | Medio | Datos principales |
| `<tfoot>` | Final | Totales o resúmenes |

---

## 💡 Consejos Rápidos

### Para `colspan` y `rowspan`:
1. ✅ El valor indica **cuántas columnas/filas** ocupará
2. ✅ Ajustar el número de celdas en otras filas/columnas
3. ✅ Usar `border="1"` temporalmente para verificar la estructura
4. ⚠️ Cuidado: las celdas fusionadas afectan el conteo total

### Para etiquetas semánticas:
1. ✅ Usar siempre `<thead>`, `<tbody>`, `<tfoot>` en tablas grandes
2. ✅ `<tfoot>` va ANTES de `<tbody>` en el código HTML
3. ✅ Mejora la accesibilidad y permite mejor estilizado con CSS
4. ✅ Los navegadores pueden imprimir `<thead>` en cada página

---

## ❌ Errores Comunes

```html
<!-- ❌ INCORRECTO: colspan mal calculado -->
<tr>
  <td colspan="3">A</td>
  <td>B</td> <!-- Sobra una celda -->
</tr>

<!-- ✅ CORRECTO -->
<tr>
  <td colspan="3">A</td>
</tr>
```

```html
<!-- ❌ INCORRECTO: orden incorrecto -->
<table>
  <tbody>...</tbody>
  <thead>...</thead>
  <tfoot>...</tfoot>
</table>

<!-- ✅ CORRECTO -->
<table>
  <thead>...</thead>
  <tfoot>...</tfoot>
  <tbody>...</tbody>
</table>
```

---

## 📚 Recursos

- [MDN - colspan](https://developer.mozilla.org/es/docs/Web/HTML/Element/td#colspan)
- [MDN - rowspan](https://developer.mozilla.org/es/docs/Web/HTML/Element/td#rowspan)
- [MDN - thead, tbody, tfoot](https://developer.mozilla.org/es/docs/Web/HTML/Element/table)