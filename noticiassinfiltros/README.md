# Noticias sin filtros

Astro + TypeScript, publicado en Netlify. Paso 1: base del proyecto y sistema de diseño.

## Publicar sin instalar nada
1. Crear una cuenta gratuita en GitHub y un repositorio nuevo.
2. Subir el CONTENIDO de esta carpeta (no el .zip) con "uploading an existing file".
3. En Netlify: Add new site > Import an existing project > GitHub > elegir el repositorio > Deploy.
   La configuración ya está en `netlify.toml`.

## Probar en un computador (opcional, requiere Node.js)
```
npm install
npm run dev
```

## Estructura
- `src/styles/global.css`: colores, tipografías y componentes.
- `src/layouts/Base.astro`: SEO y estructura común.
- `src/components/`: cabecera, pie.
- `src/data/demo.ts`: contenido de demostración (se reemplaza en el paso 2).
