import PromptSync from "prompt-sync";
const prompt = PromptSync();
export function exercicioContagemAte0() {
    let numero = prompt("Qual o número? ")

    while (numero >= 0) {
        console.log(numero);
        numero--
    }
}