# 🎨 Paleta de Colores VÉRTICE - Regla 60-30-10

## 📋 Visión General

La paleta de colores de VÉRTICE sigue la **regla 60-30-10** del diseño, una técnica probada que crea equilibrio visual y jerarquía en el diseño web.

---

## 🎯 Los Colores

### 60% - Color Dominante: **Blanco Arena**
- **Código**: `#F9F8F6`
- **Variable CSS**: `--background`
- **Uso**: Fondos principales, espacios amplios, cards
- **Propósito**: Crea sensación de amplitud, limpieza y profesionalismo
- **Aplicación**: Debe cubrir aproximadamente el 60% del espacio visual

**Ejemplos de uso:**
```css
background-color: var(--background);  /* o */
@apply bg-background;
```

---

### 30% - Color Principal: **Verde Botella**
- **Código**: `#1C3D32`
- **Variable CSS**: `--primary`
- **Uso**: Títulos, navegación, estructura visual, elementos importantes
- **Propósito**: Establece la identidad de marca y jerarquía visual
- **Aplicación**: Debe cubrir aproximadamente el 30% del espacio visual

**Ejemplos de uso:**
```css
color: var(--primary);  /* o */
@apply text-primary bg-primary;
```

---

### 10% - Colores de Acento

#### **Terracota Suave**
- **Código**: `#C75C36`
- **Variable CSS**: `--secondary`
- **Uso**: Acentos visuales, elementos secundarios destacados
- **Propósito**: Aporta calidez y dirige atención a elementos importantes

#### **Verde Oliva**
- **Código**: `#476A47`
- **Variable CSS**: `--accent`
- **Uso**: Botones CTA, elementos interactivos principales
- **Propósito**: Genera acción y engagement del usuario

**Aplicación**: Los acentos combinados deben cubrir aproximadamente el 10% del espacio visual

**Ejemplos de uso:**
```css
background-color: var(--accent);  /* Botones principales */
color: var(--secondary);  /* Highlights */
@apply bg-accent text-secondary;
```

---

## 📝 Color de Texto Principal

### **Gris Cálido**
- **Código**: `#4F4F4F`
- **Variable CSS**: `--foreground`
- **Uso**: Texto de cuerpo, párrafos, contenido general
- **Propósito**: Óptima legibilidad sin ser demasiado contrastante

---

## 🎨 Paleta Completa de Referencia

| Elemento | Color | Código | Variable CSS | Proporción |
|----------|-------|--------|--------------|------------|
| Fondo principal | Blanco Arena | `#F9F8F6` | `--background` | 60% |
| Títulos | Verde Botella | `#1C3D32` | `--primary` | 30% |
| Textos | Gris Cálido | `#4F4F4F` | `--foreground` | - |
| Acentos | Terracota Suave | `#C75C36` | `--secondary` | 5% |
| Botones CTA | Verde Oliva | `#476A47` | `--accent` | 5% |

---

## 💡 Clases de Utilidad Personalizadas

Para facilitar la aplicación de la regla 60-30-10, se han creado clases de utilidad:

```css
/* 60% - Dominante */
.bg-dominant-60 { background-color: var(--background); }

/* 30% - Principal */
.text-principal-30 { color: var(--primary); }
.bg-principal-30 { background-color: var(--primary); }

/* 10% - Acentos */
.text-accent-10 { color: var(--accent); }
.bg-accent-10 { background-color: var(--accent); }
.text-accent-secondary-10 { color: var(--secondary); }
.bg-accent-secondary-10 { background-color: var(--secondary); }
```

---

## 🎯 Guía de Uso por Componente

### **Headers & Navegación**
- Fondo: Transparente o Blanco Arena (60%)
- Texto/Logo: Verde Botella (30%)
- Botón CTA: Verde Oliva (10%)

### **Hero Section**
- Fondo: Blanco Arena o imagen con overlay (60%)
- Título: Verde Botella (30%)
- Botón principal: Verde Oliva (10%)
- Acento: Terracota en detalles (10%)

### **Cards & Contenido**
- Fondo card: Blanco puro sobre Arena (60%)
- Título: Verde Botella (30%)
- Texto: Gris Cálido
- CTA/Highlight: Verde Oliva o Terracota (10%)

### **Botones**
- **Principal (CTA)**: Verde Oliva con texto blanco
- **Secundario**: Terracota con texto blanco
- **Terciario**: Outline con Verde Botella

---

## 🌓 Modo Oscuro

El modo oscuro invierte la paleta manteniendo la armonía:

| Elemento | Color Claro | Color Oscuro |
|----------|-------------|--------------|
| Background | `#F9F8F6` | `#0F1F1A` |
| Primary | `#1C3D32` | `#6B9D87` |
| Secondary | `#C75C36` | `#E08A67` |
| Accent | `#476A47` | `#7BA89F` |

---

## ✅ Checklist de Aplicación

Cuando diseñes una nueva sección, verifica:

- [ ] ~60% del espacio usa Blanco Arena como fondo
- [ ] ~30% del espacio usa Verde Botella (títulos, estructura)
- [ ] ~10% del espacio usa acentos (Terracota + Verde Oliva)
- [ ] El texto principal es Gris Cálido (#4F4F4F)
- [ ] Los CTAs principales usan Verde Oliva
- [ ] Hay suficiente contraste para legibilidad

---

## 🎨 Gradientes de Marca

Se incluyen gradientes predefinidos:

```css
.eco-gradient {
  background: linear-gradient(135deg, #1C3D32 0%, #476A47 100%);
}

.earth-gradient {
  background: linear-gradient(135deg, #C75C36 0%, #D4A574 100%);
}

.nature-gradient {
  background: linear-gradient(135deg, #476A47 0%, #7BA89F 100%);
}
```

---

## 📚 Referencias

- Regla 60-30-10: [Canva Design School](https://www.canva.com/learn/interior-design-tips-the-60-30-10-rule/)
- Paleta base definida en: `flow/estructura.md`
- Variables CSS: `app/globals.css`
