# Introducción a CSS

## 🎨 ¿Qué es CSS?

**CSS (Cascading Style Sheets)** es el lenguaje que define la **presentación visual** de documentos HTML. Controla colores, fuentes, espaciados, layouts y animaciones.

---

## ⚡ Características de CSS

- **Separación de contenido y presentación**: HTML estructura, CSS diseña
- **Cascada**: Los estilos se aplican en orden de prioridad
- **Herencia**: Propiedades heredan valores de elementos padres
- **Reutilización**: Un CSS para múltiples páginas HTML
- **Responsive**: Adapta diseños a diferentes dispositivos
- **Mantenimiento fácil**: Cambios centralizados

---

## 🧩 Componentes de CSS

### Anatomía de una Regla CSS

```css
/* Selector: qué elemento estilizar */
h1 {
  /* Propiedad: qué modificar | Valor: cómo modificarlo */
  color: blue;           /* Declaración */
  font-size: 32px;
  text-align: center;
}

/* Comentario: notas que no se ejecutan */
```

**Componentes:**
1. **Selector**: `h1`, `.clase`, `#id`
2. **Propiedad**: `color`, `font-size`, `margin`
3. **Valor**: `blue`, `32px`, `10px`
4. **Declaración**: `color: blue;`
5. **Regla**: Selector + Declaraciones
6. **Comentarios**: `/* texto */`

---

## 💡 Ejemplo de Sentencia CSS

```css
/* Selector de clase */
.card {
  /* Box model */
  width: 300px;
  padding: 20px;
  margin: 10px;
  
  /* Visual */
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  
  /* Tipografía */
  font-size: 16px;
  color: #333;
}
```

---

## ✅ Buenas Prácticas

1. **Nombres descriptivos**
   ```css
   .boton-principal { }  /* ✅ */
   .btn1 { }             /* ❌ */
   ```

2. **Indentación consistente**

3. **Agrupa propiedades relacionadas** (posición, box model, visual, tipografía)

4. **Usa hexadecimales cortos**
   ```css
   color: #fff;      /* ✅ */
   color: #ffffff;   /* ❌ */
   ```

5. **Evita !important**

6. **Comenta secciones importantes**

7. **Usa clases para estilos, IDs para JavaScript**

---

## 📂 Formas de Incluir CSS en HTML

### 1. CSS Externo (Recomendado)

**styles.css:**
```css
body {
  font-family: Arial, sans-serif;
  margin: 0;
}
```

**index.html:**
```html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
```

**Ventajas:** Reutilizable, cacheable, mantenible

---

### 2. CSS Interno

```html
<head>
  <style>
    body {
      background-color: #f0f0f0;
    }
  </style>
</head>
```

**Uso:** Estilos específicos de una sola página

---

### 3. CSS en Línea (Inline)

```html
<h1 style="color: red; font-size: 32px; text-align: center;">
  Título
</h1>
```

**Desventajas:** No reutilizable, difícil de mantener

**Uso:** Solo para pruebas rápidas

---

## 📊 Comparación

| Método | Reutilizable | Mantenibilidad | Uso recomendado |
|--------|--------------|----------------|-----------------|
| **Externo** | ✅ Sí | ✅ Excelente | Producción |
| **Interno** | ❌ No | ⚠️ Regular | Página única |
| **Inline** | ❌ No | ❌ Mala | Casos específicos |

---

## 📝 Ejemplo Completo

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejemplo CSS</title>
  <link rel="stylesheet" href="styles.css">
  
  <style>
    .destacado {
      background-color: yellow;
      padding: 5px;
    }
  </style>
</head>
<body>
  <h1>Introducción a CSS</h1>
  <p class="destacado">Párrafo con clase</p>
  <p style="color: blue;">Párrafo inline</p>
</body>
</html>
```

---

## 💡 Resumen

- **CSS** = Presentación visual de HTML
- **Sintaxis**: `selector { propiedad: valor; }`
- **Formas**: Externo (mejor), Interno, Inline
- **Prioridad**: Inline > ID > Clase > Elemento
- **Buenas prácticas**: Nombres descriptivos, organización

---