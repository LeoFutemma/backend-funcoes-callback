const tabuada = (numeros, callback) => {
  for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j <= 10; j++) {
      callback(`${numeros[i]} x ${j} = ${numeros[i] * j}`)
    }
    console.log("---------------");
    console.log();
  }
}

tabuada([1, 5, 2], (resultado) => {
  console.log(resultado);
})