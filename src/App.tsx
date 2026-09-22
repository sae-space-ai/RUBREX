import { useState } from 'react';
import {
  escalaComun,
  tiposRubrica,
  rubricasMaestrasEP,
  rubricasMaestrasEE,
  bloques as bloquesEE,
  type RubricaDesarrollada,
  type MaestraRubric,
} from './data/rubrics';
import { bloquesEP } from './data/rubricsEP';
import { bloquesEP456 } from './data/rubricsEP456';
import { exportToExcel, exportToPDF, exportUDToExcel, exportUDToPDF } from './utils/exportUtils';

const bloques = [...bloquesEE, ...bloquesEP, ...bloquesEP456];

type Section = 'inicio' | 'buscar' | 'marco' | 'maestras-ep' | 'maestras-ee' | 'rubricas-ee' | 'rubricas-ep';

function NivelBadge({ nivel }: { nivel: string }) {
  const colors: Record<string, string> = {
    L4: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    L3: 'bg-blue-100 text-blue-800 border-blue-300',
    L2: 'bg-amber-100 text-amber-800 border-amber-300',
    L1: 'bg-red-100 text-red-800 border-red-300',
  };
  const labels: Record<string, string> = {
    L4: 'Consolidado',
    L3: 'Adecuado',
    L2: 'En desarrollo',
    L1: 'Inicial',
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold border ${colors[nivel] || 'bg-gray-100'}`}>
      {nivel} · {labels[nivel]}
    </span>
  );
}

function TipoBadge({ tipo }: { tipo: string }) {
  const colors: Record<string, string> = {
    RT: 'bg-purple-100 text-purple-800',
    RI: 'bg-pink-100 text-pink-800',
    RA: 'bg-teal-100 text-teal-800',
    RE: 'bg-orange-100 text-orange-800',
    RC: 'bg-indigo-100 text-indigo-800',
  };
  const labels: Record<string, string> = {
    RT: 'Técnica',
    RI: 'Interpretativa',
    RA: 'Actitudinal',
    RE: 'Evidencia',
    RC: 'Criterio',
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold ${colors[tipo] || 'bg-gray-100'}`}>
      {tipo} — {labels[tipo]}
    </span>
  );
}



