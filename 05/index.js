let tempoParaAlarmarEmSegundos = 10;
let tempoAlarmandoEmSegundos = 5;
let tempoSonecaEmSegundos = 10;
let numeroDeSonecas = 2;

const preparaAlarme = () => {
  console.log(`Timer iniciado, disparando alarme em ${tempoParaAlarmarEmSegundos} segundos!`);
  setTimeout(disparaAlarme, tempoParaAlarmarEmSegundos * 1000);
}


const disparaAlarme = () => {
  const disparando = () => {
    console.log("Beep beep!");
    tempoAlarmandoEmSegundos--;

    if (tempoAlarmandoEmSegundos == 0) {
      clearInterval(intervalo);

      if (numeroDeSonecas > 0) {
        console.log(`Soneca ativada, próximo alarme em ${tempoSonecaEmSegundos} segundos`);
        tempoAlarmandoEmSegundos = 5;

        setTimeout(disparaAlarme, tempoParaAlarmarEmSegundos * 1000);
        numeroDeSonecas--;
      } else {
        clearInterval(intervalo);
        console.log("Fim do Timer!");
      }
    }
  }
  const intervalo = setInterval(disparando, 1000);
}

preparaAlarme();