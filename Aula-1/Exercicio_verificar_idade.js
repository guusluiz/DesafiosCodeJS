let prompt = require('prompt-sync')()

let ano_atual = new Date().getFullYear();

let ano_nascimento = prompt("Em qual ano você nasceu? ")

let idade = ano_atual - ano_nascimento

if(idade >= 18){
    console.log("ta liberado amigão, já é maior de idade")
} else{
    console.log("pode não, você é menor de idade")
}