// 1) Faça um programa que receba a média de um aluno.
// Caso a média seja < 5 imprima "Reprovado"
// Caso a média seja >= 5 e < 7 imprima "Recuperação"
// Caso a média seja >= 7 imprima "Aprovado"

//     Exemplo:
//         Entrada:
//             5.5
//         Saída:
//             Recuperação

const entradas = [8];
let i = 0;

function gets() {
  const valor = entradas[i];
  i++;
  return valor;
}

function print(texto) {
  console.log(texto);
}

// Caso estivesse em uma outra pasta
// module.exports = { gets, print };

const media = gets();

if (media < 5) {
  print("Reprovado");
} else if (media >= 5 && media < 7) {
  print("Recuperação");
} else {
  print("Aprovado");
}
