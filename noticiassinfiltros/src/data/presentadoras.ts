// ============================================================
//  PRESENTADORAS
//  Edita aquí el nombre, el rol y la biografía de cada una.
//  foto: ruta de la imagen subida a la carpeta public/fotos,
//        por ejemplo "/fotos/camila.jpg". Déjala vacía "" si no hay foto.
//  Regla: no uses comillas dobles (") dentro de los textos.
//  Para separar párrafos en la biografía escribe \n
// ============================================================

export interface Presentadora {
  nombre: string;
  rol: string;
  bio: string;
  foto: string;
}

export const presentadoras: Presentadora[] = [
  { nombre: 'María José', rol: 'Presentadora', bio: '', foto: '' },
  { nombre: 'Mariana', rol: 'Presentadora', bio: '', foto: '' },
  { nombre: 'Camila', rol: 'Presentadora', bio: '', foto: '' },
];
