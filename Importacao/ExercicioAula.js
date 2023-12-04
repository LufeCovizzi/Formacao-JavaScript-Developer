/* Uma sala contém 5 alunos e para cada aluno foi sorteado um numero de 1 - 100.
Faça um programa que receba os 5 numeros sorteados para os alunos e mostre o maior numero sorteado

Dados de entrada:
5
50
10
98
23

Saída:
98

*/

//Poderia fazer o gets e o print em um novo arquivo para facilitar
let entradas = [5, 50, 10, 98, 23];
let i = 0;

function gets() {
    const valor = entradas [i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
}

let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    }
}
print(numerosSorteados)
print(maiorValor)


// Eu posso simplificar esse código, porque minha função gets já imprime o valor, então nao preciso colocá-los em uma lista

/*
let entradas = [5, 50, 10, 98, 23];
let i = 0;

function gets() {
    const valor = entradas [i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

let maiorValorEncontrado = 0

for (let i = 0; i < 5; i++) {
    const numeroSorteadoSimplificado = gets();
    if(numeroSorteadoSimplificado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteadoSimplificado;
    }
}

*/