// Exercício 9
// Faça um algoritmo que leia a quantidade de dias e converta essa quantidade para horas, minutos e segundos.

var dia = parseInt(prompt("Dias:"));

var horas = 24*dia;
var minuto = 1440*dia;
var segundo = 86.400*dia;

alert(dia + " dias " + " é equivale a " + horas+"h , "+minuto+" minutos e "+segundo+" segundos" )

