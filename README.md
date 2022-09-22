# @themagician/tsconfig

![the magician tsconfig configurations banner](./imgs/theMagicianTsconfig_banner.png)

[Repo](https://github.com/TheMagicianDev/tsconfig), npm


Different Base tsconfig configurations used by the magician project. You can check otherwise [@tsconfig project](https://github.com/tsconfig/bases) that is like @types for tsconfig. Know too that having a personal base files can be always more productive.

Individual packages:

[tsconfig-base](), [tsconfig-package-node-esm](), [tsconfig-package-node-cjs](), [tsconfing-jest](),

# Usage and packages

Install the package you want to use under `@themagician/tsconfig-*`

```sh
npm install @themagician/tsconfig-base -D
yarn add @themagician/tsconfig-base -D
pnpm add @themagician/tsconfig-base -D
```

Extends the package you want in your `tsconfig`. You can refer them directly like bellow:

```json
{
  "extends": "@themagician/tsconfig-base/tsconfig.json",
  "compilerOptions": {
    "noEmit": true
  },
  "include": [
    "**/*.ts",
    "**/*.tsx",
    "**/*.cts",
    "**/*.mts",
    "**/*.js",
    "**/*.jsx",
    "**/*.cjs",
    "**/*.mjs"
  ]
}
```

List of all packages:

- `@themagician/tsconfig-base`
- `@themagician/tsconfig-package-node-esm`
- `@themagician/tsconfig-package-node-cjs`
- `@themagician/tsconfig-jest`

> Note: not all modules are yet finalized.
> In this iteration, jest is not implemented for example.
> I published for my own usage and the magician project content. 

# tsconfig/base

You can check the tsconfig/base project

@tsconfig like @types of Definitely Typed for TSConfigs.

https://github.com/tsconfig/bases


# How can you benefit from @themagician/tsconfig repo ?

If you see the types works for you! Use them!

You can inspire from this repo (fork it) to make your own custom configuration and publish them to npm through a monorepo setup using turborepo, and pnpn workspaces and changesets. Eslint (including json), Prettier configured. ...
