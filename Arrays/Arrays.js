//São listas criadas utilizando []

const alunos = ['João', 'Alice', 'Marina'];

console.log (alunos);
//posso acessar algum item utilizando a localização dele na lista, sendo que a lista inicia sempre na posição 0
console.log(alunos[0]);

//Adiciona um novo aluno
alunos.push('Renan')
console.log(alunos);

//também posso adicionar um novo elemento assim: colocando o nome da array e a posição
alunos[4] = 'Vinicius';
console.log(alunos);

//Posso criar uma lista vazia e ir adicionando itens

const alunos = [];
alunos.push('Lufe');
alunos.push('Gustavo');

//Caso eu queira imprimir um dos valores que está no meio da lista posso usar o .pop, que remove o valor da lista

const alunos = ['1','2', '3'];
console.log (alunos)
//console.log(alunos.pop(2)) irá remover a posição 2 da lista e imprimir o valor, logo o console.log irá imprimir 3
console.log(alunos.pop(2));
console.log(alunos)

// .lenght  mostra o tamanho da lista

console.log(alunos.length)

