alert("Boas vindas ao jogo do número secreto");
let numberSecret = 10;

let kick;

while (kick != numberSecret) {
  kick = prompt("Escolha um número entre 1 e 30");
  if (numberSecret == kick) {
    alert(
      `Isso ai, Você acertou qual é o número secreto, Você eh fodaaaaaa , O número secreto é ${numberSecret} !!!`
    );
  } else {
    alert("Você errou seu burro");
    if (numberSecret < kick) {
      alert(`O número secreto é menor que o chute ${kick}`);
    } else {
      alert(`O número secreto é maior que o chute ${kick}`);
    }
  }
}
