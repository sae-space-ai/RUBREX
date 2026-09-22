// ============================================================
// RUBREX - Programación Didáctica de Clarinete 2026/2027
// Marco Referencial Completo - EE y EP
// ============================================================

export interface Normativa {
  id: string;
  titulo: string;
  ambito: string;
  descripcion: string;
  estado: 'vigente' | 'hold';
}

export interface ObjetivoGeneral {
  id: string;
  etapa: 'EE' | 'EP';
  numero: number;
  texto: string;
}

export interface CriterioEvaluacion {
  id: string;
  etapa: 'EE' | 'EP';
  curso: number;
  codigo: string;
  texto: string;
}

export interface Contenido {
  id: string;
  etapa: 'EE' | 'EP';
  curso: number;
  categoria: string;
  titulo: string;
  descripcion: string;
}

export interface Metodologia {
  id: string;
  titulo: string;
  descripcion: string;
  principios: string[];
  estrategias: string[];
}

export interface EvaluacionInfo {
  id: string;
  titulo: string;
  descripcion: string;
  instrumentos: string[];
  criterios: string[];
  calificacion: string;
}

// ============================================================
// NORMATIVA DE REFERENCIA
// ============================================================

export const normativa: Normativa[] = [
  {
    id: 'NORM-001',
    titulo: 'Real Decreto 157/2022, de 1 de marzo',
    ambito: 'Estatal',
    descripcion: 'Por el que se establecen las enseñanzas elementales de música y danza y se fijan sus aspectos básicos del currículo.',
    estado: 'vigente'
  },
  {
    id: 'NORM-002',
    titulo: 'Real Decreto 158/2022, de 8 de marzo',
    ambito: 'Estatal',
    descripcion: 'Por el que se establecen las enseñanzas profesionales de música y danza y se fijan sus aspectos básicos del currículo.',
    estado: 'vigente'
  },
  {
    id: 'NORM-003',
    titulo: 'Decreto de la Junta de Extremadura',
    ambito: 'Autonómico',
    descripcion: 'Por el que se establece el currículo de las enseñanzas elementales de música en la Comunidad Autónoma de Extremadura.',
    estado: 'hold'
  },
  {
    id: 'NORM-004',
    titulo: 'Decreto de la Junta de Extremadura',
    ambito: 'Autonómico',
    descripcion: 'Por el que se establece el currículo de las enseñanzas profesionales de música en la Comunidad Autónoma de Extremadura.',
    estado: 'hold'
  },
  {
    id: 'NORM-005',
    titulo: 'LOMLOE - Ley Orgánica 3/2020',
    ambito: 'Estatal',
    descripcion: 'Ley Orgánica 3/2020, de 29 de diciembre, por la que se modifica la Ley Orgánica 2/2006, de 3 de mayo, de Educación.',
    estado: 'vigente'
  }
];

// ============================================================
// OBJETIVOS GENERALES - ENSEÑANZAS ELEMENTALES
// ============================================================

export const objetivosEE: ObjetivoGeneral[] = [
  {
    id: 'OBJ-EE-01',
    etapa: 'EE',
    numero: 1,
    texto: 'Disfrutar con la práctica del clarinete, mostrando interés y motivación por el aprendizaje.'
  },
  {
    id: 'OBJ-EE-02',
    etapa: 'EE',
    numero: 2,
    texto: 'Adoptar una postura corporal adecuada y relajada que facilite la emisión del sonido.'
  },
  {
    id: 'OBJ-EE-03',
    etapa: 'EE',
    numero: 3,
    texto: 'Desarrollar la respiración diafragmática como base de la emisión sonora.'
  },
  {
    id: 'OBJ-EE-04',
    etapa: 'EE',
    numero: 4,
    texto: 'Producir un sonido estable y afinado en el registro trabajado.'
  },
  {
    id: 'OBJ-EE-05',
    etapa: 'EE',
    numero: 5,
    texto: 'Desarrollar la coordinación entre respiración, embocadura, digitación y articulación.'
  },
  {
    id: 'OBJ-EE-06',
    etapa: 'EE',
    numero: 6,
    texto: 'Leer e interpretar partituras sencillas manteniendo el pulso y el ritmo.'
  },
  {
    id: 'OBJ-EE-07',
    etapa: 'EE',
    numero: 7,
    texto: 'Desarrollar la sensibilidad auditiva y la afinación.'
  },
  {
    id: 'OBJ-EE-08',
    etapa: 'EE',
    numero: 8,
    texto: 'Interpretar obras de diferentes estilos y épocas con intención musical.'
  },
  {
    id: 'OBJ-EE-09',
    etapa: 'EE',
    numero: 9,
    texto: 'Memorizar e interpretar obras de memoria.'
  },
  {
    id: 'OBJ-EE-10',
    etapa: 'EE',
    numero: 10,
    texto: 'Tocar en conjunto escuchando activamente a los demás compañeros.'
  },
  {
    id: 'OBJ-EE-11',
    etapa: 'EE',
    numero: 11,
    texto: 'Desarrollar hábitos de estudio autónomos y regulares.'
  },
  {
    id: 'OBJ-EE-12',
    etapa: 'EE',
    numero: 12,
    texto: 'Presentarse en público con seguridad y comunicación artística.'
  }
];

