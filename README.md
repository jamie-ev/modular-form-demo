# Modular Form Demo

Modular form demo monorepo

## Tech stack

- Built using Vite.js for fast bundling and local development
- Modern web stack using React.js and TypeScript
- Monorepo configuration powered by pnpm workspaces and turborepo
- Form functionality and UI powered by react hook form and Material UI
- Testing framework using Jest, react testing library, and Jest-Axe

## Getting started

You must have [pnpm](https://pnpm.io/installation) installed
- Clone the repo
- Navigate to the root directory
- `pnpm i`
- Navigate to `/app`
- `pnpm run dev` to locally run the app

## Monorepo structure

- `/app` main form app
  - `/dist` is kept out of `.gitignore` so GitHub Pages can deploy from `/dist/index.html` 
- `/packages` common packages usable by all apps in the repo
  - `/form-components` form components using Material UI and react hook form for lightning fast form configuration 

Turbo scripts are available across the monorepo
- `turbo build`
- `turbo format`