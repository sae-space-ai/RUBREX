export interface Rubric {
  codigo: string;
  tipo: string;
  criterio: string;
  particularizacion: string;
  L4: string;
  L3: string;
  L2: string;
  L1: string;
}

export interface UD {
  id: string;
  titulo: string;
  evidencia?: string;
  rubricas: Rubric[];
}

export interface Bloque {
  id: string;
  nombre: string;
  curso: string;
  uds: UD[];
}

export interface MaestraRubric {
  id: string;
  nombre: string;
  L4: string;
  L3: string;
  L2: string;
  L1: string;
}

export const escalaComun = [
  { nivel: 'L4', denominacion: 'Consolidado', descriptor: 'Ejecución estable, consciente, autónoma y transferible. Identifica dificultades, decide y justifica.' },
  { nivel: 'L3', denominacion: 'Adecuado', descriptor: 'Ejecución correcta con incidencias puntuales que no comprometen el resultado.' },
  { nivel: 'L2', denominacion: 'En desarrollo', descriptor: 'Progreso observable; necesita apoyo, repetición o modelado.' },
  { nivel: 'L1', denominacion: 'Inicial', descriptor: 'Dificultades relevantes; requiere guía sistemática y fragmentación.' },
];

export const tiposRubrica = [
  { codigo: 'RT', tipo: 'Rúbrica técnica', funcion: 'Evalúa respiración, emisión, digitación, articulación, mecanismo.' },
  { codigo: 'RI', tipo: 'Rúbrica interpretativa', funcion: 'Evalúa fraseo, estilo, dinámica, color, comunicación.' },
  { codigo: 'RA', tipo: 'Rúbrica actitudinal', funcion: 'Evalúa hábitos, autonomía, constancia, escucha.' },
  { codigo: 'RE', tipo: 'Rúbrica de evidencia específica', funcion: 'Evalúa una evidencia concreta (EV-XX).' },
  { codigo: 'RC', tipo: 'Rúbrica de criterio', funcion: 'Evalúa un criterio operativo concreto.' },
];

export const rubricasMaestrasEP: MaestraRubric[] = [
  { id: 'R-MAESTRA-CE-01', nombre: 'Esfuerzo muscular, respiración y relajación', L4: 'Gestiona con precisión el esfuerzo muscular, la respiración y la relajación en todo tipo de ejecución, incluso en pasajes de alta exigencia.', L3: 'Utiliza adecuadamente el esfuerzo, la respiración y la relajación, con alguna tensión puntual corregible.', L2: 'Aplica los principios básicos, pero aparecen tensiones o descoordinaciones que afectan a la ejecución.', L1: 'No controla el esfuerzo ni la respiración; tensión evidente y necesidad de guía constante.' },
  { id: 'R-MAESTRA-CE-02', nombre: 'Dominio técnico-musical en estudios y obras', L4: 'Integra con solvencia técnica y musicalidad en estudios y obras de diversa dificultad, con control total.', L3: 'Integra técnica y musicalidad con corrección, con alguna imprecisión aislada.', L2: 'Ejecuta con dificultades técnicas que interfieren en la musicalidad.', L1: 'La técnica impide la expresión musical; ejecución fragmentada.' },
  { id: 'R-MAESTRA-CE-03', nombre: 'Sensibilidad auditiva y afinación', L4: 'Afina con precisión en todo el registro y usa las posibilidades sonoras del instrumento con criterio.', L3: 'Afina correctamente, con desviaciones mínimas y control sonoro adecuado.', L2: 'Afinación irregular; necesita referencia externa para corregir.', L1: 'Afinación imprecisa; no percibe desviaciones sin ayuda.' },
  { id: 'R-MAESTRA-CE-04', nombre: 'Estudio autónomo del repertorio', L4: 'Planifica, ejecuta y evalúa el estudio del repertorio con autonomía total.', L3: 'Estudia con autonomía, aunque necesita orientación puntual.', L2: 'Estudia con apoyo frecuente; no planifica por sí mismo.', L1: 'No estudia de forma autónoma; depende del docente en todo momento.' },
  { id: 'R-MAESTRA-CE-05', nombre: 'Lectura a primera vista e improvisación', L4: 'Lee a primera vista con fluidez y improvisa con soltura sobre estructuras dadas.', L3: 'Lee con corrección y improvisa con recursos básicos adecuados.', L2: 'Lee con errores que interrumpen el discurso; improvisación muy guiada.', L1: 'Lectura fragmentada; improvisación inexistente o bloqueada.' },
  { id: 'R-MAESTRA-CE-06', nombre: 'Interpretación de obras de distintas épocas y estilos', L4: 'Interpreta con estilo propio y adecuación histórica obras de distintas épocas, como solista y en grupo.', L3: 'Interpreta correctamente distintas épocas, con estilo reconocible.', L2: 'Interpreta con dificultades estilísticas; tendencia a un estilo único.', L1: 'No diferencia estilos; interpretación uniforme.' },
  { id: 'R-MAESTRA-CE-07', nombre: 'Interpretación de memoria', L4: 'Interpreta de memoria con seguridad, expresividad y fidelidad estilística.', L3: 'Interpreta de memoria con pequeñas inseguridades.', L2: 'Memoriza con apoyo; olvidos que afectan a la continuidad.', L1: 'No logra interpretar de memoria sin partitura.' },
  { id: 'R-MAESTRA-CE-08', nombre: 'Autonomía interpretativa', L4: 'Decide con criterio dentro de los márgenes del texto musical y justifica sus opciones.', L3: 'Toma decisiones interpretativas adecuadas con supervisión mínima.', L2: 'Reproduce sin decidir; necesita indicaciones constantes.', L1: 'No muestra iniciativa interpretativa.' },
  { id: 'R-MAESTRA-CE-09', nombre: 'Resolución de problemas técnicos e interpretativos', L4: 'Identifica, analiza y resuelve autónomamente problemas técnicos e interpretativos.', L3: 'Resuelve problemas con estrategias adecuadas y apoyo puntual.', L2: 'Detecta problemas, pero no encuentra soluciones sin ayuda.', L1: 'No detecta ni resuelve problemas.' },
  { id: 'R-MAESTRA-CE-10', nombre: 'Presentación pública y comunicación artística', L4: 'Presenta públicamente con seguridad, comunicación artística y calidad sobresaliente.', L3: 'Presenta con seguridad y comunicación adecuada.', L2: 'Presenta con nerviosismo que afecta a la ejecución.', L1: 'No logra presentarse públicamente con mínimo control.' },
];

