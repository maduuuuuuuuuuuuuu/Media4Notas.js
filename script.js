alert("Bem Vindo(a) ao Média 4 Notas!");

let nota1 = parseFloat(prompt("Digite sua 1° nota"));
let nota2 = parseFloat(prompt("Digite sua 2° nota"));

let nota3 = parseFloat(prompt("Digite sua 3° nota"));
let nota4 = parseFloat(prompt("Digite sua 4° nota"));

let media;
let resultado;

if (nota1 < 0 || nota1 > 10 ||
    nota2 < 0 || nota2 > 10 ||
    nota3 < 0 || nota3 > 10 ||
    nota4 < 0 || nota4 > 10) {
    alert("Digite somente notas entre 0 e 10.");
}
else {
 media = (nota1 + nota2 + nota3 + nota4) / 4;
}

if (media < 5) {
    resultado = "Você foi reprovado!";
} 
else if (media >= 6) {
    resultado = "Você foi aprovado!";
} 
else {
    resultado = "Você está em recuperação!";
}

alert("Você ficou com média: " + Math.round(media) + ". " + "Resultado: " + resultado);
