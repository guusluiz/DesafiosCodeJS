import PromptSync from "prompt-sync";
const prompt = PromptSync();
export function verificarMaiorIdade() {

    let idade;
    do {
        idade = parseInt(prompt("Digite sua idade: "));

    } while (idade < 18);
    console.log("Idade válida!");

}