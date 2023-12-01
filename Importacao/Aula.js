
/* Podemos criar um arquivos com algumas funções auxiliares contendo os códigos para que não nos
confunda; para dividir atividades; para facilitar a leitura e aplicação, etc.

1) Iniciaremos criando um arquivo de funcoes-auxiliares.js e nele colocaremos nossas funções

2) Criamos uma outra pasta, a main.js

3) Para importar utilizamos a função require('./localDoArquivo'), e a declaramos em uma variável/constante

-> nesse caso: const funcoes = require('./funcoes-auxiliares);

4) Para que o comando require funcione, é necessário colocar na pasta que desejamos exportar (funcoes-auxiliares)
o comando -> module.exports = {nome das funções que dejeso exportar - são meus métodos}

-> nesse caso: module.exports = {gets, print};

5) Podemos alterar o metodo de importação do passo 3 para ser mais simples, ja puxando as funções exportadas
sem precisar criar uma constante. Isso simula os exercicios da plataforma

-> nesse caso: const {gets, print}  = require('./funcoes-auxiliares);
*/

