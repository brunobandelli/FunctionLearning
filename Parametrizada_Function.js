/*
Funções parametrizadas, ou funções com parâmetros, são funções que aceitam dados (parâmetros) como entrada, 
permitindo que o código dentro da função opere e produza resultados com base nesses dados. 
Os parâmetros são variáveis que recebem valores específicos quando a função é chamada, 
tornando a função mais flexível e reutilizável.
*/

function functionParametrizada(p1){  //Valor do parametro sera recebido na função
    console.log(p1)                  //Será utilizado no console.log
}

functionParametrizada("Bruno") //valor inserido no parametro
functionParametrizada(2023)    //idem
functionParametrizada(10.7)    //idem

/*------------------------------------------------------------------------------------------*/
console.log("------------------------------------------------------------------")

//O valor inserido no Parametro vai ir para a função, e será usado no console.log.


function soma(n1,n2){
    console.log(n1+n2)
}

soma(5,2)


/*------------------------------------------------------------------------------------------*/
console.log("------------------------------------------------------------------")


function somaParametrosComPadrao(n1=0,n2=5){  //Aqui foi declarado valores padrões para os parametros, caso não recebam valores especificos na chamada da função, então assumirão os valores padrões definidos na declaração da função.
    console.log(n1+n2)  //sera somado os valores conforme recebido na chamada da função caso tenha, se não, sera utilizado os valores padrões definidos dos parametros da declaração da função
}

somaParametrosComPadrao(3) //Só foi dado um valor para o parametro nesta chamada da função, o parametro assumirá o valor de forma respectiva.
somaParametrosComPadrao() //Não foi dado nem um valor para os parametros nesta função, então na declaração da função será utilizado os valores padrões definidos na declaração da função

/*
Nesta função, na declaração da função foram definidos valores padrões para os parametros,
isso significa que, se eu inserir um valor ou os dois valores nos parametros da chamada da função,
os parametros da declaração da função assumiram esses valores, 
caso contrario, seja inserio um ou nem um valor na chamada da função,
os parametros que não receberam os valores, manterão os valores padrões definidos na declaração da função.
*/


function somaParametrosPadrao_ComReturn(n1=0, n2=0){
    return n1+n2
}

console.log(somaParametrosPadrao_ComReturn(10,10))


/*------------------------------------------------------------------------------------------*/
console.log("------------------------------------------------------------------")


const ValorePadrao = 0

function somaParametrosPadrao_ComReturnDois(n1=ValorePadrao,n2=ValorePadrao){
    let res
    res = n1 + n2
    return res
}

let resultado_soma= somaParametrosPadrao_ComReturnDois(5)

console.log(resultado_soma)

/*------------------------------------------------------------------------------------------*/
console.log("------------------------------------------------------------------")

let valor = 0
console.log(valor)

function add(v){
    return valor +v
}

valor = add(10)
console.log(valor)

valor = add(5)
console.log(valor)

/*
Note que nesse caso a variavel recebera a soma e sera sempre atualizada.
*/
/*------------------------------------------------------------------------------------------*/
console.log("------------------------------------------------------------------")

let valor_Dois = 0

console.log(valor_Dois)

function add_Dois(v){
    valor_Dois +=v
}

add_Dois(10)
console.log(valor_Dois)

add_Dois(5)
console.log(valor_Dois)
/*
Neste caso podemos receber o valor da variavel sem o return e aplicar o valor do parametro sem associar a variavel.
*/


