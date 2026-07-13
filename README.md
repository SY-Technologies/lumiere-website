# Lumière website

The bilingual, static website for [Lumière](https://github.com/SY-Technologies/lumiere), published at `lumiere.axiomatik.net`.

## Development

```sh
npm install
npm run dev
```

## Quality gates

```sh
npm test
npm run build
```

## Architecture

- Astro renders every page statically.
- Locale copy, site metadata, and release artifacts have typed sources of truth.
- JavaScript is progressive enhancement, not a rendering dependency.
- Release documentation will be imported from the current Lumière tag during builds.
