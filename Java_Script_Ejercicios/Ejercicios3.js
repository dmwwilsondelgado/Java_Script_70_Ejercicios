// Escribir un programa que pida al usuario dos números y muestre por pantalla su división, si 
// el divisor es cero el programa debe mostrar un error, se debe manejar mediante 
// excepciones y el mensaje debe ser personalizado.
let numero1 = parseInt(prompt('Ingrese el primer numero'));
let numero2 = parseInt(prompt('Ingrese el segundo numero'));

const division = function(numero1,numero2) {
    try {
        if (numero1 === null || numero2 === null) {
            throw new Error("Error: ambos valores deben ser números válidos.");
        }
        if (numero2 === 0) {
            throw new Error("Error no se puede dividir entre cero");
        }
        else{
            alert(`El resultado de la division entre ${numero1} y ${numero2} es : ${numero1 /numero2}`);
        }

    } catch (error) {
        alert(error.message);
    }
}
division(numero1,numero2);