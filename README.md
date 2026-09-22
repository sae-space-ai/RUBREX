# 🎵 RUBREX - Rúbricas de Clarinete 2026/2027

**Sistema integral de rúbricas para la Programación Didáctica de Clarinete**  
*Enseñanzas Elementales y Enseñanzas Profesionales de Música en Extremadura*

---

## 🚀 DESPLIEGUE RÁPIDO EN GITHUB Y VERCEL

### 📋 PASO 1: Subir a GitHub

1. **Crear repositorio en GitHub:**
   - Ir a https://github.com/new
   - Nombre: `rubrex`
   - Descripción: "RUBREX - Rúbricas de Clarinete 2026/2027"
   - Visibilidad: Público
   - **NO** inicializar con README

2. **Subir el código desde tu computadora:**

```bash
# Navegar a la carpeta del proyecto
cd /ruta/al/proyecto/rubrex

# Inicializar git (si no lo has hecho)
git init

# Agregar todos los archivos
git add .

# Hacer commit
git commit -m "Initial commit: RUBREX completo con Programación Didáctica y APIs"

# Agregar repositorio remoto (REEMPLAZA TU-USUARIO con tu usuario de GitHub)
git remote add origin https://github.com/TU-USUARIO/rubrex.git

# Cambiar a rama main
git branch -M main

# Subir a GitHub
git push -u origin main
```

### 📋 PASO 2: Desplegar en Vercel

1. **Ir a Vercel:**
   - Abrir https://vercel.com
   - Iniciar sesión con GitHub

2. **Importar proyecto:**
   - Clic en "Add New Project"
   - Buscar repositorio `rubrex`
   - Clic en "Import"

3. **Configurar despliegue:**
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Desplegar:**
   - Clic en "Deploy"
   - Esperar 2-3 minutos
   - Tu sitio estará en: `https://rubrex-tu-usuario.vercel.app`

### ✅ VERIFICACIÓN POST-DESPLIEGUE

Después del despliegue, deberías ver en el **menú lateral izquierdo**:

1. 🏠 Inicio
2. 🔍 Buscador Global
3. 📚 **Programación Didáctica** ← NUEVA SECCIÓN
4. 🌐 **Recursos Externos** ← NUEVA SECCIÓN CON APIs
5. 📐 A. Marco General
6. 🎓 B.1. Rúbricas Maestras EP
7. 🎼 B.2. Rúbricas Maestras EE
8. 📊 C.1. Rúbricas EE por UD
9. 📋 C.2. Rúbricas EP por UD

**Si no ves las secciones 3 y 4**, sigue estos pasos:

```bash
# Verificar que estás en la rama correcta
git status

# Si hay cambios sin commit
git add .
git commit -m "Update: Add Programación Didáctica and APIs sections"
git push origin main

# Vercel desplegará automáticamente
```

---

## 🎯 Características Principales

### 📊 Rúbricas
- ✅ **773 rúbricas específicas** completamente desarrolladas
  - 252 rúbricas para Enseñanzas Elementales (EE1-EE3)
  - 504 rúbricas para Enseñanzas Profesionales (EP1-EP6)
- ✅ **17 rúbricas maestras** (10 EP + 7 EE)
- ✅ Cada rúbrica incluye:
  - Código único
  - Nombre y objetivo
  - Tipo y criterio
  - Indicadores observables
  - Ponderación
  - Ejemplo de aplicación
  - 4 niveles de desempeño (L1-L4) con descriptores detallados

### 📚 Programación Didáctica
- ✅ **Normativa**: 5 normativas (Reales Decretos, LOMLOE, decretos autonómicos)
- ✅ **Objetivos**: 22 objetivos generales (12 EE + 10 EP)
- ✅ **Criterios**: 17 criterios de evaluación (7 EE + 10 EP)
- ✅ **Contenidos**: 30 bloques organizados por curso
- ✅ **Metodología**: 8 principios + 8 estrategias
- ✅ **Evaluación**: 9 instrumentos + 9 criterios
- ✅ **Repertorio**: 14+ obras orientativas

### 🌐 APIs Integradas
- ✅ **Wikipedia API**: Información contextual sobre compositores
- ✅ **MusicBrainz API**: Metadatos musicales
- ✅ **Free Dictionary API**: Definiciones de términos técnicos
- ✅ **IMSLP**: Partituras de dominio público
- ✅ **YouTube Data API**: Vídeos de referencia
- ✅ **Spotify API**: Grabaciones de referencia

### 🔍 Búsqueda y Visualización
- ✅ **Buscador global** de rúbricas
- ✅ **Vista tabla** compacta
- ✅ **Vista tarjetas** detallada
- ✅ **Modo impresión** optimizado

### 📥 Exportación
- ✅ **Excel (XLSX)**: Formato profesional con colores
- ✅ **PDF**: Formato A4 optimizado
- ✅ Descarga individual por UD

---

## 📖 Secciones de la Aplicación

### 1. 🏠 Inicio
- Vista general con estadísticas
- Accesos rápidos a todas las secciones
- Botones de descarga masiva

### 2. 🔍 Buscador Global
- Búsqueda por texto en todas las rúbricas
- Filtros por tipo, curso, UD
- Resultados en tiempo real