// ============================================================
// OBJETIVOS GENERALES - ENSEÑANZAS PROFESIONALES
// ============================================================

export const objetivosEP: ObjetivoGeneral[] = [
  {
    id: 'OBJ-EP-01',
    etapa: 'EP',
    numero: 1,
    texto: 'Interpretar un repertorio variado que incluya obras de diferentes épocas y estilos.'
  },
  {
    id: 'OBJ-EP-02',
    etapa: 'EP',
    numero: 2,
    texto: 'Dominar los recursos técnicos del instrumento al servicio de la expresión musical.'
  },
  {
    id: 'OBJ-EP-03',
    etapa: 'EP',
    numero: 3,
    texto: 'Desarrollar una afinación precisa y sensibilidad auditiva avanzada.'
  },
  {
    id: 'OBJ-EP-04',
    etapa: 'EP',
    numero: 4,
    texto: 'Leer a primera vista con fluidez y comprensión musical.'
  },
  {
    id: 'OBJ-EP-05',
    etapa: 'EP',
    numero: 5,
    texto: 'Interpretar de memoria con seguridad y fidelidad estilística.'
  },
  {
    id: 'OBJ-EP-06',
    etapa: 'EP',
    numero: 6,
    texto: 'Desarrollar la autonomía en el estudio y la toma de decisiones interpretativas.'
  },
  {
    id: 'OBJ-EP-07',
    etapa: 'EP',
    numero: 7,
    texto: 'Integrarse en formaciones de cámara con escucha activa y ajuste mutuo.'
  },
  {
    id: 'OBJ-EP-08',
    etapa: 'EP',
    numero: 8,
    texto: 'Analizar e interpretar obras con criterio artístico y conocimiento del contexto histórico.'
  },
  {
    id: 'OBJ-EP-09',
    etapa: 'EP',
    numero: 9,
    texto: 'Resolver problemas técnicos e interpretativos de forma autónoma.'
  },
  {
    id: 'OBJ-EP-10',
    etapa: 'EP',
    numero: 10,
    texto: 'Presentarse en público con seguridad, comunicación artística y calidad profesional.'
  }
];

// ============================================================
// CRITERIOS DE EVALUACIÓN - EE
// ============================================================

export const criteriosEE: CriterioEvaluacion[] = [
  {
    id: 'CE-EE1',
    etapa: 'EE',
    curso: 0,
    codigo: 'CE-EE1',
    texto: 'Postura y utilización del instrumento.'
  },
  {
    id: 'CE-EE2',
    etapa: 'EE',
    curso: 0,
    codigo: 'CE-EE2',
    texto: 'Emisión y control del aire.'
  },
  {
    id: 'CE-EE3',
    etapa: 'EE',
    curso: 0,
    codigo: 'CE-EE3',
    texto: 'Digitación y coordinación.'
  },
  {
    id: 'CE-EE4',
    etapa: 'EE',
    curso: 0,
    codigo: 'CE-EE4',
    texto: 'Lectura y pulso.'
  },
  {
    id: 'CE-EE5',
    etapa: 'EE',
    curso: 0,
    codigo: 'CE-EE5',
    texto: 'Fraseo y expresión.'
  },
  {
    id: 'CE-EE6',
    etapa: 'EE',
    curso: 0,
    codigo: 'CE-EE6',
    texto: 'Memoria y conjunto.'
  },
  {
    id: 'CE-EE7',
    etapa: 'EE',
    curso: 0,
    codigo: 'CE-EE7',
    texto: 'Hábitos de estudio y autonomía.'
  }
];

