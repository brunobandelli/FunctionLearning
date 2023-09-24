/*
 Funções anônimas, são funções que não possuem um nome identificador associado a declaração da função.
 Em vez de serem definidas usando a palavra-chave function seguida por um nome, 
as funções anônimas são criadas sem um nome diretamente no local onde são necessárias.
*/

let funcaoAnonima = function(v1,v2){
    return v1+v2
}

console.log(funcaoAnonima(10,5))

console.log("------------------------------------------------------------------")

/*
 Neste exemplo, funcaoAnonima é uma variável que armazena uma função anônima. 
 A função é definida usando a palavra-chave function seguida por parênteses vazios (ou com parâmetros, 
se necessário) e, em seguida, o corpo da função.
*/

// Função anonima com parametro rest.
const funcaoAnonima_Dois = function(...valores){ 
    res=0
    for(v of valores){
        res += v
    }
    return res
}

console.log(funcaoAnonima_Dois(10,5))

/*--------------------------------------------------------------------------------------------------------------------*/
console.log("------------------------------------------------------------------")


//Função Construtor Anônima
const funcaoAnonima_FuncaoConstrutor = new Function("v1","v2","return v1+v2") 
console.log(funcaoAnonima_FuncaoConstrutor(10,5))

/*
Todas as vezes que falarmos de Contrutor/Classes, nós necessitamos de um operador chamado "new".
Uma função construtor, ser para funções mais simples, os primeiros parametros são os argumentos,
e o ultimo parametro é sempre o corpo da função, a operação da função, oque ela vai fazer.
*/


/*--------------------------------------------------------------------------------------------------------------------*/
console.log("------------------------------------------------------------------")


/*
As funções anônimas são frequentemente usadas em situações em que você deseja criar uma função "ad hoc" 
que pode ser passada como argumento para outra função, armazenada em uma variável ou usada como uma expressão em 
algum lugar do código.
*/

//Exemplo de uso de função anônima como argumento para outra função (callback):
const arrayNumeros = [1, 2, 3, 4, 5];

arrayNumeros.forEach(function(numero) {  // Usando função anônima como callback para a função forEach
  console.log(numero);
});


/*
Embora as funções anônimas sejam úteis em muitos cenários, em JavaScript moderno, 
as arrow functions (=>) frequentemente substituíram funções anônimas em muitos casos, 
pois oferecem uma sintaxe mais concisa e uma ligação lexical diferente para this.
*/