# RUBREX — Instrucciones de Despliegue en GitHub y Vercel

## 📤 Paso 1: Subir el código a GitHub

### 1.1 Crear un repositorio en GitHub

1. Ve a [GitHub](https://github.com)
2. Haz clic en "New repository"
3. Nombre del repositorio: `rubrex`
4. Descripción: "RUBREX — Rúbricas de evaluación para Programación Didáctica de Clarinete 2026/2027"
5. Marca "Public" (o "Private" si prefieres)
6. **NO** marques "Initialize this repository with a README"
7. Haz clic en "Create repository"

### 1.2 Subir tu código local a GitHub

Abre una terminal en la carpeta de tu proyecto y ejecuta:

```bash
# Inicializar git (si no lo has hecho)
git init

# Agregar todos los archivos
git add .

# Hacer el primer commit
git commit -m "Initial commit: RUBREX - Rúbricas Clarinete 2026/2027"

# Agregar el repositorio remoto (reemplaza TU-USUARIO con tu nombre de usuario de GitHub)
git remote add origin https://github.com/TU-USUARIO/rubrex.git

# Cambiar la rama principal a main
git branch -M main

# Subir el código
git push -u origin main
```

## 🚀 Paso 2: Desplegar en Vercel

### Opción A: Despliegue automático desde GitHub (Recomendado)

1. Ve a [Vercel](https://vercel.com)
2. Inicia sesión con tu cuenta de GitHub
3. Haz clic en "Add New Project"
4. Busca tu repositorio `rubrex`
5. Haz clic en "Import"
6. Vercel detectará automáticamente que es un proyecto Vite
7. Revisa la configuración:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
8. Haz clic en "Deploy"
9. Espera unos minutos mientras Vercel construye y despliega tu aplicación
10. ¡Listo! Tu aplicación estará disponible en una URL como: `https://rubricas-clarinete.vercel.app`

### Opción B: Despliegue con Vercel CLI

```bash
# Instalar Vercel CLI globalmente
npm install -g vercel

# Iniciar sesión en Vercel
vercel login

# Desplegar el proyecto
vercel

# Para desplegar en producción
vercel --prod
```

## 🔄 Paso 3: Actualizaciones automáticas

Una vez configurado el despliegue automático desde GitHub:

- Cada vez que hagas `git push` a la rama `main`, Vercel desplegará automáticamente los cambios
- Puedes ver el estado de los despliegues en el dashboard de Vercel
- Si algo falla, puedes revisar los logs en Vercel

## 🌐 Paso 4: Dominio personalizado (Opcional)

Si quieres usar un dominio propio:

1. En el dashboard de Vercel, ve a tu proyecto
2. Haz clic en "Settings" > "Domains"
3. Agrega tu dominio (ejemplo: `rubricas.ejemplo.com`)
4. Sigue las instrucciones para configurar los DNS
5. Espera a que se propague (puede tardar hasta 48 horas)

## 📊 Estructura de archivos para GitHub

Asegúrate de que tu repositorio `rubrex` tenga esta estructura:

```
rubrex/
├── .gitignore
├── README.md
├── vercel.json
├── package.json
├── tsconfig.json
├── vite.config.ts
├── index.html
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   ├── data/
│   │   ├── rubrics.ts
│   │   ├── rubricsEP.ts
│   │   └── rubricsEP456.ts
│   └── utils/
│       └── exportUtils.ts
└── dist/ (generado automáticamente por npm run build)
```

## ⚠️ Solución de problemas comunes

### Problema: "Module not found"
```bash
# Solución: Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install
```

### Problema: Error de build en Vercel
1. Revisa los logs en Vercel
2. Asegúrate de que `npm run build` funciona localmente
3. Verifica que todas las dependencias estén en `package.json`

### Problema: La página no carga después del despliegue
1. Verifica que `vercel.json` esté configurado correctamente
2. Asegúrate de que el `buildCommand` y `outputDirectory` sean correctos
3. Revisa la consola del navegador para ver si hay errores

## 🔒 Variables de entorno (si las necesitas)

Si tu aplicación necesita variables de entorno:

1. En Vercel, ve a tu proyecto
2. Settings > Environment Variables
3. Agrega las variables necesarias
4. Despliega nuevamente

## 📞 Soporte

- Documentación de Vercel: https://vercel.com/docs
- Documentación de GitHub: https://docs.github.com
- Issues del proyecto: https://github.com/TU-USUARIO/rubrex/issues

---

**¡Felicidades!** **RUBREX** está ahora disponible en internet. 🎉
