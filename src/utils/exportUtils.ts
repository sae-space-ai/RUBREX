import * as XLSX from 'xlsx';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { bloques as bloquesEE, rubricasMaestrasEP, rubricasMaestrasEE, type RubricaDesarrollada, type UDData, type BloqueData } from '../data/rubrics';
import { bloquesEP } from '../data/rubricsEP';
import { bloquesEP456 } from '../data/rubricsEP456';

// Función para exportar a Excel (XLSX)
export const exportToExcel = (tipo: 'ee' | 'ep' | 'maestras-ep' | 'maestras-ee' | 'todas') => {
  const wb = XLSX.utils.book_new();

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
          'Nivel L4': r.L4,
          'Nivel L3': r.L3,
          'Nivel L2': r.L2,
          'Nivel L1': r.L1
        }));
        const ws = XLSX.utils.json_to_sheet(data);
        XLSX.utils.book_append_sheet(wb, ws, ud.id.substring(0, 31)); // Excel tiene límite de 31 chars
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
          'Nivel L4': r.L4,
          'Nivel L3': r.L3,
          'Nivel L2': r.L2,
          'Nivel L1': r.L1
        }));
        const ws = XLSX.utils.json_to_sheet(data);
        XLSX.utils.book_append_sheet(wb, ws, ud.id.substring(0, 31));
      });
    });
  }

  if (tipo === 'maestras-ep' || tipo === 'todas') {
    const data = rubricasMaestrasEP.map(r => ({
      'Código': r.id,
      'Nombre': r.nombre,
      'Nivel L4': r.L4,
      'Nivel L3': r.L3,
      'Nivel L2': r.L2,
      'Nivel L1': r.L1
    }));
    const ws = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, 'Maestras EP');
  }

  if (tipo === 'maestras-ee' || tipo === 'todas') {
    const data = rubricasMaestrasEE.map(r => ({
      'Código': r.id,
      'Nombre': r.nombre,
      'Nivel L4': r.L4,
      'Nivel L3': r.L3,
      'Nivel L2': r.L2,
      'Nivel L1': r.L1
    }));
    const ws = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, 'Maestras EE');
  }

  const fileName = tipo === 'todas' 
    ? 'RUBREX_Rubricas_Clarinete_Completo_2026-2027.xlsx'
    : `RUBREX_Rubricas_${tipo.toUpperCase()}_2026-2027.xlsx`;
  
  XLSX.writeFile(wb, fileName);
};

// Función para exportar a PDF
export const exportToPDF = (tipo: 'ee' | 'ep' | 'maestras-ep' | 'maestras-ee' | 'todas') => {
  const doc = new jsPDF('landscape', 'mm', 'a4');
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 10;

  // Título
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  const title = tipo === 'todas' 
    ? 'Rúbricas Clarinete 2026/2027 - Completo'
    : `Rúbricas ${tipo.toUpperCase()} 2026/2027`;
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
      headStyles: { fillColor: [71, 85, 105] },
      styles: { fontSize: 8, cellPadding: 2 },
      columnStyles: {
        0: { cellWidth: 25 },
        1: { cellWidth: 35 },
        2: { cellWidth: 20 },
        3: { cellWidth: 20 }
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

// Función para exportar una UD específica
export const exportUDToExcel = (bloqueId: string, udId: string) => {
  const bloque = [...bloquesEE, ...bloquesEP, ...bloquesEP456].find((b: BloqueData) => b.id === bloqueId);
  if (!bloque) return;

  const ud = bloque.uds.find((u: UDData) => u.id === udId);
  if (!ud) return;

  const data = ud.rubricas.map((r: RubricaDesarrollada) => ({
    'Código': r.codigo,
    'Nombre': r.nombre,
    'Tipo': r.tipo,
    'Criterio': r.criterio,
    'Objetivo': r.objetivo,
    'Indicadores': r.indicadores.join(', '),
    'Ponderación': r.ponderacion,
    'Ejemplo': r.ejemplo,
    'Nivel L4': r.L4,
    'Nivel L3': r.L3,
    'Nivel L2': r.L2,
    'Nivel L1': r.L1
  }));

  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, ud.id);
  XLSX.writeFile(wb, `RUBREX_${ud.id}_Rubricas.xlsx`);
};

export const exportUDToPDF = (bloqueId: string, udId: string) => {
  const bloque = [...bloquesEE, ...bloquesEP, ...bloquesEP456].find((b: BloqueData) => b.id === bloqueId);
  if (!bloque) return;

  const ud = bloque.uds.find((u: UDData) => u.id === udId);
  if (!ud) return;

  const doc = new jsPDF('landscape', 'mm', 'a4');
  const pageWidth = doc.internal.pageSize.getWidth();
  
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text(`${ud.id} - ${ud.titulo}`, pageWidth / 2, 15, { align: 'center' });
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text(`Evidencia: ${ud.evidencia}`, pageWidth / 2, 22, { align: 'center' });

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
    startY: 30,
    head: [headers],
    body: data,
    theme: 'striped',
    headStyles: { fillColor: [71, 85, 105] },
    styles: { fontSize: 7, cellPadding: 1.5 }
  });

  doc.save(`RUBREX_${ud.id}_Rubricas.pdf`);
};
