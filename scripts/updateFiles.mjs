import fglb from 'fast-glob'
import { promises as pfs } from 'fs'
import path, { dirname } from "path";
import dedent from 'dedent'
import { default as md2json } from 'md-2-json'
import * as url from 'url';


const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const root = path.resolve(__dirname, '..')

const include = [path.join(root, 'packages/**/README.md')]

const files = await fglb(include, {
  absolute: true
})

files.forEach((file) => {
  const dirname = path.dirname(file)
  const name = path.basename(dirname)

  const tsconfigJsonFile = path.join(dirname, 'tsconfig.json')

  const tsconfigJsonPromise = pfs.readFile(tsconfigJsonFile, { encoding: 'utf8' })

  pfs.readFile(file, { encoding: 'utf8' })
  .then(async (content) => {
    console.log('File: ' + file);
    const parsedMd = md2json.parse(content)
    // const headline = parsedMd[Object.keys(parsedMd)[0]]
    // headline.raw = `![the magician ${name} banner](/packages/${name}/imgs/banner.png)\n\n[repo](https://github.com/TheMagicianDev/tsconfig), [npm](https://www.npmjs.com/package/@themagician/${name})\n${headline.raw}`

    const tsconfigJsonContent = await tsconfigJsonPromise

    // parsedMd['Usage:'] = {
    //   raw: dedent`\n
    //     Install the package:

    //     \`\`\`sh
    //     npm install @themagician/tsconfig-base -D
    //     yarn add @themagician/tsconfig-base -D
    //     pnpm add @themagician/tsconfig-base -D
    //     \`\`\`

    //     Then extend it in your tsconfig.json

    //     \`\`\`json
    //     {
    //       "extends": "@themagician/${name}/tsconfig.json",
    //       "compilerOptions": {
    //         "noEmit": true,
    //         "strict": true
    //       }
    //     }
    //     \`\`\`\n
    //   `
    // }



    let otherPackageContent = '\n'

    files.map((filePath) => path.basename(path.dirname(filePath))).filter((packageName) => packageName !== name).forEach(packageName => {
      otherPackageContent += `- [@themagician/${packageName}](https://www.npmjs.com/package/@themagician/${packageName})\n`
    });

    otherPackageContent += '\n'

    parsedMd[`Other packages`] = {
      raw: otherPackageContent
    }

    const newMdContent = md2json.toMd(parsedMd)

    await pfs.writeFile(file, newMdContent, { encoding: 'utf8'})
  })
});
