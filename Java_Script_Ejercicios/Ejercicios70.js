// . Escribir un programa que almacene la cadena de caracteres contraseña en una variable, 
// pregunte al usuario por la contraseña hasta que introduzca la contraseña correcta
// Almacenar la contraseña correcta en una variable
const contraseñaCorrecta = "contraseña";
function veri() {
  let contraseñaUsuario;
  do {
    contraseñaUsuario = prompt("Introduce la contraseña:");
    if (contraseñaUsuario === contraseñaCorrecta) {
      alert("Contraseña correcta. Acceso permitido.");
    } else {
      alert("Contraseña incorrecta. Intenta de nuevo.");
    }
  } while (contraseñaUsuario !== contraseñaCorrecta);
}

veri();
