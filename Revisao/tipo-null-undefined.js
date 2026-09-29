let nomeEstudante;
console.log(nomeEstudante); // undefined
console.log(typeof nomeEstudante); // undefined

console.log('Undefined é um tipo de dado que representa a ausência de valor atribuído a uma variável. Quando uma variável é declarada, mas não inicializada, ela recebe o valor undefined por padrão.');

let telefone = null;

console.log(telefone +3); // null + 3 = 3
console.log(nomeEstudante +3); // undefined + 3 = NaN
console.log(typeof telefone); // object

console.log('Null é um tipo de dado que representa a ausência intencional de valor. Diferente do undefined, null é atribuído explicitamente a uma variável para indicar que ela não possui valor.');

console.log('A diferença entre null e undefined é que undefined indica que uma variável foi declarada, mas ainda não foi inicializada, enquanto null é usado para indicar a ausência intencional de valor em uma variável.');

console.log('NaN (Not a Number) é um valor especial que indica que uma operação matemática não pôde ser realizada corretamente. Por exemplo, quando tentamos somar undefined com um número, o resultado é NaN, pois undefined não é um valor numérico válido.');

console.log('Utilizando o operador typeof, podemos verificar o tipo de dado de uma variável. No caso de null, o typeof retorna "object", enquanto para undefined, ele retorna "undefined".');