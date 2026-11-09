// ============================================================
//  EPISODIOS DE NOTICIAS SIN FILTROS
//  Para agregar uno: copia un bloque completo { ... }, pégalo
//  DENTRO de la lista, debajo del último, y cambia los datos.
//  No olvides la coma al final del bloque.
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
  {
    numero: 1,
    titulo: "Cambios Climáticos Extremos",
    fecha: "2026-11-09",
    descripcion: "Este episodio trata de los cambios que se están dando en la tierra por diferentes hechos.",
    youtube: "https://youtu.be/I9RTR8yZmyo?si=6ziV_vFHkXXXPYou",
    publicado: true,
  },
];
