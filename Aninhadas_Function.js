/*
Funções aninhadas, também conhecidas como funções dentro de funções ou funções internas,
referem-se à prática de definir uma função dentro de outra função
*/

const functionResposta = (...valores)=>{
    const functionAninhadaSomar =val=>{
        let res = 0
        for(v of val){
            res +=v
        }
        return res
    }
    return functionAninhadaSomar(valores)
}

console.log(functionResposta(10,5,15))

console.log("------------------------------------------------------------------")


/*
Neste exemplo, temos a função externa functionAninhada(), que contém uma função interna chamada somar().
A função externa recebe uma lista de valores como argumentos e passa esses valores para a função interna somar(). 
A função interna, através de um loop, percorre esses valores e os acumula, retornando a soma total. 
Essa soma é então retornada à função que a chamou, que por sua vez a retorna para o console.log() 
quando chamamos functionAninhada(). O resultado final, que é a soma dos valores fornecidos, é impresso no console.
*/


/*------------------------------------------------------------------------------------------*/
console.log("------------------------------------------------------------------")


const somar =val=>{
    let res = 0
    for(v of val){
        res +=v
    }
    return res
}

const functionAninhada_Dois = (...valores)=>{
    return somar(valores)
}

console.log(functionAninhada_Dois(10,5,15))

/*-------------------------------------------------------------------------------------------*/
console.log("------------------------------------------------------------------")


const somar_Dois =val=>{
    let res = 0
    for(v of val){
        res +=v
    }
    return res
}

const functionAninhada_Tres = (...valores)=>{
    return somar_Dois(valores)
}

valor=[10,5,15]
console.log(functionAninhada_Tres(...valor))
