// Escribir un programa para una empresa que tiene salas de juegos para todas las edades y 
// quiere calcular de forma automática el precio que debe cobrar a sus clientes por entrar. El 
// programa debe preguntar al usuario la edad del cliente y mostrar el precio de la entrada. Si 
// el cliente es menor de 4 años puede entrar gratis, si tiene entre 4 y 18 años debe pagar 5€ 
// y si es mayor de 18 años, 10€.
let edad = parseInt(prompt('Ingrese la edad de usted'));
function juegos() {
    if (edad < 4) {
        alert('Por ser menor de 4 años la entrada es gratis');    
    } 
    else if (edad >= 4 && edad <= 18) {
        alert(`El precio a pagar por tener esta ${edad} edad años es de 5€`);
    }
    else {
        alert(`El precio a pagar por tener esta  ${edad} de años es de 10€`);
    }
}
juegos();