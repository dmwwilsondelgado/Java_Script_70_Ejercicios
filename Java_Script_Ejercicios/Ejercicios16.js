// Escribir un programa que calcule la velocidad de un proyectil que recorre 2km en 5 
// minutos, exprese el resultado en metros/segundo.

// let tiempo = parseInt(prompt("ingrese el tiempo del proyectil"));
// let distacia = parseInt(promt("ingrese la distacia del proyectil"));


function Calcular(Distanciakm,tiempoMim) {
    let Distanciam = Distanciakm + 1000;
    let tiempoS = tiempoMim*60;
    return Distanciam /tiempoS;
}

let  Distanciakm = parseFloat(prompt("ingrese la Distacia recorrida en Kilometros"));
let tiempoMim =parseFloat(prompt("ingrese el tiempo recorrido en minutos"));

if (isNaN(Distanciakm)||isNaN(tiempoMim) || Distanciakm <0 || tiempoMim <0){
    alert("Error: Por favor ingresar un numero Valido y mayor");
}else{
    let velocidad  = Calcular(Distanciakm,tiempoMim); 
    alert(` la distacia que recorre el proyectil es ${velocidad.toFixed(2)}metros por sengundo`);
}

