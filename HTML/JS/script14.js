// Exercício 3
// Desenvolva um algoritmo que leia o valor do salário de um funcionário, aplique um aumento de 10% e mostre o novo salário.

var salario = parseFloat(prompt("Digite o valor do salário do funcionário:"));
var reajuste = salario*10/100
var novoSalario = salario +reajuste;

alert("O novo salário do colaborador com aumento de 10% é: R$ " + novoSalario.toFixed(2));