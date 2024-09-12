// Exercício 12
// Escreva um algoritmo que leia a distância percorrida por um carro e o tempo gasto, calculando e mostrando a velocidade média.

var distância = parseFloat(prompt("Digite  a distancia:"))
var tempo = parseFloat(prompt("Digite  o tempo gasto:"))    

var velocidadeMedia = distância/tempo;

alert("A velocidade média é " + velocidadeMedia.toFixed(2) + " km/h.");
