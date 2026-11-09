import { episodios as todos } from '../data/episodios';
import { idYoutube } from './utiles';

export function episodiosPublicados() {
  return todos
    .filter((e) => e.publicado)
    .flatMap((e) => {
      const ytId = idYoutube(e.youtube);
      if (!ytId) {
        console.warn(`Episodio ${e.numero}: el enlace de YouTube no es válido y no se mostrará.`);
        return [];
      }
      return [{ ...e, ytId, miniatura: `https://i.ytimg.com/vi/${ytId}/hqdefault.jpg` }];
    })
    .sort((a, b) => b.fecha.localeCompare(a.fecha) || b.numero - a.numero);
}
