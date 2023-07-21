import PromptSync from "prompt-sync";
const prompt = PromptSync();
import verificarMaiorIdade from "../Aula-2While/Exercicio_idade_18"



//menu para escolher qual exercicio o usuário selecionar

let exercicio;
let continuar;

do {
    exercicio = parseInt(prompt("Digite um número que represente um exercício de 1 a 4: "));

    switch (exercicio) {
        case 1:
            helloWorld("Olá Mundo")
            break;
        case 2:
            let aluno = {
                nome: "Rebeca",
                idade: 19,
                hardSkills: ["figma", "HTML", "CSS", "Web Responsive"]
            }

            console.log(aluno.nome, aluno.idade, aluno.hardSkills);

            console.log("Objeto aluno", aluno);
            break
        case 3:
            verificarMaiorIdade();
        default:
            console.log("Digite um número de 1 a 4!!!");
            break;
    }

    continuar = prompt("Deseja continuar vendo outros exercícios? Digite sim ou nao: ").toLowerCase();
} while (continuar === "sim");

function helloWorld(frase) {
    console.log(frase);
}