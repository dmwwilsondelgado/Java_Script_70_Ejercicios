// Escribir un programa que lea 4 números y calcule la media.
// -----------------------------a
let numeros = [];
for (let i = 1; i <= 4;i++) {
    let numero = parseFloat(prompt(`ingrese el numero ${i}:`));
    numeros.push(numero)
}

let suma = 0;
for (let i = 0; i < numeros.length; i++) {
    suma +=  numeros[i];
}
let media = suma /numeros.length;

alert(`la Media de los numeros ingresados en la array es : ${media}`);