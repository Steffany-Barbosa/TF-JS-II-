// Math:
//parseInt 

/*
Math.random(): Um número pseudo-aleatório entre 0 (inclusivo) e 1 (exclusivo).
Math.floor(): retorna o menor número inteiro dentre o número "x". */

const prompt = require("prompt-sync")();

const numeroAleatorio = Math.floor(Math.random()*100) + 1

let tentativa;
let numeroTentativas = 0;
console.log("Bem Vindo ao Jogo de Adivinhação... \n----------------------------------")
do {
    tentativa = parseInt(prompt("Digite um número entre 1 e 100: "));
    numeroTentativas++;

    if (tentativa > numeroAleatorio) {
        console.log("Digite um número menor.");
    } else if (tentativa < numeroAleatorio) {
        console.log("Digite um número maior.");
    } else {
        console.log(`PARABÉNS você certou! \nO número é ${numeroAleatorio}.`);
        console.log(`Número de tentativas: ${numeroTentativas}`);
    }
    
} while (tentativa !== numeroAleatorio);


