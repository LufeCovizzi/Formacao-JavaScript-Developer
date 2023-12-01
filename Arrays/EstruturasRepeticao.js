
/*
// Sintaxe: For (declaração da variável; Condição da variável; o que ocorrerá quando a chave de código acabar)
for (let index = 0; index < array.length; index++) {
    
}



const nome = 'Escreva Seu Nome';

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);

}

*/

const notas = [];

notas.push(6);
notas.push(9);
notas.push(4);
notas.push(8);
notas.push(5);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length

console.log (soma);
console.log (media)