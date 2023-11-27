// Função escreva meu nome

function escrevaMeuNome(nome) {
    console.log ('Meu nome é ' + nome);
};

escrevaMeuNome('Lufe');

//Função para ver se sou maior de idade

function verificarIdade (idade) {
    if (idade >= 18) {
        console.log ('Maior de idade')
    } else {
        console.log ('Menor de idade')
    }
}

verificarIdade(25)

//Exercício da etiqueta com desconto, pagamento 1: débito com 10% de desconto; pagamento 2: Dinheiro ou Pix com 15% de desconto; Pagamento 3: Parcelado em 2x, pagamento do valor normal do produto
//Pagamento 4: Parcelamento 3x ou mais, acréscimo de 10% de juros.

function aplicarDesconto(valor, desconto){
    return (valor - (valor * (desconto/100)));
};

function aplicarJuros (valor, juros) {
    return (valor + (valor * (juros/100)))
}



let precoEtiqueta = 100;
let formaPagamento = 4;

if (formaPagamento === 1) {
    console.log(aplicarDesconto(precoEtiqueta,10));
}else if (formaPagamento === 2) {
    console.log(aplicarDesconto(precoEtiqueta,15));
} else if (formaPagamento === 3) {
    console.log (precoEtiqueta);
} else {
    console.log (aplicarJuros(precoEtiqueta, 10));
}
