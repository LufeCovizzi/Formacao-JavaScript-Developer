// 2) Faça um programa que receba N (quantidade de números) e seus respectivos valores.
// Imprima o maior número par e o menor número impar.

//     Exemplo:
//         Entrada:
//             5
//             3
//             4
//             1
//             10
//             8

//         Saída:
//             Maior número par: 10
//             Menor número impar: 1


const entradas = [5, 3, 4, 1, 10, 8];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

const n = gets();

let maiorNumeroPar = 0
let menorNumeroImpar = 0

for (let i = 0; i < n; i++) {
    const numeros = gets();
    if(numeros % 2 === 0) {
        if(numeros > maiorNumeroPar) {
            maiorNumeroPar = numeros;
        }
    } else {
        if (menorNumeroImpar === 0) {
        menorNumeroImpar = numeros;
    } else if (numeros < menorNumeroImpar) {
        menorNumeroImpar = numeros;
    }
}
}

print('Maior número par: '+ maiorNumeroPar)
print('Menor número impar: '+ menorNumeroImpar)