// ============================================================
// CRITERIOS DE EVALUACIÓN - EP
// ============================================================

export const criteriosEP: CriterioEvaluacion[] = [
  {
    id: 'CE-01',
    etapa: 'EP',
    curso: 0,
    codigo: 'CE-01',
    texto: 'Esfuerzo muscular, respiración y relajación.'
  },
  {
    id: 'CE-02',
    etapa: 'EP',
    curso: 0,
    codigo: 'CE-02',
    texto: 'Dominio técnico-musical en estudios y obras.'
  },
  {
    id: 'CE-03',
    etapa: 'EP',
    curso: 0,
    codigo: 'CE-03',
    texto: 'Sensibilidad auditiva y afinación.'
  },
  {
    id: 'CE-04',
    etapa: 'EP',
    curso: 0,
    codigo: 'CE-04',
    texto: 'Estudio autónomo del repertorio.'
  },
  {
    id: 'CE-05',
    etapa: 'EP',
    curso: 0,
    codigo: 'CE-05',
    texto: 'Lectura a primera vista e improvisación.'
  },
  {
    id: 'CE-06',
    etapa: 'EP',
    curso: 0,
    codigo: 'CE-06',
    texto: 'Interpretación de obras de distintas épocas y estilos.'
  },
  {
    id: 'CE-07',
    etapa: 'EP',
    curso: 0,
    codigo: 'CE-07',
    texto: 'Interpretación de memoria.'
  },
  {
    id: 'CE-08',
    etapa: 'EP',
    curso: 0,
    codigo: 'CE-08',
    texto: 'Autonomía interpretativa.'
  },
  {
    id: 'CE-09',
    etapa: 'EP',
    curso: 0,
    codigo: 'CE-09',
    texto: 'Resolución de problemas técnicos e interpretativos.'
  },
  {
    id: 'CE-10',
    etapa: 'EP',
    curso: 0,
    codigo: 'CE-10',
    texto: 'Presentación pública y comunicación artística.'
  }
];

// ============================================================
// METODOLOGÍA
// ============================================================

export const metodologia: Metodologia = {
  id: 'MET-001',
  titulo: 'Metodología Didáctica',
  descripcion: 'La metodología se basa en un enfoque práctico, progresivo y personalizado que prioriza la experiencia musical integral del alumnado.',
  principios: [
    'Progresión gradual desde lo simple a lo complejo',
    'Integración de técnica y musicalidad desde el inicio',
    'Aprendizaje activo y significativo',
    'Atención a la diversidad del alumnado',
    'Desarrollo de la autonomía progresiva',
    'Contextualización histórica y estilística',
    'Práctica regular y reflexiva',
    'Evaluación formativa y continua'
  ],
  estrategias: [
    'Demostración y modelado por parte del docente',
    'Práctica deliberada con objetivos claros',
    'Escucha activa y análisis de grabaciones',
    'Trabajo individual y en grupo',
    'Resolución de problemas técnicos y musicales',
    'Improvisación y creatividad',
    'Interpretación en público',
    'Autoevaluación y reflexión'
  ]
};

// ============================================================
// EVALUACIÓN
// ============================================================

