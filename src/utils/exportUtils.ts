import * as XLSX from 'xlsx';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { bloques as bloquesEE, rubricasMaestrasEP, rubricasMaestrasEE, type RubricaDesarrollada, type UDData, type BloqueData } from '../data/rubrics';
import { bloquesEP } from '../data/rubricsEP';
import { bloquesEP456 } from '../data/rubricsEP456';

// ============================================
// RUBREX - Funciones Auxiliares para Formato XLSX
// ============================================

/**
 * Calcula el ancho óptimo para cada columna basado en el contenido
 */
const calculateColumnWidths = (data: any[], headers: string[]): { wch: number }[] => {
  return headers.map((header, colIndex) => {
    // Ancho del encabezado
    let maxLength = header.length;
    
    // Revisar todas las filas para encontrar el contenido más largo
    data.forEach(row => {
      const cellValue = String(Object.values(row)[colIndex] || '');
      // Para textos largos, limitamos a 80 caracteres para el cálculo
      const effectiveLength = Math.min(cellValue.length, 80);
      maxLength = Math.max(maxLength, effectiveLength);
    });
    
    // Añadir un poco de padding
    return { wch: Math.min(Math.max(maxLength + 2, 12), 80) };
  });
};

/**
 * Aplica estilos a los encabezados de la hoja
 */
const styleHeaders = (ws: XLSX.WorkSheet, headers: string[]) => {
  const range = XLSX.utils.decode_range(ws['!ref'] || 'A1');
  
  // Estilo para encabezados
  for (let C = range.s.c; C <= range.e.c; ++C) {
    const cellAddress = XLSX.utils.encode_cell({ r: 0, c: C });
    if (!ws[cellAddress]) continue;
    
    ws[cellAddress].s = {
      font: { bold: true, color: { rgb: 'FFFFFF' }, sz: 11 },
      fill: { fgColor: { rgb: '475569' } }, // Color slate-700
      alignment: { horizontal: 'center', vertical: 'center', wrapText: true },
      border: {
        top: { style: 'thin', color: { rgb: '000000' } },
        bottom: { style: 'thin', color: { rgb: '000000' } },
        left: { style: 'thin', color: { rgb: '000000' } },
        right: { style: 'thin', color: { rgb: '000000' } }
      }
    };
  }
};

/**
 * Aplica estilos a las celdas de datos
 */
const styleDataCells = (ws: XLSX.WorkSheet, startRow: number = 1) => {
  const range = XLSX.utils.decode_range(ws['!ref'] || 'A1');
  
  for (let R = startRow; R <= range.e.r; ++R) {
    for (let C = range.s.c; C <= range.e.c; ++C) {
      const cellAddress = XLSX.utils.encode_cell({ r: R, c: C });
      if (!ws[cellAddress]) continue;
      
      // Color alternado para filas
      const isEvenRow = R % 2 === 0;
      const bgColor = isEvenRow ? 'FFFFFF' : 'F8FAFC'; // Blanco o slate-50
      
      ws[cellAddress].s = {
        font: { sz: 10 },
        fill: { fgColor: { rgb: bgColor } },
        alignment: { 
          horizontal: C === 0 ? 'left' : 'left', // Primera columna izquierda
          vertical: 'top',
          wrapText: true // Ajuste de texto para contenido largo
        },
        border: {
          top: { style: 'thin', color: { rgb: 'D1D5DB' } },
          bottom: { style: 'thin', color: { rgb: 'D1D5DB' } },
          left: { style: 'thin', color: { rgb: 'D1D5DB' } },
          right: { style: 'thin', color: { rgb: 'D1D5DB' } }
        }
      };
    }
  }
};

/**
 * Aplica formato especial a columnas de niveles (L4, L3, L2, L1)
 */
