// 9. Requisitos para Montanha-Russa (&& e !) 
// Para entrar em um brinquedo do parque, a pessoa precisa ter altura maior ou igual a 1.50m e idade maior ou igual a 12 anos. Porém, se a pessoa tiver problemaCardiaco igual a true, ela não pode andar de jeito nenhum.

var altura = 1.50
var idade = 12
var problemaCardiaco = true

if (altura >= 1.50 && idade >= 12 && !problemaCardiaco){
    console.log("Pode ir na montanha-russa")
} else {
    console.log("No pode")
}