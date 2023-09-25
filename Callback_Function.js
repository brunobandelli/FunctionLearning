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
    console.log( 'Callback foi chamado!');
  }
  
  function executaOperacao(callback) {
    callback()
  }
  
  executaOperacao(callbackSucesso);

/*------------------------------------------------------------------------------------------------*/
console.log("------------------------------------------------------------------")


  function operacaoAssincrona(callback) {
    console.log('Executando chamada...');
    // Simulando uma operação assíncrona
    setTimeout(callback, 1000);
  }
  
  function meuCallback() {
    console.log('Operação bem-sucedida! - RESULTADO DA 2° FUNÇÃO, APÓS 1s');
  }
  
  operacaoAssincrona(meuCallback);
  

  /*------------------------------------------------------------------------------------------------*/
console.log("------------------------------------------------------------------")


  function executaOperacao_Dois(numero, callback) {
    const resultado = numero * 2;
    callback(resultado);
  }
  
  function meuCallback_Dois(resultado) {
    console.log('O resultado é:', resultado);
  }
  
  executaOperacao_Dois(5, meuCallback_Dois);

  /*----------------------------------------------------------------------------------------------------*/
console.log("------------------------------------------------------------------")


  function operacaoAssincrona_Dois(callback) {
    // Simulando uma operação assíncrona com um atraso de 2 segundos
    setTimeout(function() {
      const resultado = 'Operação concluída!';
      callback(resultado);  // Chama a função de callback com um resultado
    }, 2000);
  }
  
  function meuCallback_Tres(resultado) {
    console.log('Callback foi chamado com resultado:', resultado);
  }
  
  // Chamando a função principal com o callback
  operacaoAssincrona_Dois(meuCallback_Tres);
  
  

  