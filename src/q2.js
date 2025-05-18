let texto = ''; //criei uma variável para receber o texto.
let VerificarVazia = function(variavel) { //criei uma função expression que recebe apenas um parâmetro.
    if (variavel === '') { //usei um if para verificar se a string está vazia.
        return true //caso verdadeiro, retornará true.
    } else {
        return false //caso falso, retornará false.
    };
};
console.log(VerificarVazia(texto)); //console.log para nos apresentar o resultado.