export const evaluacionInfo: EvaluacionInfo = {
  id: 'EVAL-001',
  titulo: 'Sistema de Evaluación',
  descripcion: 'La evaluación es continua, formativa e integradora, considerando todos los aspectos del desarrollo musical del alumnado.',
  instrumentos: [
    'Observación directa del proceso de aprendizaje',
    'Interpretación de obras y estudios',
    'Pruebas técnicas (escalas, arpegios, ejercicios)',
    'Lectura a primera vista',
    'Interpretación de memoria',
    'Trabajo en conjunto (cámara)',
    'Actuaciones públicas',
    'Cuaderno de trabajo y autoevaluación',
    'Actitud, hábitos y participación'
  ],
  criterios: [
    'Dominio técnico del instrumento',
    'Calidad del sonido y afinación',
    'Comprensión e interpretación musical',
    'Lectura y comprensión rítmica',
    'Memoria y autonomía',
    'Capacidad de trabajo en conjunto',
    'Conocimiento estilístico',
    'Comunicación artística',
    'Hábitos de estudio y actitud'
  ],
  calificacion: 'HOLD - PENDIENTE DE VERIFICACIÓN según normativa autonómica'
};

// ============================================================
// CONTENIDOS POR CURSO - EE
// ============================================================

export interface ContenidoCurso {
  curso: number;
  bloques: {
    titulo: string;
    contenidos: string[];
  }[];
}

export const contenidosEE: ContenidoCurso[] = [
  {
    curso: 1,
    bloques: [
      {
        titulo: 'Técnica instrumental',
        contenidos: [
          'Postura corporal y manejo del instrumento',
          'Montaje y cuidado del clarinete',
          'Respiración diafragmática',
          'Emisión del sonido y embocadura',
          'Digitación básica y coordinación',
          'Articulación: legato y staccato inicial',
          'Registro chalumeau (notas graves)'
        ]
      },
      {
        titulo: 'Lectura y ritmo',
        contenidos: [
          'Lectura de notas en clave de sol',
          'Figuras rítmicas básicas',
          'Compases simples (2/4, 3/4, 4/4)',
          'Pulso y tempo',
          'Primeras escalas (Do, Sol, Fa mayor)'
        ]
      },
      {
        titulo: 'Expresión musical',
        contenidos: [
          'Fraseo básico',
          'Dinámicas (p, mf, f)',
          'Carácter y expresión',
          'Primeras obras sencillas'
        ]
      },
      {
        titulo: 'Repertorio',
        contenidos: [
          'Estudios elementales',
          'Melodías sencillas',
          'Primeras obras del repertorio',
          'Música de cámara sencilla'
        ]
      }
    ]
  },
  {
    curso: 2,
    bloques: [
      {
        titulo: 'Técnica instrumental',
        contenidos: [
          'Consolidación de postura y embocadura',
          'Respiración aplicada a frases musicales',
          'Sonido estable en todo el registro trabajado',
          'Articulaciones: legato, staccato, acentos',
          'Mecanismo y velocidad inicial',
          'Escalas mayores y menores',
          'Arpegios',
          'Ampliación del registro'
        ]
      },
      {
        titulo: 'Lectura y ritmo',
        contenidos: [
          'Lectura fluida de partituras',
          'Figuras rítmicas más complejas',
          'Subdivisiones',
          'Lectura a primera vista',
          'Todas las tonalidades trabajadas'
        ]
      },
      {
        titulo: 'Expresión musical',
        contenidos: [
          'Fraseo con intención musical',
          'Dinámicas contrastadas',
          'Articulación expresiva',
          'Iniciación al estilo y carácter'
        ]
      },
      {
        titulo: 'Repertorio',
        contenidos: [
          'Estudios de mayor dificultad',
          'Obras de diferentes estilos',
          'Música de cámara',
          'Memorización de obras'
        ]
      }
    ]
  },
  {
    curso: 3,
    bloques: [
      {
        titulo: 'Técnica instrumental',
        contenidos: [
          'Control avanzado del sonido',
          'Registro ampliado',
          'Articulaciones avanzadas',
          'Mecanismo y velocidad',
          'Escalas y arpegios en todas las tonalidades',
          'Cromatismo',
          'Flexibilidad y agilidad'
        ]
      },
      {
        titulo: 'Lectura y ritmo',
        contenidos: [
          'Lectura a primera vista avanzada',
          'Ritmos complejos',
          'Compases compuestos',
          'Análisis estructural'
        ]
      },
      {
        titulo: 'Expresión musical',
        contenidos: [
          'Fraseo elaborado',
          'Color tímbrico',
          'Dinámicas y matices',
          'Agógica',
          'Estilo y carácter diferenciado'
        ]
      },
      {
        titulo: 'Repertorio',
        contenidos: [
          'Estudios avanzados',
          'Obras de diferentes épocas',
          'Repertorio de cámara',
          'Improvisación',
          'Programas de concierto'
        ]
      }
    ]
  }
];

