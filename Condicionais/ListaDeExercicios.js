/* 
    1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/

let primeiraNota = 7;
let segundaNota = 8;
let terceiraNota = 7;

const mediaNota = (primeiraNota + segundaNota + terceiraNota) / 3;
console.log(mediaNota.toFixed(2));

if (mediaNota < 5) {
  console.log("O aluno está reprovado");
} else if (mediaNota >= 5 && mediaNota <= 7) {
  console.log("O aluno está de recuperação");
} else {
  console.log("O aluno passou de semestre");
}

/*
    2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

    Formula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

    IMC em adultos Condição:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obsesidade Grave;
*/

let peso = 100;
let altura = 1.82;
const IMC = peso / (altura * altura);
// posso usar uma biblioteca matemática para fazer potências e outras funções matemáticas, como altura ao quadrado: const IMC = peso / Math.pow(altura,2));

if (IMC < 18.5) {
  console.log(IMC);
  console.log("Abaixo do peso");
} else if (IMC >= 18.5 && IMC < 25) {
  console.log(IMC.toFixed(2));
  console.log("Peso normal");
} else if (IMC >= 25 && IMC < 30) {
  console.log(IMC.toFixed(2));
  console.log("Acima do peso");
} else if (IMC >= 30 && IMC < 40) {
  console.log(IMC.toFixed(2));
  console.log("Obeso");
} else {
  console.log(IMC.toFixed(2));
  console.log("Obesidade grave");
}

/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
   1 - À vista Débito, recebe 10% de desconto;
   2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
   3 - Em duas vezes, preço normal de etiqueta sem juros;
   4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

let valor = 100;
let tipoPagamento = "débito";

if (tipoPagamento === "débito") {
  console.log("Voce recebeu 10% de desconto");
  let valorDebito = valor - valor * 0.1;
  console.log("Você irá pagar " + valorDebito.toFixed(2) + " reais");
} else if (tipoPagamento === "dinheiro" || tipoPagamento === "pix") {
  console.log("Voce recebeu 15% de desconto");
  let valorVista = valor - valor * 0.15;
  console.log("Você irá pagar " + valorVista.toFixed(2) + " reais");
} else if (tipoPagamento === "2x") {
  console.log("Voce não recebeu desconto :(");
  let valorSemJuros = valor;
  console.log("Você irá pagar " + valorSemJuros.toFixed(2) + " reais");
} else {
  console.log("Voce irá pagar 10% de juros");
  let valorComJuros = valor * 1.1;
  console.log("Você irá pagar " + valorComJuros.toFixed(2) + " reais");
}

//Ou posso minimizar o código

/*
let valor = 100;
let tipoPagamento = 1;

if (tipoPagamento === 1){
  console.log('Voce recebeu 10% de desconto')
  let valorDebito = valor - (valor * 0.1)
  console.log ('Você irá pagar ' + valorDebito.toFixed(2) + ' reais')
} else if (tipoPagamento === 2 || tipoPagamento === 3){
  console.log('Voce recebeu 15% de desconto')
  let valorVista = valor - (valor * 0.15)
  console.log ('Você irá pagar ' + valorVista.toFixed(2) + ' reais')
} else if (tipoPagamento === 4) {
  console.log('Voce não recebeu desconto :(')
  let valorSemJuros = valor
  console.log ('Você irá pagar ' + valorSemJuros.toFixed(2) + ' reais')
} else {
  console.log('Voce irá pagar 10% de juros')
  let valorComJuros = valor * 1.1
  console.log ('Você irá pagar ' + valorComJuros.toFixed(2) + ' reais')

*/
