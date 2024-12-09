// Escribir un programa que pida al usuario un número entero y muestre por pantalla si es par 
// o impar.

let numero = parseInt(prompt("Ingrese un numero entero"));

const esPar = function(numero) {
    if (numero >= 0) {
        numero % 2 === 0 ? alert(`El numero ${numero} es par`) : alert(`El valor ingresado ${numero} es impar`);
    } else if (numero < 0){
        alert('No se acepta negativos');
    }
    else{
        alert('Error ingrese un valor');
    }
}
esPar(numero);