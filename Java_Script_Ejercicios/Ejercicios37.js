// <Un camión transporta 25 cajas de repuestos de carros. Si cada caja pesa 748 Kg ¿cuántos 
// Kg transporta?>

const calcularPesoTotal = (numeroCajas, pesoPorCaja) => numeroCajas * pesoPorCaja;
alert(`<Un camión transporta 25 cajas de repuestos de carros. Si cada caja pesa 748 Kg ¿cuántos Kg transporta?>`);
const numeroCajas = 25;
const pesoPorCaja = 748;
const pesoTotal = calcularPesoTotal(numeroCajas, pesoPorCaja);
alert(`El camión transporta un peso total de ${pesoTotal} Kg.`);