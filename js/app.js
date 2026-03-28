
// Importa utilidades para manejo de almacenamiento local
import { valor, guardar, recuperar } from "./auxiliar.js";


// Referencias a elementos del DOM
const btnGuardar = document.querySelector("[data-name='btn-guardar']"); // Botón para guardar tarea
const textoTarea = document.querySelector("input[name='nueva-tarea']"); // Input de nueva tarea
const listadoTareas = document.querySelector("ul"); // Lista de tareas
const btnLimpiar = document.querySelector("#btn-Limpiar") // Botón para limpiar todas las tareas


// Array que almacena el historial de tareas (persistido en LocalStorage)
let historicoTareas = recuperar("estados") ?? []



// Función para guardar una nueva tarea
export function guardarTarea(evento){
    console.log(textoTarea.value);
    historicoTareas.push(textoTarea.value); // Agrega la tarea al historial

    // Crea el elemento visual de la tarea y lo agrega a la lista
    const tarea = `<li class="flex justify-between items-center">
            <span> ${textoTarea.value} </span> 
            <button class="bg-red-900 px-3 rounded-lg eliminar">x</button>
    </li>`;
    listadoTareas.insertAdjacentHTML("beforeend", tarea);
   
    // Muestra notificación toast al crear la tarea
    Toastify({
     text: `Nueva tarea: ${textoTarea.value}`,
     duration: 2500,
     gravity: "bottom", // `top` o `bottom`
     position: "right", // `left`, `center` o `right`
     style: {
        background: "linear-gradient(to right, crimson, black)",
        color: "white",
     }
    }).showToast();

    // Guarda el historial actualizado en LocalStorage
    guardar("estados", historicoTareas);
}


// Evento para guardar tarea al hacer click en el botón
btnGuardar.addEventListener("click", guardarTarea);


// Evento para limpiar todas las tareas con confirmación visual
btnLimpiar.addEventListener("click", function(evento){


    // Muestra confirmación con SweetAlert2
    Swal.fire({
        title: "Desea borrar todas las tareas?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Borrar",
        denyButtonText: `No borrar`
    }).then(function(objeto) {
        console.log(objeto);
        if (objeto.isConfirmed) {
            // Si el usuario confirma, borra todas las tareas y muestra mensaje
            Swal.fire({
                title: "Borrado total!",
                text: "Hemos eliminado todas las tareas",
                icon: "success"
            });
            listadoTareas.innerHTML = "";
            guardar("estados", []);
        }
        if (objeto.isDenied) {
            // Si el usuario niega, muestra mensaje de no borrado
            Swal.fire({
                title: "No borrado!",
                text: "Hemos mantenido todas las tareas",
                icon: "error"
            });
        }
    });


})


// Función para recuperar y mostrar todas las tareas almacenadas
function recuperarTodo(){
    const mostrar = historicoTareas.map(
        function (elemento) {
            return `<li class="flex justify-between items-center">
            <span>${elemento}</span> 
            <button class="bg-red-900 px-3 rounded-lg eliminar">x</button>
    </li>`;
        }
    );
    listadoTareas.insertAdjacentHTML("beforeend", mostrar.join(""));
}



// Delegación de eventos para eliminar tareas individuales o mostrar alerta al hacer click en el texto
listadoTareas.addEventListener("click", function(evento){
    // Delegación: se detecta si se hace click en un botón o en el texto
    console.log("Evento:", evento.target);

    if (evento.target.tagName == "BUTTON") {
        // Elimina la tarea seleccionada
        const texto = evento.target.closest("li").querySelector("span").textContent;
        console.log("revisar: ", texto);
        evento.target.closest("li").remove();
        // (Nota: aquí falta actualizar correctamente el array historicoTareas)
        const ee = historicoTareas.filter(function(tarea){
            return tarea != texto;
        });
        console.log("+++++",ee);

        guardar("estados", JSON.stringify(historicoTareas));
    }

    if (evento.target.tagName == "SPAN") {
        // Muestra alerta con el texto de la tarea
        alert(evento.target.textContent);
    }

});


// Inicializa la lista mostrando todas las tareas almacenadas
recuperarTodo();


/*setInterval(
    function () {
        btnsEliminar = document.querySelectorAll(".eliminar")

        btnsEliminar.forEach(
    function(elemento){
         elemento.addEventListener("click", function (evento) {
             evento.target.closest("li").outerHTML = ""
        })
    }
)
    }
    , 3000)*/







