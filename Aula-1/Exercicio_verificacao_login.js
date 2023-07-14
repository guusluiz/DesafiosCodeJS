let prompt = require('prompt-sync')()

login = prompt("Login: ")
senha = prompt("Senha: ")

if(login == "admin" && senha == "senha123"){
    console.log("Login bem sucedido")
} else{
    console.log("Dados inconsistentes")
}