// ============================================================
// CONTENIDOS POR CURSO - EP
// ============================================================

export const contenidosEP: ContenidoCurso[] = [
  {
    curso: 1,
    bloques: [
      {
        titulo: 'Técnica avanzada',
        contenidos: [
          'Control óptimo del esfuerzo y respiración',
          'Dominio técnico-musical integrado',
          'Articulaciones matizadas',
          'Velocidad y precisión',
          'Escalas y arpegios en todas las tonalidades',
          'Intervalos y saltos',
          'Registro completo del instrumento'
        ]
      },
      {
        titulo: 'Repertorio',
        contenidos: [
          'Estudios de nivel profesional',
          'Obras del repertorio clásico-romántico',
          'Repertorio contemporáneo inicial',
          'Música de cámara'
        ]
      },
      {
        titulo: 'Interpretación',
        contenidos: [
          'Fraseo expresivo',
          'Estilo y carácter',
          'Comunicación artística',
          'Memoria y autonomía',
          'Lectura a primera vista avanzada'
        ]
      }
    ]
  },
  {
    curso: 2,
    bloques: [
      {
        titulo: 'Técnica consolidada',
        contenidos: [
          'Sonido rico y estable',
          'Afinación precisa',
          'Articulación avanzada',
          'Mecanismo fluido',
          'Velocidad y control',
          'Recursos sonoros extendidos'
        ]
      },
      {
        titulo: 'Repertorio',
        contenidos: [
          'Repertorio clásico-romántico',
          'Obras de mayor dificultad',
          'Música de cámara avanzada',
          'Repertorio contemporáneo'
        ]
      },
      {
        titulo: 'Interpretación',
        contenidos: [
          'Construcción interpretativa',
          'Análisis musical',
          'Estilo y contexto histórico',
          'Autonomía interpretativa',
          'Presentación pública'
        ]
      }
    ]
  },
  {
    curso: 3,
    bloques: [
      {
        titulo: 'Técnica integrada',
        contenidos: [
          'Integración técnica-musical',
          'Control total del instrumento',
          'Recursos técnicos avanzados',
          'Resolución de problemas técnicos'
        ]
      },
      {
        titulo: 'Repertorio',
        contenidos: [
          'Repertorio avanzado',
          'Obras de concierto',
          'Música de cámara compleja',
          'Repertorio contemporáneo'
        ]
      },
      {
        titulo: 'Interpretación',
        contenidos: [
          'Criterio artístico personal',
          'Análisis e interpretación',
          'Autonomía total',
          'Preparación de recitales',
          'Comunicación artística avanzada'
        ]
      }
    ]
  },
  {
    curso: 4,
    bloques: [
      {
        titulo: 'Técnica avanzada aplicada',
        contenidos: [
          'Estudios Rose 40/32',
          'Técnica aplicada al repertorio',
          'Sonido, registro y color',
          'Convenciones estilísticas',
          'Lenguajes contemporáneos'
        ]
      },
      {
        titulo: 'Repertorio',
        contenidos: [
          'Repertorio de nivel medio-alto',
          'Obras de concierto',
          'Música de cámara',
          'Programas completos'
        ]
      },
      {
        titulo: 'Autonomía',
        contenidos: [
          'Lectura avanzada',
          'Autonomía total',
          'Proyecto interpretativo personal',
          'Construcción de programas'
        ]
      }
    ]
  },
  {
    curso: 5,
    bloques: [
      {
        titulo: 'Técnica avanzada',
        contenidos: [
          'Repertorio técnico avanzado',
          'Cavallini, Jeanjean',
          'Registro, articulación y color',
          'Recursos sonoros amplios'
        ]
      },
      {
        titulo: 'Repertorio',
        contenidos: [
          'Repertorio avanzado',
          'Solo y cámara',
          'Estilo y carácter',
          'Programas de concierto'
        ]
      },
      {
        titulo: 'Autonomía avanzada',
        contenidos: [
          'Autonomía total',
          'Resolución de problemas',
          'Planificación autónoma',
          'Construcción de programas'
        ]
      }
    ]
  },
  {
    curso: 6,
    bloques: [
      {
        titulo: 'Técnica integrada',
        contenidos: [
          'Jeanjean, Uhl',
          'Técnica al servicio de la música',
          'Construcción interpretativa',
          'Análisis y estilo'
        ]
      },
      {
        titulo: 'Repertorio',
        contenidos: [
          'Repertorio avanzado',
          'Escucha analítica',
          'Música de cámara',
          'Memoria, lectura, improvisación'
        ]
      },
      {
        titulo: 'Proyecto final',
        contenidos: [
          'Diagnóstico personal',
          'Proyecto interpretativo',
          'Programa final',
          'Comunicación artística',
          'Preparación para continuidad académica'
        ]
      }
    ]
  }
];

