// Un banco paga intereses a los depósitos dependiendo del saldo. Si el saldo es menor a 
// $100.000 se paga un interés anual de 3%, pero si su saldo es mayor a $100.000 se paga 
// un interés anual de 4%. Al final mostrar el saldo final y el interés pagado.


function calcularIntereses(saldo) {
    let interes = 0;
    
    if (saldo < 100000) {
      interes = saldo * 0.03; 
    } else {
      interes = saldo * 0.04;
    }
    
    let saldoFinal = saldo + interes;
    alert('Saldo inicial: $' + saldo + '\nInterés pagado: $' + interes + '\nSaldo final: $' + saldoFinal);
  }
  
  function solicito() {
    let saldo = parseFloat(prompt('Ingrese el saldo de su depósito:'));
  
    if (isNaN(saldo) || saldo < 0) {
      alert('Por favor ingrese un saldo válido.');
    } else {
      calcularIntereses(saldo);
    }
  }
  
  solicito();
  