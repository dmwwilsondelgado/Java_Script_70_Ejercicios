// . La pizzería Bella Napoli ofrece pizzas vegetarianas y no vegetarianas a sus clientes. Los 
// ingredientes para cada tipo de pizza aparecen a continuación.
// a. Ingredientes vegetarianos: Pimiento y tofu.
// b. Ingredientes no vegetarianos: Pepperoni, Jamón y Salmón. 
// Escribir un programa que pregunte al usuario si quiere una pizza vegetariana o no, y en 
// función de su respuesta le muestre un menú con los ingredientes disponibles para que 
// elija. Solo se puede elegir un ingrediente además de la mozzarella y el tomate que están 
// en todas las pizzas. Al final se debe mostrar por pantalla si la pizza elegida es vegetariana 
// o no y todos los ingredientes que lleva.
prompt("Hola bienvenidos a Napoli");
let pizza = prompt('Ingresa si  o NO, una pizza vegetariana')
.toLowerCase();
const pizzeria = function(pizza,eleccion) {
    if (pizza === 'si') {
        eleccion = prompt(`------ MENU VEGETARIANO -----\nIngredientes disponibles : Pimiento y tofu.\n(Elija un solo ingrediente)`).toLowerCase();
        if (eleccion !== 'pimiento' && eleccion !== 'tofu') {
            alert('Error: elige un ingrediente disponible en el MENU');
        } else {
            alert(`Has elegido una pizza vegetariana con el ingrediente: ${eleccion}`);
        }
    }
    else if (pizza === 'no'){
        eleccion = prompt(`------ MENU NO VEGETARIANO -----\nIngredientes disponibles : Pepperoni, Jamón y Salmón.\n(Elija un solo ingrediente)`);
        if (eleccion !== 'pimiento' && eleccion !== 'tofu') {
            alert('Error: elige un ingrediente disponible en el MENU');
        } else {
            alert(`Has elegido una pizza vegetariana con el ingrediente: ${eleccion}`);
        }
    }
    else {
        alert("Por favor, ingresa 'SI' o 'NO' para indicar si quieres una pizza vegetariana.");
    }
}
pizzeria(pizza);