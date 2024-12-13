// . Realice el siguiente algoritmo para convertir pesos a dolores y a euros, utilizando como 
// constante el valor de una moneda.


const PESO_A_DOLAR = 5000;
const PESO_A_EURO = 5400;

function convertirMoneda(pesos) {
  const dolares = pesos / PESO_A_DOLAR;
  const euros = pesos / PESO_A_EURO;
  return { dolares, euros };
}

function solicitarYConvertir() {
  let pesos = parseFloat(prompt('Ingrese la cantidad en pesos:'));

  if (isNaN(pesos) || pesos <= 0) {
    alert('Por favor ingrese una cantidad válida de pesos.');
  } else {
    const { dolares, euros } = convertirMoneda(pesos);
    alert(`El equivalente a ${pesos} pesos es:\n${dolares.toFixed(2)} dólares\n${euros.toFixed(2)} euros`);
  }
}

solicitarYConvertir();