export const rubricasMaestrasEE: MaestraRubric[] = [
  { id: 'R-MAESTRA-CE-EE1', nombre: 'Postura y utilización del instrumento', L4: 'Adopta postura funcional y utiliza el instrumento con naturalidad y eficacia.', L3: 'Postura correcta con ajustes puntuales.', L2: 'Postura mejorable; tensiones o mal apoyo.', L1: 'Postura inadecuada que dificulta la emisión.' },
  { id: 'R-MAESTRA-CE-EE2', nombre: 'Emisión y control del aire', L4: 'Emite con sonido estable, controla el aire y mantiene calidad en todo el registro trabajado.', L3: 'Emisión correcta con pequeñas irregularidades.', L2: 'Emisión inestable; requiere corrección frecuente.', L1: 'Emisión dificultosa; sonido inestable.' },
  { id: 'R-MAESTRA-CE-EE3', nombre: 'Digitación y coordinación', L4: 'Digita con precisión y coordina lengua, aire y dedos con fluidez.', L3: 'Digitación correcta con alguna imprecisión.', L2: 'Digitación con errores que interrumpen el discurso.', L1: 'Digitación insegura; no coordina.' },
  { id: 'R-MAESTRA-CE-EE4', nombre: 'Lectura y pulso', L4: 'Lee con fluidez y mantiene pulso regular y preciso.', L3: 'Lee correctamente con pequeñas irregularidades rítmicas.', L2: 'Lee con errores; pulso inestable.', L1: 'Lectura fragmentada; no mantiene pulso.' },
  { id: 'R-MAESTRA-CE-EE5', nombre: 'Fraseo y expresión', L4: 'Frasea con intención musical y aplica dinámicas y articulaciones con criterio.', L3: 'Frasea adecuadamente con dinámicas básicas.', L2: 'Fraseo irregular; dinámicas limitadas.', L1: 'No frasea; ejecución plana.' },
  { id: 'R-MAESTRA-CE-EE6', nombre: 'Memoria y conjunto', L4: 'Memoriza estructuras y se integra en el conjunto con escucha activa y ajuste.', L3: 'Memoriza y toca en conjunto con corrección.', L2: 'Memoriza con apoyo; conjunto con desajustes.', L1: 'No memoriza; no se ajusta al conjunto.' },
  { id: 'R-MAESTRA-CE-EE7', nombre: 'Hábitos de estudio y autonomía', L4: 'Planifica y mantiene hábitos de estudio autónomos y eficaces.', L3: 'Estudia con regularidad y autonomía básica.', L2: 'Estudia de forma irregular; necesita recordatorios.', L1: 'No estudia; depende totalmente del docente.' },
];

