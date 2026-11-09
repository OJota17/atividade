// 14. Validação de Formulário
// Um site exige que, para enviar um cadastro, o campo de e-mail não esteja vazio (diferente de "") e que o usuário tenha marcado a opção de aceitar os termos de serviço (true). Crie uma função que receba o e-mail e a confirmação dos termos e retorne se o formulário é válido para envio. 

var email = "joao@gmail.com"
var termosServico = true

if (email != "" && termosServico == true){
    console.log("Autenticação aceita")
} else {
    console.log("Autenticação Falhada")
}