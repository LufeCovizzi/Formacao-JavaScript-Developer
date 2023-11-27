/*
class Pessoa {
    nome;
    idade;
    descrever() {
        console.log(`O meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

const lufe = new Pessoa();
lufe.nome = 'Luiz Fernando Covizzi';
lufe.idade = 25;

const renan = new Pessoa ();
renan.nome = 'Renan';
renan.idade = 21

console.log(lufe)
console.log(renan)
lufe.descrever();
renan.descrever();
*/

/*
  //Constructor irá acontecer sempre que uma nova pessoa for instanciada

  class Pessoa {
  nome;
  idade;
  constructor () {
    this.nome = 'teste';
    this.idade = 20;
  }
  
  descrever() {
    console.log(`O meu nome é ${this.nome} e minha idade é ${this.idade}`);
  }
}

const lufe = new Pessoa();
const vitor = new Pessoa();
*/

class Pessoa {
  nome;
  idade;
// O construtor pode receber parâmetros, e isso obriga que sempre que uma pessoa seja instanciada, ele peça os parâmetros
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2023 - idade;
  }

  descrever() {
    console.log(`O meu nome é ${this.nome} e minha idade é ${this.idade}`);
  }
}

//Os parâmetros pedidos no construtor nome, idade
const lufe = new Pessoa("Luiz Fernando", 25);
console.log(lufe);
