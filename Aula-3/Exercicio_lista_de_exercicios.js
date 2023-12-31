import { exercicio1A10Pares } from "../Aula-2For/Exercicio_1_a_10_pares.js";
import { exercicio1A10 } from "../Aula-2For/Exercicio_1_a_10.js";
import { exercicio1A50Impares } from "../Aula-2For/Exercicio_1_a_50_impares.js";
import { exercicioSequenciaDeFibonacci } from "../Aula-2For/Exercicio_sequencia_de_fibonacci.js";
import { exercicioTabuadaAte10 } from "../Aula-2For/Exercicio_tabuada_ate_10.js";
import { exercicio0A20Pares } from "../Aula-2While/Exercicio_0_a_20_pares.js";
import { exercicio1A100Somando } from "../Aula-2While/Exercicio_1_a_100_somando.js";
import { exercicioContagemAte0 } from "../Aula-2While/Exercicio_contagem_ate_0.js";
import { exercicioDiferenteDe0 } from "../Aula-2While/Exercicio_diferente_0.js";
import { verificarMaiorIdade } from "../Aula-2While/Exercicio_idade_18.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

let resposta;
let count;

do {
    console.log("1. Imprimir números de 1 a 10.\n2. Imprimir números pares de 1 a 10.\n3. Imprimir os números ímpares de 0 a 50.\n4. Imprimir a tabuada que o usuário escolheu até 10.\n5. Imprimir os primeiros 10 números da sequência de Fibonacci.\n6. Imprimir números pares de 0 a 20.\n7. Calcular a soma dos números de 1 a 100.\n8. Permitir apenas usuários maiores de 18 anos.\n9. Contar regressivamente do número escolhido pelo usuário até 0.\n10. Permitir somente o número 0.")

    let exercicio = prompt("Digite um número de 1 a 10 de acordo com o exercício que você quer: ")
    switch (exercicio) {
        case "1":
            exercicio1A10()
            break
        case "2":
            exercicio1A10Pares()
            break
        case "3":
            exercicio1A50Impares()
            break
        case "4":
            exercicioTabuadaAte10()
            break
        case "5":
            exercicioSequenciaDeFibonacci()
            break
        case "6":
            exercicio0A20Pares()
            break
        case "7":
            exercicio1A100Somando()
            break
        case "8":
            verificarMaiorIdade()
            break
        case "9":
            exercicioContagemAte0()
            break
        case "10":
            exercicioDiferenteDe0()
            break
        default:
            break
    }
    resposta = prompt(`Quer continuar? "sim" para continuar e "nao" para não continuar? `).toLowerCase();

    while (resposta != "sim" && resposta != "nao") {
        console.log("resposta invválida");
        resposta = prompt(`Quer continuar? "sim" para continuar e "nao" para não continuar? `).toLowerCase();
    }

} while (resposta == "sim");






