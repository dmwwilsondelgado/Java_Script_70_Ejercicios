// En el programa de cocina de “Doña Anita” han dado la receta para la preparación de 
// bizcocho especial de chocolate. Por cada 100 gramos de harina hay que añadir 10 gramos 
// de cacao y un puñado de nueces. Si quiero prepararlos con 20 gramos de chocolate. ¿La 
// cantidad de gramos de harina para hacer el bizcocho es?

const calcularHarina = (gramosCacao) => {
    return (100 * gramosCacao) / 10;
}
const gramosCacao = 20;
const gramosHarina = calcularHarina(gramosCacao);
alert(`Para ${gramosCacao} gramos de cacao, necesitas ${gramosHarina} gramos de harina.`);
  