const styleLevelColumns = (ws: XLSX.WorkSheet, headers: string[]) => {
  const range = XLSX.utils.decode_range(ws['!ref'] || 'A1');
  
  headers.forEach((header, colIndex) => {
    // Detectar columnas de niveles
    let bgColor = '';
    if (header.includes('L4')) bgColor = 'D1FAE5'; // Verde claro (emerald-100)
    else if (header.includes('L3')) bgColor = 'DBEAFE'; // Azul claro (blue-100)
    else if (header.includes('L2')) bgColor = 'FEF3C7'; // Ámbar claro (amber-100)
    else if (header.includes('L1')) bgColor = 'FEE2E2'; // Rojo claro (red-100)
    
    if (bgColor) {
      // Aplicar color al encabezado de la columna de nivel
      const headerAddress = XLSX.utils.encode_cell({ r: 0, c: colIndex });
      if (ws[headerAddress]) {
        ws[headerAddress].s = {
          font: { bold: true, color: { rgb: '000000' }, sz: 11 },
          fill: { fgColor: { rgb: bgColor } },
          alignment: { horizontal: 'center', vertical: 'center', wrapText: true },
          border: {
            top: { style: 'thin', color: { rgb: '000000' } },
            bottom: { style: 'thin', color: { rgb: '000000' } },
            left: { style: 'thin', color: { rgb: '000000' } },
            right: { style: 'thin', color: { rgb: '000000' } }
          }
        };
      }
      
      // Aplicar color de fondo a las celdas de esa columna
      for (let R = 1; R <= range.e.r; ++R) {
        const cellAddress = XLSX.utils.encode_cell({ r: R, c: colIndex });
        if (ws[cellAddress]) {
          ws[cellAddress].s = {
            font: { sz: 10 },
            fill: { fgColor: { rgb: bgColor } },
            alignment: { horizontal: 'left', vertical: 'top', wrapText: true },
            border: {
              top: { style: 'thin', color: { rgb: 'D1D5DB' } },
              bottom: { style: 'thin', color: { rgb: 'D1D5DB' } },
              left: { style: 'thin', color: { rgb: 'D1D5DB' } },
              right: { style: 'thin', color: { rgb: 'D1D5DB' } }
            }
          };
        }
      }
    }
  });
};

/**
 * Configura la hoja de Excel con formato profesional
 */
const formatWorksheet = (ws: XLSX.WorkSheet, headers: string[], data: any[]) => {
  // Calcular y aplicar anchos de columna
  ws['!cols'] = calculateColumnWidths(data, headers);
  
  // Aplicar altura de fila para encabezados
  ws['!rows'] = [{ hpt: 30 }]; // Encabezados más altos
  
  // Aplicar estilos
  styleHeaders(ws, headers);
  styleDataCells(ws);
  styleLevelColumns(ws, headers);
  
  // Congelar la primera fila (encabezados)
  ws['!freeze'] = { xSplit: 0, ySplit: 1 };
  
  // Activar filtros automáticos
  if (ws['!ref']) {
    ws['!autofilter'] = { ref: ws['!ref'] };
  }
};

// ============================================
// RUBREX - Funciones de Exportación a Excel
// ============================================

/**
 * Exporta rúbricas a Excel con formato profesional
 */
