#!/bin/bash

# ============================================
# SCRIPT DE ACTUALIZACIÓN RÁPIDA PARA RUBREX
# ============================================
# Este script actualiza tu repositorio de GitHub
# con la versión completa de RUBREX

echo "🎵 RUBREX - Script de Actualización"
echo "===================================="
echo ""

# Verificar que estamos en un repositorio git
if [ ! -d .git ]; then
    echo "❌ Error: No estás en un repositorio git"
    echo "💡 Solución: Ejecuta 'git init' primero"
    exit 1
fi

echo "✅ Repositorio git detectado"
echo ""

# Agregar todos los cambios
echo "📝 Agregando cambios..."
git add .

# Verificar si hay cambios para hacer commit
if git diff --cached --quiet; then
    echo "⚠️  No hay cambios para hacer commit"
    echo "💡 Esto significa que ya tienes la última versión"
else
    # Hacer commit
    echo "💾 Haciendo commit..."
    git commit -m "✅ Update: Programación Didáctica y APIs completamente integradas

- Sección Programación Didáctica con 7 pestañas
- Sección Recursos Externos con 6 APIs
- Wikipedia, MusicBrainz, Dictionary, IMSLP, YouTube, Spotify
- Build exitoso y listo para producción"
    
    echo "✅ Commit realizado"
fi

echo ""

# Verificar si hay remoto configurado
if ! git remote | grep -q "origin"; then
    echo "❌ Error: No hay repositorio remoto configurado"
    echo "💡 Solución: Ejecuta este comando (reemplaza TU-USUARIO):"
    echo "   git remote add origin https://github.com/TU-USUARIO/rubrex.git"
    exit 1
fi

echo "✅ Repositorio remoto detectado"
echo ""

# Obtener información del remoto
REMOTE_URL=$(git remote get-url origin)
echo "📍 Repositorio: $REMOTE_URL"
echo ""

# Push a GitHub
echo "🚀 Subiendo cambios a GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ ¡ÉXITO! Cambios subidos a GitHub"
    echo ""
    echo "🎉 Vercel desplegará automáticamente en 2-3 minutos"
    echo ""
    echo "📋 PRÓXIMOS PASOS:"
    echo "1. Espera 2-3 minutos"
    echo "2. Abre tu URL de Vercel"
    echo "3. Limpia caché del navegador (Ctrl+Shift+R)"
    echo "4. Verifica que ves las 9 secciones en el menú lateral:"
    echo "   - 📚 Programación Didáctica"
    echo "   - 🌐 Recursos Externos"
    echo ""
    echo "🔗 URLs de referencia:"
    echo "   - https://rubrex-five.vercel.app/"
    echo "   - https://rubrex-git-comprehensive-developme-a8ef61-manuel-gagos-projects.vercel.app/"
    echo ""
else
    echo ""
    echo "❌ Error al subir cambios"
    echo "💡 Posibles soluciones:"
    echo "   1. Verifica tu conexión a internet"
    echo "   2. Verifica tus credenciales de GitHub"
    echo "   3. Intenta con: git push -u origin main"
    exit 1
fi
