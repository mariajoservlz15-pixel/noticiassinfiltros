  {
    numero: 1,
    titulo: "Título del episodio",
    fecha: "2026-11-15",
    descripcion: "De qué trata el episodio.\nSegundo párrafo opcional.",
    youtube: "https://youtu.be/I9RTR8yZmyo?si=6ziV_vFHkXXXPYou",
    publicado: true,
  },

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
