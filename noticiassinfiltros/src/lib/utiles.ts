const ID_VALIDO = /^[A-Za-z0-9_-]{11}$/;

/** Recibe cualquier enlace de YouTube (o el ID de 11 caracteres) y devuelve el ID, o null si no es válido. */
export function idYoutube(entrada: string): string | null {
  const t = (entrada ?? '').trim();
  if (ID_VALIDO.test(t)) return t;
  try {
    const u = new URL(t);
    const host = u.hostname.replace(/^(www|m)\./, '');
    let id: string | null = null;
    if (host === 'youtu.be') {
      id = u.pathname.slice(1, 12);
    } else if (host === 'youtube.com' || host === 'youtube-nocookie.com') {
      id = u.searchParams.get('v');
      if (!id) {
        const m = u.pathname.match(/^\/(?:embed|shorts|live|v)\/([A-Za-z0-9_-]{11})/);
        id = m ? m[1] : null;
      }
    }
    return id && ID_VALIDO.test(id) ? id : null;
  } catch {
    return null;
  }
}

/** "2026-11-09" -> "9 de noviembre de 2026" */
export function fechaLarga(iso: string): string {
  const d = new Date(`${iso}T12:00:00Z`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('es-CO', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}
