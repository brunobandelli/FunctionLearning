/*
 Arrow Function ou Funções Lambdas.
 Arrow function são mecanismos concisos para representar funções anonimas e possue uma sintaxe mais simples e legivel.
 Elas usam a sintaxe de seta (=>) e têm algumas diferenças de escopo e 
 comportamento em comparação com as funções tradicionais.
*/

/*sintaxe
const minhaArrowFunction = (param) => {
  return param;
};
*/

//Exemplos:
/*-----------------------------------------------*/
console.log("------------------------------------------------------------------")


const arrowFunction = (v1,v2)=>{
        return v1+v2
}
console.log(arrowFunction(7,3))


/*----------------------------------------------*/
console.log("------------------------------------------------------------------")


const arrowFunction_Nome = n=>{return n}
console.log(arrowFunction_Nome("Bruno"))

/*----------------------------------------------*/
console.log("------------------------------------------------------------------")


const arrowFunction_Numero = n => n+10 // Se não por o return, não precisa por chaves{}, em caso simples assim.
console.log(arrowFunction_Numero(10))

/*----------------------------------------------*/
console.log("------------------------------------------------------------------")


const arrowFunction_Soma = (v1,v2)=>{
        let res = v1+v2
        return res //como agora é uma situação mais complexa dentro da função, precisará de um return.
}
console.log(arrowFunction_Soma(10,5))