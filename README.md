# SBI — web institucional

Sitio estático (HTML + CSS + JS, sin dependencias ni build). Abrir `index.html` o servir la carpeta `web/`.

## Archivos
- `index.html` — todo el contenido (textos en inglés). Cada sección está marcada con un comentario `<!-- ===== SECCIÓN ===== -->`.
- `styles.css` — diseño. Los colores de marca están al inicio, en `:root`.
- `main.js` — menú móvil, slider de la portada (6,5 s, con pausa y pestañas) y animaciones suaves.
- `i18n.js` — versión en español. El inglés está en `index.html`; cada texto traducible tiene `data-i18n="clave"` y su versión en español está en `i18n.js` con la misma clave. La web se abre en el idioma del navegador, recuerda la elección del visitante y acepta `?lang=es` o `?lang=en` en el link.
- `assets/` — fotos de la portada (`hero-1` a `hero-4`, rotan solas) y favicon.

## Cambios habituales
- **Textos:** el inglés se edita en `index.html` y el español en `i18n.js`.
- **Velocidad del slider:** atributo `data-interval` en `index.html` (milisegundos). Las fotos tienen su propio `data-interval` en `.hero-media`.
- **Fotos de portada:** usar fotos verticales de unos 1000 px de ancho y menos de 400 KB. Para agregar una, sumar otro `<img>` dentro de `.hero-media`. Con `style="--focus: center 60%"` se elige qué parte de la foto se ve.
- **Contacto:** el email (`gabriel@sbi-nexus.com`) aparece 2 veces en `index.html`.
- **Analítica:** pegar el snippet donde indica el comentario en `<head>`.

## Pendiente antes de publicar
Dominio principal · logo final · aviso de privacidad si se recopilan datos.

## Publicar
Cualquier hosting estático con SSL sirve (Netlify, Vercel, Cloudflare Pages o GitHub Pages): subir la carpeta `web/` y apuntar el dominio.
