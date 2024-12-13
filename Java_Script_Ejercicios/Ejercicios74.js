// escribir un programa que muestre el eco de todo lo que el usuario introduzca hasta que el 
// usuario escriba “salir” que terminará

let input;

while (true) {
  input = prompt("Escribe algo (o 'salir' para terminar):");
  if (input === "salir") {
    break;
  }
  alert(input);
}
