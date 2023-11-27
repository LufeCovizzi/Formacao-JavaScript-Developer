// Objeto é uma coleção dinâmica de chave e valor

//sintaxe:
let lufe = {
    nome: 'Luiz Fernando Covizzi',
    idade: 25
};

console.log(lufe.nome);
console.log(lufe.idade);
console.log(lufe);

//Posso incrimentar o objeto fota das {}

const vitor = {
    nome: 'Vitor',
    idade: 25
};

vitor.altura = 1.69
console.log (vitor)


// Posso deletar um objeto:

const vitor = {
    nome: 'Vitor',
    idade: 25
};

vitor.altura = 1.69;

delete vitor.nome;

console.log (vitor)

//Podemos criar funções dentro dos objetos

const vitor = {
    nome: 'Vitor',
    idade: 25,
    //O this nessa função assume o papel de invocar o "vitor.nome", ela diz respeito ao contexto onde ela está informada. O this assume o objeto 
    descrever: function() {
        console.log (` meu nome é ${this.nome} e minha idade é ${this.idade}` )
    }
};

vitor.descrever();

//Acessar dinamicamente um objeto utilizando um atributo


const vitor = {
    nome: 'Vitor',
    idade: 25,
    //O this nessa função assume o papel de invocar o "vitor.nome", ela diz respeito ao contexto onde ela está informada. O this assume o objeto 
    descrever: function() {
        console.log (` meu nome é ${this.nome} e minha idade é ${this.idade}` )
    }
};

const atributo = 'idade';

console.log (vitor[atributo]);

//ou
console.log(vitor['nome']);


