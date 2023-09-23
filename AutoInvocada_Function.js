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

(function() {
    console.log('Esta é uma função autoinvocada.');
  })();
  