// ============================================================
// REPERTORIO ORIENTATIVO
// ============================================================

export interface RepertorioObra {
  id: string;
  compositor: string;
  obra: string;
  etapa: 'EE' | 'EP';
  curso: number;
  tipo: 'estudio' | 'obra' | 'cámara';
  categoria: 'orientativo' | 'pedagogico' | 'referencia';
}

export const repertorioOrientativo: RepertorioObra[] = [
  // EE1
  { id: 'REP-EE1-01', compositor: 'Méthode Rose', obra: 'Estudios iniciales', etapa: 'EE', curso: 1, tipo: 'estudio', categoria: 'pedagogico' },
  { id: 'REP-EE1-02', compositor: 'Varios', obra: 'Melodías sencillas', etapa: 'EE', curso: 1, tipo: 'obra', categoria: 'orientativo' },
  
  // EE2
  { id: 'REP-EE2-01', compositor: 'Méthode Rose', obra: 'Estudios de nivel medio', etapa: 'EE', curso: 2, tipo: 'estudio', categoria: 'pedagogico' },
  { id: 'REP-EE2-02', compositor: 'Varios', obra: 'Obras clásicas sencillas', etapa: 'EE', curso: 2, tipo: 'obra', categoria: 'orientativo' },
  
  // EE3
  { id: 'REP-EE3-01', compositor: 'Rose 32 Estudios', obra: 'Estudios seleccionados', etapa: 'EE', curso: 3, tipo: 'estudio', categoria: 'pedagogico' },
  { id: 'REP-EE3-02', compositor: 'Varios', obra: 'Obras de diferentes estilos', etapa: 'EE', curso: 3, tipo: 'obra', categoria: 'orientativo' },
  
  // EP1
  { id: 'REP-EP1-01', compositor: 'Rose 40 Estudios', obra: 'Estudios seleccionados', etapa: 'EP', curso: 1, tipo: 'estudio', categoria: 'pedagogico' },
  { id: 'REP-EP1-02', compositor: 'Varios', obra: 'Obras clásicas y románticas', etapa: 'EP', curso: 1, tipo: 'obra', categoria: 'orientativo' },
  
  // EP2
  { id: 'REP-EP2-01', compositor: 'Cavallini', obra: 'Estudios y obras', etapa: 'EP', curso: 2, tipo: 'estudio', categoria: 'referencia' },
  { id: 'REP-EP2-02', compositor: 'Jeanjean', obra: 'Estudios', etapa: 'EP', curso: 2, tipo: 'estudio', categoria: 'pedagogico' },
  
  // EP3-6
  { id: 'REP-EP3-01', compositor: 'Jeanjean', obra: 'Méthode complète', etapa: 'EP', curso: 3, tipo: 'estudio', categoria: 'pedagogico' },
  { id: 'REP-EP4-01', compositor: 'Uhl', obra: '48 Estudios', etapa: 'EP', curso: 4, tipo: 'estudio', categoria: 'pedagogico' },
  { id: 'REP-EP5-01', compositor: 'Rose 40 Estudios', obra: 'Estudios completos', etapa: 'EP', curso: 5, tipo: 'estudio', categoria: 'pedagogico' },
  { id: 'REP-EP6-01', compositor: 'Varios', obra: 'Repertorio de concierto', etapa: 'EP', curso: 6, tipo: 'obra', categoria: 'referencia' }
];
