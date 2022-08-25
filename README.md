# Einstein Template - Backend NestJS

Este template possui comandos automatizados para gerar componentes para a construção do backend.
Os comandos podem ser executados com:

- `yarn` 
- `npm`
- `make`

---

## Como utilizar a cli

Utilizando a cli com yarn


```sh

$ yarn einstein

```

![](./docs/einstein-cli.png)

Utilizando a cli com npm

```sh

$ npm run einstein

```

Utilizando a cli com make.

Existem algumas opções pré-definidas.

- Para criar um módulo

```sh

$ make module

# Ou

$ make mod

```

- Para criar um recurso

```sh

$ make resource

# Ou

$ make res

```

---

## Gerenciador de pacotes

Para instalar e gerenciar novos pacotes (libs) utilize yarn.

Dependência de produção

```sh

$ yarn add <package-name>

```

Dependência de desenvolvimento

```sh

$ yarn add <package-name> -D

```

---

## Alias Path

Este template já possui um alias global `@modules` e `@shared` configurado

- `@modules/*` aponta para o caminho `src/modules/*`
- `@shared/*` aponta para o caminho `src/shared/*`

Para adicionar novos alias siga o modelo nos arquivos: 
- `tsconfig.json`  
- `jest-e2e.json` 
- `jest.config.json` 

A inclusão deve ser feita em todos esses 3 arquivos.

---

## Scripts

Testes. 

Executar testes unitários.

obs: Os teste unitários devem ter o padrão de nome `<file-name>.spec.ts`


```sh

$ yarn test


```

Executar testes de integração.

obs: Os teste de integração devem ter o padrão de nome `<file-name>.test.ts`

```sh

$ yarn test:e2e


```

Executar a aplicação em watch mode

```sh

$ yarn start:dev

```

Executar a aplicação

```sh

$ yarn start

```

Para verificar se a aplicação está ok

```

GET localhost:3000/healthCheck

```

---

## Documentação

Este template já está configurado com swagger

Após iniciar a aplicação basta acessar o endpoint

```

GET localhost:3000/docs

```

## Variáveis

As variáveis de ambiente devem ser definidas no arquivo

`src/shared/env.ts`


## Commits

Os commits devem seguir a convenção do commit lint

```sh

<type>[optional scope]: <description>

[optional body]

[optional footer(s)]

```

- build: 
- chore: 
- ci: 
- docs: 
- style:
- refactor:
- perf:
- test:

Example:

```sh

$ git commit -m "test (payment): ensure payment confirmation"

```
