# 🚀 GUÍA PASO A PASO: GITHUB Y VERCEL

## 📋 ANTES DE EMPEZAR

### Requisitos
- ✅ Cuenta de GitHub (https://github.com)
- ✅ Cuenta de Vercel (https://vercel.com) - puedes usar tu cuenta de GitHub
- ✅ Git instalado en tu computadora
- ✅ Node.js instalado (versión 16 o superior)
- ✅ Editor de código (VS Code recomendado)

---

## 🔧 PASO 1: PREPARAR EL PROYECTO LOCAL

### 1.1 Verificar que todos los archivos están presentes

Abre una terminal en la carpeta del proyecto y ejecuta:

```bash
# Ver estructura del proyecto
ls -la
```

Debes ver estos archivos:
```
✅ src/
✅ src/App.tsx
✅ src/data/programacion.ts
✅ src/data/rubrics.ts
✅ src/data/rubricsEP.ts
✅ src/data/rubricsEP456.ts
✅ src/utils/apis.ts
✅ src/utils/exportUtils.ts
✅ package.json
✅ vercel.json
✅ README.md
✅ .gitignore
```

### 1.2 Instalar dependencias

```bash
npm install
```

Espera a que termine (puede tardar 1-2 minutos).

### 1.3 Probar localmente

```bash
npm run dev
```

Abre tu navegador en `http://localhost:5173`

**VERIFICAR:**
- [ ] ¿Ves el menú lateral con 9 opciones?
- [ ] ¿Puedes hacer clic en "📚 Programación Didáctica"?
- [ ] ¿Puedes hacer clic en "🌐 Recursos Externos"?
- [ ] ¿Funcionan las APIs (buscar "Mozart")?

Si todo funciona localmente, continúa con el Paso 2.

---

## 📤 PASO 2: SUBIR A GITHUB

### 2.1 Crear repositorio en GitHub

1. Abre https://github.com/new
2. Completa el formulario:
   - **Repository name**: `rubrex`
   - **Description**: `RUBREX - Rúbricas de Clarinete 2026/2027`
   - **Public**: ✅ Seleccionado
   - **Initialize this repository with**: ❌ NO marcar nada
3. Clic en **"Create repository"**

### 2.2 Subir código desde tu computadora

Abre una terminal en la carpeta del proyecto:

```bash
# 1. Inicializar git (si no lo has hecho)
git init

# 2. Agregar todos los archivos
git add .

# 3. Hacer el primer commit
git commit -m "Initial commit: RUBREX completo con Programación Didáctica y APIs"

# 4. Agregar repositorio remoto
# ⚠️ REEMPLAZA "TU-USUARIO" con tu nombre de usuario de GitHub
git remote add origin https://github.com/TU-USUARIO/rubrex.git

# 5. Cambiar a rama main
git branch -M main

# 6. Subir a GitHub
git push -u origin main
```

**GitHub te pedirá credenciales:**
- Usuario: tu usuario de GitHub
- Contraseña: usa un Personal Access Token (no tu contraseña)

**Crear Personal Access Token:**
1. Ir a https://github.com/settings/tokens
2. Clic en "Generate new token (classic)"
3. Nombre: `rubrex-deploy`
4. Expiration: 90 days
5. Scopes: ✅ repo (completo)
6. Clic en "Generate token"
7. **COPIA EL TOKEN** (solo se muestra una vez)
8. Usa este token como contraseña cuando git lo pida

### 2.3 Verificar en GitHub

1. Abre https://github.com/TU-USUARIO/rubrex
2. Recarga la página (F5)
3. Debes ver todos los archivos del proyecto

**VERIFICAR:**
- [ ] ¿Ves la carpeta `src/`?
- [ ] ¿Ves el archivo `README.md`?
- [ ] ¿Ves el archivo `package.json`?

---

## 🚀 PASO 3: DESPLEGAR EN VERCEL

### 3.1 Importar proyecto en Vercel

1. Abre https://vercel.com
2. Clic en **"Sign Up"** o **"Log In"**
3. Selecciona **"Continue with GitHub"**
4. Autoriza a Vercel a acceder a tu cuenta de GitHub

### 3.2 Crear nuevo proyecto

1. En el dashboard de Vercel, clic en **"Add New..."** → **"Project"**
2. Busca tu repositorio `rubrex`
3. Clic en **"Import"**

### 3.3 Configurar despliegue

Vercel detectará automáticamente que es un proyecto Vite. Verifica:

**Framework Preset:**
```
Vite ✅
```

**Build Settings:**
```
Build Command: npm run build ✅
Output Directory: dist ✅
Install Command: npm install ✅
```

**Environment Variables:**
```
(Déjalo vacío por ahora)
```

Clic en **"Deploy"**

### 3.4 Esperar despliegue

Vercel mostrará el progreso:
```
✅ Installing dependencies...
✅ Building project...
✅ Deploying...
✅ Ready!
```

Esto tarda 2-3 minutos.

### 3.5 Obtener URL de tu sitio

Cuando termine, Vercel te dará una URL como:
```
https://rubrex-tu-usuario.vercel.app
```

**¡HAZ CLIC EN LA URL PARA ABRIR TU SITIO!**

---

## ✅ PASO 4: VERIFICAR DESPLIEGUE

### 4.1 Abrir tu sitio

Abre la URL de Vercel en tu navegador.

### 4.2 Verificar menú lateral

Debes ver en el **menú lateral izquierdo**:

```
🎵 RUBREX
Rúbricas de Clarinete
Programación Didáctica 2026/2027

─────────────────────

🏠 Inicio
🔍 Buscador Global
📚 Programación Didáctica    ← ¿APARECE?
🌐 Recursos Externos          ← ¿APARECE?
📐 A. Marco General
🎓 B.1. Rúbricas Maestras EP
🎼 B.2. Rúbricas Maestras EE
📊 C.1. Rúbricas EE por UD
📋 C.2. Rúbricas EP por UD
```

### 4.3 Probar Programación Didáctica

1. Haz clic en **"📚 Programación Didáctica"**
2. Debes ver:
   - Header con gradiente (indigo → purple → pink)
   - 4 estadísticas (5 normativas, 22 objetivos, 17 criterios, 14+ obras)
   - 7 pestañas navegables

3. Haz clic en cada pestaña:
   - [ ] 📜 Normativa - ¿Ves 5 normativas?
   - [ ] 🎯 Objetivos - ¿Ves 22 objetivos?
   - [ ] ✅ Criterios - ¿Ves 17 criterios?
   - [ ] 📖 Contenidos - ¿Ves contenidos por curso?
   - [ ] 🎓 Metodología - ¿Ves principios y estrategias?
   - [ ] 📊 Evaluación - ¿Ves instrumentos y criterios?
   - [ ] 🎼 Repertorio - ¿Ves obras y estudios?

### 4.4 Probar Recursos Externos

1. Haz clic en **"🌐 Recursos Externos"**
2. Debes ver:
   - Header con gradiente (cyan → blue → indigo)
   - 5 iconos de APIs (Wikipedia, MusicBrainz, Dictionary, IMSLP, YouTube)
   - 3 pestañas navegables

3. Prueba la búsqueda:
   - Pestaña **"👨‍🎼 Buscar Compositor"**
   - Escribe "Mozart" en el campo de búsqueda
   - Haz clic en "🔍 Buscar"
   - ¿Aparecen resultados de Wikipedia?
   - ¿Aparecen resultados de MusicBrainz?

4. Prueba otra búsqueda:
   - Pestaña **"📖 Término Musical"**
   - Escribe "staccato"
   - Haz clic en "🔍 Buscar"
   - ¿Aparece definición del diccionario?
   - ¿Aparece artículo de Wikipedia?

### 4.5 Probar otras funcionalidades

- [ ] Buscador Global: busca "postura"
- [ ] Rúbricas EE: navega por EE1-UD01
- [ ] Rúbricas EP: navega por EP1-UD01
- [ ] Exportar a Excel: descarga una UD
- [ ] Exportar a PDF: descarga una UD
- [ ] Vista tabla: cambia de tarjetas a tabla

---

## ❌ SOLUCIÓN DE PROBLEMAS

### Problema 1: No veo "Programación Didáctica" en el menú

**Causa:** El código no se subió correctamente o Vercel no desplegó la última versión.

**Solución:**

```bash
# 1. Verificar que estás en la carpeta correcta
cd /ruta/al/proyecto/rubrex

# 2. Verificar estado de git
git status

# 3. Si hay cambios sin commit
git add .
git commit -m "Fix: Add Programación Didáctica and APIs sections"
git push origin main
```

Luego en Vercel:
1. Ir al dashboard
2. Buscar tu proyecto
3. Clic en "Redeploy"
4. Esperar 2-3 minutos

### Problema 2: Las APIs no funcionan

**Causa:** Las APIs son gratuitas pero tienen límites o requieren configuración.

**Solución:**

**Wikipedia y MusicBrainz:**
- No requieren configuración
- Si no funcionan, verifica tu conexión a internet

**YouTube y Spotify:**
- Requieren API Keys
- Por ahora, estas APIs están preparadas pero no configuradas
- Las APIs que SÍ funcionan sin configuración son:
  - Wikipedia ✅
  - MusicBrainz ✅
  - Dictionary ✅

### Problema 3: Error de build en Vercel

**Causa:** Falta alguna dependencia o hay un error en el código.

**Solución:**

```bash
# 1. Probar build local
npm run build

# 2. Si hay errores, ver el mensaje
# 3. Corregir el error
# 4. Subir cambios
git add .
git commit -m "Fix build error"
git push origin main
```

### Problema 4: El sitio se ve diferente al local

**Causa:** Caché del navegador.

**Solución:**

```bash
# Limpiar caché del navegador
# Chrome/Edge: Ctrl + Shift + R
# Firefox: Ctrl + F5
# Safari: Cmd + Option + R
```

---

## 📞 SOPORTE ADICIONAL

### Documentación
- `README.md` - Documentación principal
- `VERIFICACION_POST_DESPLIEGUE.md` - Guía de verificación detallada
- `INSTRUCCIONES_DESPLIEGUE.md` - Instrucciones alternativas

### Verificar código
Si nada funciona, verifica que estos archivos existan:

```bash
# Verificar archivos principales
ls -la src/App.tsx
ls -la src/data/programacion.ts
ls -la src/utils/apis.ts
```

### Verificar contenido
```bash
# Verificar que SectionProgramacion existe
grep -n "function SectionProgramacion" src/App.tsx

# Verificar que SectionAPIs existe
grep -n "function SectionAPIs" src/App.tsx

# Verificar que están en el menú
grep -n "programacion" src/App.tsx
grep -n "apis" src/App.tsx
```

---

## ✅ CHECKLIST FINAL

### Antes de subir a GitHub
- [ ] Todos los archivos están presentes
- [ ] `npm install` funciona
- [ ] `npm run dev` funciona
- [ ] `npm run build` funciona
- [ ] Localmente veo las 9 secciones en el menú

### Después de subir a GitHub
- [ ] Repositorio creado en GitHub
- [ ] Código subido correctamente
- [ ] Puedo ver los archivos en GitHub

### Después de desplegar en Vercel
- [ ] Proyecto importado en Vercel
- [ ] Deployment exitoso
- [ ] URL accesible
- [ ] Menú lateral muestra 9 opciones
- [ ] Sección "Programación Didáctica" visible
- [ ] Sección "Recursos Externos" visible
- [ ] APIs funcionan (Wikipedia, MusicBrainz, Dictionary)
- [ ] Todas las funcionalidades trabajan

---

## 🎉 ¡LISTO!

Si completaste todos los pasos y verificaste todo, **¡RUBREX está completamente funcional y desplegado!**

**Comparte tu URL:**
```
https://rubrex-tu-usuario.vercel.app
```

---

**¿Problemas?**
1. Revisa esta guía paso a paso
2. Verifica `VERIFICACION_POST_DESPLIEGUE.md`
3. Abre un issue en GitHub

**¡Éxito con RUBREX!** 🎵