export const exportToExcel = (tipo: 'ee' | 'ep' | 'maestras-ep' | 'maestras-ee' | 'todas') => {
  const wb = XLSX.utils.book_new();

  const headers = [
    'Código', 'Nombre', 'Tipo', 'Criterio', 'Objetivo', 
    'Indicadores', 'Ponderación', 'Ejemplo',
    'Nivel L4 (Consolidado)', 'Nivel L3 (Adecuado)', 
    'Nivel L2 (En desarrollo)', 'Nivel L1 (Inicial)'
  ];

  if (tipo === 'ee' || tipo === 'todas') {
    bloquesEE.forEach(bloque => {
      bloque.uds.forEach(ud => {
        const data = ud.rubricas.map(r => ({
          'Código': r.codigo,
          'Nombre': r.nombre,
          'Tipo': r.tipo,
          'Criterio': r.criterio,
          'Objetivo': r.objetivo,
          'Indicadores': r.indicadores.join(', '),
          'Ponderación': r.ponderacion,
          'Ejemplo': r.ejemplo,
          'Nivel L4 (Consolidado)': r.L4,
          'Nivel L3 (Adecuado)': r.L3,
          'Nivel L2 (En desarrollo)': r.L2,
          'Nivel L1 (Inicial)': r.L1
        }));
        
        const ws = XLSX.utils.json_to_sheet(data);
        formatWorksheet(ws, headers, data);
        
        // Nombre de hoja limitado a 31 caracteres
        const sheetName = ud.id.substring(0, 31);
        XLSX.utils.book_append_sheet(wb, ws, sheetName);
      });
    });
  }

  if (tipo === 'ep' || tipo === 'todas') {
    const allEP = [...bloquesEP, ...bloquesEP456];
    allEP.forEach(bloque => {
      bloque.uds.forEach(ud => {
        const data = ud.rubricas.map(r => ({
          'Código': r.codigo,
          'Nombre': r.nombre,
          'Tipo': r.tipo,
          'Criterio': r.criterio,
          'Objetivo': r.objetivo,
          'Indicadores': r.indicadores.join(', '),
          'Ponderación': r.ponderacion,
          'Ejemplo': r.ejemplo,
          'Nivel L4 (Consolidado)': r.L4,
          'Nivel L3 (Adecuado)': r.L3,
          'Nivel L2 (En desarrollo)': r.L2,
          'Nivel L1 (Inicial)': r.L1
        }));
        
        const ws = XLSX.utils.json_to_sheet(data);
        formatWorksheet(ws, headers, data);
        
        const sheetName = ud.id.substring(0, 31);
        XLSX.utils.book_append_sheet(wb, ws, sheetName);
      });
    });
  }

  if (tipo === 'maestras-ep' || tipo === 'todas') {
    const maestrasHeaders = ['Código', 'Nombre', 'Nivel L4 (Consolidado)', 'Nivel L3 (Adecuado)', 'Nivel L2 (En desarrollo)', 'Nivel L1 (Inicial)'];
    const data = rubricasMaestrasEP.map(r => ({
      'Código': r.id,
      'Nombre': r.nombre,
      'Nivel L4 (Consolidado)': r.L4,
      'Nivel L3 (Adecuado)': r.L3,
      'Nivel L2 (En desarrollo)': r.L2,
      'Nivel L1 (Inicial)': r.L1
    }));
    
    const ws = XLSX.utils.json_to_sheet(data);
    formatWorksheet(ws, maestrasHeaders, data);
    XLSX.utils.book_append_sheet(wb, ws, 'Maestras EP');
  }

  if (tipo === 'maestras-ee' || tipo === 'todas') {
    const maestrasHeaders = ['Código', 'Nombre', 'Nivel L4 (Consolidado)', 'Nivel L3 (Adecuado)', 'Nivel L2 (En desarrollo)', 'Nivel L1 (Inicial)'];
    const data = rubricasMaestrasEE.map(r => ({
      'Código': r.id,
      'Nombre': r.nombre,
      'Nivel L4 (Consolidado)': r.L4,
      'Nivel L3 (Adecuado)': r.L3,
      'Nivel L2 (En desarrollo)': r.L2,
      'Nivel L1 (Inicial)': r.L1
    }));
    
    const ws = XLSX.utils.json_to_sheet(data);
    formatWorksheet(ws, maestrasHeaders, data);
    XLSX.utils.book_append_sheet(wb, ws, 'Maestras EE');
  }

  const fileName = tipo === 'todas' 
    ? 'RUBREX_Rubricas_Clarinete_Completo_2026-2027.xlsx'
    : `RUBREX_Rubricas_${tipo.toUpperCase()}_2026-2027.xlsx`;
  
  XLSX.writeFile(wb, fileName);
};

/**
 * Exporta una UD específica a Excel con formato profesional
 */
