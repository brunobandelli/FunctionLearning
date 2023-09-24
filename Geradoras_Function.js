/*
Funções geradoras
 Permite a criação de funções que podem pausar sua execução e posteriormente serem retomadas. 
 Elas são especialmente úteis para trabalhar com operações assíncronas de maneira mais legível e eficiente.


 Para criar uma função geradora, você usa a sintaxe "function*" e dentro dela,
pode usar a palavra-chave "yield" para pausar a execução da função e enviar um valor de volta para o chamador.

 As funções geradoras são particularmente úteis quando trabalhamos com operações assíncronas, 
pois permitem escrever código assíncrono de maneira síncrona, facilitando a leitura e a lógica do programa.
*/


function* functionGeradora(){
    yield 'Vemelho'
    yield 'Verde'
    yield 'Azul'
}

const iteratorCores = functionGeradora()
console.log(iteratorCores.next().value)
console.log(iteratorCores.next().value)
console.log(iteratorCores.next().value)
console.log(iteratorCores.next().value)


console.log("------------------------------------------------------------------")


/*
 Neste exemplo, a função functionGeradora retorna um objeto gerador.
 Você pode chamar next() no gerador para obter o próximo valor da sequência.
 O objeto retornado por next() contém a propriedade value que contém o valor produzido pela função e
a propriedade done que indica se a função geradora terminou.
*/


/*---------------------------------------------------------------------------*/
console.log("------------------------------------------------------------------")

/*
 Além disso, as funções geradoras podem receber valores enviados pelo chamador usando "yield".
como o exemplo abaixo:
*/

function* perguntas(){
    const nome = yield 'Qual seu nome?'
    const esporte = yield 'Qual seu esporte favorito?'
    const cor = yield 'Qual é sua cor preferida?'
    return "Seu nome é " + nome + ', seu esporte favorito é ' + esporte + ' e sua cor preferida é ' + cor
}

const itp= perguntas()
console.log(itp.next().value)
console.log(itp.next('Bruno').value)
console.log(itp.next('Musculação').value)
console.log(itp.next('Azul').value)

/*-------------------------------------------------------------------------------------------------*/
console.log("------------------------------------------------------------------")


function* contador(){
    let i = 0
    while(true){
        yield i++
    }
}
const itc = contador()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)

/*--------------------------------------------------------------------------------------------------*/
console.log("------------------------------------------------------------------")


function* contador_Dois(){
    let i = 0
    while(true){
        yield i++
    }
}
const itc_2 = contador_Dois()

for(i=0;i<10;i++){
    console.log(itc_2.next().value)
}

/*--------------------------------------------------------------------------------------------------*/
console.log("------------------------------------------------------------------")

function* contador_Tres(){
    let i = 0
    while(true){
        yield i++
        if(i>5){
            break            //sem o break a execução ficaria infinita.
        }
    }
}
const itc_3 = contador_Tres()

for(c of itc_3){
    console.log(c)
}

