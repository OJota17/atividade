// 1. Validação de Login Simples (&&) 
// Crie um programa que receba o usuário e a senha em variáveis. Exiba a mensagem "Acesso permitido" apenas se o usuário for exatamente "admin" e a senha for "1234". 

var user = "admin"
var pass = "1234"

if (user == "admin" && pass == "1234"){
    console.log("Acesso permitido =)")
} else {
    console.log("Acesso negado =(")
}