# 🚀 INTEGRAR RUBREX EN GITHUB - GUÍA ESPECÍFICA

## 📍 TU SITUACIÓN ACTUAL

Tienes una versión desplegada en:
**https://rubrex-git-comprehensive-developme-a8ef61-manuel-gagos-projects.vercel.app/**

Esta versión está conectada a GitHub pero **NO tiene las últimas actualizaciones**:
- ❌ Falta "Programación Didáctica"
- ❌ Falta "Recursos Externos" (APIs)

---

## ✅ SOLUCIÓN: ACTUALIZAR TU REPOSITORIO EXISTENTE

### PASO 1: Identificar tu repositorio en GitHub

Tu repositorio probablemente se llama algo como:
- `rubrex`
- `rubrex-git`
- `comprehensive-development`

**Para encontrarlo:**
1. Ve a https://github.com
2. Busca tus repositorios
3. Identifica cuál está conectado a Vercel

---

### PASO 2: Actualizar archivos en GitHub

#### Opción A: Editar directamente en GitHub (MÁS FÁCIL)

**2.1 Actualizar src/App.tsx:**

1. Ve a tu repositorio en GitHub
2. Navega a `src/App.tsx`
3. Haz clic en el lápiz (✏️) para editar
4. **Selecciona todo** (Ctrl+A o Cmd+A)
5. **Borra todo** (Delete o Backspace)
6. **Copia el contenido completo de `src/App.tsx`** desde este entorno
7. **Pégalo** en GitHub (Ctrl+V o Cmd+V)
8. Baja hasta el final
9. Haz clic en **"Commit changes"**
10. En el mensaje de commit escribe: `Update: Add Programación Didáctica and APIs sections`
11. Haz clic en **"Commit changes"**

**2.2 Crear src/data/programacion.ts:**

1. En tu repositorio, ve a la carpeta `src/data/`
2. Haz clic en **"Add file"** → **"Create new file"**
3. En el nombre escribe: `programacion.ts`
4. **Copia el contenido completo de `src/data/programacion.ts`** desde este entorno
5. **Pégalo** en el campo de código
6. Baja hasta el final
7. Haz clic en **"Commit new file"**

**2.3 Crear src/utils/apis.ts:**

1. En tu repositorio, ve a la carpeta `src/utils/`
2. Haz clic en **"Add file"** → **"Create new file"**
3. En el nombre escribe: `apis.ts`
4. **Copia el contenido completo de `src/utils/apis.ts`** desde este entorno
5. **Pégalo** en el campo de código
6. Baja hasta el final
7. Haz clic en **"Commit new file"**

**2.4 Actualizar src/utils/exportUtils.ts:**

1. Ve a `src/utils/exportUtils.ts`
2. Haz clic en el lápiz (✏️) para editar
3. **Selecciona todo** (Ctrl+A o Cmd+A)
4. **Borra todo** (Delete o Backspace)
5. **Copia el contenido completo de `src/utils/exportUtils.ts`** desde este entorno
6. **Pégalo** en GitHub
7. Baja hasta el final
8. Haz clic en **"Commit changes"**

---

#### Opción B: Usar Git desde tu computadora (MÁS RÁPIDO)

Si tienes el proyecto en tu computadora:

```bash
# 1. Ir a la carpeta del proyecto
cd /ruta/a/tu/proyecto/rubrex

# 2. Verificar estado
git status

# 3. Agregar todos los cambios
git add .

# 4. Hacer commit
git commit -m "Update: Add Programación Didáctica and APIs sections"

# 5. Subir a GitHub
git push origin main
```

---

### PASO 3: Esperar despliegue automático de Vercel

1. **Espera 2-3 minutos**
2. Vercel detectará los cambios automáticamente
3. Verás el progreso en: https://vercel.com/dashboard
4. Cuando termine, tu URL se actualizará

---

### PASO 4: Verificar que todo funciona

1. **Abre tu URL de Vercel:**
   https://rubrex-git-comprehensive-developme-a8ef61-manuel-gagos-projects.vercel.app/

