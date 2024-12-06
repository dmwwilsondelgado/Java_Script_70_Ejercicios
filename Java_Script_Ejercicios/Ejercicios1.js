// Escribir un programa que pregunte al usuario su edad y muestre por pantalla si es mayor o 
// menor de edad, el programa debe validar que solo se puedan ingresar números positivos. 

function esNumeroPositivo(valor){
    const numero = Number(valor);
    return !isNaN(numero) && numero >0;
}

function verificarEdad() {
    let edad=prompt("ingrese su edad");
    while (!esNumeroPositivo(edad)) {
        edad = prompt("Entrada invalida ¡Por favor! ingresa un numero positivo  para tu edad");
    }
    edad = Number(edad);
    if (edad>=18) {
        alert("Eres mayor de Edad")
    }else{
        alert("Eres menor de edad")
    }
}
verificarEdad();
