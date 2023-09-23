/*
 As funções nomeadas são aquelas que têm um nome associado a elas na declaração da função e
podem ser chamadas usando esse nome.
*/

function FuncaoNomeada(){                                //Declaração da função
    console.log("Essa é uma simples função tradiconal")
}


function doisMaisDez(){                                     //Declaração da Função
    n1 = 2
    n2 = 10
    soma = n1 + n2
    console.log(soma)
}



FuncaoNomeada()              //Chamada da Função
doisMaisDez()                   //Chamad da Função

for(i=0;i<10;i++){
    doisMaisDez()
}