// Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos 
// ingresos iguales o superiores a 1000 mensuales, escribir un programa que pregunte al 
// usuario su edad e ingresos mensuales y muestre por pantalla si el usuario debe tributar o 
// no.


let edad = parseInt(prompt('Ingrese La edad'));
let ingresos = parseInt(prompt('Ingrese el total de sus ingresos mensuales: '));

let impuesto = function(edad,ingresos) {
    if (edad > 16 && ingresos >= 1000) alert('El usuario SI tiene que tributar impuestos');
    else alert('El usuario NO debe tributar impuestos');
}
impuesto(edad,ingresos);