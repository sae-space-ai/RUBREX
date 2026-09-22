# ✅ GUÍA DE VERIFICACIÓN POST-DESPLIEGUE

## 🎯 ¿Qué debes ver después de desplegar en Vercel?

### 1️⃣ MENÚ LATERAL IZQUIERDO

Al abrir https://rubrex-tu-usuario.vercel.app/, debes ver en el **menú lateral izquierdo** estas **9 opciones**:

```
🎵 RUBREX
Rúbricas de Clarinete
Programación Didáctica 2026/2027

─────────────────────

🏠 Inicio
🔍 Buscador Global
📚 Programación Didáctica    ← DEBE APARECER
🌐 Recursos Externos          ← DEBE APARECER
📐 A. Marco General
🎓 B.1. Rúbricas Maestras EP
🎼 B.2. Rúbricas Maestras EE
📊 C.1. Rúbricas EE por UD
📋 C.2. Rúbricas EP por UD

─────────────────────

Documento Maestro v1.0
EE y EP · Rúbricas desarrolladas
```

---

### 2️⃣ SECCIÓN "📚 Programación Didáctica"

Al hacer clic en **"📚 Programación Didáctica"**, debes ver:

#### Header con gradiente (indigo → purple → pink):
```
📚 Programación Didáctica
Marco Referencial Completo — Clarinete 2026/2027

Documento integral que recoge toda la programación didáctica...

┌─────────┬─────────┬─────────┬─────────┐
│    5    │   22    │   17    │   14+   │
│Normativas│Objetivos│Criterios│  Obras  │
└─────────┴─────────┴─────────┴─────────┘
```

#### 7 Pestañas navegables:
```
📜 Normativa | 🎯 Objetivos | ✅ Criterios | 📖 Contenidos | 
🎓 Metodología | 📊 Evaluación | 🎼 Repertorio
```

#### Contenido de cada pestaña:

**📜 Normativa:**
- Real Decreto 157/2022
- Real Decreto 158/2022
- LOMLOE - Ley Orgánica 3/2020
- Decretos de la Junta de Extremadura (2)

**🎯 Objetivos:**
- 12 objetivos de Enseñanzas Elementales (numerados 1-12)
- 10 objetivos de Enseñanzas Profesionales (numerados 1-10)

**✅ Criterios:**
- 7 criterios EE (CE-EE1 a CE-EE7)
- 10 criterios EP (CE-01 a CE-10)

**📖 Contenidos:**
- 3 cursos de EE con 4 bloques cada uno
- 6 cursos de EP con 3 bloques cada uno

**🎓 Metodología:**
- 8 principios metodológicos
- 8 estrategias didácticas

**📊 Evaluación:**
- 9 instrumentos de evaluación
- 9 criterios de evaluación
- Nota sobre calificación (HOLD)

**🎼 Repertorio:**
- Lista de obras y estudios
- Clasificados por etapa, curso, tipo y categoría

---

### 3️⃣ SECCIÓN "🌐 Recursos Externos"

Al hacer clic en **"🌐 Recursos Externos"**, debes ver:

#### Header con gradiente (cyan → blue → indigo):
```
🌐 Recursos Externos
Integración de APIs Gratuitas y Seguras

RUBREX integra múltiples APIs gratuitas para enriquecer...

┌─────┬─────┬─────┬─────┬─────┐
│ 📚  │ 🎵  │ 📖  │ 🎼  │ 📹  │
│Wiki │Music│Dict │IMSLP│YouTu│
└─────┴─────┴─────┴─────┴─────┘
```

#### 3 Pestañas navegables:
```
👨‍🎼 Buscar Compositor | 📖 Término Musical | 🎼 Obras y Repertorio
```

#### Funcionalidad de búsqueda:

**👨‍🎼 Buscar Compositor:**
- Campo de búsqueda: "Ej: Mozart, Beethoven, Debussy..."
- Botón "🔍 Buscar"
- Resultados de Wikipedia (con imagen si disponible)
- Resultados de MusicBrainz (biografía, país, período)

**📖 Término Musical:**
- Campo de búsqueda: "Ej: staccato, legato, embocadura..."
- Botón "🔍 Buscar"
- Resultados de Dictionary API (definición, fonética, ejemplos)
- Resultados de Wikipedia (artículo completo)

**🎼 Obras y Repertorio:**
- Campo de búsqueda: "Ej: Concerto for Clarinet, Sonata..."
- Botón "🔍 Buscar"
- Lista de resultados de MusicBrainz

#### Información de APIs (abajo):
```
APIs Integradas

┌─────────────────────────────────────────┐
│ 📚 Wikipedia API                        │
│ Información contextual sobre...         │
│ [Gratis] [HTTPS]                        │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ 🎵 MusicBrainz API                      │
│ Metadatos de compositores y obras       │
│ [Gratis] [HTTPS]                        │
└─────────────────────────────────────────┘

... (6 APIs en total)
```

---

## 🔍 PRUEBAS A REALIZAR

### Prueba 1: Verificar menú lateral
- [ ] ¿Ves las 9 opciones en el menú lateral?
- [ ] ¿Aparece "📚 Programación Didáctica"?
- [ ] ¿Aparece "🌐 Recursos Externos"?

