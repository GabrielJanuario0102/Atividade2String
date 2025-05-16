let texto = 'Gabriel Januario de Araujo'; //criei uma variável que vai receber o texto.
function Separador(variavel) { //criei uma função que recebe "variavel" como parâmetro.
    return (variavel.split(' ')); //faz o uso da "split function", que separa a string quando um espaço(' ') é lido.
};
console.log(Separador(texto)); //console.log para nos mostrar o resultado no console.