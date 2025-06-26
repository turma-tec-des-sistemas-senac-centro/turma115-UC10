//validador
function assertEquals(actual, expect, message = ''){
    if(actual !== expect){
       console.error(`❌ Falhou: ${message} - Esperado: ${expect}, Recebido: ${actual}`)
       return
    }
    console.log(`✅ Passou: ${message}`);
}

function soma(a, b){
    return a + b;
}


assertEquals(soma(2,2),4 ,'Soma de 2+2');
assertEquals(soma(-2,-1), -4 ,'Soma de números negativos');


function multiplicar(a, b) {
    return a * b;
  }
  
  // Testes
  assertEquals(multiplicar(4, 2), 8, 'Multiplicação de 4 * 2');
  assertEquals(multiplicar(5, 0), 0, 'Multiplicação de 5 * 0');
  assertEquals(multiplicar(-3, 2), -6, 'Multiplicação de -3 * 2');


  function ehPar(n) {
    return n % 2 === 0;
  }
  
  // Testes
  assertEquals(ehPar(4), true, '4 é par');
  assertEquals(ehPar(5), false, '5 não é par');
  assertEquals(ehPar(0), true, '0 é par');


  function inverterString(str) {
    return str.split('').reverse().join('');
  }
  
  // Testes
  assertEquals(inverterString('abc'), 'cba', 'Invertendo abc');
  assertEquals(inverterString('1234'), '4321', 'Invertendo 1234');
  assertEquals(inverterString('radar'), 'radar', 'Invertendo radar');