export const exportUDToExcel = (bloqueId: string, udId: string) => {
  const bloque = [...bloquesEE, ...bloquesEP, ...bloquesEP456].find((b: BloqueData) => b.id === bloqueId);
  if (!bloque) return;

  const ud = bloque.uds.find((u: UDData) => u.id === udId);
  if (!ud) return;

  const headers = [
    'Código', 'Nombre', 'Tipo', 'Criterio', 'Objetivo', 
    'Indicadores', 'Ponderación', 'Ejemplo',
    'Nivel L4 (Consolidado)', 'Nivel L3 (Adecuado)', 
    'Nivel L2 (En desarrollo)', 'Nivel L1 (Inicial)'
  ];

  const data = ud.rubricas.map((r: RubricaDesarrollada) => ({
    'Código': r.codigo,
    'Nombre': r.nombre,
    'Tipo': r.tipo,
    'Criterio': r.criterio,
    'Objetivo': r.objetivo,
    'Indicadores': r.indicadores.join(', '),
    'Ponderación': r.ponderacion,
    'Ejemplo': r.ejemplo,
    'Nivel L4 (Consolidado)': r.L4,
    'Nivel L3 (Adecuado)': r.L3,
    'Nivel L2 (En desarrollo)': r.L2,
    'Nivel L1 (Inicial)': r.L1
  }));

  const ws = XLSX.utils.json_to_sheet(data);
  formatWorksheet(ws, headers, data);
  
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, ud.id.substring(0, 31));
  XLSX.writeFile(wb, `RUBREX_${ud.id}_Rubricas.xlsx`);
};

// ============================================
// RUBREX - Funciones de Exportación a PDF
// ============================================

/**
 * Exporta rúbricas a PDF con formato profesional
 */
export const exportToPDF = (tipo: 'ee' | 'ep' | 'maestras-ep' | 'maestras-ee' | 'todas') => {
  const doc = new jsPDF('landscape', 'mm', 'a4');
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 10;

  // Título
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  const title = tipo === 'todas' 
    ? 'RUBREX - Rúbricas Clarinete 2026/2027 - Completo'
    : `RUBREX - Rúbricas ${tipo.toUpperCase()} 2026/2027`;
  doc.text(title, pageWidth / 2, 20, { align: 'center' });

  // Función auxiliar para agregar tabla
  const addTable = (headers: string[], data: string[][], title: string) => {
    doc.addPage();
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text(title, margin, 15);

    autoTable(doc, {
      startY: 20,
      head: [headers],
      body: data,
      theme: 'striped',
      headStyles: { 
        fillColor: [71, 85, 105],
        fontStyle: 'bold',
        fontSize: 9
      },
      styles: { 
        fontSize: 8, 
        cellPadding: 2,
        cellWidth: 'auto'
      },
      columnStyles: {
        0: { cellWidth: 25, fontStyle: 'bold' },
        1: { cellWidth: 35 },
        2: { cellWidth: 15 },
        3: { cellWidth: 20 }
      },
      didDrawPage: (data) => {
        // Pie de página
        const pageCount = doc.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
          doc.setPage(i);
          doc.setFontSize(8);
          doc.setTextColor(100);
          doc.text(
            `RUBREX - Rúbricas de Clarinete 2026/2027 - Página ${i} de ${pageCount}`,
            pageWidth / 2,
            doc.internal.pageSize.getHeight() - 10,
            { align: 'center' }
          );
        }
      }
    });
  };

  // Procesar según el tipo
  if (tipo === 'ee' || tipo === 'todas') {
    bloquesEE.forEach((bloque: BloqueData) => {
      bloque.uds.forEach((ud: UDData) => {
        const headers = ['Código', 'Nombre', 'Tipo', 'Criterio', 'L4', 'L3', 'L2', 'L1'];
        const data = ud.rubricas.map((r: RubricaDesarrollada) => [
          r.codigo,
          r.nombre,
          r.tipo,
          r.criterio,
          r.L4.substring(0, 50) + '...',
          r.L3.substring(0, 50) + '...',
          r.L2.substring(0, 50) + '...',
          r.L1.substring(0, 50) + '...'
        ]);
        addTable(headers, data, `${ud.id} - ${ud.titulo}`);
      });
    });
  }

  if (tipo === 'ep' || tipo === 'todas') {
    const allEP = [...bloquesEP, ...bloquesEP456];
    allEP.forEach((bloque: BloqueData) => {
      bloque.uds.forEach((ud: UDData) => {
        const headers = ['Código', 'Nombre', 'Tipo', 'Criterio', 'L4', 'L3', 'L2', 'L1'];
        const data = ud.rubricas.map((r: RubricaDesarrollada) => [
          r.codigo,
          r.nombre,
          r.tipo,
          r.criterio,
          r.L4.substring(0, 50) + '...',
          r.L3.substring(0, 50) + '...',
          r.L2.substring(0, 50) + '...',
          r.L1.substring(0, 50) + '...'
        ]);
        addTable(headers, data, `${ud.id} - ${ud.titulo}`);
      });
    });
  }

  if (tipo === 'maestras-ep' || tipo === 'todas') {
    const headers = ['Código', 'Nombre', 'L4', 'L3', 'L2', 'L1'];
    const data = rubricasMaestrasEP.map(r => [
      r.id,
      r.nombre,
      r.L4.substring(0, 60) + '...',
      r.L3.substring(0, 60) + '...',
      r.L2.substring(0, 60) + '...',
      r.L1.substring(0, 60) + '...'
    ]);
    addTable(headers, data, 'Rúbricas Maestras EP');
  }

  if (tipo === 'maestras-ee' || tipo === 'todas') {
    const headers = ['Código', 'Nombre', 'L4', 'L3', 'L2', 'L1'];
    const data = rubricasMaestrasEE.map(r => [
      r.id,
      r.nombre,
      r.L4.substring(0, 60) + '...',
      r.L3.substring(0, 60) + '...',
      r.L2.substring(0, 60) + '...',
      r.L1.substring(0, 60) + '...'
    ]);
    addTable(headers, data, 'Rúbricas Maestras EE');
  }

  const fileName = tipo === 'todas'
    ? 'RUBREX_Rubricas_Clarinete_Completo_2026-2027.pdf'
    : `RUBREX_Rubricas_${tipo.toUpperCase()}_2026-2027.pdf`;

  doc.save(fileName);
};

