// 1) Crie um programa que dado um número imprima sua tabuada

//Substituir por qualquer numero
let numero = 3;

for (let i = 1; i <= 10; i++) {
    console.log (i * numero);
}


// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado

let list = [];
list.push(6);
list.push(9);
list.push(4);
list.push(8);
list.push(5);
list.push(10);


for (let i = 0; i < list.length; i++) {
    let numeroDaLista = list[i];

    if ((numeroDaLista % 2 === 0)) {
        console.log(numeroDaLista +  ' é um número par');
    } else { 
        console.log(numeroDaLista + ' é um número impar');
    }
}
