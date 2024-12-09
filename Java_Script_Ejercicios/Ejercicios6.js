// los alumnos de un curso se han dividido en dos grupos A y B de acuerdo con el sexo y el 
// nombre, el grupo A está formado por las mujeres con un nombre anterior a la M y los 
// hombres con un nombre posterior a la N y el grupo B por el resto, escribir un programa que 
// pregunte al usuario su nombre y sexo y muestre por pantalla el grupo al que corresponde.
let renta = parseInt(prompt('Ingrese su renta anual'));

function renta_anual(renta) {
    if (renta >= 10000 && renta <= 20000) {
        alert('El impositivo que le corresponde es del 5%');
    }
    if (renta >= 20000 && renta <= 35000) {
        alert('El impositivo que le corresponde es del 10%');
    }
    if (renta >= 35000 && renta <= 60000) {
        alert('El impositivo que le corresponde es del 20%');
    }
    if (renta > 60000) {
        alert('El impositivo que le corresponde es del 45%');
    }
}
renta_anual(renta);