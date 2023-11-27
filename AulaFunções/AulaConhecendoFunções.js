// Estrutura: function nome(){ }

function teste(){
    console.log ('teste')
};

teste();

// Chamando funções com parâmetros
function sayMyName (name){
    console.log ('Your name is '+ name)

}

sayMyName('Luiz')

//Funções com retorno

function calcularQuadrado(numero){
   return numero * numero;
};

let numeroQuadrado = calcularQuadrado(20);
console.log (numeroQuadrado)

/* ou posso alterar o código para: 

function calcularQuadrado(numero){
   return numero * numero;
};

console.log (calcularQuadrado(10) + calcularQuadrado(10))
*/


//Exercício de juros, pegar um valor e incrementar um juros

function incrementarJuros (valor, percentualJuros){

   const valorAcrescimo = (percentualJuros / 100) * valor
   return valor + valorAcrescimo
}

console.log (incrementarJuros (100, 10))