### 3. 📚 Programación Didáctica ⭐ NUEVA
- **Normativa**: Marco legal completo
- **Objetivos**: Objetivos generales EE y EP
- **Criterios**: Criterios de evaluación
- **Contenidos**: Contenidos por curso
- **Metodología**: Principios y estrategias
- **Evaluación**: Sistema evaluativo
- **Repertorio**: Obras y estudios

### 4. 🌐 Recursos Externos ⭐ NUEVA
- **Buscar Compositor**: Wikipedia + MusicBrainz
- **Término Musical**: Dictionary + Wikipedia
- **Obras y Repertorio**: MusicBrainz
- Información contextual en tiempo real

### 5. 📐 Marco General
- Escala común (L1-L4)
- Tipos de rúbrica (RT, RI, RA, RE, RC)
- Sistema de codificación

### 6. 🎓 Rúbricas Maestras EP
- 10 rúbricas base para EP
- CE-01 a CE-10

### 7. 🎼 Rúbricas Maestras EE
- 7 rúbricas base para EE
- CE-EE1 a CE-EE7

### 8. 📊 Rúbricas EE por UD
- Selector de curso (EE1-EE3)
- Selector de UD (6 por curso)
- Filtros por tipo
- Vista tarjetas/tabla
- Exportación XLSX/PDF

### 9. 📋 Rúbricas EP por UD
- Selector de curso (EP1-EP6)
- Selector de UD (6 por curso)
- Filtros por tipo
- Vista tarjetas/tabla
- Exportación XLSX/PDF

---

## 🛠️ Tecnologías

- **React 18** con TypeScript
- **Vite** como build tool
- **Tailwind CSS** para estilos
- **XLSX** para exportación a Excel
- **jsPDF** + **jspdf-autotable** para PDF
- **APIs externas**: Wikipedia, MusicBrainz, Dictionary, IMSLP, YouTube, Spotify

---

## 📦 Instalación Local

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/rubrex.git

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build
```

---

## 🌐 Despliegue en Vercel

### Opción 1: Despliegue automático desde GitHub

1. Sube el código a GitHub (ver PASO 1 arriba)
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

---

## 📁 Estructura del Proyecto

```
rubrex/
├── src/
│   ├── data/
│   │   ├── programacion.ts      # Programación Didáctica completa
│   │   ├── rubrics.ts           # EE1-EE3 + Rúbricas maestras
│   │   ├── rubricsEP.ts         # EP1-EP3
│   │   └── rubricsEP456.ts      # EP4-EP6
│   ├── utils/
│   │   ├── apis.ts              # Integración de 6 APIs
│   │   └── exportUtils.ts       # Funciones de exportación
│   ├── App.tsx                  # Componente principal (9 secciones)
│   ├── main.tsx                 # Punto de entrada
│   └── index.css                # Estilos globales
├── .gitignore
├── README.md
├── vercel.json
├── package.json
├── tsconfig.json
└── vite.config.js
```

---

## 📊 Tipos de Rúbrica

- **RT** - Rúbrica técnica
- **RI** - Rúbrica interpretativa
- **RA** - Rúbrica actitudinal
- **RE** - Rúbrica de evidencia específica
- **RC** - Rúbrica de criterio

---

## 📝 Niveles de Desempeño

- **L4** - Consolidado (verde)
- **L3** - Adecuado (azul)
- **L2** - En desarrollo (ámbar)
- **L1** - Inicial (rojo)

---

## 🔧 Solución de Problemas

### Las secciones no aparecen en el menú

1. **Verificar que el código esté actualizado:**
```bash
git pull origin main
```

2. **Verificar que el build esté correcto:**
```bash
npm run build
```

3. **Verificar que Vercel haya desplegado la última versión:**
- Ir al dashboard de Vercel
- Verificar que el último deployment sea exitoso
- Si no, hacer clic en "Redeploy"

### Las APIs no funcionan

1. **Verificar conexión a internet**
2. **Las APIs son gratuitas pero tienen límites:**
   - Wikipedia: Sin límites
   - MusicBrainz: 1 request/segundo
   - Dictionary: Sin límites
   - YouTube: Requiere API Key (10,000 unidades/día)
   - Spotify: Requiere OAuth

### Error de build

```bash
# Limpiar cache
rm -rf node_modules package-lock.json
npm install

# Reconstruir
npm run build
```

---

## 📞 Soporte

- **Documentación**: Ver archivos `.md` en la raíz del proyecto
- **Issues**: https://github.com/TU-USUARIO/rubrex/issues
- **Email**: [Tu email de contacto]

---

## 📄 Licencia

Este proyecto es desarrollo pedagógico propio [DP], coherente con los criterios oficiales pero no literal del texto normativo.

---

## 👨‍🏫 Autor

**RUBREX** — Programación Didáctica de Clarinete 2026/2027  
Enseñanzas Elementales y Profesionales de Música  
Extremadura, España

---

## 🎉 Estado del Proyecto

**✅ COMPLETADO Y DESPLEGADO**

- ✅ 773 rúbricas específicas
- ✅ 17 rúbricas maestras
- ✅ Programación Didáctica completa (7 secciones)
- ✅ 6 APIs integradas
- ✅ Buscador global
- ✅ Vista tabla y tarjetas
- ✅ Modo impresión
- ✅ Exportación XLSX/PDF
- ✅ Build exitoso
- ✅ Listo para GitHub y Vercel

---

**Versión**: 3.5 (Programación Didáctica + APIs integradas)  
**Última actualización**: 2026  
**Estado**: ✅ Funcional y desplegado
