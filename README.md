# @themagician/tsconfig

![the magician tsconfig configurations banner](./imgs/theMagicianTsconfig_banner.png)

[Repo](https://github.com/TheMagicianDev/tsconfig)


Different Base tsconfig configurations used by the magician project. You can check otherwise [@tsconfig project](https://github.com/tsconfig/bases) that is like @types for tsconfig. Know too that having a personal base files can be always more productive.

You can use this whole repo. As a template or boilerplate to make your own scope based packages, through a monorepo repository for your tsconfig configuration. As it make a good setup. Using `turborepo` and `changsets` and `pnpm`. For easy monorepo management and versioning and publishing.

Here some articles we wrote and resources that help u with the notions above:

... to be added later ...

Individual packages:

[tsconfig-base](https://www.npmjs.com/package/@themagician/tsconfig-base), [tsconfig-node](https://www.npmjs.com/package/@themagician/tsconfig-node), [tsconfig-package-node-esm](https://www.npmjs.com/package/@themagician/tsconfig-package-node-esm), [tsconfig-package-node-cjs](https://www.npmjs.com/package/@themagician/tsconfig-package-node-cjs), [tsconfig-react](https://www.npmjs.com/package/@themagician/tsconfig-react), [tsconfig-browser](https://www.npmjs.com/package/@themagician/tsconfig-browser), [tsconfig-isomorphic](https://www.npmjs.com/package/@themagician/tsconfig-isomorphic),

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
  "extends": "@themagician/tsconfig-base",
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
- `@themagician/tsconfig-node`
- `@themagician/tsconfig-package-node-esm`
- `@themagician/tsconfig-package-node-cjs`
- `@themagician/tsconfig-react`
- `@themagician/tsconfig-browser`
- `@themagician/tsconfig-isomorphic`

> Note: not all modules are fully yet finalized.
> Mainly documentation, .....
> I published for my own usage and the magician project content
> Some package may slightly change with time.

# tsconfig/base

You can check the tsconfig/base project

@tsconfig like @types of Definitely Typed for TSConfigs.

https://github.com/tsconfig/bases

I personally prefer using my own. Again you can use this repo as a boilerplate to make your own modules and scoped package in the same way it was done through this repo.

# How can you benefit from @themagician/tsconfig repo ?

If you see the types works for you! Use them!

You can inspire from this repo (fork it) to make your own custom configuration and publish them to npm (scoped packages) through a monorepo setup using `turborepo`, and `pnpn workspaces` and `changesets`. `Eslint (including json)`, `Prettier` configured. You can have your friends, team, community contribute too if you want ...
