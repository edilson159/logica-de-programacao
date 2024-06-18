alert("Boas vindas ao jogo do número secreto");
let numberSecret = parseInt(Math.random() * numberMax + 1);
let attempts = 1;
let numberMax = 500;

let kick;

while (kick != numberSecret) {
  kick = prompt(`Escolha um número entre 1 e ${numberMax}`);
  if (numberSecret == kick) {
    break;
  } else {
    attempts++;
    alert("Você errou seu burro");
    if (numberSecret < kick) {
      alert(`O número secreto é menor que o chute ${kick}`);
    } else {
      alert(`O número secreto é maior que o chute ${kick}`);
    }
  }
}

let wordAttemp = attempts > 1 ? "tentativas" : "tentativa";

alert(
  `Isso ai, Você acertou qual é o número secreto, Você eh fodaaaaaa , O número secreto é ${numberSecret} !!! , Você acertou com ${attempts} ${wordAttemp}`
);
