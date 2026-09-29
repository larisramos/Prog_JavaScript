const estudante = 'Larissa';
const docente = 'Felipe';
const cumprimento = "Nosso lema é estudar para aprender e não para decorar";
const citacao = 'Lari diz: "O importante não é vencer todos os dias, mas lutar sempre"';

console.log(cumprimento);
console.log(citacao);

console.log ('A estudante chama ' + estudante );

//template string
console.log(`A estudante chama ${estudante}`);

const senha = 'Senha1234' + estudante.toUpperCase(); //concatenando a senha com o nome da estudante em letras maiúsculas
console.log(senha);