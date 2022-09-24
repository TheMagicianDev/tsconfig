# tsconfig-node

![the magician tsconfig-node banner](/packages/tsconfig-node/imgs/banner.png)

[repo](https://github.com/TheMagicianDev/tsconfig), [npm](https://www.npmjs.com/package/@themagician/tsconfig-node)

A base tsconfig configuration for node based applications that you can override.

# Usage:

Install the package:

```sh
npm install @themagician/tsconfig-node -D
yarn add @themagician/tsconfig-node -D
pnpm add @themagician/tsconfig-node -D
```

Then extend it in your tsconfig.json

```json
{
  "extends": "@themagician/tsconfig-node/tsconfig.json",
  "compilerOptions": {
    "noEmit": true,
    "strict": true
  }
}
```
# tsconfig-node configuration

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "@themagician/tsconfig-base",
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "moduleDetection": "auto"
  }
}
```

# Other packages

- [@themagician/tsconfig-base](https://www.npmjs.com/package/@themagician/tsconfig-base)
- [@themagician/tsconfig-package-node-esm](https://www.npmjs.com/package/@themagician/tsconfig-package-node-esm)
- [@themagician/tsconfig-package-node-cjs](https://www.npmjs.com/package/@themagician/tsconfig-package-node-cjs)
- [@themagician/tsconfig-react](https://www.npmjs.com/package/@themagician/tsconfig-react)
- [@themagician/tsconfig-browser](https://www.npmjs.com/package/@themagician/tsconfig-browser)
- [@themagician/tsconfig-isomorphic](https://www.npmjs.com/package/@themagician/tsconfig-isomorphic)

# @themagician/tsconfig repo

https://github.com/TheMagicianDev/tsconfig

You can use this whole repo. As a template or boilerplate to make your own scope based packages, through a monorepo repository for your tsconfig base configurations. As it make a good setup. Using `turborepo` and `changsets` and `pnpm workspaces`. For easy monorepo management and versioning and publishing. As well `eslint` config to lint json files, and `lefthook` to run that before committing. And guard the commit. `prettier` config as well. And Beside high accessibility and flexibility, You may like to do that, to share with your friends, team, or community. As well have them to contribute in a flexible way.

Here some articles we wrote and resources that help u with the notions above:

... to be added later ...
