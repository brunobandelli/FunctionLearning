/*
Funçãos com return, são funções que rotornam valores para quem fez a sua chamada.
*/


function functionComRetorno(){
    return "Brunão"
}

console.log(functionComRetorno())

/*---------------------------------------------------------------------------------------------------------*/
console.log("------------------------------------------------------------------")


function multiplicacao(){
    n1= 2
    n2= 4
    mult= n1*n2
    return mult
}

console.log(multiplicacao())

let resposta = multiplicacao() //Você pode armazenar em uma variavel o retorno da função também.

console.log(resposta)

/*------------------------------------------------------------------------------------------------*/
console.log("------------------------------------------------------------------")


function parOuImpar(){
    let resultado = ""

    for(let i=0; i<10; i++){
        if( i % 2 == 0 ){
            resultado += i + " par\n"
        }else{
            resultado += i + " impar\n"
        }
    }

    return resultado
}


console.log(parOuImpar())

/*
OBS:
Observe que nesta função a cima, foi necessario criar uma variavel para que o loop possa iterar em todos os numeros,
isso acontece por que:
Dentro de uma função, o return é utilizado para retornar um valor específico para quem chamou essa função. 
Quando a função é chamada, a execução da função é interrompida no momento em que um return é encontrado, 
e o valor especificado após o return é retornado à parte do código que chamou a função.
Ou seja, só retorna um return.
*/