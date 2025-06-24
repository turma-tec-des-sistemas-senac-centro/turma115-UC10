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
function 

assertEquals(soma(2,2),4 ,'Soma de 2+2');
assertEquals(soma(-2,-1), -4 ,'Soma de números negativos');
