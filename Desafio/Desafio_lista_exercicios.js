let prompt = require('prompt-sync')()

let resposta;

do {
    console.log("1. Imprimir números de 1 a 10.\n2. Imprimir números pares de 1 a 10.\n3. Imprimir os números ímpares de 0 a 50.\n4. Imprimir a tabuada que o usuário escolheu até 10.\n5. Imprimir os primeiros 10 números da sequência de Fibonacci.\n6. Imprimir números pares de 0 a 20.\n7. Calcular a soma dos números de 1 a 100.\n8. Permitir apenas usuários maiores de 18 anos.\n9. Contar regressivamente do número escolhido pelo usuário até 0.\n10. Permitir somente o número 0.")
    let exercicio = prompt("Digite um número de 1 a 10 de acordo com o exercício que você quer: ")
    switch (exercicio) {
        case "1":
            for (let contador = 1; contador <= 10; contador++) {
                console.log(contador);
            }
            resposta = prompt("quer continuar? ")
            break
        case "2":
            for (let contador = 2; contador <= 10; contador += 2) {
                console.log(contador);
            }
            resposta = prompt("quer continuar? ")
            break
        case "3":
            for (let contador = 1; contador < 50; contador += 2) {
                console.log(contador);
            }
            resposta = prompt("quer continuar? ")
            break
        case "4":
            let numeroEscolhido = parseInt(prompt("Escolha um número: "))

            for (let contador = 1; contador <= 10; contador++) {
                let resultado = contador * numeroEscolhido
                console.log(numeroEscolhido + " x " + contador + " = " + resultado);
            }
            resposta = prompt("quer continuar? ")
            break
        case "5":
            pn = 0
            sn = 1
            console.log(pn)
            console.log(sn)
            for (let contador = 3; contador <= 10; contador++) {
                tn = pn + sn
                pn = sn
                sn = tn
                console.log(tn)
            }
            resposta = prompt("quer continuar? ")
            break
        case "6":
            let contador6 = 2
            while (contador6 <= 20) {
                console.log(contador6);
                contador6 += 2
            }
            resposta = prompt("quer continuar? ")
            break
        case "7":
            let contador7 = 1
            let resultado = 0
            while (contador7 <= 100) {
                resultado = resultado + contador7
                contador7++
                console.log(resultado);
            }
            resposta = prompt("quer continuar? ")
            break
        case "8":
            let idade
            do {
                idade = prompt("Qual a idade? ")
            } while (idade < 18);

            console.log("Idade maior que 18 anos");
            resposta = prompt("quer continuar? ")
            break
        case "9":

            let numero9 = prompt("Qual o número? ")

            while (numero9 != 0) {
                console.log(numero9);
                numero9--
            }
            resposta = prompt("quer continuar? ")
            break
        case "10":
            let numero10

            while (numero10 > 0) {
                numero10 = prompt("Qual o número? ")
            }
            resposta = prompt("quer continuar? ")
            break
        default:
            console.log("número inválido");
            resposta = prompt("quer continuar? ")
            break
    }
} while (resposta == "sim");