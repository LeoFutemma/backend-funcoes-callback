let tempoParaAlarmarEmSegundos = 10;
let tempoAlarmandoEmSegundos = 5;

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
    }
  }
  const intervalo = setInterval(disparando, 1000);
}

preparaAlarme();