export const bloques: Bloque[] = [
  {
    id: 'EE1',
    nombre: 'Primer Curso de Enseñanzas Elementales',
    curso: 'EE1',
    uds: [
      {
        id: 'EE1-UD01',
        titulo: 'El clarinete: cuerpo, instrumento y sonido',
        evidencia: 'EV-EE1-01 (vídeo/presencial: montaje + emisión + fragmento)',
        rubricas: [
          { codigo: 'R-EE1-UD01-01', tipo: 'RT', criterio: 'CE-EE1', particularizacion: 'Postura', L4: 'Funcional y natural', L3: 'Correcta', L2: 'Tensiones', L1: 'Inadecuada' },
          { codigo: 'R-EE1-UD01-02', tipo: 'RT', criterio: 'CE-EE2', particularizacion: 'Emisión', L4: 'Sonido estable', L3: 'Correcto', L2: 'Inestable', L1: 'Dificultoso' },
          { codigo: 'R-EE1-UD01-03', tipo: 'RT', criterio: 'CE-EE3', particularizacion: 'Montaje', L4: 'Autónomo y correcto', L3: 'Correcto con ayuda', L2: 'Errores', L1: 'No monta' },
          { codigo: 'R-EE1-UD01-04', tipo: 'RT', criterio: 'CE-EE2', particularizacion: 'Respiración', L4: 'Control diafragmático', L3: 'Adecuado', L2: 'Superficial', L1: 'No controla' },
          { codigo: 'R-EE1-UD01-05', tipo: 'RT', criterio: 'CE-EE1', particularizacion: 'Cuidado del instrumento', L4: 'Limpieza y conservación autónoma', L3: 'Correcta', L2: 'Descuidos', L1: 'No cuida' },
          { codigo: 'R-EE1-UD01-06', tipo: 'RI', criterio: 'CE-EE5', particularizacion: 'Primer sonido', L4: 'Estable y afinado', L3: 'Correcto', L2: 'Inestable', L1: 'No suena' },
          { codigo: 'R-EE1-UD01-07', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Hábitos', L4: 'Autónomo', L3: 'Regular', L2: 'Irregular', L1: 'Nulo' },
          { codigo: 'R-EE1-UD01-08', tipo: 'RC', criterio: 'CE-EE1', particularizacion: 'Posición de manos', L4: 'Natural', L3: 'Correcta', L2: 'Tensa', L1: 'Incorrecta' },
          { codigo: 'R-EE1-UD01-09', tipo: 'RC', criterio: 'CE-EE2', particularizacion: 'Colocación de embocadura', L4: 'Precisa', L3: 'Adecuada', L2: 'Imprecisa', L1: 'Incorrecta' },
          { codigo: 'R-EE1-UD01-10', tipo: 'RC', criterio: 'CE-EE3', particularizacion: 'Coordinación inicial', L4: 'Fluida', L3: 'Correcta', L2: 'Descoordinada', L1: 'Nula' },
          { codigo: 'R-EE1-UD01-11', tipo: 'RE', criterio: 'EV-EE1-01', particularizacion: 'Ejecución global', L4: 'Integra todo', L3: 'Correcto', L2: 'Parcial', L1: 'No logra' },
          { codigo: 'R-EE1-UD01-12', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Actitud', L4: 'Motivado y atento', L3: 'Correcto', L2: 'Disperso', L1: 'Pasivo' },
          { codigo: 'R-EE1-UD01-13', tipo: 'RC', criterio: 'CE-EE1', particularizacion: 'Relajación', L4: 'Consciente', L3: 'Básica', L2: 'Tensa', L1: 'No relaja' },
          { codigo: 'R-EE1-UD01-14', tipo: 'RE', criterio: 'EV-EE1-01', particularizacion: 'Autoevaluación', L4: 'Reflexiona y corrige', L3: 'Identifica', L2: 'Con ayuda', L1: 'No evalúa' },
        ],
      },
      {
        id: 'EE1-UD02',
        titulo: 'Respirar, emitir y articular',
        evidencia: 'EV-EE1-02',
        rubricas: [
          { codigo: 'R-EE1-UD02-01', tipo: 'RT', criterio: 'CE-EE2', particularizacion: 'Respiración', L4: 'Control avanzado', L3: 'Adecuado', L2: 'Superficial', L1: 'Nulo' },
          { codigo: 'R-EE1-UD02-02', tipo: 'RT', criterio: 'CE-EE2', particularizacion: 'Ataque', L4: 'Preciso', L3: 'Correcto', L2: 'Impreciso', L1: 'Incorrecto' },
          { codigo: 'R-EE1-UD02-03', tipo: 'RT', criterio: 'CE-EE3', particularizacion: 'Legato', L4: 'Fluido', L3: 'Correcto', L2: 'Irregular', L1: 'No logra' },
          { codigo: 'R-EE1-UD02-04', tipo: 'RT', criterio: 'CE-EE3', particularizacion: 'Staccato inicial', L4: 'Claro y controlado', L3: 'Correcto', L2: 'Irregular', L1: 'No logra' },
          { codigo: 'R-EE1-UD02-05', tipo: 'RT', criterio: 'CE-EE3', particularizacion: 'Coordinación lengua-aire-dedos', L4: 'Fluida', L3: 'Correcta', L2: 'Descoordinada', L1: 'Nula' },
          { codigo: 'R-EE1-UD02-06', tipo: 'RI', criterio: 'CE-EE5', particularizacion: 'Fraseo con articulaciones', L4: 'Expresivo', L3: 'Correcto', L2: 'Plano', L1: 'Nulo' },
          { codigo: 'R-EE1-UD02-07', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Constancia', L4: 'Diaria', L3: 'Regular', L2: 'Irregular', L1: 'Nula' },
          { codigo: 'R-EE1-UD02-08', tipo: 'RC', criterio: 'CE-EE2', particularizacion: 'Sonido estable', L4: 'Estable todo el registro', L3: 'Estable', L2: 'Inestable', L1: 'No estable' },
          { codigo: 'R-EE1-UD02-09', tipo: 'RC', criterio: 'CE-EE3', particularizacion: 'Cambio de articulación', L4: 'Inmediato', L3: 'Correcto', L2: 'Lento', L1: 'No cambia' },
          { codigo: 'R-EE1-UD02-10', tipo: 'RE', criterio: 'EV-EE1-02', particularizacion: 'Escalas/frases', L4: 'Integra', L3: 'Correcto', L2: 'Parcial', L1: 'No logra' },
          { codigo: 'R-EE1-UD02-11', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Escucha', L4: 'Activa', L3: 'Correcta', L2: 'Pasiva', L1: 'Nula' },
          { codigo: 'R-EE1-UD02-12', tipo: 'RC', criterio: 'CE-EE1', particularizacion: 'Postura al articular', L4: 'Funcional', L3: 'Correcta', L2: 'Tensa', L1: 'Incorrecta' },
          { codigo: 'R-EE1-UD02-13', tipo: 'RE', criterio: 'EV-EE1-02', particularizacion: 'Autoevaluación', L4: 'Reflexiva', L3: 'Correcta', L2: 'Con ayuda', L1: 'Nula' },
          { codigo: 'R-EE1-UD02-14', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Interés', L4: 'Alto', L3: 'Correcto', L2: 'Bajo', L1: 'Nulo' },
        ],
      },
      {
        id: 'EE1-UD03',
        titulo: 'Primeras escalas y primera lectura',
        evidencia: 'EV-EE1-03',
        rubricas: [
          { codigo: 'R-EE1-UD03-01', tipo: 'RT', criterio: 'CE-EE3', particularizacion: 'Digitación', L4: 'Precisa', L3: 'Correcta', L2: 'Imprecisa', L1: 'Incorrecta' },
          { codigo: 'R-EE1-UD03-02', tipo: 'RT', criterio: 'CE-EE3', particularizacion: 'Escalas iniciales', L4: 'Fluidas', L3: 'Correctas', L2: 'Lentas', L1: 'No logra' },
          { codigo: 'R-EE1-UD03-03', tipo: 'RT', criterio: 'CE-EE3', particularizacion: 'Arpegios', L4: 'Fluidos', L3: 'Correctos', L2: 'Irregulares', L1: 'No logra' },
          { codigo: 'R-EE1-UD03-04', tipo: 'RT', criterio: 'CE-EE4', particularizacion: 'Lectura', L4: 'Fluida', L3: 'Correcta', L2: 'Fragmentada', L1: 'Nula' },
          { codigo: 'R-EE1-UD03-05', tipo: 'RT', criterio: 'CE-EE4', particularizacion: 'Pulso', L4: 'Regular y preciso', L3: 'Regular', L2: 'Inestable', L1: 'Nulo' },
          { codigo: 'R-EE1-UD03-06', tipo: 'RI', criterio: 'CE-EE5', particularizacion: 'Dinámica', L4: 'Aplicada con criterio', L3: 'Básica', L2: 'Limitada', L1: 'Nula' },
          { codigo: 'R-EE1-UD03-07', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Estudio', L4: 'Planificado', L3: 'Regular', L2: 'Irregular', L1: 'Nulo' },
          { codigo: 'R-EE1-UD03-08', tipo: 'RC', criterio: 'CE-EE3', particularizacion: 'Coordinación lectura-digitación', L4: 'Fluida', L3: 'Correcta', L2: 'Lenta', L1: 'Nula' },
          { codigo: 'R-EE1-UD03-09', tipo: 'RE', criterio: 'EV-EE1-03', particularizacion: 'Lectura preparada', L4: 'Excelente', L3: 'Correcta', L2: 'Parcial', L1: 'Nula' },
          { codigo: 'R-EE1-UD03-10', tipo: 'RE', criterio: 'EV-EE1-03', particularizacion: 'Lectura inmediata', L4: 'Fluida', L3: 'Correcta', L2: 'Fragmentada', L1: 'Nula' },
          { codigo: 'R-EE1-UD03-11', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Autonomía', L4: 'Total', L3: 'Básica', L2: 'Escasa', L1: 'Nula' },
          { codigo: 'R-EE1-UD03-12', tipo: 'RC', criterio: 'CE-EE4', particularizacion: 'Precisión rítmica', L4: 'Exacta', L3: 'Correcta', L2: 'Imprecisa', L1: 'Nula' },
          { codigo: 'R-EE1-UD03-13', tipo: 'RE', criterio: 'EV-EE1-03', particularizacion: 'Autoevaluación', L4: 'Reflexiva', L3: 'Correcta', L2: 'Con ayuda', L1: 'Nula' },
          { codigo: 'R-EE1-UD03-14', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Actitud', L4: 'Positiva', L3: 'Correcta', L2: 'Pasiva', L1: 'Negativa' },
        ],
      },
      {
        id: 'EE1-UD04',
        titulo: 'Fraseo, dinámica y expresión',
        evidencia: 'EV-EE1-04',
        rubricas: [
          { codigo: 'R-EE1-UD04-01', tipo: 'RI', criterio: 'CE-EE5', particularizacion: 'Fraseo', L4: 'Expresivo', L3: 'Correcto', L2: 'Plano', L1: 'Nulo' },
          { codigo: 'R-EE1-UD04-02', tipo: 'RI', criterio: 'CE-EE5', particularizacion: 'Dinámicas', L4: 'Contrastadas', L3: 'Básicas', L2: 'Limitadas', L1: 'Nulas' },
          { codigo: 'R-EE1-UD04-03', tipo: 'RI', criterio: 'CE-EE5', particularizacion: 'Respiración musical', L4: 'Integrada', L3: 'Correcta', L2: 'Irregular', L1: 'Nula' },
          { codigo: 'R-EE1-UD04-04', tipo: 'RI', criterio: 'CE-EE5', particularizacion: 'Articulación expresiva', L4: 'Matizada', L3: 'Correcta', L2: 'Uniforme', L1: 'Nula' },
          { codigo: 'R-EE1-UD04-05', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Escucha comparada', L4: 'Analítica', L3: 'Correcta', L2: 'Pasiva', L1: 'Nula' },
          { codigo: 'R-EE1-UD04-06', tipo: 'RE', criterio: 'EV-EE1-04', particularizacion: 'Interpretación expresiva', L4: 'Excelente', L3: 'Correcta', L2: 'Parcial', L1: 'Nula' },
          { codigo: 'R-EE1-UD04-07', tipo: 'RC', criterio: 'CE-EE2', particularizacion: 'Control del aire en frases', L4: 'Estable', L3: 'Correcto', L2: 'Irregular', L1: 'Nulo' },
          { codigo: 'R-EE1-UD04-08', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Autoevaluación', L4: 'Reflexiva', L3: 'Correcta', L2: 'Con ayuda', L1: 'Nula' },
          { codigo: 'R-EE1-UD04-09', tipo: 'RC', criterio: 'CE-EE5', particularizacion: 'Carácter', L4: 'Definido', L3: 'Reconocible', L2: 'Difuso', L1: 'Nulo' },
          { codigo: 'R-EE1-UD04-10', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Interés', L4: 'Alto', L3: 'Correcto', L2: 'Bajo', L1: 'Nulo' },
          { codigo: 'R-EE1-UD04-11', tipo: 'RC', criterio: 'CE-EE1', particularizacion: 'Postura expresiva', L4: 'Natural', L3: 'Correcta', L2: 'Tensa', L1: 'Incorrecta' },
          { codigo: 'R-EE1-UD04-12', tipo: 'RE', criterio: 'EV-EE1-04', particularizacion: 'Comunicación', L4: 'Conecta', L3: 'Correcta', L2: 'Limitada', L1: 'Nula' },
          { codigo: 'R-EE1-UD04-13', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Constancia', L4: 'Diaria', L3: 'Regular', L2: 'Irregular', L1: 'Nula' },
          { codigo: 'R-EE1-UD04-14', tipo: 'RC', criterio: 'CE-EE5', particularizacion: 'Matices', L4: 'Ricos', L3: 'Básicos', L2: 'Escasos', L1: 'Nulos' },
        ],
      },
      {
        id: 'EE1-UD05',
        titulo: 'Memoria, lectura y conjunto',
        evidencia: 'EV-EE1-05',
        rubricas: [
          { codigo: 'R-EE1-UD05-01', tipo: 'RT', criterio: 'CE-EE6', particularizacion: 'Memoria', L4: 'Segura', L3: 'Correcta', L2: 'Con apoyo', L1: 'Nula' },
          { codigo: 'R-EE1-UD05-02', tipo: 'RT', criterio: 'CE-EE4', particularizacion: 'Lectura', L4: 'Fluida', L3: 'Correcta', L2: 'Fragmentada', L1: 'Nula' },
          { codigo: 'R-EE1-UD05-03', tipo: 'RT', criterio: 'CE-EE6', particularizacion: 'Conjunto', L4: 'Integrado', L3: 'Correcto', L2: 'Desajustado', L1: 'Nulo' },
          { codigo: 'R-EE1-UD05-04', tipo: 'RT', criterio: 'CE-EE6', particularizacion: 'Afinación en conjunto', L4: 'Precisa', L3: 'Correcta', L2: 'Imprecisa', L1: 'Nula' },
          { codigo: 'R-EE1-UD05-05', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Escucha al compañero', L4: 'Activa', L3: 'Correcta', L2: 'Pasiva', L1: 'Nula' },
          { codigo: 'R-EE1-UD05-06', tipo: 'RE', criterio: 'EV-EE1-05', particularizacion: 'Interpretación conjunta', L4: 'Excelente', L3: 'Correcta', L2: 'Parcial', L1: 'Nula' },
          { codigo: 'R-EE1-UD05-07', tipo: 'RC', criterio: 'CE-EE6', particularizacion: 'Ajuste rítmico', L4: 'Preciso', L3: 'Correcto', L2: 'Irregular', L1: 'Nulo' },
          { codigo: 'R-EE1-UD05-08', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Autonomía', L4: 'Total', L3: 'Básica', L2: 'Escasa', L1: 'Nula' },
          { codigo: 'R-EE1-UD05-09', tipo: 'RC', criterio: 'CE-EE4', particularizacion: 'Pulso en conjunto', L4: 'Estable', L3: 'Correcto', L2: 'Inestable', L1: 'Nulo' },
          { codigo: 'R-EE1-UD05-10', tipo: 'RE', criterio: 'EV-EE1-05', particularizacion: 'Autoevaluación', L4: 'Reflexiva', L3: 'Correcta', L2: 'Con ayuda', L1: 'Nula' },
          { codigo: 'R-EE1-UD05-11', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Colaboración', L4: 'Activa', L3: 'Correcta', L2: 'Pasiva', L1: 'Nula' },
          { codigo: 'R-EE1-UD05-12', tipo: 'RC', criterio: 'CE-EE6', particularizacion: 'Equilibrio sonoro', L4: 'Ajustado', L3: 'Correcto', L2: 'Desequilibrado', L1: 'Nulo' },
          { codigo: 'R-EE1-UD05-13', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Actitud', L4: 'Positiva', L3: 'Correcta', L2: 'Pasiva', L1: 'Negativa' },
          { codigo: 'R-EE1-UD05-14', tipo: 'RE', criterio: 'EV-EE1-05', particularizacion: 'Resultado global', L4: 'Sobresaliente', L3: 'Correcto', L2: 'Parcial', L1: 'Nulo' },
        ],
      },
      {
        id: 'EE1-UD06',
        titulo: 'Primera presentación musical',
        evidencia: 'EV-EE1-06',
        rubricas: [
          { codigo: 'R-EE1-UD06-01', tipo: 'RI', criterio: 'CE-EE5', particularizacion: 'Interpretación global', L4: 'Expresiva y segura', L3: 'Correcta', L2: 'Insegura', L1: 'Nula' },
          { codigo: 'R-EE1-UD06-02', tipo: 'RT', criterio: 'CE-EE2', particularizacion: 'Control técnico', L4: 'Estable', L3: 'Correcto', L2: 'Irregular', L1: 'Nulo' },
          { codigo: 'R-EE1-UD06-03', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Autocontrol', L4: 'Total', L3: 'Adecuado', L2: 'Limitado', L1: 'Nulo' },
          { codigo: 'R-EE1-UD06-04', tipo: 'RE', criterio: 'EV-EE1-06', particularizacion: 'Actuación final', L4: 'Sobresaliente', L3: 'Correcta', L2: 'Parcial', L1: 'Nula' },
          { codigo: 'R-EE1-UD06-05', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Autoevaluación', L4: 'Reflexiva', L3: 'Correcta', L2: 'Con ayuda', L1: 'Nula' },
          { codigo: 'R-EE1-UD06-06', tipo: 'RI', criterio: 'CE-EE5', particularizacion: 'Comunicación', L4: 'Conecta', L3: 'Correcta', L2: 'Limitada', L1: 'Nula' },
          { codigo: 'R-EE1-UD06-07', tipo: 'RC', criterio: 'CE-EE1', particularizacion: 'Postura en público', L4: 'Natural', L3: 'Correcta', L2: 'Tensa', L1: 'Incorrecta' },
          { codigo: 'R-EE1-UD06-08', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Gestión del nerviosismo', L4: 'Controla', L3: 'Maneja', L2: 'Afecta', L1: 'Bloquea' },
          { codigo: 'R-EE1-UD06-09', tipo: 'RC', criterio: 'CE-EE2', particularizacion: 'Sonido en público', L4: 'Estable', L3: 'Correcto', L2: 'Inestable', L1: 'Nulo' },
          { codigo: 'R-EE1-UD06-10', tipo: 'RE', criterio: 'EV-EE1-06', particularizacion: 'Programa', L4: 'Completo', L3: 'Correcto', L2: 'Parcial', L1: 'Nulo' },
          { codigo: 'R-EE1-UD06-11', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Valoración del trabajo', L4: 'Consciente', L3: 'Correcta', L2: 'Escasa', L1: 'Nula' },
          { codigo: 'R-EE1-UD06-12', tipo: 'RC', criterio: 'CE-EE5', particularizacion: 'Expresividad', L4: 'Rica', L3: 'Correcta', L2: 'Plana', L1: 'Nula' },
          { codigo: 'R-EE1-UD06-13', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Actitud ante el público', L4: 'Positiva', L3: 'Correcta', L2: 'Pasiva', L1: 'Negativa' },
          { codigo: 'R-EE1-UD06-14', tipo: 'RE', criterio: 'EV-EE1-06', particularizacion: 'Informe final', L4: 'Completo', L3: 'Correcto', L2: 'Parcial', L1: 'Nulo' },
        ],
      },
    ],
  },
  {
    id: 'EE2',
    nombre: 'Segundo Curso de Enseñanzas Elementales',
    curso: 'EE2',
    uds: [
      {
        id: 'EE2-UD01',
        titulo: 'Consolidación del sonido y la respiración',
        evidencia: 'EV-EE2-01',
        rubricas: [
          { codigo: 'R-EE2-UD01-01', tipo: 'RT', criterio: 'CE-EE1', particularizacion: 'Postura consolidada', L4: 'Estable', L3: 'Correcta', L2: 'Mejorable', L1: 'Incorrecta' },
          { codigo: 'R-EE2-UD01-02', tipo: 'RT', criterio: 'CE-EE2', particularizacion: 'Respiración', L4: 'Control avanzado', L3: 'Adecuado', L2: 'Superficial', L1: 'Nulo' },
          { codigo: 'R-EE2-UD01-03', tipo: 'RT', criterio: 'CE-EE2', particularizacion: 'Sonido estable', L4: 'Estable todo el registro', L3: 'Estable', L2: 'Inestable', L1: 'Nulo' },
          { codigo: 'R-EE2-UD01-04', tipo: 'RT', criterio: 'CE-EE3', particularizacion: 'Afinación', L4: 'Precisa', L3: 'Correcta', L2: 'Imprecisa', L1: 'Nula' },
          { codigo: 'R-EE2-UD01-05', tipo: 'RT', criterio: 'CE-EE3', particularizacion: 'Registro funcional', L4: 'Amplio', L3: 'Correcto', L2: 'Limitado', L1: 'Nulo' },
          { codigo: 'R-EE2-UD01-06', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Hábitos', L4: 'Autónomos', L3: 'Regulares', L2: 'Irregulares', L1: 'Nulos' },
          { codigo: 'R-EE2-UD01-07', tipo: 'RE', criterio: 'EV-EE2-01', particularizacion: 'Evidencia', L4: 'Excelente', L3: 'Correcta', L2: 'Parcial', L1: 'Nula' },
          { codigo: 'R-EE2-UD01-08', tipo: 'RC', criterio: 'CE-EE2', particularizacion: 'Columna de aire', L4: 'Óptima', L3: 'Correcta', L2: 'Débil', L1: 'Nula' },
          { codigo: 'R-EE2-UD01-09', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Autoevaluación', L4: 'Reflexiva', L3: 'Correcta', L2: 'Con ayuda', L1: 'Nula' },
          { codigo: 'R-EE2-UD01-10', tipo: 'RC', criterio: 'CE-EE1', particularizacion: 'Relajación', L4: 'Consciente', L3: 'Básica', L2: 'Tensa', L1: 'Nula' },
          { codigo: 'R-EE2-UD01-11', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Constancia', L4: 'Diaria', L3: 'Regular', L2: 'Irregular', L1: 'Nula' },
          { codigo: 'R-EE2-UD01-12', tipo: 'RC', criterio: 'CE-EE3', particularizacion: 'Estabilidad sonora', L4: 'Total', L3: 'Correcta', L2: 'Irregular', L1: 'Nula' },
          { codigo: 'R-EE2-UD01-13', tipo: 'RE', criterio: 'EV-EE2-01', particularizacion: 'Resultado global', L4: 'Sobresaliente', L3: 'Correcto', L2: 'Parcial', L1: 'Nulo' },
          { codigo: 'R-EE2-UD01-14', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Interés', L4: 'Alto', L3: 'Correcto', L2: 'Bajo', L1: 'Nulo' },
        ],
      },
      {
        id: 'EE2-UD02',
        titulo: 'Articulación y mecanismo',
        evidencia: 'EV-EE2-02',
        rubricas: [
          { codigo: 'R-EE2-UD02-01', tipo: 'RT', criterio: 'CE-EE3', particularizacion: 'Legato', L4: 'Fluido', L3: 'Correcto', L2: 'Irregular', L1: 'Nulo' },
          { codigo: 'R-EE2-UD02-02', tipo: 'RT', criterio: 'CE-EE3', particularizacion: 'Staccato', L4: 'Claro', L3: 'Correcto', L2: 'Irregular', L1: 'Nulo' },
          { codigo: 'R-EE2-UD02-03', tipo: 'RT', criterio: 'CE-EE3', particularizacion: 'Articulación cromática', L4: 'Precisa', L3: 'Correcta', L2: 'Imprecisa', L1: 'Nula' },
          { codigo: 'R-EE2-UD02-04', tipo: 'RT', criterio: 'CE-EE3', particularizacion: 'Coordinación digital', L4: 'Fluida', L3: 'Correcta', L2: 'Lenta', L1: 'Nula' },
          { codigo: 'R-EE2-UD02-05', tipo: 'RT', criterio: 'CE-EE4', particularizacion: 'Regularidad', L4: 'Perfecta', L3: 'Correcta', L2: 'Irregular', L1: 'Nula' },
          { codigo: 'R-EE2-UD02-06', tipo: 'RE', criterio: 'EV-EE2-02', particularizacion: 'Articulaciones contrastantes', L4: 'Excelente', L3: 'Correcta', L2: 'Parcial', L1: 'Nula' },
          { codigo: 'R-EE2-UD02-07', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Estudio', L4: 'Planificado', L3: 'Regular', L2: 'Irregular', L1: 'Nulo' },
          { codigo: 'R-EE2-UD02-08', tipo: 'RC', criterio: 'CE-EE2', particularizacion: 'Control del aire en articulación', L4: 'Estable', L3: 'Correcto', L2: 'Irregular', L1: 'Nulo' },
          { codigo: 'R-EE2-UD02-09', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Autoevaluación', L4: 'Reflexiva', L3: 'Correcta', L2: 'Con ayuda', L1: 'Nula' },
          { codigo: 'R-EE2-UD02-10', tipo: 'RC', criterio: 'CE-EE3', particularizacion: 'Velocidad inicial', L4: 'Fluida', L3: 'Correcta', L2: 'Lenta', L1: 'Nula' },
          { codigo: 'R-EE2-UD02-11', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Constancia', L4: 'Diaria', L3: 'Regular', L2: 'Irregular', L1: 'Nula' },
          { codigo: 'R-EE2-UD02-12', tipo: 'RC', criterio: 'CE-EE1', particularizacion: 'Postura en mecanismo', L4: 'Funcional', L3: 'Correcta', L2: 'Tensa', L1: 'Incorrecta' },
          { codigo: 'R-EE2-UD02-13', tipo: 'RE', criterio: 'EV-EE2-02', particularizacion: 'Resultado global', L4: 'Sobresaliente', L3: 'Correcto', L2: 'Parcial', L1: 'Nulo' },
          { codigo: 'R-EE2-UD02-14', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Interés', L4: 'Alto', L3: 'Correcto', L2: 'Bajo', L1: 'Nulo' },
        ],
      },
      {
        id: 'EE2-UD03',
        titulo: 'Escalas, arpegios y lectura',
        evidencia: 'EV-EE2-03',
        rubricas: [
          { codigo: 'R-EE2-UD03-01', tipo: 'RT', criterio: 'CE-EE3', particularizacion: 'Escalas mayores', L4: 'Fluidas', L3: 'Correctas', L2: 'Lentas', L1: 'Nulas' },
          { codigo: 'R-EE2-UD03-02', tipo: 'RT', criterio: 'CE-EE3', particularizacion: 'Arpegios', L4: 'Fluidos', L3: 'Correctos', L2: 'Irregulares', L1: 'Nulos' },
          { codigo: 'R-EE2-UD03-03', tipo: 'RT', criterio: 'CE-EE4', particularizacion: 'Lectura a primera vista', L4: 'Fluida', L3: 'Correcta', L2: 'Fragmentada', L1: 'Nula' },
          { codigo: 'R-EE2-UD03-04', tipo: 'RT', criterio: 'CE-EE4', particularizacion: 'Estructuras sencillas', L4: 'Comprende', L3: 'Correcto', L2: 'Parcial', L1: 'Nulo' },
          { codigo: 'R-EE2-UD03-05', tipo: 'RT', criterio: 'CE-EE3', particularizacion: 'Tonalidades iniciales', L4: 'Domina', L3: 'Correcto', L2: 'Limitado', L1: 'Nulo' },
          { codigo: 'R-EE2-UD03-06', tipo: 'RE', criterio: 'EV-EE2-03', particularizacion: 'Evidencia', L4: 'Excelente', L3: 'Correcta', L2: 'Parcial', L1: 'Nula' },
          { codigo: 'R-EE2-UD03-07', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Autonomía', L4: 'Total', L3: 'Básica', L2: 'Escasa', L1: 'Nula' },
          { codigo: 'R-EE2-UD03-08', tipo: 'RC', criterio: 'CE-EE4', particularizacion: 'Pulso', L4: 'Estable', L3: 'Correcto', L2: 'Inestable', L1: 'Nulo' },
          { codigo: 'R-EE2-UD03-09', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Autoevaluación', L4: 'Reflexiva', L3: 'Correcta', L2: 'Con ayuda', L1: 'Nula' },
          { codigo: 'R-EE2-UD03-10', tipo: 'RC', criterio: 'CE-EE3', particularizacion: 'Digitación', L4: 'Precisa', L3: 'Correcta', L2: 'Imprecisa', L1: 'Incorrecta' },
          { codigo: 'R-EE2-UD03-11', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Constancia', L4: 'Diaria', L3: 'Regular', L2: 'Irregular', L1: 'Nula' },
          { codigo: 'R-EE2-UD03-12', tipo: 'RC', criterio: 'CE-EE4', particularizacion: 'Precisión rítmica', L4: 'Exacta', L3: 'Correcta', L2: 'Imprecisa', L1: 'Nula' },
          { codigo: 'R-EE2-UD03-13', tipo: 'RE', criterio: 'EV-EE2-03', particularizacion: 'Resultado global', L4: 'Sobresaliente', L3: 'Correcto', L2: 'Parcial', L1: 'Nulo' },
          { codigo: 'R-EE2-UD03-14', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Interés', L4: 'Alto', L3: 'Correcto', L2: 'Bajo', L1: 'Nulo' },
        ],
      },
      {
        id: 'EE2-UD04',
        titulo: 'Iniciación al estilo y al repertorio',
        evidencia: 'EV-EE2-04',
        rubricas: [
          { codigo: 'R-EE2-UD04-01', tipo: 'RI', criterio: 'CE-EE5', particularizacion: 'Fraseo', L4: 'Expresivo', L3: 'Correcto', L2: 'Plano', L1: 'Nulo' },
          { codigo: 'R-EE2-UD04-02', tipo: 'RI', criterio: 'CE-EE5', particularizacion: 'Articulación estilística', L4: 'Matizada', L3: 'Correcta', L2: 'Uniforme', L1: 'Nula' },
          { codigo: 'R-EE2-UD04-03', tipo: 'RI', criterio: 'CE-EE5', particularizacion: 'Tempo', L4: 'Estable y adecuado', L3: 'Correcto', L2: 'Irregular', L1: 'Nulo' },
          { codigo: 'R-EE2-UD04-04', tipo: 'RI', criterio: 'CE-EE5', particularizacion: 'Dinámica', L4: 'Contrastada', L3: 'Básica', L2: 'Limitada', L1: 'Nula' },
          { codigo: 'R-EE2-UD04-05', tipo: 'RI', criterio: 'CE-EE5', particularizacion: 'Carácter', L4: 'Definido', L3: 'Reconocible', L2: 'Difuso', L1: 'Nulo' },
          { codigo: 'R-EE2-UD04-06', tipo: 'RE', criterio: 'EV-EE2-04', particularizacion: 'Repertorio', L4: 'Excelente', L3: 'Correcto', L2: 'Parcial', L1: 'Nulo' },
          { codigo: 'R-EE2-UD04-07', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Escucha', L4: 'Activa', L3: 'Correcta', L2: 'Pasiva', L1: 'Nula' },
          { codigo: 'R-EE2-UD04-08', tipo: 'RC', criterio: 'CE-EE2', particularizacion: 'Control del aire', L4: 'Estable', L3: 'Correcto', L2: 'Irregular', L1: 'Nulo' },
          { codigo: 'R-EE2-UD04-09', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Autoevaluación', L4: 'Reflexiva', L3: 'Correcta', L2: 'Con ayuda', L1: 'Nula' },
          { codigo: 'R-EE2-UD04-10', tipo: 'RC', criterio: 'CE-EE5', particularizacion: 'Estilo', L4: 'Diferenciado', L3: 'Reconocible', L2: 'Difuso', L1: 'Nulo' },
          { codigo: 'R-EE2-UD04-11', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Interés', L4: 'Alto', L3: 'Correcto', L2: 'Bajo', L1: 'Nulo' },
          { codigo: 'R-EE2-UD04-12', tipo: 'RE', criterio: 'EV-EE2-04', particularizacion: 'Comunicación', L4: 'Conecta', L3: 'Correcta', L2: 'Limitada', L1: 'Nula' },
          { codigo: 'R-EE2-UD04-13', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Constancia', L4: 'Diaria', L3: 'Regular', L2: 'Irregular', L1: 'Nula' },
          { codigo: 'R-EE2-UD04-14', tipo: 'RC', criterio: 'CE-EE5', particularizacion: 'Matices', L4: 'Ricos', L3: 'Básicos', L2: 'Escasos', L1: 'Nulos' },
        ],
      },
      {
        id: 'EE2-UD05',
        titulo: 'Memoria, improvisación y conjunto',
        evidencia: 'EV-EE2-05',
        rubricas: [
          { codigo: 'R-EE2-UD05-01', tipo: 'RT', criterio: 'CE-EE6', particularizacion: 'Memoria', L4: 'Segura', L3: 'Correcta', L2: 'Con apoyo', L1: 'Nula' },
          { codigo: 'R-EE2-UD05-02', tipo: 'RT', criterio: 'CE-EE6', particularizacion: 'Improvisación', L4: 'Fluida', L3: 'Básica', L2: 'Muy guiada', L1: 'Nula' },
          { codigo: 'R-EE2-UD05-03', tipo: 'RT', criterio: 'CE-EE4', particularizacion: 'Lectura', L4: 'Fluida', L3: 'Correcta', L2: 'Fragmentada', L1: 'Nula' },
          { codigo: 'R-EE2-UD05-04', tipo: 'RT', criterio: 'CE-EE6', particularizacion: 'Conjunto', L4: 'Integrado', L3: 'Correcto', L2: 'Desajustado', L1: 'Nulo' },
          { codigo: 'R-EE2-UD05-05', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Escucha', L4: 'Activa', L3: 'Correcta', L2: 'Pasiva', L1: 'Nula' },
          { codigo: 'R-EE2-UD05-06', tipo: 'RE', criterio: 'EV-EE2-05', particularizacion: 'Evidencia', L4: 'Excelente', L3: 'Correcta', L2: 'Parcial', L1: 'Nula' },
          { codigo: 'R-EE2-UD05-07', tipo: 'RC', criterio: 'CE-EE6', particularizacion: 'Afinación en conjunto', L4: 'Precisa', L3: 'Correcta', L2: 'Imprecisa', L1: 'Nula' },
          { codigo: 'R-EE2-UD05-08', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Autonomía', L4: 'Total', L3: 'Básica', L2: 'Escasa', L1: 'Nula' },
          { codigo: 'R-EE2-UD05-09', tipo: 'RC', criterio: 'CE-EE4', particularizacion: 'Pulso en conjunto', L4: 'Estable', L3: 'Correcto', L2: 'Inestable', L1: 'Nulo' },
          { codigo: 'R-EE2-UD05-10', tipo: 'RE', criterio: 'EV-EE2-05', particularizacion: 'Autoevaluación', L4: 'Reflexiva', L3: 'Correcta', L2: 'Con ayuda', L1: 'Nula' },
          { codigo: 'R-EE2-UD05-11', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Colaboración', L4: 'Activa', L3: 'Correcta', L2: 'Pasiva', L1: 'Nula' },
          { codigo: 'R-EE2-UD05-12', tipo: 'RC', criterio: 'CE-EE6', particularizacion: 'Equilibrio sonoro', L4: 'Ajustado', L3: 'Correcto', L2: 'Desequilibrado', L1: 'Nulo' },
          { codigo: 'R-EE2-UD05-13', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Actitud', L4: 'Positiva', L3: 'Correcta', L2: 'Pasiva', L1: 'Negativa' },
          { codigo: 'R-EE2-UD05-14', tipo: 'RE', criterio: 'EV-EE2-05', particularizacion: 'Resultado global', L4: 'Sobresaliente', L3: 'Correcto', L2: 'Parcial', L1: 'Nulo' },
        ],
      },
      {
        id: 'EE2-UD06',
        titulo: 'Programa de fin de curso',
        evidencia: 'EV-EE2-06',
        rubricas: [
          { codigo: 'R-EE2-UD06-01', tipo: 'RI', criterio: 'CE-EE5', particularizacion: 'Interpretación global', L4: 'Expresiva y segura', L3: 'Correcta', L2: 'Insegura', L1: 'Nula' },
          { codigo: 'R-EE2-UD06-02', tipo: 'RT', criterio: 'CE-EE2', particularizacion: 'Control técnico', L4: 'Estable', L3: 'Correcto', L2: 'Irregular', L1: 'Nulo' },
          { codigo: 'R-EE2-UD06-03', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Autocontrol', L4: 'Total', L3: 'Adecuado', L2: 'Limitado', L1: 'Nulo' },
          { codigo: 'R-EE2-UD06-04', tipo: 'RE', criterio: 'EV-EE2-06', particularizacion: 'Programa', L4: 'Sobresaliente', L3: 'Correcto', L2: 'Parcial', L1: 'Nulo' },
          { codigo: 'R-EE2-UD06-05', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Autoevaluación', L4: 'Reflexiva', L3: 'Correcta', L2: 'Con ayuda', L1: 'Nula' },
          { codigo: 'R-EE2-UD06-06', tipo: 'RI', criterio: 'CE-EE5', particularizacion: 'Comunicación', L4: 'Conecta', L3: 'Correcta', L2: 'Limitada', L1: 'Nula' },
          { codigo: 'R-EE2-UD06-07', tipo: 'RC', criterio: 'CE-EE1', particularizacion: 'Postura en público', L4: 'Natural', L3: 'Correcta', L2: 'Tensa', L1: 'Incorrecta' },
          { codigo: 'R-EE2-UD06-08', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Gestión del nerviosismo', L4: 'Controla', L3: 'Maneja', L2: 'Afecta', L1: 'Bloquea' },
          { codigo: 'R-EE2-UD06-09', tipo: 'RC', criterio: 'CE-EE2', particularizacion: 'Sonido en público', L4: 'Estable', L3: 'Correcto', L2: 'Inestable', L1: 'Nulo' },
          { codigo: 'R-EE2-UD06-10', tipo: 'RE', criterio: 'EV-EE2-06', particularizacion: 'Programa completo', L4: 'Excelente', L3: 'Correcto', L2: 'Parcial', L1: 'Nulo' },
          { codigo: 'R-EE2-UD06-11', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Valoración del trabajo', L4: 'Consciente', L3: 'Correcta', L2: 'Escasa', L1: 'Nula' },
          { codigo: 'R-EE2-UD06-12', tipo: 'RC', criterio: 'CE-EE5', particularizacion: 'Expresividad', L4: 'Rica', L3: 'Correcta', L2: 'Plana', L1: 'Nula' },
          { codigo: 'R-EE2-UD06-13', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Actitud ante el público', L4: 'Positiva', L3: 'Correcta', L2: 'Pasiva', L1: 'Negativa' },
          { codigo: 'R-EE2-UD06-14', tipo: 'RE', criterio: 'EV-EE2-06', particularizacion: 'Informe final', L4: 'Completo', L3: 'Correcto', L2: 'Parcial', L1: 'Nulo' },
        ],
      },
    ],
  },
  {
    id: 'EE3',
    nombre: 'Tercer Curso de Enseñanzas Elementales',
    curso: 'EE3',
    uds: [
      {
        id: 'EE3-UD01',
        titulo: 'Ampliación del registro y control del aire',
        evidencia: 'EV-EE3-01',
        rubricas: [
          { codigo: 'R-EE3-UD01-01', tipo: 'RT', criterio: 'CE-EE2', particularizacion: 'Registro', L4: 'Amplio y controlado', L3: 'Correcto', L2: 'Limitado', L1: 'Nulo' },
          { codigo: 'R-EE3-UD01-02', tipo: 'RT', criterio: 'CE-EE2', particularizacion: 'Columna de aire', L4: 'Óptima', L3: 'Correcta', L2: 'Débil', L1: 'Nula' },
          { codigo: 'R-EE3-UD01-03', tipo: 'RT', criterio: 'CE-EE3', particularizacion: 'Flexibilidad', L4: 'Fluida', L3: 'Correcta', L2: 'Rígida', L1: 'Nula' },
          { codigo: 'R-EE3-UD01-04', tipo: 'RT', criterio: 'CE-EE3', particularizacion: 'Afinación', L4: 'Precisa', L3: 'Correcta', L2: 'Imprecisa', L1: 'Nula' },
          { codigo: 'R-EE3-UD01-05', tipo: 'RT', criterio: 'CE-EE2', particularizacion: 'Sonido', L4: 'Rico y estable', L3: 'Correcto', L2: 'Inestable', L1: 'Nulo' },
          { codigo: 'R-EE3-UD01-06', tipo: 'RE', criterio: 'EV-EE3-01', particularizacion: 'Evidencia', L4: 'Excelente', L3: 'Correcta', L2: 'Parcial', L1: 'Nula' },
          { codigo: 'R-EE3-UD01-07', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Hábitos', L4: 'Autónomos', L3: 'Regulares', L2: 'Irregulares', L1: 'Nulos' },
          { codigo: 'R-EE3-UD01-08', tipo: 'RC', criterio: 'CE-EE1', particularizacion: 'Postura', L4: 'Funcional', L3: 'Correcta', L2: 'Tensa', L1: 'Incorrecta' },
          { codigo: 'R-EE3-UD01-09', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Autoevaluación', L4: 'Reflexiva', L3: 'Correcta', L2: 'Con ayuda', L1: 'Nula' },
          { codigo: 'R-EE3-UD01-10', tipo: 'RC', criterio: 'CE-EE2', particularizacion: 'Control dinámico', L4: 'Preciso', L3: 'Correcto', L2: 'Irregular', L1: 'Nulo' },
          { codigo: 'R-EE3-UD01-11', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Constancia', L4: 'Diaria', L3: 'Regular', L2: 'Irregular', L1: 'Nula' },
          { codigo: 'R-EE3-UD01-12', tipo: 'RC', criterio: 'CE-EE3', particularizacion: 'Estabilidad en registro', L4: 'Total', L3: 'Correcta', L2: 'Irregular', L1: 'Nula' },
          { codigo: 'R-EE3-UD01-13', tipo: 'RE', criterio: 'EV-EE3-01', particularizacion: 'Resultado global', L4: 'Sobresaliente', L3: 'Correcto', L2: 'Parcial', L1: 'Nulo' },
          { codigo: 'R-EE3-UD01-14', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Interés', L4: 'Alto', L3: 'Correcto', L2: 'Bajo', L1: 'Nulo' },
        ],
      },
      {
        id: 'EE3-UD02',
        titulo: 'Mecanismo y articulación',
        evidencia: 'EV-EE3-02',
        rubricas: [
          { codigo: 'R-EE3-UD02-01', tipo: 'RT', criterio: 'CE-EE3', particularizacion: 'Legato avanzado', L4: 'Fluido en todo el registro', L3: 'Correcto', L2: 'Irregular', L1: 'Nulo' },
          { codigo: 'R-EE3-UD02-02', tipo: 'RT', criterio: 'CE-EE3', particularizacion: 'Staccato avanzado', L4: 'Preciso y controlado', L3: 'Correcto', L2: 'Irregular', L1: 'Nulo' },
          { codigo: 'R-EE3-UD02-03', tipo: 'RT', criterio: 'CE-EE3', particularizacion: 'Doble tonguing', L4: 'Fluido', L3: 'Correcto', L2: 'Lento', L1: 'No logra' },
          { codigo: 'R-EE3-UD02-04', tipo: 'RT', criterio: 'CE-EE3', particularizacion: 'Coordinación digital', L4: 'Fluida y precisa', L3: 'Correcta', L2: 'Lenta', L1: 'Nula' },
          { codigo: 'R-EE3-UD02-05', tipo: 'RT', criterio: 'CE-EE3', particularizacion: 'Velocidad', L4: 'Adecuada al nivel', L3: 'Correcta', L2: 'Insuficiente', L1: 'Nula' },
          { codigo: 'R-EE3-UD02-06', tipo: 'RE', criterio: 'EV-EE3-02', particularizacion: 'Evidencia', L4: 'Excelente', L3: 'Correcta', L2: 'Parcial', L1: 'Nula' },
          { codigo: 'R-EE3-UD02-07', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Estudio', L4: 'Planificado y eficaz', L3: 'Regular', L2: 'Irregular', L1: 'Nulo' },
          { codigo: 'R-EE3-UD02-08', tipo: 'RC', criterio: 'CE-EE2', particularizacion: 'Aire en mecanismo', L4: 'Estable', L3: 'Correcto', L2: 'Irregular', L1: 'Nulo' },
          { codigo: 'R-EE3-UD02-09', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Autoevaluación', L4: 'Reflexiva', L3: 'Correcta', L2: 'Con ayuda', L1: 'Nula' },
          { codigo: 'R-EE3-UD02-10', tipo: 'RC', criterio: 'CE-EE3', particularizacion: 'Articulación mixta', L4: 'Precisa', L3: 'Correcta', L2: 'Imprecisa', L1: 'Nula' },
          { codigo: 'R-EE3-UD02-11', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Constancia', L4: 'Diaria', L3: 'Regular', L2: 'Irregular', L1: 'Nula' },
          { codigo: 'R-EE3-UD02-12', tipo: 'RC', criterio: 'CE-EE1', particularizacion: 'Postura en mecanismo', L4: 'Funcional', L3: 'Correcta', L2: 'Tensa', L1: 'Incorrecta' },
          { codigo: 'R-EE3-UD02-13', tipo: 'RE', criterio: 'EV-EE3-02', particularizacion: 'Resultado global', L4: 'Sobresaliente', L3: 'Correcto', L2: 'Parcial', L1: 'Nulo' },
          { codigo: 'R-EE3-UD02-14', tipo: 'RA', criterio: 'CE-EE7', particularizacion: 'Interés', L4: 'Alto', L3: 'Correcto', L2: 'Bajo', L1: 'Nulo' },
        ],
      },
    ],
  },
];
