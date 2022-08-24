const tabuada = (numero, callback) => {

  for (let i = 0; i <= 10; i++) {
    callback(`${numero} x ${i} = ${numero * i}`);
  }
}

tabuada(5, (resultado) => {
  console.log(resultado);
});