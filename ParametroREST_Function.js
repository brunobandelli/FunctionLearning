/*
 Parametros REST é uma forma de passagem de parametros, 
aonde eu não preciso especificar efetivamente a quantidade de parametros que eu quero enviar para dentro da função.
 Eu posso adicionar valores sem precisar mudar a minha função.
 Isso é útil quando você não sabe quantos argumentos a função vai receber de antemão.
*/

/*
Considerações Importantes:

O parâmetro REST deve ser o último na lista de parâmetros da função.
Uma função pode ter apenas um parâmetro REST.
Os parâmetros REST são tratados como um array, o que significa que você pode usar métodos de array (como length, forEach, etc.) para manipulá-los.
*/

function soma(...valores){  //valores é um array. com o spread ele vira um parmetro rest. assim eu posso passar quantos parametros que eu quiser para a minha função
    let tamanho = valores.length // aqui estou verificando quantos parametros foram passados, pegando o comprimiento desse array.
    
    let resp=0
    for(i=0;i<tamanho;i++){
        resp += valores[i]
    }

    return resp
}

console.log(soma(10,5,2)) //Eu posso passar quantos parametros eu quiser para a declaração da função.

/*--------------------------------------------------------------------------------------------------------------------*/

function somaExemploForOf(...valores){     
    let resp=0
    for(let v of valores){
        resp += v
    }
    return resp
}

console.log(somaExemploForOf(10,5,2))

//com o for of fica mais simples a construção da operação da função.