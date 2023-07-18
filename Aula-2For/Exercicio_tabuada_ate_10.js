const prompt = require('prompt-sync')()

let numeroEscolhido = prompt("Escolha um número: " )

for (let contador = 1; contador <= 10; contador++) {
    let resultado =contador*numeroEscolhido
    console.log(numeroEscolhido+" x "+contador+" = "+resultado);
}