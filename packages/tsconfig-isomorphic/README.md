# tsconfig-isomorphic

![the magician tsconfig-isomorphic banner](/packages/tsconfig-isomorphic/imgs/banner.png)

[repo](https://github.com/TheMagicianDev/tsconfig), [npm](https://www.npmjs.com/package/@themagician/tsconfig-isomorphic)

A base tsconfig configuration for a module that support both the browser and node at the same time (aka isomorphic module), that you can override.

# Usage:

Install the package:

```sh
npm install @themagician/tsconfig-isomorphic -D
yarn add @themagician/tsconfig-isomorphic -D
pnpm add @themagician/tsconfig-isomorphic -D
```

Then extend it in your tsconfig.json

```json
{
  "extends": "@themagician/tsconfig-isomorphic",
  "compilerOptions": {
    "noEmit": true,
    "strict": true
  }
}
```
# tsconfig-isomorphic configuration

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "@themagician/tsconfig-base",
  "compilerOptions": {
    "lib": ["ESNext"],
    "target": "ES5",
    "module": "NodeNext",
    "moduleResolution": "NodeNext"
  }
}
```

# Other packages

- [@themagician/tsconfig-base](https://www.npmjs.com/package/@themagician/tsconfig-base)
- [@themagician/tsconfig-node](https://www.npmjs.com/package/@themagician/tsconfig-node)
- [@themagician/tsconfig-package-node-esm](https://www.npmjs.com/package/@themagician/tsconfig-package-node-esm)
- [@themagician/tsconfig-package-node-cjs](https://www.npmjs.com/package/@themagician/tsconfig-package-node-cjs)
- [@themagician/tsconfig-react](https://www.npmjs.com/package/@themagician/tsconfig-react)
- [@themagician/tsconfig-browser](https://www.npmjs.com/package/@themagician/tsconfig-browser)


# @themagician/tsconfig repo

https://github.com/TheMagicianDev/tsconfig

You can use this whole repo. As a template or boilerplate to make your own scope based packages, through a monorepo repository for your tsconfig base configurations. As it make a good setup. Using `turborepo` and `changsets` and `pnpm workspaces`. For easy monorepo management and versioning and publishing. As well `eslint` config to lint json files, and `lefthook` to run that before committing. And guard the commit. `prettier` config as well. And Beside high accessibility and flexibility, You may like to do that, to share with your friends, team, or community. As well have them to contribute in a flexible way.

Here some articles we wrote and resources that help u with the notions above:

... to be added later ...
