# Aula 03 Tipos de Matchers no Jest

## O que são Matchers?

Matchers são funções do Jest usadas para comparar valores em testes. Eles verificam se o resultado de uma função ou expressão corresponde ao esperado.

---

## Exemplos de Matchers Comuns

### Igualdade

Use quando quiser comparar valores primitivos ou verificar se objetos/arrays possuem o mesmo conteúdo.

```js
expect(valor).toBe(esperado); // compara valores primitivos
// Exemplo:
expect(5).toBe(5);

expect(objeto).toEqual(objetoEsperado); // compara objetos/arrays
// Exemplo:
expect({ nome: 'Ana' }).toEqual({ nome: 'Ana' });
```

### Verdadeiro/Falso

Use quando quiser verificar se um valor é avaliado como verdadeiro ou falso em contexto booleano.

```js
expect(valor).toBeTruthy();
// Exemplo:
expect('texto').toBeTruthy();

expect(valor).toBeFalsy();
// Exemplo:
expect(0).toBeFalsy();
```

### Números

Use para comparar valores numéricos, como limites, intervalos ou igualdade aproximada.

```js
expect(numero).toBeGreaterThan(10); // maior que 10
// Exemplo:
expect(15).toBeGreaterThan(10);

expect(numero).toBeLessThanOrEqual(20); // menor ou igual a 20
// Exemplo:
expect(18).toBeLessThanOrEqual(20);
```

### Strings

Use para verificar se uma string contém determinado padrão ou substring.

```js
expect('senac').toMatch(/sen/);
// Exemplo:
expect('javascript').toMatch('script');
```

### Arrays e Objetos

Use para checar se um array contém um item específico ou se um objeto possui uma propriedade.

```js
expect([1, 2, 3]).toContain(2);
// Exemplo:
expect(['a', 'b', 'c']).toContain('b');

expect({nome: 'João'}).toHaveProperty('nome');
// Exemplo:
expect({ idade: 30, ativo: true }).toHaveProperty('ativo');
```

### Exceções

Use para verificar se uma função lança uma exceção esperada.

```js
expect(() => {
    // código que deve lançar erro
    throw new Error('Erro!');
}).toThrow();
// Exemplo:
function dividirPorZero() {
    throw new Error('Divisão por zero');
}
expect(dividirPorZero).toThrow('Divisão por zero');
```

---

## Saiba Mais Sobre Matchers

Para aprofundar seus conhecimentos sobre matchers no Jest, consulte a [documentação oficial do Jest](https://jestjs.io/pt-BR/docs/using-matchers). Lá você encontrará uma lista completa de matchers disponíveis, exemplos avançados e dicas para testar diferentes tipos de valores, como erros, funções assíncronas e mocks.
A prática com matchers é essencial para escrever testes eficazes e garantir que seu código funcione como esperado. Explore diferentes matchers e experimente-os em seus próprios projetos para entender melhor como eles funcionam.
