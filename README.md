# DAR Comunicaciones

Sitio web de DAR Comunicaciones: conectividad (chips y portabilidades), Dar Credi, PagaFast y comunidad raDAR.

Stack: Next.js 16, React 19, Tailwind CSS 4.

## Requisitos

- Node.js 20 o superior
- npm

## Arranque

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run start` | Sirve el build |
| `npm run lint` | ESLint |

## Estructura

```
src/app/           Rutas (App Router)
src/components/    Header, footer, logo y piezas compartidas
public/            Logo y estáticos
```

No hay variables de entorno obligatorias para el sitio estático actual.
