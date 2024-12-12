// Escriba una expresión regular que reconozca los números en punto flotante (por ejemplo -
//     2.3e-1, -3e2, 23, 3.2)
function verificFlotante() {
    const numero = prompt("Ingrese un número para verificar si es un número en punto flotante:");
    const regex = /^[+-]?\d*\.?\d+(e[+-]?\d+)?$/i;
    const esFlotante = regex.test(numero);

    if (esFlotante) {
        alert(`${numero} es un número en punto flotante válido.`);
    } else {
        alert(`${numero} no es un número en punto flotante válido.`);
    }
}
verificFlotante();