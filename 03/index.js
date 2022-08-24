const jogadores = ["Guido", "Dani", "Ruli", "Diego", "Vidal"];
const tempoDaRodada = 10;


const jogo = (jogadores, tempoDaRodada) => {
  const tempo = (tempoDaRodada / jogadores.length) * 1000;
  let contador = 0;

  if (contador >= jogadores.length) {
    clearInterval(intervalo);
    console.log("A rodada terminou!");
  }

  const rodada = () => {
    console.log(jogadores[contador]);
    contador++;


  }

  const intervalo = setInterval(rodada, tempo);
}

jogo(jogadores, tempoDaRodada);