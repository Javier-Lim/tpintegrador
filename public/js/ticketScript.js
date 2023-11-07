// valor del ticket
const ticket = 200;

// definir descuento
let descuentoEstudiante = 0.8;
let descuentoTrainee = 0.5;
let descuentoJunior = 0.15;

//tomar elementos id

const formulario = document.getElementById("formulario");
const categoria = document.getElementById("categoria");
const cantidad = document.getElementById("cantidad");
const totalPagar = document.getElementById("totalAPagar");
const btnResumen = document.getElementById("resumen");

function calcularPago() {
  let total = cantidad.value * ticket;

  // condiciamoar  por descuento

  switch (categoria.value) {
    case "estudiante":
      total = total - total * descuentoEstudiante;
      break;

    case "trainee":
      total = total - total * descuentoTrainee;
      break;

    case "junior":
      total = total - total * descuentoJunior;
      break;

    default:
      break;
  }

  totalPagar.textContent = `Total a Pagar: $ ${total}`;
}

btnResumen.addEventListener("click", (e) => {
  e.preventDefault();
  calcularPago();
});
