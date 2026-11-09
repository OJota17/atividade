// 15. Vaga Preferencial no Estacionamento
// Um shopping possui vagas reservadas. O motorista tem direito a estacionar nessa vaga se tiver 60 anos ou mais ou se possuir a credencial PNE (Pessoa com Necessidade Especial). No entanto, existe uma regra geral do local: nenhum tipo de caminhão pode estacionar nessas vagas, independentemente da condição do motorista. Crie um programa que receba a idade do motorista, se ele possui a credencial (true/false) e o tipo de veículo, informando se a parada na vaga é permitida. 

var idade = 59
var credencialPNE = true
var caminhao = false

if ((idade >= 60 && credencialPNE == true) && caminhao == false){
    console.log("Você possui direito de estacionar")
} else {
    console.log ("Você NÃO possui direito de estacionar")
}