function MaestraRubricCard({ rubric }: { rubric: MaestraRubric }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-all">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left px-5 py-4 flex items-center justify-between gap-3 hover:bg-gray-50 transition-colors"
      >
        <div>
          <h4 className="text-white font-semibold text-sm bg-gradient-to-r from-slate-700 to-slate-800 -m-4 px-5 py-3 rounded-t-xl">{rubric.id}</h4>
          <p className="text-slate-600 text-xs mt-2">{rubric.nombre}</p>
        </div>
        <svg className={`w-5 h-5 text-gray-400 transition-transform shrink-0 ${expanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {expanded && (
        <div className="px-5 pb-5 space-y-2 border-t border-gray-100 pt-4">
          <div className="flex gap-3 p-3 bg-emerald-50 rounded-lg border border-emerald-100">
            <span className="shrink-0 font-bold text-emerald-700 text-xs mt-0.5">L4</span>
            <p className="text-xs text-emerald-900 leading-relaxed">{rubric.L4}</p>
          </div>
          <div className="flex gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
            <span className="shrink-0 font-bold text-blue-700 text-xs mt-0.5">L3</span>
            <p className="text-xs text-blue-900 leading-relaxed">{rubric.L3}</p>
          </div>
          <div className="flex gap-3 p-3 bg-amber-50 rounded-lg border border-amber-100">
            <span className="shrink-0 font-bold text-amber-700 text-xs mt-0.5">L2</span>
            <p className="text-xs text-amber-900 leading-relaxed">{rubric.L2}</p>
          </div>
          <div className="flex gap-3 p-3 bg-red-50 rounded-lg border border-red-100">
            <span className="shrink-0 font-bold text-red-700 text-xs mt-0.5">L1</span>
            <p className="text-xs text-red-900 leading-relaxed">{rubric.L1}</p>
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================
// RUBREX - Buscador Global de Rúbricas
// ============================================

function GlobalSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Array<{
    rubric: RubricaDesarrollada;
    bloque: string;
    ud: string;
    udTitulo: string;
  }>>([]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    
    if (term.length < 2) {
      setSearchResults([]);
      return;
    }

    const results: Array<{
      rubric: RubricaDesarrollada;
      bloque: string;
      ud: string;
      udTitulo: string;
    }> = [];

    const lowerTerm = term.toLowerCase();

    bloques.forEach(bloque => {
      bloque.uds.forEach(ud => {
        ud.rubricas.forEach(rubric => {
          const searchableText = [
            rubric.codigo,
            rubric.nombre,
            rubric.objetivo,
            rubric.tipo,
            rubric.criterio,
            rubric.ponderacion,
            rubric.ejemplo,
            rubric.L4,
            rubric.L3,
            rubric.L2,
            rubric.L1,
            ...rubric.indicadores
          ].join(' ').toLowerCase();

          if (searchableText.includes(lowerTerm)) {
            results.push({
              rubric,
              bloque: bloque.nombre,
              ud: ud.id,
              udTitulo: ud.titulo
            });
          }
        });
      });
    });

    setSearchResults(results);
  };

  const highlightText = (text: string, term: string) => {
    if (!term) return text;
    const regex = new RegExp(`(${term})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) => 
      regex.test(part) ? 
        <mark key={i} className="bg-yellow-200 px-0.5 rounded">{part}</mark> : 
        part
    );
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-5 border border-indigo-200">
        <h2 className="text-xl font-bold text-indigo-900 mb-2">🔍 Buscador Global de Rúbricas</h2>
        <p className="text-sm text-indigo-700">
          Busca en todas las rúbricas por código, nombre, criterio, indicador o cualquier palabra clave.
        </p>
      </div>

      {/* Campo de búsqueda */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Buscar por código, nombre, criterio, indicador..."
            className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            autoFocus
          />
          <svg className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        
        {searchTerm.length >= 2 && (
          <p className="mt-3 text-sm text-gray-600">
            {searchResults.length === 0 ? (
              'No se encontraron resultados'
            ) : (
              <>Se encontraron <strong>{searchResults.length}</strong> rúbrica{searchResults.length !== 1 ? 's' : ''}</>
            )}
          </p>
        )}
      </div>

      {/* Resultados */}
      {searchResults.length > 0 && (
        <div className="space-y-3">
          {searchResults.slice(0, 50).map((result, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="font-mono text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {result.rubric.codigo}
                    </span>
                    <TipoBadge tipo={result.rubric.tipo} />
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                      {result.rubric.criterio}
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-800 text-sm">
                    {highlightText(result.rubric.nombre, searchTerm)}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {result.bloque} → {result.ud}: {result.udTitulo}
                  </p>
                </div>
              </div>
              
              <div className="mt-3 space-y-2">
                <div>
                  <span className="text-xs font-semibold text-gray-600">Objetivo: </span>
                  <span className="text-xs text-gray-700">
                    {highlightText(result.rubric.objetivo.substring(0, 150) + '...', searchTerm)}
                  </span>
                </div>
                <div>
                  <span className="text-xs font-semibold text-gray-600">Indicadores: </span>
                  <span className="text-xs text-gray-700">
                    {result.rubric.indicadores.map((ind, i) => (
                      <span key={i} className="inline-block bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded text-xs mr-1 mb-1">
                        {highlightText(ind, searchTerm)}
                      </span>
                    ))}
                  </span>
                </div>
              </div>
            </div>
          ))}
          
          {searchResults.length > 50 && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
              <p className="text-sm text-amber-800">
                Mostrando los primeros 50 resultados de {searchResults.length} encontrados.
                <br />
                <span className="text-xs">Refina tu búsqueda para resultados más específicos.</span>
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ============================================
// RUBREX - Vista de Tabla Compacta
// ============================================

function RubricasTableView({ rubricas }: { rubricas: RubricaDesarrollada[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-gradient-to-r from-slate-700 to-slate-800 text-white">
          <tr>
            <th className="px-3 py-2 text-left text-xs font-semibold">Código</th>
            <th className="px-3 py-2 text-left text-xs font-semibold">Nombre</th>
            <th className="px-3 py-2 text-left text-xs font-semibold">Tipo</th>
            <th className="px-3 py-2 text-left text-xs font-semibold">Criterio</th>
            <th className="px-3 py-2 text-left text-xs font-semibold">Pond.</th>
            <th className="px-3 py-2 text-left text-xs font-semibold">L4</th>
            <th className="px-3 py-2 text-left text-xs font-semibold">L3</th>
            <th className="px-3 py-2 text-left text-xs font-semibold">L2</th>
            <th className="px-3 py-2 text-left text-xs font-semibold">L1</th>
          </tr>
        </thead>
        <tbody>
          {rubricas.map((r, index) => (
            <tr key={r.codigo} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="px-3 py-2 text-xs font-mono text-slate-600 whitespace-nowrap">{r.codigo}</td>
              <td className="px-3 py-2 text-xs font-medium text-slate-800">{r.nombre}</td>
              <td className="px-3 py-2"><TipoBadge tipo={r.tipo} /></td>
              <td className="px-3 py-2 text-xs text-gray-600">{r.criterio}</td>
              <td className="px-3 py-2 text-xs text-gray-600">{r.ponderacion}</td>
              <td className="px-3 py-2 text-xs text-emerald-700 max-w-xs truncate" title={r.L4}>
                {r.L4.substring(0, 60)}...
              </td>
              <td className="px-3 py-2 text-xs text-blue-700 max-w-xs truncate" title={r.L3}>
                {r.L3.substring(0, 60)}...
              </td>
              <td className="px-3 py-2 text-xs text-amber-700 max-w-xs truncate" title={r.L2}>
                {r.L2.substring(0, 60)}...
              </td>
              <td className="px-3 py-2 text-xs text-red-700 max-w-xs truncate" title={r.L1}>
                {r.L1.substring(0, 60)}...
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SectionInicio() {
  const totalRubricasEE = bloquesEE.reduce((acc, b) => acc + b.uds.reduce((a, ud) => a + ud.rubricas.length, 0), 0);
  const totalRubricasEP = bloquesEP.reduce((acc, b) => acc + b.uds.reduce((a, ud) => a + ud.rubricas.length, 0), 0) + bloquesEP456.reduce((acc, b) => acc + b.uds.reduce((a, ud) => a + ud.rubricas.length, 0), 0);
  const totalRubricas = totalRubricasEE + totalRubricasEP;
  const totalUDs = bloques.reduce((acc, b) => acc + b.uds.length, 0);

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-indigo-900 rounded-2xl p-8 text-white shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">🎵</span>
          <div>
            <h2 className="text-2xl font-bold">RUBREX</h2>
            <p className="text-slate-300 text-sm">Desarrollo Integral de Rúbricas — Programación Didáctica de Clarinete</p>
          </div>
        </div>
        <p className="text-slate-200 text-sm leading-relaxed max-w-3xl">
          Documento maestro v1.0 — Enseñanzas Elementales y Enseñanzas Profesionales — Curso 2026/2027.
          Cada rúbrica incluye: <strong>nombre, objetivo, criterios evaluados, indicadores observables, niveles de desempeño con descriptores detallados, ponderación y ejemplo de aplicación</strong>.
        </p>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/10 rounded-lg p-3 text-center backdrop-blur">
            <div className="text-2xl font-bold">{totalRubricas + 17}</div>
            <div className="text-xs text-slate-300">Total rúbricas (840 + 17 maestras)</div>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center backdrop-blur">
            <div className="text-2xl font-bold">{totalUDs}</div>
            <div className="text-xs text-slate-300">Unidades Didácticas</div>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center backdrop-blur">
            <div className="text-2xl font-bold">{bloques.length}</div>
            <div className="text-xs text-slate-300">Cursos (EE)</div>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center backdrop-blur">
            <div className="text-2xl font-bold">{totalRubricas}</div>
            <div className="text-xs text-slate-300">Rúbricas específicas</div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
            <span className="text-xl">📋</span> Estructura de cada rúbrica
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2"><span className="text-indigo-500">①</span> Nombre de la rúbrica</li>
            <li className="flex items-start gap-2"><span className="text-indigo-500">②</span> Objetivo</li>
            <li className="flex items-start gap-2"><span className="text-indigo-500">③</span> Criterios evaluados</li>
            <li className="flex items-start gap-2"><span className="text-indigo-500">④</span> Indicadores observables</li>
            <li className="flex items-start gap-2"><span className="text-indigo-500">⑤</span> Niveles de desempeño (L1–L4) con descriptores</li>
            <li className="flex items-start gap-2"><span className="text-indigo-500">⑥</span> Ponderación</li>
            <li className="flex items-start gap-2"><span className="text-indigo-500">⑦</span> Ejemplo de aplicación</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
            <span className="text-xl">🔑</span> Codificación
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">R-EE[curso]-UD[nn]-[nn]</code> → Enseñanzas Elementales</li>
            <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">R-EP[curso]-UD[nn]-[nn]</code> → Enseñanzas Profesionales</li>
            <li className="text-xs text-gray-500 mt-2">Ejemplo: <code className="bg-gray-100 px-1.5 py-0.5 rounded">R-EE1-UD01-01</code> = Rúbrica 1 de la UD01 de EE1</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
          <span className="text-xl">💾</span> Descargas
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          <button
            onClick={() => exportToExcel('todas')}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2"
          >
            <span>📊</span> Excel Completo
          </button>
          <button
            onClick={() => exportToPDF('todas')}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2"
          >
            <span>📄</span> PDF Completo
          </button>
          <button
            onClick={() => exportToExcel('ee')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2"
          >
            <span>📊</span> Excel EE
          </button>
          <button
            onClick={() => exportToExcel('ep')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2"
          >
            <span>📊</span> Excel EP
          </button>
          <button
            onClick={() => exportToPDF('ee')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2"
          >
            <span>📄</span> PDF EE
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
          <span className="text-xl">📊</span> Distribución por curso
        </h3>
        
        <h4 className="font-semibold text-indigo-700 mb-3 text-sm">ENSEÑANZAS ELEMENTALES</h4>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {bloquesEE.map(b => (
            <div key={b.id} className="bg-gradient-to-br from-indigo-50 to-slate-50 rounded-lg p-4 border border-indigo-100">
              <h4 className="font-bold text-indigo-800">{b.nombre}</h4>
              <p className="text-xs text-gray-600 mt-1">{b.uds.length} UD × 14 rúbricas = {b.uds.length * 14} rúbricas</p>
              <div className="mt-2 space-y-1">
                {b.uds.map(ud => (
                  <div key={ud.id} className="text-xs text-gray-600 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full shrink-0"></span>
                    <span>{ud.id}: {ud.titulo}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h4 className="font-semibold text-purple-700 mb-3 text-sm">ENSEÑANZAS PROFESIONALES</h4>
        <div className="grid md:grid-cols-3 gap-4">
          {bloquesEP.map(b => (
            <div key={b.id} className="bg-gradient-to-br from-purple-50 to-slate-50 rounded-lg p-4 border border-purple-100">
              <h4 className="font-bold text-purple-800">{b.nombre}</h4>
              <p className="text-xs text-gray-600 mt-1">{b.uds.length} UD × 14 rúbricas = {b.uds.length * 14} rúbricas</p>
              <div className="mt-2 space-y-1">
                {b.uds.map(ud => (
                  <div key={ud.id} className="text-xs text-gray-600 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full shrink-0"></span>
                    <span>{ud.id}: {ud.titulo}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          {bloquesEP456.map(b => (
            <div key={b.id} className="bg-gradient-to-br from-purple-50 to-slate-50 rounded-lg p-4 border border-purple-100">
              <h4 className="font-bold text-purple-800">{b.nombre}</h4>
              <p className="text-xs text-gray-600 mt-1">{b.uds.length} UD × 14 rúbricas = {b.uds.length * 14} rúbricas</p>
              <div className="mt-2 space-y-1">
                {b.uds.map(ud => (
                  <div key={ud.id} className="text-xs text-gray-600 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full shrink-0"></span>
                    <span>{ud.id}: {ud.titulo}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SectionMarco() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <span className="text-2xl">📐</span> A.1. Escala común
        </h2>
        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
          <table className="min-w-full text-sm">
            <thead className="bg-gradient-to-r from-slate-700 to-slate-800 text-white">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Nivel</th>
                <th className="px-4 py-3 text-left font-semibold">Denominación</th>
                <th className="px-4 py-3 text-left font-semibold">Descriptor general</th>
              </tr>
            </thead>
            <tbody>
              {escalaComun.map((e, i) => (
                <tr key={e.nivel} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3"><NivelBadge nivel={e.nivel} /></td>
                  <td className="px-4 py-3 font-semibold text-slate-800">{e.denominacion}</td>
                  <td className="px-4 py-3 text-gray-700">{e.descriptor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <span className="text-2xl">🏷️</span> A.2. Tipos de rúbrica
        </h2>
        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
          <table className="min-w-full text-sm">
            <thead className="bg-gradient-to-r from-slate-700 to-slate-800 text-white">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Código</th>
                <th className="px-4 py-3 text-left font-semibold">Tipo</th>
                <th className="px-4 py-3 text-left font-semibold">Función</th>
              </tr>
            </thead>
            <tbody>
              {tiposRubrica.map((t, i) => (
                <tr key={t.codigo} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3"><TipoBadge tipo={t.codigo} /></td>
                  <td className="px-4 py-3 font-semibold text-slate-800">{t.tipo}</td>
                  <td className="px-4 py-3 text-gray-700">{t.funcion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <span className="text-2xl">🔤</span> A.3. Códigos de rúbrica
        </h2>
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm space-y-3">
          <div className="flex items-start gap-3">
            <code className="bg-indigo-50 text-indigo-800 px-2 py-1 rounded text-sm font-mono">R-EE[curso]-UD[nn]-[nn]</code>
            <span className="text-sm text-gray-700">→ Rúbrica de Enseñanzas Elementales</span>
          </div>
          <div className="flex items-start gap-3">
            <code className="bg-indigo-50 text-indigo-800 px-2 py-1 rounded text-sm font-mono">R-EP[curso]-UD[nn]-[nn]</code>
            <span className="text-sm text-gray-700">→ Rúbrica de Enseñanzas Profesionales</span>
          </div>
          <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-800">
              <strong>Ejemplo:</strong> <code className="bg-amber-100 px-1 rounded">R-EE1-UD01-01</code> = Rúbrica 1 de la UD01 de EE1 (Primer curso de EE)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionMaestrasEP() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-5 border border-purple-200">
        <h2 className="text-xl font-bold text-purple-900 mb-2">B.1. Rúbricas maestras EP (CE-01 a CE-10)</h2>
        <p className="text-sm text-purple-700">
          Rúbricas base reutilizables para Enseñanzas Profesionales. Cada UD particulariza los descriptores según su contexto. Haz clic en cada tarjeta para ver los descriptores completos.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {rubricasMaestrasEP.map(r => (
          <MaestraRubricCard key={r.id} rubric={r} />
        ))}
      </div>
    </div>
  );
}

function SectionMaestrasEE() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-5 border border-teal-200">
        <h2 className="text-xl font-bold text-teal-900 mb-2">B.2. Rúbricas maestras EE (CE-EE1 a CE-EE7)</h2>
        <p className="text-sm text-teal-700">
          Rúbricas base reutilizables para Enseñanzas Elementales. Cada UD particulariza los descriptores según su contexto. Haz clic en cada tarjeta para ver los descriptores completos.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {rubricasMaestrasEE.map(r => (
          <MaestraRubricCard key={r.id} rubric={r} />
        ))}
      </div>
    </div>
  );
}

function RubricasSection({ bloquesData, titulo, descripcion, color }: { bloquesData: typeof bloquesEE; titulo: string; descripcion: string; color: string }) {
  const [selectedBloque, setSelectedBloque] = useState(bloquesData[0].id);
  const [selectedUD, setSelectedUD] = useState(bloquesData[0].uds[0].id);
  const [filterTipo, setFilterTipo] = useState<string>('');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const bloque = bloquesData.find(b => b.id === selectedBloque)!;
  const ud = bloque.uds.find(u => u.id === selectedUD)!;

  const filteredRubricas = filterTipo
    ? ud.rubricas.filter(r => r.tipo === filterTipo)
    : ud.rubricas;

  return (
    <div className="space-y-6">
      <div className={`bg-gradient-to-r ${color} rounded-xl p-5 border`}>
        <h2 className="text-xl font-bold mb-2">{titulo}</h2>
        <p className="text-sm">{descripcion}</p>
      </div>

      {/* Selectors */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Curso</label>
            <select
              value={selectedBloque}
              onChange={e => {
                setSelectedBloque(e.target.value);
                const b = bloquesData.find(bl => bl.id === e.target.value)!;
                setSelectedUD(b.uds[0].id);
                setFilterTipo('');
              }}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              {bloquesData.map(b => (
                <option key={b.id} value={b.id}>{b.nombre}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Unidad Didáctica</label>
            <select
              value={selectedUD}
              onChange={e => { setSelectedUD(e.target.value); setFilterTipo(''); }}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              {bloque.uds.map(u => (
                <option key={u.id} value={u.id}>{u.id} — {u.titulo}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Filtrar por tipo</label>
            <select
              value={filterTipo}
              onChange={e => setFilterTipo(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Todos los tipos</option>
              <option value="RT">RT — Técnica</option>
              <option value="RI">RI — Interpretativa</option>
              <option value="RA">RA — Actitudinal</option>
              <option value="RE">RE — Evidencia</option>
              <option value="RC">RC — Criterio</option>
            </select>
          </div>
        </div>
      </div>

      {/* UD Info */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <h3 className="text-lg font-bold text-slate-800">{ud.id} — {ud.titulo}</h3>
            {ud.evidencia && (
              <p className="text-xs text-gray-500 mt-1">
                Evidencia principal: <span className="font-mono text-indigo-600">{ud.evidencia}</span>
              </p>
            )}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{filteredRubricas.length} rúbricas</span>
            
            {/* Toggle Vista */}
            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('cards')}
                className={`px-3 py-1.5 text-xs font-semibold transition-colors ${
                  viewMode === 'cards' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
                title="Vista de tarjetas"
              >
                📋 Tarjetas
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`px-3 py-1.5 text-xs font-semibold transition-colors ${
                  viewMode === 'table' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
                title="Vista de tabla"
              >
                📊 Tabla
              </button>
            </div>

            <button
              onClick={() => exportUDToExcel(bloque.id, ud.id)}
              className="bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-lg font-semibold text-xs transition-colors flex items-center gap-1"
            >
              <span>📊</span> Excel
            </button>
            <button
              onClick={() => exportUDToPDF(bloque.id, ud.id)}
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-lg font-semibold text-xs transition-colors flex items-center gap-1"
            >
              <span>📄</span> PDF
            </button>
          </div>
        </div>
      </div>

      {/* Rubric View */}
      {viewMode === 'cards' ? (
        <div className="space-y-3">
          {filteredRubricas.map(r => (
            <RubricaExpandible key={r.codigo} rubrica={r} />
          ))}
        </div>
      ) : (
        <RubricasTableView rubricas={filteredRubricas} />
      )}
    </div>
  );
}

function SectionRubricasEE() {
  return (
    <RubricasSection
      bloquesData={bloquesEE}
      titulo="C.1. Rúbricas EE específicas por UD — Desarrollo completo"
      descripcion="Enseñanzas Elementales. Cada rúbrica incluye nombre, objetivo, indicadores observables, niveles de desempeño con descriptores detallados, ponderación y ejemplo de aplicación."
      color="from-indigo-50 to-slate-50 border-indigo-200"
    />
  );
}

function SectionRubricasEP() {
  const allEPBloques = [...bloquesEP, ...bloquesEP456];
  return (
    <RubricasSection
      bloquesData={allEPBloques}
      titulo="C.2. Rúbricas EP específicas por UD — Desarrollo completo"
      descripcion="Enseñanzas Profesionales (EP1-EP6). Cada rúbrica incluye nombre, objetivo, indicadores observables, niveles de desempeño con descriptores detallados, ponderación y ejemplo de aplicación."
      color="from-purple-50 to-slate-50 border-purple-200"
    />
  );
}

function RubricaExpandible({ rubrica }: { rubrica: RubricaDesarrollada }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-all">
      {/* Header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left px-4 py-3 flex items-center justify-between gap-3 hover:bg-gray-50 transition-colors"
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span className="font-mono text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded">{rubrica.codigo}</span>
            <TipoBadge tipo={rubrica.tipo} />
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{rubrica.criterio}</span>
            <span className="text-xs text-gray-400">· {rubrica.ponderacion}</span>
          </div>
          <h4 className="font-bold text-slate-800 text-sm">{rubrica.nombre}</h4>
          <p className="text-xs text-gray-500 mt-0.5 truncate">{rubrica.objetivo}</p>
        </div>
        <svg className={`w-5 h-5 text-gray-400 transition-transform shrink-0 ${expanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Expanded content */}
      {expanded && (
        <div className="px-4 pb-4 border-t border-gray-100 pt-3 space-y-3">
          {/* Objetivo */}
          <div>
            <h5 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">🎯 Objetivo</h5>
            <p className="text-sm text-gray-700">{rubrica.objetivo}</p>
          </div>

          {/* Criterio y Ponderación */}
          <div className="flex gap-4">
            <div>
              <h5 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Criterio</h5>
              <span className="text-sm text-indigo-700 font-mono bg-indigo-50 px-2 py-0.5 rounded">{rubrica.criterio}</span>
            </div>
            <div>
              <h5 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Ponderación</h5>
              <span className="text-sm text-gray-700 font-semibold">{rubrica.ponderacion}</span>
            </div>
          </div>

          {/* Indicadores */}
          <div>
            <h5 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">📌 Indicadores observables</h5>
            <div className="flex flex-wrap gap-1.5">
              {rubrica.indicadores.map((ind, i) => (
                <span key={i} className="bg-indigo-50 text-indigo-700 text-xs px-2.5 py-1 rounded-md border border-indigo-100">
                  {ind}
                </span>
              ))}
            </div>
          </div>

          {/* Ejemplo */}
          <div>
            <h5 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">💡 Ejemplo de aplicación</h5>
            <p className="text-sm text-gray-600 italic bg-gray-50 p-3 rounded-lg border border-gray-100">{rubrica.ejemplo}</p>
          </div>

          {/* Niveles */}
          <div>
            <h5 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">📊 Niveles de desempeño</h5>
            <div className="space-y-2">
              <div className="flex gap-3 p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                <span className="shrink-0 font-bold text-emerald-700 text-xs mt-0.5 w-6">L4</span>
                <div>
                  <span className="text-xs font-semibold text-emerald-600">Consolidado —</span>
                  <p className="text-xs text-emerald-900 leading-relaxed mt-0.5">{rubrica.L4}</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
                <span className="shrink-0 font-bold text-blue-700 text-xs mt-0.5 w-6">L3</span>
                <div>
                  <span className="text-xs font-semibold text-blue-600">Adecuado —</span>
                  <p className="text-xs text-blue-900 leading-relaxed mt-0.5">{rubrica.L3}</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 bg-amber-50 rounded-lg border border-amber-100">
                <span className="shrink-0 font-bold text-amber-700 text-xs mt-0.5 w-6">L2</span>
                <div>
                  <span className="text-xs font-semibold text-amber-600">En desarrollo —</span>
                  <p className="text-xs text-amber-900 leading-relaxed mt-0.5">{rubrica.L2}</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 bg-red-50 rounded-lg border border-red-100">
                <span className="shrink-0 font-bold text-red-700 text-xs mt-0.5 w-6">L1</span>
                <div>
                  <span className="text-xs font-semibold text-red-600">Inicial —</span>
                  <p className="text-xs text-red-900 leading-relaxed mt-0.5">{rubrica.L1}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [section, setSection] = useState<Section>('inicio');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems: { id: Section; label: string; icon: string }[] = [
    { id: 'inicio', label: 'Inicio', icon: '🏠' },
    { id: 'buscar', label: '🔍 Buscador Global', icon: '🔍' },
    { id: 'marco', label: 'A. Marco General', icon: '📐' },
    { id: 'maestras-ep', label: 'B.1. Rúbricas Maestras EP', icon: '🎓' },
    { id: 'maestras-ee', label: 'B.2. Rúbricas Maestras EE', icon: '🎼' },
    { id: 'rubricas-ee', label: 'C.1. Rúbricas EE por UD', icon: '📊' },
    { id: 'rubricas-ep', label: 'C.2. Rúbricas EP por UD', icon: '📋' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile menu button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-50 md:hidden bg-slate-800 text-white p-2 rounded-lg shadow-lg"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {sidebarOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Sidebar */}
      <aside className={`fixed md:static inset-y-0 left-0 z-40 w-72 bg-gradient-to-b from-slate-800 to-slate-900 text-white transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 flex flex-col shrink-0`}>
        <div className="p-5 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🎵</span>
            <div>
              <h1 className="font-bold text-lg leading-tight">RUBREX</h1>
              <p className="text-xs text-slate-400">Rúbricas de Clarinete</p>
              <p className="text-xs text-slate-500">Programación Didáctica 2026/2027</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => { setSection(item.id); setSidebarOpen(false); }}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm flex items-center gap-3 transition-colors ${
                section === item.id
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-slate-700">
          <div className="bg-slate-700/50 rounded-lg p-3">
            <p className="text-xs text-slate-400">Documento Maestro v1.0</p>
            <p className="text-xs text-slate-500 mt-1">EE y EP · Rúbricas desarrolladas</p>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main content */}
      <main className="flex-1 min-h-screen overflow-auto">
        <div className="max-w-6xl mx-auto p-4 md:p-8 pt-16 md:pt-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
            <span>🎵 RUBREX</span>
            <span>/</span>
            <span className="text-indigo-600 font-medium">
              {navItems.find(n => n.id === section)?.label}
            </span>
          </div>

          {/* Section content */}
          {section === 'inicio' && <SectionInicio />}
          {section === 'buscar' && <GlobalSearch />}
          {section === 'marco' && <SectionMarco />}
          {section === 'maestras-ep' && <SectionMaestrasEP />}
          {section === 'maestras-ee' && <SectionMaestrasEE />}
          {section === 'rubricas-ee' && <SectionRubricasEE />}
          {section === 'rubricas-ep' && <SectionRubricasEP />}

          {/* Footer */}
          <footer className="mt-12 pt-6 border-t border-gray-200 text-center text-xs text-gray-400">
            <p className="font-semibold">RUBREX — Desarrollo Integral de Rúbricas</p>
            <p className="mt-1">Programación Didáctica de Clarinete — Curso 2026/2027</p>
            <p className="mt-1">EE y EP · Documento Maestro v1.0 · Cada rúbrica con objetivo, indicadores, descriptores y ejemplo</p>
          </footer>
        </div>
      </main>
    </div>
  );
}
