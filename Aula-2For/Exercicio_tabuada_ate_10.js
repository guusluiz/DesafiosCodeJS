import PromptSync from "prompt-sync";
const prompt = PromptSync();
export function exercicioTabuadaAte10() {
    let numeroEscolhido = parseInt(prompt("Escolha um número: "))

    for (let contador = 1; contador <= 10; contador++) {
        let resultado = contador * numeroEscolhido
        console.log(numeroEscolhido + " x " + contador + " = " + resultado);
    }
}
