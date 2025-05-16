let texto = 'Sexta-feira'; // variavel que vai receber a string
let recortador = function(variavel,letras) { //função que vai receber 2(dois) parâmetros, sendo eles respectivamente, a string e a quantidade de letras que permanecerá.
    return variavel.slice(0,letras) // retorno do uso de '.slice' na string, começando de 0(primeiro indice), e recortando n numeros de letras.
}
console.log(recortador(texto,4)); //console.log para nos mostrar o resultado.