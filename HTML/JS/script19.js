// Exercício 8
// Escreva um algoritmo que leia o preço de um produto e um percentual de desconto. Calcule o valor do desconto e o preço final com o desconto aplicado.

var preco = parseFloat(prompt("Digite o preco do produto:"));
var desconto = parseFloat(prompt("Digite o desconto:"));

var novoValor = preco - ( desconto/100*preco)
alert("O novo preco corresponde a: R$" + novoValor)

if (novoValor > 90) {

    alert("Compra pode ser divida em 3 vezes.")
}