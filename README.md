# TurboPress starter

This is a starter Astro + Payload CMS project using Turborepo.

## Why Astro?

Astro allow you to use your favorite UI components and libraries. Mix and match React, Preact, Svelte, Vue, SolidJS, AlpineJS, and Lit to build your own website.

## Why PayloadCMS?

I need a headless CMS that is easy to use with TypeScript support. PayloadCMS work really well in this use case.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `api`: a [Payload](https://payloadcms.com/) app
- `web`: an Astro [Astro](https://astro.build/) app
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-prettier` and `eslint-configg-turbo`)

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [TailwindCSS](https://tailwindcss.com/) for CSS utility
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Prerequisites

Install `nodejs`, `pnpm` and `turborepo` on your local machine

## Develop

Create a `.env` file in the root folder, you can use the `.env.example` file as an example

I use `pnpm` for this project.

Run the following command:

```sh
pnpm installl
pnpm dev
```

By default, the payloadCMS will run on port 3000, and Astro will be served on port 3001.

## TypeScript support

To fully utilize the type safe features, manually generate the types for PayloadCMS by runng `pnpm generate:types`

Then, you can import the types easily as simple as

```ts
import type { User } from "@astrocms/api/types";
```
