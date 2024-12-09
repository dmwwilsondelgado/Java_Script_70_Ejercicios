// escribir un programa que almacene la cadena de caracteres contraseña de una variable, 
// pregunte al usuario por la contraseña e imprima por pantalla si la contraseña introducida
// por el usuario coincide con la guardada en la variable sin tener en cuenta mayúsculas y 
// minúsculas, se debe validar que solo se pueda ingresar valores alfanuméricos.

let ingresar_contrasena = prompt('Ingrese la contraseña');
let contrasena = 'dmw';
let regex = /^(\w)+$/i;

const expresion = (ingresar_contrasena,contrasena)=>{
    if (regex.test(ingresar_contrasena)) {       
        if (contrasena === ingresar_contrasena) {
            alert('La contraseña ingresada SI coincide con la contraseña guardada');
        } else {
            alert('La contraseña ingresada NO coincide con la contraseña guardada');
        }
    }
    else{
        alert('Error, ingrese valores alfanumericos');
    }
}
let respuesta = expresion(ingresar_contrasena, contrasena);
console.log(respuesta);