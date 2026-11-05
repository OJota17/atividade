// 13. Funcionamento da Loja
// Uma loja funciona apenas de segunda a sexta-feira, no horário das 8h às 18h. Crie um programa que receba o dia da semana e a hora atual (número inteiro) e informe se a loja está aberta ou fechada. 

var dia = "quinta-feira"
var hora = 6
if (!(dia == "sabado" || dia == "domingo") && (hora < 8 || hora > 18)){
    console.log("Não está funcionando")
} else {
    console.log("Está funcionando")
}