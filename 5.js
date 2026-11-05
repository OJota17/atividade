// 5. Desconto no Cinema (||) 
// O cinema dá desconto se o dia da semana for "quarta-feira" ou se o cliente for "estudante". Crie um programa que receba o dia e a condição de estudante (true/false) e informe se ele tem direito ao desconto.

var dia = "Quarta-Feira"
var estudante = true

if (dia == "Quarta-Feira" || estudante == true){
    console.log("Você tem desconto.")
} else {
    console.log("Você não tem desconto.")
}