2. **Limpia caché del navegador:**
   - Windows/Linux: `Ctrl + Shift + R`
   - Mac: `Cmd + Shift + R`

3. **Verifica el menú lateral:**
   Debes ver **9 opciones**:
   ```
   🏠 Inicio
   🔍 Buscador Global
   📚 Programación Didáctica    ← NUEVA
   🌐 Recursos Externos          ← NUEVA
   📐 A. Marco General
   🎓 B.1. Rúbricas Maestras EP
   🎼 B.2. Rúbricas Maestras EE
   📊 C.1. Rúbricas EE por UD
   📋 C.2. Rúbricas EP por UD
   ```

4. **Prueba las nuevas secciones:**
   - Haz clic en "📚 Programación Didáctica"
   - Haz clic en "🌐 Recursos Externos"
   - Busca "Mozart" en Recursos Externos

---

## 🎯 CÓMO COPIAR LOS ARCHIVOS DESDE ESTE ENTORNO

### Método 1: Copiar desde la vista de archivos

1. En este entorno, busca el panel de archivos a la izquierda
2. Haz clic en `src/App.tsx`
3. Selecciona todo el contenido (Ctrl+A o Cmd+A)
4. Copia (Ctrl+C o Cmd+C)
5. Pégalo en GitHub

### Método 2: Usar el botón de copiar

Si hay un botón de "Copy" o "Copiar" en la esquina del archivo:
1. Haz clic en el botón
2. Ve a GitHub
3. Pega (Ctrl+V o Cmd+V)

---

## ❌ SI ALGO NO FUNCIONA

### Problema 1: No veo los cambios en Vercel

**Solución:**
```bash
# Verificar que los cambios están en GitHub
# Ve a tu repositorio y verifica que los archivos están actualizados

# Forzar redeploy en Vercel
# 1. Ve a https://vercel.com/dashboard
# 2. Busca tu proyecto
# 3. Haz clic en "Redeploy"
```

### Problema 2: Error de build en Vercel

**Solución:**
1. Ve a Vercel Dashboard
2. Busca tu proyecto
3. Haz clic en el último deployment
4. Revisa los logs de error
5. Verifica que todos los archivos estén correctos

### Problema 3: No puedo encontrar mi repositorio

**Solución:**
1. Ve a https://vercel.com/dashboard
2. Busca tu proyecto
3. Haz clic en "Settings"
4. Busca "Git Repository"
5. Ahí verás el nombre de tu repositorio

---

## 📋 CHECKLIST FINAL

- [ ] Identifiqué mi repositorio en GitHub
- [ ] Actualicé `src/App.tsx`
- [ ] Creé `src/data/programacion.ts`
- [ ] Creé `src/utils/apis.ts`
- [ ] Actualicé `src/utils/exportUtils.ts`
- [ ] Hice commit de todos los cambios
- [ ] Esperé 2-3 minutos para despliegue
- [ ] Limpié caché del navegador (Ctrl+Shift+R)
- [ ] Veo 9 secciones en el menú lateral
- [ ] Puedo hacer clic en "Programación Didáctica"
- [ ] Puedo hacer clic en "Recursos Externos"
- [ ] Las APIs funcionan (probé buscar "Mozart")

---

## 🎉 ¡LISTO!

Si completas todos los pasos, tu URL de Vercel tendrá:

✅ **790 rúbricas** completas  
✅ **Programación Didáctica** con 7 secciones  
✅ **6 APIs integradas** funcionando  
✅ **Todas las funcionalidades** actualizadas  

---

## 📞 NECESITO QUE ME DIGAS

Para ayudarte mejor:

1. **¿Cuál es el nombre de tu repositorio en GitHub?**
2. **¿Puedes copiar archivos desde este entorno?**
3. **¿Prefieres editar en GitHub o usar Git desde tu computadora?**

Con esa información, te guío paso a paso.

---

**¡Vamos a actualizar tu repositorio!** 🚀
