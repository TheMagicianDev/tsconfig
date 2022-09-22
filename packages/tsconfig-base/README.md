# tsconfig-base

![the magician tsconfig-base banner](/packages/tsconfig-base/imgs/banner.png)

[repo](https://github.com/TheMagicianDev/tsconfig), [npm](https://www.npmjs.com/package/@themagician/tsconfig-base)

A base tsconfig configuration that you can override.

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
  "extends": "@themagician/tsconfig-base/tsconfig.json",
  "compilerOptions": {
    "noEmit": true,
    "strict": true
  }
}
```
# tsconfig-base configuration

```json
{
  "compilerOptions": {
    "target": "es2020",
    "module": "NodeNext",
    "allowJs": true,
    "declaration": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  },
  "exclude": ["node-modules"]
}
```

# Other packages

- [@themagician/tsconfig-node](https://www.npmjs.com/package/@themagician/tsconfig-node)
- [@themagician/tsconfig-jest](https://www.npmjs.com/package/@themagician/tsconfig-jest)
- [@themagician/tsconfig-pacakage-isomorphic](https://www.npmjs.com/package/@themagician/tsconfig-pacakage-isomorphic)
- [@themagician/tsconfig-package-node-esm](https://www.npmjs.com/package/@themagician/tsconfig-package-node-esm)
- [@themagician/tsconfig-package-node-cjs](https://www.npmjs.com/package/@themagician/tsconfig-package-node-cjs)
- [@themagician/tsconfig-package-browser](https://www.npmjs.com/package/@themagician/tsconfig-package-browser)
