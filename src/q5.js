let nome = 'Gabriel Januario'; //variável que possui o nome.
function abreviador(variavel) { //função que recebe variável como parâmetro.
    let sobrenome = variavel.indexOf(' ') + 2;// cria uma variável(sobrenome) que recebe o indice da letra antes do espaço(' '), e soma mais 2, para manter a primeira letra após o espaço.
    variavel = variavel.slice(0, sobrenome); //uso do slice para recortar do inicio até o valor de 'sobrenome', explicado anteriormente.
    return variavel + '.'; // retorna a variável após todas as modificações, com um '.' adicionado.
};
console.log(abreviador(nome)); // console.log para nos mostrar o resultado.