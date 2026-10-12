# CepFinder

Single page application for searching Brazilian addresses by CEP using [ViaCEP](https://viacep.com.br).

## Stack

- Angular 22 (standalone, zoneless, lazy loaded routes)
- Angular Material 22 (wrapped in `src/app/shared/ui`)
- Bootstrap 5 (SCSS grid, reboot and utilities)
- ngx-translate (`public/i18n/pt.json`)
- Jest + Angular Testing Library

## Scripts

| Command                 | Description                           |
| ----------------------- | ------------------------------------- |
| `npm start`             | Dev server at `http://localhost:4200` |
| `npm run build`         | Production build in `dist/cep-finder` |
| `npm test`              | Unit tests (Jest)                     |
| `npm run test:watch`    | Unit tests in watch mode              |
| `npm run test:coverage` | Unit tests with coverage report       |

## Project structure

```
src/
├── app/
│   ├── core/          i18n, layout (header/footer), navigation, storage
│   ├── features/
│   │   ├── addresses/ CEP module (lazy): services, components, pages
│   │   └── home /     Home module (lazy)
│   └── shared/        helpers, ui wrappers
├── environments/
└── styles/            _variables, _bootstrap, _material, _animations
```
