import { useState } from 'react';
import {
  escalaComun,
  tiposRubrica,
  rubricasMaestrasEP,
  rubricasMaestrasEE,
  bloques,
  type Rubric,
  type MaestraRubric,
} from './data/rubrics';

type Section = 'inicio' | 'marco' | 'maestras-ep' | 'maestras-ee' | 'rubricas';

function NivelBadge({ nivel }: { nivel: string }) {
  const colors: Record<string, string> = {
    L4: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    L3: 'bg-blue-100 text-blue-800 border-blue-300',
    L2: 'bg-amber-100 text-amber-800 border-amber-300',
    L1: 'bg-red-100 text-red-800 border-red-300',
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold border ${colors[nivel] || 'bg-gray-100'}`}>
      {nivel}
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
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold ${colors[tipo] || 'bg-gray-100'}`}>
      {tipo}
    </span>
  );
}

function RubricTable({ rubricas }: { rubricas: Rubric[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
      <table className="min-w-full text-sm">
        <thead className="bg-gradient-to-r from-slate-700 to-slate-800 text-white">
          <tr>
            <th className="px-3 py-2 text-left font-semibold">Código</th>
            <th className="px-3 py-2 text-left font-semibold">Tipo</th>
            <th className="px-3 py-2 text-left font-semibold">Criterio</th>
            <th className="px-3 py-2 text-left font-semibold">Aspecto</th>
            <th className="px-3 py-2 text-left font-semibold"><NivelBadge nivel="L4" /></th>
            <th className="px-3 py-2 text-left font-semibold"><NivelBadge nivel="L3" /></th>
            <th className="px-3 py-2 text-left font-semibold"><NivelBadge nivel="L2" /></th>
            <th className="px-3 py-2 text-left font-semibold"><NivelBadge nivel="L1" /></th>
          </tr>
        </thead>
        <tbody>
          {rubricas.map((r, i) => (
            <tr key={r.codigo} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="px-3 py-2 font-mono text-xs text-slate-600 whitespace-nowrap">{r.codigo}</td>
              <td className="px-3 py-2"><TipoBadge tipo={r.tipo} /></td>
              <td className="px-3 py-2 text-xs text-slate-600">{r.criterio}</td>
              <td className="px-3 py-2 font-medium text-slate-800">{r.particularizacion}</td>
              <td className="px-3 py-2 text-xs text-emerald-700">{r.L4}</td>
              <td className="px-3 py-2 text-xs text-blue-700">{r.L3}</td>
              <td className="px-3 py-2 text-xs text-amber-700">{r.L2}</td>
              <td className="px-3 py-2 text-xs text-red-700">{r.L1}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MaestraRubricCard({ rubric }: { rubric: MaestraRubric }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="bg-gradient-to-r from-slate-700 to-slate-800 px-5 py-3">
        <h4 className="text-white font-semibold text-sm">{rubric.id}</h4>
        <p className="text-slate-300 text-xs mt-0.5">{rubric.nombre}</p>
      </div>
      <div className="p-4 space-y-2">
        <div className="flex items-start gap-2">
          <NivelBadge nivel="L4" />
          <p className="text-xs text-gray-700 leading-relaxed">{rubric.L4}</p>
        </div>
        <div className="flex items-start gap-2">
          <NivelBadge nivel="L3" />
          <p className="text-xs text-gray-700 leading-relaxed">{rubric.L3}</p>
        </div>
        <div className="flex items-start gap-2">
          <NivelBadge nivel="L2" />
          <p className="text-xs text-gray-700 leading-relaxed">{rubric.L2}</p>
        </div>
        <div className="flex items-start gap-2">
          <NivelBadge nivel="L1" />
          <p className="text-xs text-gray-700 leading-relaxed">{rubric.L1}</p>
        </div>
      </div>
    </div>
  );
}

function SectionInicio() {
  const totalRubricas = bloques.reduce((acc, b) => acc + b.uds.reduce((a, ud) => a + ud.rubricas.length, 0), 0);
  const totalUDs = bloques.reduce((acc, b) => acc + b.uds.length, 0);

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-indigo-900 rounded-2xl p-8 text-white shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">🎵</span>
          <div>
            <h2 className="text-2xl font-bold">Desarrollo Integral de Rúbricas</h2>
            <p className="text-slate-300 text-sm">Programación Didáctica de Clarinete</p>
          </div>
        </div>
        <p className="text-slate-200 text-sm leading-relaxed max-w-3xl">
          Documento maestro v1.0 — Enseñanzas Elementales y Enseñanzas Profesionales — Curso 2026/2027.
          Este documento contiene el marco general de evaluación, las rúbricas maestras por criterio de evaluación
          y las rúbricas específicas por Unidad Didáctica.
        </p>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/10 rounded-lg p-3 text-center backdrop-blur">
            <div className="text-2xl font-bold">{totalRubricas}</div>
            <div className="text-xs text-slate-300">Rúbricas desarrolladas</div>
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
            <div className="text-2xl font-bold">14</div>
            <div className="text-xs text-slate-300">Rúbricas / UD</div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
            <span className="text-xl">📋</span> Estructura del documento
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="font-bold text-indigo-600">A.</span>
              <span>Marco general de rúbricas (escala, tipos, códigos)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-indigo-600">B.</span>
              <span>Rúbricas maestras por criterio de evaluación (base reutilizable)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-indigo-600">C.</span>
              <span>Rúbricas específicas por UD (14 por unidad, agrupadas por curso)</span>
            </li>
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
          <span className="text-xl">📊</span> Distribución por curso
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {bloques.map(b => (
            <div key={b.id} className="bg-gradient-to-br from-indigo-50 to-slate-50 rounded-lg p-4 border border-indigo-100">
              <h4 className="font-bold text-indigo-800">{b.nombre}</h4>
              <p className="text-xs text-gray-600 mt-1">{b.uds.length} UD × 14 rúbricas = {b.uds.length * 14} rúbricas</p>
              <div className="mt-2 space-y-1">
                {b.uds.map(ud => (
                  <div key={ud.id} className="text-xs text-gray-600 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span>
                    {ud.id}: {ud.titulo}
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
          Rúbricas base reutilizables para Enseñanzas Profesionales. Cada UD particulariza los descriptores según su contexto.
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
          Rúbricas base reutilizables para Enseñanzas Elementales. Cada UD particulariza los descriptores según su contexto.
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

function SectionRubricas() {
  const [selectedBloque, setSelectedBloque] = useState(bloques[0].id);
  const [selectedUD, setSelectedUD] = useState(bloques[0].uds[0].id);
  const [filterTipo, setFilterTipo] = useState<string>('');

  const bloque = bloques.find(b => b.id === selectedBloque)!;
  const ud = bloque.uds.find(u => u.id === selectedUD)!;

  const filteredRubricas = filterTipo
    ? ud.rubricas.filter(r => r.tipo === filterTipo)
    : ud.rubricas;

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-indigo-50 to-slate-50 rounded-xl p-5 border border-indigo-200">
        <h2 className="text-xl font-bold text-indigo-900 mb-2">C. Rúbricas específicas por UD</h2>
        <p className="text-sm text-indigo-700">
          Cada UD contiene 14 rúbricas con tipo, criterio asociado y particularización de descriptores.
        </p>
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
                const b = bloques.find(bl => bl.id === e.target.value)!;
                setSelectedUD(b.uds[0].id);
              }}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              {bloques.map(b => (
                <option key={b.id} value={b.id}>{b.nombre}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Unidad Didáctica</label>
            <select
              value={selectedUD}
              onChange={e => setSelectedUD(e.target.value)}
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
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">{filteredRubricas.length} rúbricas</span>
          </div>
        </div>
      </div>

      {/* Rubric Table */}
      <RubricTable rubricas={filteredRubricas} />
    </div>
  );
}

export default function App() {
  const [section, setSection] = useState<Section>('inicio');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems: { id: Section; label: string; icon: string }[] = [
    { id: 'inicio', label: 'Inicio', icon: '🏠' },
    { id: 'marco', label: 'A. Marco General', icon: '📐' },
    { id: 'maestras-ep', label: 'B.1. Rúbricas Maestras EP', icon: '🎓' },
    { id: 'maestras-ee', label: 'B.2. Rúbricas Maestras EE', icon: '🎼' },
    { id: 'rubricas', label: 'C. Rúbricas por UD', icon: '📊' },
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
      <aside className={`fixed md:static inset-y-0 left-0 z-40 w-72 bg-gradient-to-b from-slate-800 to-slate-900 text-white transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 flex flex-col`}>
        <div className="p-5 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🎵</span>
            <div>
              <h1 className="font-bold text-sm leading-tight">Rúbricas de Clarinete</h1>
              <p className="text-xs text-slate-400">Programación Didáctica</p>
              <p className="text-xs text-slate-500">Curso 2026/2027</p>
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
            <p className="text-xs text-slate-500 mt-1">EE y EP · 840 rúbricas</p>
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
            <span>🎵 Rúbricas</span>
            <span>/</span>
            <span className="text-indigo-600 font-medium">
              {navItems.find(n => n.id === section)?.label}
            </span>
          </div>

          {/* Section content */}
          {section === 'inicio' && <SectionInicio />}
          {section === 'marco' && <SectionMarco />}
          {section === 'maestras-ep' && <SectionMaestrasEP />}
          {section === 'maestras-ee' && <SectionMaestrasEE />}
          {section === 'rubricas' && <SectionRubricas />}

          {/* Footer */}
          <footer className="mt-12 pt-6 border-t border-gray-200 text-center text-xs text-gray-400">
            <p>Desarrollo Integral de Rúbricas — Programación Didáctica de Clarinete — Curso 2026/2027</p>
            <p className="mt-1">EE y EP · Documento Maestro v1.0</p>
          </footer>
        </div>
      </main>
    </div>
  );
}
