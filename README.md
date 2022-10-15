## Projeto 01:

### Instalation

1. `npm init -y`
2. `npm i typescript ts-node-dev -D`
3. `npx tsc --init`
4. `npm i graphql apollo-server`

### Configuration

package.json: \
`"scripts":  {"dev:simple": "tsnd --respawn --transpile-only"}`

---
## Projeto 02

### Instalation

1. `npm i graphql class-validator type-graphql`
2. `npm i reflect-metadata`

### configuration

tsconfig.json
```
{
  "compilerOptions": {
    "target": "es2018",
    "module": "commonjs",
    "lib": ["es2018", "esnext.asynciterable"],
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "strictPropertyInitialization": false,
  }
}
```

