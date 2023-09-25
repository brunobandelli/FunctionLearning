/*
 Funções autoinvocadas (Immediately Invoked Function Expressions - IIFE):
 São funções que são declaradas e executadas imediatamente após sua definição. 
 Elas são frequentemente usadas para criar escopo privado e evitar conflitos de nome.
*/

/*
 Os parênteses nas extremidades da função definem uma função autoinvocada.
 Os parênteses transformam a função em uma expressão de função, 
permitindo que você a invoque imediatamente após a sua definição e 
os parênteses no final () a invocam imediatamente após a definição.

(function() {
  // Código da função
})();
*/

//Padrão Básico:

(function() {
    console.log('Esta é uma função autoinvocada.');
  })();
  

/*----------------------------------------------------------------------------------------*/
console.log("------------------------------------------------------------------");


//Com Argumentos:

(function(nome) {
  console.log('Olá, ' + nome + '!');
})('Alice');

/*-----------------------------------------------------------------------------------------*/
console.log("------------------------------------------------------------------");


//Retornando Valores:

const resultado = (function(a, b) {
  return a + b;
})(5, 3);

console.log('Resultado da função autoinvocada:', resultado); // Saída: 8

/*---------------------------------------------------------------------------------------*/
console.log("------------------------------------------------------------------");


//Usando Arrow Function:

(() => {
  console.log('Essa é uma função autoinvocada usando uma arrow function.');
})();

/*---------------------------------------------------------------------------------------*/
console.log("------------------------------------------------------------------");


//Utilizando o Escopo para Criar Variáveis Privadas:

const contador = (function() {
  let count = 0;

  return {
    increment: function() {
      count++;
    },
    getValue: function() {
      return count;
    }
  };
})();

contador.increment();
contador.increment();
console.log('Valor do contador:', contador.getValue()); // Saída: 2