/**
 * Exporta una UD específica a PDF con formato profesional
 */
export const exportUDToPDF = (bloqueId: string, udId: string) => {
  const bloque = [...bloquesEE, ...bloquesEP, ...bloquesEP456].find((b: BloqueData) => b.id === bloqueId);
  if (!bloque) return;

  const ud = bloque.uds.find((u: UDData) => u.id === udId);
  if (!ud) return;

  const doc = new jsPDF('landscape', 'mm', 'a4');
  const pageWidth = doc.internal.pageSize.getWidth();
  
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text(`RUBREX - ${ud.id}`, pageWidth / 2, 15, { align: 'center' });
  
  doc.setFontSize(12);
  doc.text(ud.titulo, pageWidth / 2, 22, { align: 'center' });
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text(`Evidencia: ${ud.evidencia}`, pageWidth / 2, 29, { align: 'center' });

  const headers = ['Código', 'Nombre', 'Tipo', 'Criterio', 'Objetivo', 'Indicadores', 'L4', 'L3', 'L2', 'L1'];
  const data = ud.rubricas.map((r: RubricaDesarrollada) => [
    r.codigo,
    r.nombre,
    r.tipo,
    r.criterio,
    r.objetivo.substring(0, 40) + '...',
    r.indicadores.join(', ').substring(0, 40) + '...',
    r.L4.substring(0, 50) + '...',
    r.L3.substring(0, 50) + '...',
    r.L2.substring(0, 50) + '...',
    r.L1.substring(0, 50) + '...'
  ]);

  autoTable(doc, {
    startY: 35,
    head: [headers],
    body: data,
    theme: 'striped',
    headStyles: { 
      fillColor: [71, 85, 105],
      fontStyle: 'bold',
      fontSize: 8
    },
    styles: { 
      fontSize: 7, 
      cellPadding: 1.5,
      cellWidth: 'auto'
    },
    didDrawPage: (data) => {
      // Pie de página
      const pageCount = doc.getNumberOfPages();
      for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(8);
        doc.setTextColor(100);
        doc.text(
          `RUBREX - ${ud.id} - Página ${i} de ${pageCount}`,
          pageWidth / 2,
          doc.internal.pageSize.getHeight() - 10,
          { align: 'center' }
        );
      }
    }
  });

  doc.save(`RUBREX_${ud.id}_Rubricas.pdf`);
};
