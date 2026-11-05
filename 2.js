// 2. Entrada Gratuita no Parque (||) 
// Crie um programa que leia a idade de uma pessoa. O parque dá entrada gratuita se a pessoa tiver menos de 6 anos ou tiver 60 anos ou mais. Exiba se a pessoa paga ou entra de graça. 

var idade = 60

if (idade < 6 || idade >= 60){
    console.log("Você tem entrada franca")
} else {
    console.log("Você NÃO tem entrada franca")
}