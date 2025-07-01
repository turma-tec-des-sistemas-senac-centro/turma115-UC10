
# 📚 Lista de Exercícios Matchers – TDD e Jest (Testes Unitários)

## 🧪 Instruções Gerais

Para cada exercício, siga o ciclo TDD:

1. Escreva o **teste** com `expect(...)`, baseado no comportamento esperado
2. Rode o teste e veja ele **falhar**
3. Implemente a **função** de forma mínima
4. Rode o teste e veja ele **passar**
5. **Refatore** o código se necessário
6. **Valide tipos de entrada e saída**

## ✔️ Diretrizes de Validação

- Garanta que os **tipos de retorno** estejam corretos (`number`, `boolean`, `string`, `array`, `object`, `null`, `undefined`)
- Use mensagens claras nos testes (`test('deve retornar média como número', ...)`)
- Teste **casos positivos e negativos**
- Sempre cubra casos extremos (ex: array vazio, valores inválidos, ausência de parâmetros)

---

### 1. `calculaMedia(lista)`
> Calcula a média dos números em uma lista.

- Entrada: `[7, 8, 9]`  
  Saída esperada: `8` (tipo: `number`)
- Entrada: `[]`  
  Saída esperada: `null` (tipo: `null`)

---

### 2. `filtraMaiores(lista, limite)`
> Retorna os números maiores que o limite informado.

- Entrada: `[10, 20, 30]`, limite `15`  
  Saída esperada: `[20, 30]` (tipo: `array<number>`)
- O array resultante deve conter o número `30`

---

### 3. `ehPrimo(n)`
> Retorna `true` se o número for primo.

- Entrada: `7` → `true` (tipo: `boolean`)
- Entrada: `9` → `false` (tipo: `boolean`)

---

### 4. `mensagemDeBoasVindas(nome)`
> Retorna a string `"Olá, {nome}! Seja bem-vindo(a)"`.

- Entrada: `"Maria"`  
  Saída esperada: string contendo `"Maria"` (tipo: `string`)  
  Deve conter também a palavra `"Olá"`

---

### 5. `calculaDesconto(valor, percentual)`
> Calcula o valor final com desconto aplicado.

- Entrada: `100, 10`  
  Saída esperada: `90` (tipo: `number`)  
  O valor final deve ser menor que o valor original

---

### 6. `isEmpty(valor)`
> Verifica se o valor é considerado "vazio".

- Entrada: `""` → `true`  
- Entrada: `[]` → `true`  
- Entrada: `null` → `true`  
  (Tipo de retorno: `boolean`)

---

### 7. `validaEmail(email)`
> Verifica se o email está no formato `texto@dominio.com`.

- Entrada: `'joel@email.com'`  
  Saída esperada: `true` (tipo: `boolean`)  
  Deve seguir padrão de email (regex simples)

---

### 8. `mediaPonderada(valores, pesos)`
> Retorna a média ponderada de dois arrays.

- Entrada: `[7, 8]`, `[1, 2]`  
  Saída esperada: aproximadamente `7.67` (tipo: `number`)
- Entrada com arrays de tamanhos diferentes  
  Saída esperada: `null` (tipo: `null`)

---

### 9. `invertePalavras(frase)`
> Inverte a ordem das palavras da frase.

- Entrada: `"bom dia pessoal"`  
  Saída esperada: `"pessoal dia bom"` (tipo: `string`)  
  A string retornada deve conter `"pessoal"`

---

### 10. `buscaProduto(lista, nome)`
> Retorna um objeto com nome e preço, ou `undefined` se não encontrado.

- Entrada: lista de produtos, nome `"Feijão"`  
  Saída esperada: `{ nome: 'Feijão', preco: 8 }` (tipo: `object`)
- Entrada: nome inexistente  
  Saída esperada: `undefined` (tipo: `undefined`)

---
