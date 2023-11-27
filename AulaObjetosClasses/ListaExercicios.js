/*1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor (marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    };

    calcularGasto (distânciaEmKm, valorCombustivel){
        return distânciaEmKm * this.gastoMedioPorKm * valorCombustivel;
    }
}


const uno = new Carro ('Fiat UNO','Branco', 1/10);

console.log(uno.calcularGasto(70, 5));



/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome,peso, altura){
    this.peso = peso;
    this.altura = altura;
    this.nome = nome;
    }

    calcularIMC () {
        return this.peso / (this.altura * this.altura);
    }

    classificarIMC (){
        const imc = this.calcularIMC();
        if (imc < 18.5) {
            console.log(imc.toFixed(2));
            return ("Abaixo do peso");
          } else if (imc >= 18.5 && imc < 25) {
            console.log(imc.toFixed(2));
            return ("Peso normal");
          } else if (imc >= 25 && IMC < 30) {
            console.log(imc.toFixed(2));
            return ("Acima do peso");
          } else if (imc >= 30 && imc < 40) {
            console.log(imc.toFixed(2));
           return ("Obeso");
          } else {
            console.log(imc.toFixed(2));
            return ("Obesidade grave");
    }
}
}

const jose = new Pessoa('José', 70, 1.75);

console.log(jose.classificarIMC());