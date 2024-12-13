// Pinturas “La brocha gorda” requiere determinar cuánto cobrar por trabajos de pintura 
// Considere que se cobra por m2 y realice el código que representen el algoritmo que le 
// permita ir generando presupuestos para cada cliente.

const calcularCosto = (area, costoPorM2) => area * costoPorM2;
const generarPresupuesto = () => {
  let area = parseFloat(prompt('Ingrese el área en m2 a pintar:'));
  let costoPorM2 = parseFloat(prompt('Ingrese el costo por m2:'));
  let costoTotal = calcularCosto(area, costoPorM2);
  alert(`El presupuesto para pintar es de  ${area} m2 es de $${costoTotal.toFixed(2)}.`);
}

generarPresupuesto();
