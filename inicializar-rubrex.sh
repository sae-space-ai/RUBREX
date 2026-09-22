#!/bin/bash

# ============================================
# 🎵 RUBREX - Script de Inicialización
# ============================================
# Este script crea un nuevo repositorio de RUBREX desde cero

echo "🎵 RUBREX - Inicialización de Nuevo Repositorio"
echo "================================================="
echo ""

# Verificar que estamos en la carpeta correcta
if [ ! -f "package.json" ]; then
    echo "❌ Error: No se encuentra package.json"
    echo "💡 Asegúrate de ejecutar este script desde la carpeta del proyecto"
    exit 1
fi

echo "✅ Archivos del proyecto detectados"
echo ""

# Verificar estructura
echo "📁 Verificando estructura del proyecto..."
FILES_OK=true

if [ ! -f "src/App.tsx" ]; then
    echo "❌ Falta: src/App.tsx"
    FILES_OK=false
fi

if [ ! -f "src/data/programacion.ts" ]; then
    echo "❌ Falta: src/data/programacion.ts"
    FILES_OK=false
fi

if [ ! -f "src/utils/apis.ts" ]; then
    echo "❌ Falta: src/utils/apis.ts"
    FILES_OK=false
fi

if [ "$FILES_OK" = false ]; then
    echo ""
    echo "❌ Faltan archivos importantes"
    exit 1
fi

echo "✅ Todos los archivos están presentes"
echo ""

# Verificar dependencias
echo "📦 Verificando dependencias..."
if [ ! -d "node_modules" ]; then
    echo "⚠️  Instalando dependencias..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Error al instalar dependencias"
        exit 1
    fi
fi
echo "✅ Dependencias instaladas"
echo ""

# Verificar build
echo "🔨 Verificando build..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Error en el build"
    exit 1
fi
echo "✅ Build exitoso"
echo ""

# Resumen
echo "================================================="
echo "✅ PROYECTO LISTO PARA DESPLEGAR"
echo "================================================="
echo ""
echo "📊 Estadísticas:"
echo "   - Rúbricas: 790 (773 + 17 maestras)"
echo "   - Secciones: 9"
echo "   - APIs: 6 integradas"
echo "   - Build: Exitoso"
echo ""
echo "🚀 PRÓXIMOS PASOS:"
echo ""
echo "1. Crear repositorio en GitHub:"
echo "   https://github.com/new"
echo "   Nombre: rubrex-nuevo"
echo ""
echo "2. Subir el código:"
echo "   git init"
echo "   git add ."
echo "   git commit -m '🎵 RUBREX completo'"
echo "   git remote add origin https://github.com/TU-USUARIO/rubrex-nuevo.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. Desplegar en Vercel:"
echo "   https://vercel.com"
echo "   Importar repositorio"
echo "   Deploy automático"
echo ""
echo "4. Verificar:"
echo "   - Abrir URL de Vercel"
echo "   - Limpiar caché (Ctrl+Shift+R)"
echo "   - Ver 9 secciones en menú lateral"
echo ""
echo "📖 Más información: NUEVO_REPOSITORIO.md"
echo ""
echo "¡Éxito con RUBREX! 🎵"
