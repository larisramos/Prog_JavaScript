// Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. 
// Em seguida, combine-as em uma terceira variável usando o operador + e em uma quarta variável usando template strings. 
// Por fim, imprima os resultados obtidos no console.

let primeiroNome = 'Larissa';
let ultimoNome ='Ramos';

let nomeCompleto1 = primeiroNome + ' ' + ultimoNome;
console.log(nomeCompleto1);

let nomeCompleto2 = `${`${primeiroNome} ${ultimoNome}`}`;
console.log(nomeCompleto2);