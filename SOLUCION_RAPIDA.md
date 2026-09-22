# 🚨 SOLUCIÓN RÁPIDA: ACTUALIZAR RUBREX EN VERCEL

## ⚠️ EL PROBLEMA

El código que ves aquí en este entorno **NO está en tu GitHub**. Por eso no ves las secciones nuevas en https://rubrex-five.vercel.app/

## ✅ LA SOLUCIÓN (3 PASOS SIMPLES)

### PASO 1: Descargar los archivos de este entorno

Como estás en un entorno web, necesitas descargar los archivos. Tienes 2 opciones:

#### Opción A: Descargar como ZIP (RECOMENDADO)
1. Busca el botón **"Download"** o **"Descargar"** en este entorno
2. Descarga el archivo ZIP
3. Descomprímelo en tu computadora

#### Opción B: Copiar archivos manualmente
Si no hay botón de descarga, copia estos archivos uno por uno:

**Archivos principales que necesitas:**
```
✅ src/App.tsx (1845 líneas)
✅ src/data/programacion.ts (nuevo)
✅ src/utils/apis.ts (nuevo)
✅ src/utils/exportUtils.ts (actualizado)
✅ README.md (actualizado)
✅ vercel.json
✅ package.json
```

---

### PASO 2: Subir a GitHub

Abre una terminal en tu computadora y ejecuta:

```bash
# 1. Ve a la carpeta de tu proyecto
cd /ruta/a/tu/proyecto/rubrex

# 2. Reemplaza los archivos con los nuevos
# (Copia los archivos que descargaste aquí)

# 3. Agrega todos los cambios
git add .

# 4. Haz commit
git commit -m "✅ Update: Programación Didáctica y APIs integradas"

# 5. Sube a GitHub
git push origin main
```

---

### PASO 3: Verificar en Vercel

1. Espera 2-3 minutos para que Vercel despliegue
2. Abre https://rubrex-five.vercel.app/
3. **LIMPIA LA CACHÉ** del navegador:
   - Windows/Linux: `Ctrl + Shift + R`
   - Mac: `Cmd + Shift + R`
4. Debes ver las 9 secciones en el menú lateral

---

## 🎯 ¿QUÉ DEBES VER?

### Menú lateral izquierdo:
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

---

## ❓ ¿NO PUEDES DESCARGAR LOS ARCHIVOS?

Si no puedes descargar los archivos de este entorno, tienes estas opciones:

### Opción 1: Usar GitHub directamente
1. Ve a https://github.com/TU-USUARIO/rubrex
2. Haz clic en cada archivo que necesitas actualizar
3. Haz clic en el lápiz (editar)
4. Copia el contenido desde este entorno
5. Pégalo en GitHub
6. Haz commit

### Opción 2: Crear archivos nuevos en GitHub
Para los archivos nuevos (`programacion.ts` y `apis.ts`):
1. Ve a tu repositorio en GitHub
2. Clic en "Add file" → "Create new file"
3. Navega a la carpeta correcta (src/data/ o src/utils/)
4. Pon el nombre del archivo
5. Copia el contenido desde este entorno
6. Clic en "Commit new file"

---

## 🔍 VERIFICAR QUE EL CÓDIGO ESTÁ CORRECTO

Después de subir, verifica en GitHub que estos archivos existan:

```bash
# En tu repositorio de GitHub, verifica:
src/App.tsx                      ✅ 1845 líneas
src/data/programacion.ts         ✅ Existe
src/utils/apis.ts                ✅ Existe
src/utils/exportUtils.ts         ✅ Actualizado
```

---

## 🆘 ¿SIGUE SIN FUNCIONAR?

Si después de subir los cambios sigues sin ver las secciones:

1. **Verifica en Vercel Dashboard:**
   - Ve a https://vercel.com/dashboard
   - Busca tu proyecto
   - Verifica que el último deployment sea exitoso
   - Si no, haz clic en "Redeploy"

2. **Limpia caché del navegador:**
   ```
   Ctrl + Shift + R (Windows/Linux)
   Cmd + Shift + R (Mac)
   ```

3. **Prueba en modo incógnito:**
   - Abre una ventana de incógnito
   - Ve a tu URL de Vercel
   - Verifica si ves las secciones

4. **Verifica el código en GitHub:**
   - Abre `src/App.tsx` en GitHub
   - Busca la línea 1745
   - Debe decir: `{ id: 'programacion', label: '📚 Programación Didáctica'`
   - Si no está ahí, el archivo no se actualizó correctamente

---

## 📞 SOPORTE INMEDIATO

Si nada funciona, envíame este mensaje:

```
Hola, he subido los cambios a GitHub pero no veo las secciones 
"Programación Didáctica" y "Recursos Externos" en Vercel.

Mi URL de Vercel: https://rubrex-five.vercel.app/
Mi repositorio: https://github.com/TU-USUARIO/rubrex

¿Puedes ayudarme?
```

---

## ✅ CHECKLIST FINAL

- [ ] Descargaste los archivos de este entorno
- [ ] Reemplazaste los archivos en tu proyecto local
- [ ] Ejecutaste `git add .`
- [ ] Ejecutaste `git commit -m "Update"`
- [ ] Ejecutaste `git push origin main`
- [ ] Esperaste 2-3 minutos
- [ ] Limpiaste caché del navegador (Ctrl+Shift+R)
- [ ] Ves las 9 secciones en el menú lateral
- [ ] Puedes hacer clic en "Programación Didáctica"
- [ ] Puedes hacer clic en "Recursos Externos"
- [ ] Las APIs funcionan (prueba buscar "Mozart")

---

**¡Si completas todos los checks, RUBREX estará 100% funcional!** 🎉
