// ============================================================
//  EPISODIOS DE NOTICIAS SIN FILTROS
//  Para agregar uno: copia un bloque completo { ... }, pégalo
//  debajo y cambia los datos. No olvides la coma al final del bloque.
//
//  Reglas:
//   - No uses comillas dobles (") dentro de los textos. Usa « » o “ ”.
//   - fecha en formato AAAA-MM-DD (año-mes-día).
//   - youtube: pega el enlace tal cual lo copias de YouTube.
//   - publicado: true lo muestra en la web; false lo oculta.
//   - Para separar párrafos en la descripción escribe \n
// ============================================================

export interface Episodio {
  numero: number;
  titulo: string;
  fecha: string;
  descripcion: string;
  youtube: string;
  publicado: boolean;
}

export const episodios: Episodio[] = [
  // ---- PLANTILLA: quita las dos barras // de cada línea para activarla ----
  // {
  //   numero: 1,
  //   titulo: "Título del episodio",
  //   fecha: "2026-11-15",
  //   descripcion: "De qué trata el episodio.\nSegundo párrafo opcional.",
  //   youtube: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
  //   publicado: true,
  // },
];
