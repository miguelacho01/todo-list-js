// CREAR NODOS

// const parrafo4 = document.createElement("p");
// const textoParrafo4 = document.createTextNode("parrafo4");

// const parrafo5 = document.createElement("p");
// parrafo5.innerHTML = "parrafo5";

// //seleccionar el padre

// const elementoPadre = document.querySelector(".padre");

// //agragar nodos

// // elementoPadre.appendChild(parrafo4);
// parrafo4.appendChild(textoParrafo4);

// // elementoPadre.appendChild(parrafo5);

// elementoPadre.append(parrafo4, parrafo5);

let idcontador = 0;
const userInput = document.querySelector("#userInput");
const inputValue = document.querySelector("#inputValue");

userInput.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("hola");
  addtarea();
});

let addtarea = () => {
  idcontador++;

  let nuevoValor = inputValue.value;
  list.innerHTML += `<div class="tarea-container" id = "${idcontador}">
  <label for=""> <input type="checkbox" />${nuevoValor}</label>
  <span class="material-symbols-outlined" id="btn-delete"> delete </span>
</div>`;

  inputValue.value = "";
  updateEstado();
};
list.addEventListener("click", (event) => {
  console.log(event.srcElement.nodeName);
  if (event.srcElement.nodeName == "INPUT") {
    updateEstado();
  } else if (event.srcElement.nodeName == "SPAN") {
    deleteEstado(event.srcElement.parentNode.id);
  }
});

let updateEstado = () => {
  let element = list.querySelectorAll("div");
  let checkbox = list.querySelectorAll("input[type=checkbox]:checked");
  estado.innerHTML = `<p>Tareas pendientes ${element.length}  Tareas completadas: ${checkbox.length}</p>`;
};

let deleteEstado = (id) => {
  estadoDelete = document.getElementById(id);
  list.removeChild(estadoDelete);
  updateEstado();
};
