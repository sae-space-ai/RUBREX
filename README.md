# Rúbricas de Clarinete 2026/2027

Aplicación web para la visualización y descarga de rúbricas de evaluación para la Programación Didáctica de Clarinete en Enseñanzas Elementales y Enseñanzas Profesionales de Música en Extremadura.

## 📋 Características

- **773 rúbricas específicas** completamente desarrolladas
  - 252 rúbricas para Enseñanzas Elementales (EE1-EE3)
  - 504 rúbricas para Enseñanzas Profesionales (EP1-EP6)
- **17 rúbricas maestras** (10 EP + 7 EE)
- Cada rúbrica incluye:
  - Código único
  - Nombre y objetivo
  - Tipo y criterio
  - Indicadores observables
  - Ponderación
  - Ejemplo de aplicación
  - 4 niveles de desempeño (L1-L4) con descriptores detallados

## 🚀 Funcionalidades

### Navegación
- Menú lateral con 6 secciones principales
- Diseño responsive para móvil y escritorio
- Tarjetas expandibles para ver detalles completos

### Secciones
1. **Inicio**: Vista general con estadísticas
2. **Marco General**: Escala común, tipos de rúbrica, codificación
3. **Rúbricas Maestras EP**: 10 rúbricas base para EP
4. **Rúbricas Maestras EE**: 7 rúbricas base para EE
5. **Rúbricas EE por UD**: Selector de curso y UD con filtros
6. **Rúbricas EP por UD**: Selector de curso y UD con filtros

### Filtros
- Por curso (EE1-EE3, EP1-EP6)
- Por unidad didáctica
- Por tipo de rúbrica (RT, RI, RA, RE, RC)

### Descargas
- **Excel (XLSX)**: Exportación completa o por curso
- **PDF**: Exportación completa o por UD específica
- Descarga individual de cada UD

## 🛠️ Tecnologías

- **React 18** con TypeScript
- **Vite** como build tool
- **Tailwind CSS** para estilos
- **XLSX** para exportación a Excel
- **jsPDF** + **jspdf-autotable** para exportación a PDF

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/rubricas-clarinete.git

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build
```

## 🌐 Despliegue en Vercel

### Opción 1: Despliegue automático desde GitHub

1. Sube el código a GitHub
2. Conecta tu repositorio en [Vercel](https://vercel.com)
3. Vercel detectará automáticamente que es un proyecto Vite
4. Haz clic en "Deploy"

### Opción 2: Despliegue manual con Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

## 📁 Estructura del Proyecto

```
src/
├── data/
│   ├── rubrics.ts          # EE1-EE3 + Rúbricas maestras
│   ├── rubricsEP.ts        # EP1-EP3
│   └── rubricsEP456.ts     # EP4-EP6
├── utils/
│   └── exportUtils.ts      # Funciones de exportación
├── App.tsx                 # Componente principal
├── main.tsx               # Punto de entrada
└── index.css              # Estilos globales
```

## 📊 Tipos de Rúbrica

- **RT** - Rúbrica técnica
- **RI** - Rúbrica interpretativa
- **RA** - Rúbrica actitudinal
- **RE** - Rúbrica de evidencia específica
- **RC** - Rúbrica de criterio

## 📝 Niveles de Desempeño

- **L4** - Consolidado (verde)
- **L3** - Adecuado (azul)
- **L2** - En desarrollo (ámbar)
- **L1** - Inicial (rojo)

## 📄 Licencia

Este proyecto es desarrollo pedagógico propio [DP], coherente con los criterios oficiales pero no literal del texto normativo.

## 👨‍🏫 Autor

Programación Didáctica de Clarinete 2026/2027
Enseñanzas Elementales y Profesionales de Música
Extremadura, España

## 📞 Contacto

Para consultas o sugerencias, abre un issue en GitHub.

---

**Estado**: ✅ Funcional y completo para EE1-EE3 y EP1-EP6
**Versión**: 3.0
**Última actualización**: 2026
