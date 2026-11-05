// 11. Sugestão de Vestuário
// Crie um programa que receba a temperatura atual e uma informação se está chovendo ou não (true ou false). Se a temperatura for menor que 15 graus ou se estiver chovendo, o programa deve exibir a mensagem "Leve um casaco". Caso contrário, deve exibir "Vestuário livre". 

var temperatura = 15
var chuva = true

if (temperatura < 15 || chuva == true){
    console.log("Leve um casaco!!")
} else {
    console.log("Vestuário livre")
}