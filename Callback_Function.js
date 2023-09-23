/*
 Funções de callback (Callback Functions):
 As funções de callback são passadas como argumentos para outras funções e 
são executadas após a conclusão de uma operação assíncrona ou de outra função. 
 São amplamente usadas em JavaScript para lidar com operações assíncronas, como chamadas de API.

 function funcaoQueRecebeCallback(callback) {
  // Realize alguma operação
  // ...
  // Chame a função de callback
  callback(argumento1, argumento2, ...);
}

*/

function callbackSucesso() {
    console.log('Operação bem-sucedida!');
  }
  
  function operacaoAssincrona(callback) {
    // Simulando uma operação assíncrona
    setTimeout(callback, 1000);
  }
  
  operacaoAssincrona(callbackSucesso);

  /*------------------------------------------------------------------------------------------------*/

  function chamada(callback) {
    console.log('Executando chamada...');
    callback();
  }
  
  function meuCallback() {
    console.log('Callback foi chamado!');
  }
  
  chamada(meuCallback);
  

  /*------------------------------------------------------------------------------------------------*/

  function executaOperacao(numero, callback) {
    const resultado = numero * 2;
    callback(resultado);
  }
  
  function meuCallback(resultado) {
    console.log('O resultado é:', resultado);
  }
  
  executaOperacao(5, meuCallback);

  /*----------------------------------------------------------------------------------------------------*/

  function operacaoAssincrona(callback) {
    // Simulando uma operação assíncrona com um atraso de 2 segundos
    setTimeout(function() {
      const resultado = 'Operação concluída!';
      callback(resultado);  // Chama a função de callback com um resultado
    }, 2000);
  }
  
  function meuCallback(resultado) {
    console.log('Callback foi chamado com resultado:', resultado);
  }
  
  // Chamando a função principal com o callback
  operacaoAssincrona(meuCallback);
  
  

  