alert("Boas vindas ao jogo do número secreto");
let numberSecret = 29;

let kick = prompt("Escolha um número entre 1 e 30");

if (numberSecret == kick) {
  alert("Isso ai, Você acertou qual é o número secreto !!!");
} else {
  alert("Você errou seu burro");
}

if (numberSecret < kick) {
  alert("O número secreto é menor ");
}

if (numberSecret > kick) {
  alert("O número secreto é maior ");
}
