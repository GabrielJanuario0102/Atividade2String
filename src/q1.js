let texto = 'Sexta-feira, play tv.'; // Criei uma variável para ser verificada.
function verificar(variavel) { // iniciei uma função declaration que recebe apenas um parâmetro(a variável).
    if (typeof(variavel) == 'string') { //criei um if para verificar se o tipo de valor na variável é igual a 'string' (typeof).
        return true // caso verdadeiro, retornará o valor boolean true.
    } else {
        return false // caso contrário, retornará o valor boolean false.
    };
};
console.log(verificar(texto)); //uso da função em um console.log para nos mostrar o resultado.