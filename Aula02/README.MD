# Introdução aos Testes Unitários com Jest

Este documento apresenta uma introdução aos testes unitários utilizando o framework [Jest](https://jestjs.io/).

## O que são Testes Unitários?

Testes unitários são pequenos testes automatizados que verificam se partes isoladas do código (funções, métodos, classes) estão funcionando corretamente.

## Por que usar o Jest?

- Fácil de configurar e usar
- Rápido e eficiente
- Suporte a mocks e spies
- Relatórios claros

## Instalação

```bash
npm install --save-dev jest
```

## Configuração do package.json

Adicione o seguinte trecho ao seu arquivo `package.json` para configurar o script de teste com Jest:

```json
{
    "scripts": {
        "test": "jest"
    }
}
```

## Estrutura Básica de um Teste

```js
// soma.js
function soma(a, b) {
        return a + b;
}
module.exports = soma;

// soma.test.js
const soma = require('./soma');

test('soma 1 + 2 para resultar em 3', () => {
        expect(soma(1, 2)).toBe(3);
});
```

## Executando os Testes

```bash
npm run test
```

## Referências

- [Documentação Oficial do Jest](https://jestjs.io/pt-BR/docs/getting-started)
- [Guia de Testes Unitários com JavaScript](https://www.devmedia.com.br/testes-unitarios-em-javascript-com-jest/42966)