### Prueba 2: Verificar Programación Didáctica
- [ ] Haz clic en "📚 Programación Didáctica"
- [ ] ¿Ves el header con gradiente?
- [ ] ¿Ves las 7 pestañas?
- [ ] ¿Puedes navegar entre pestañas?
- [ ] ¿Ves contenido en cada pestaña?

### Prueba 3: Verificar Recursos Externos
- [ ] Haz clic en "🌐 Recursos Externos"
- [ ] ¿Ves el header con gradiente?
- [ ] ¿Ves las 3 pestañas?
- [ ] ¿Puedes buscar "Mozart" en "Buscar Compositor"?
- [ ] ¿Aparecen resultados de Wikipedia?
- [ ] ¿Puedes buscar "staccato" en "Término Musical"?
- [ ] ¿Aparecen definiciones?

### Prueba 4: Verificar otras secciones
- [ ] ¿Funciona el Buscador Global?
- [ ] ¿Funciona la exportación a Excel?
- [ ] ¿Funciona la exportación a PDF?
- [ ] ¿Funciona la vista tabla?

---

## ❌ SI NO VES LAS SECCIONES NUEVAS

### Solución 1: Verificar que el código esté actualizado

```bash
# Verificar estado de git
git status

# Si hay cambios sin commit
git add .
git commit -m "Fix: Ensure Programación Didáctica and APIs are visible"
git push origin main
```

### Solución 2: Verificar que Vercel haya desplegado

1. Ir a https://vercel.com/dashboard
2. Buscar tu proyecto `rubrex`
3. Verificar el último deployment:
   - ¿Estado: "Ready"?
   - ¿Fecha: reciente?
4. Si no, hacer clic en "Redeploy"

### Solución 3: Limpiar caché del navegador

```bash
# En Chrome/Edge
Ctrl + Shift + R

# En Firefox
Ctrl + F5

# En Safari
Cmd + Option + R
```

### Solución 4: Verificar el código fuente

Abre `src/App.tsx` y busca estas líneas:

**Línea ~1742 (navItems):**
```typescript
const navItems: { id: Section; label: string; icon: string }[] = [
  { id: 'inicio', label: 'Inicio', icon: '🏠' },
  { id: 'buscar', label: '🔍 Buscador Global', icon: '🔍' },
  { id: 'programacion', label: '📚 Programación Didáctica', icon: '📚' },  // ← DEBE ESTAR
  { id: 'apis', label: '🌐 Recursos Externos', icon: '🌐' },              // ← DEBE ESTAR
  { id: 'marco', label: 'A. Marco General', icon: '📐' },
  { id: 'maestras-ep', label: 'B.1. Rúbricas Maestras EP', icon: '🎓' },
  { id: 'maestras-ee', label: 'B.2. Rúbricas Maestras EE', icon: '🎼' },
  { id: 'rubricas-ee', label: 'C.1. Rúbricas EE por UD', icon: '📊' },
  { id: 'rubricas-ep', label: 'C.2. Rúbricas EP por UD', icon: '📋' },
];
```

**Línea ~1824 (renderizado):**
```typescript
{section === 'inicio' && <SectionInicio />}
{section === 'buscar' && <GlobalSearch />}
{section === 'programacion' && <SectionProgramacion />}  // ← DEBE ESTAR
{section === 'apis' && <SectionAPIs />}                  // ← DEBE ESTAR
{section === 'marco' && <SectionMarco />}
{section === 'maestras-ep' && <SectionMaestrasEP />}
{section === 'maestras-ee' && <SectionMaestrasEE />}
{section === 'rubricas-ee' && <SectionRubricasEE />}
{section === 'rubricas-ep' && <SectionRubricasEP />}
```

**Línea ~510 (componente SectionAPIs):**
```typescript
function SectionAPIs() {
  // ... código del componente
}
```

**Línea ~890 (componente SectionProgramacion):**
```typescript
function SectionProgramacion() {
  // ... código del componente
}
```

Si alguna de estas líneas falta, el código no está completo.

---

## 📞 SOPORTE

Si después de seguir estos pasos aún no ves las secciones:

1. **Verificar archivos:**
   - `src/data/programacion.ts` existe
   - `src/utils/apis.ts` existe
   - `src/App.tsx` tiene las importaciones correctas

2. **Verificar build:**
   ```bash
   npm run build
   ```
   ¿Sale sin errores?

3. **Verificar deployment:**
   - ¿Vercel muestra "Ready"?
   - ¿La URL es accesible?

4. **Contactar soporte:**
   - Abrir issue en GitHub
   - Incluir captura de pantalla del menú lateral
   - Incluir URL de tu deployment

---

## ✅ CHECKLIST FINAL

- [ ] Código subido a GitHub
- [ ] Proyecto importado en Vercel
- [ ] Deployment exitoso
- [ ] URL accesible
- [ ] Menú lateral muestra 9 opciones
- [ ] Sección "Programación Didáctica" visible y funcional
- [ ] Sección "Recursos Externos" visible y funcional
- [ ] APIs funcionan (Wikipedia, MusicBrainz, Dictionary)
- [ ] Buscador global funciona
- [ ] Exportación XLSX/PDF funciona
- [ ] Vista tabla funciona
- [ ] Modo impresión funciona

---

**Si completas todos los checks, ¡RUBREX está completamente funcional!** 🎉
