# tsconfig-base

![the magician tsconfig-pacakage-isomorphic banner](./imgs/banner.png)

[repo](https://github.com/TheMagicianDev/tsconfig), [npm](https://www.npmjs.com/package/@themagician/tsconfig-pacakage-isomorphic)

A base tsconfig configuration for a browser package, that you can override.

# Usage:

Install the package:

```sh
npm install @themagician/tsconfig-base -D
yarn add @themagician/tsconfig-base -D
pnpm add @themagician/tsconfig-base -D
```

Then extend it in your tsconfig.json

```json
{
  "extends": "@themagician/tsconfig-pacakage-isomorphic/tsconfig.json",
  "compilerOptions": {
    "noEmit": true,
    "strict": true
  }
}
```
# tsconfig-pacakage-isomorphic configuration


```json
{
  // TODO: Implement
  "$schema": "https://json.schemastore.org/tsconfig"
}
```
