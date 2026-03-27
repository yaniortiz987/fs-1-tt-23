import { valor, guardar, recuperar } from "./auxiliar.js";

const btnGuardar = document.querySelector("[data-name='btn-guardar']");
const textoTarea = document.querySelector("input[name='nueva-tarea']");
const listadoTareas = document.querySelector("ul");
const btnLimpiar = document.querySelector("#btn-Limpiar")

let historicoTareas = recuperar("estados") ?? []


export function guardarTarea(evento){
    console.log(textoTarea.value);
    historicoTareas.push(textoTarea.value)

    const tarea = `<li class="flex justify-between items-center">
            <span> ${textoTarea.value} </span> 
            <button class="bg-red-900 px-3 rounded-lg eliminar">x</button>
    </li>`
    listadoTareas.insertAdjacentHTML("beforeend", tarea)
   
    Toastify({
     text: `Nueva tarea: ${textoTarea.value}`,
     duration: 2500,
     gravity: "bottom", // `top` or `bottom`
     position: "right", // `left`, `center` or `right`
     style: {
        background: "linear-gradient(to right, crimson, black)",
     color: "white",
     }
    }).showToast();

    guardar("estados", historicoTareas)
}

btnGuardar.addEventListener("click", guardarTarea);

btnLimpiar.addEventListener("click", function(evento){

    Swal.fire({
        title: "Desea borrar todas las tareas?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Borrar",
        denyButtonText: `No borrar`
    }).then(function(objeto) {
        console.log(objeto);
        if (objeto.isConfirmed) {
            Swal.fire({
                title: "Borrado total!",
                text: "Hemos eliminado todas las tareas",
                icon: "success"
            });
            listadoTareas.innerHTML = "";
            guardar("estados", []);
        } else if (objeto.isDenied) {
            Swal.fire({
                title: "No borrado!",
                text: "Hemos mantenido todas las tareas",
                icon: "error"
            });
        }
    });


})

function recuperarTodo(){
    const mostrar = historicoTareas.map(
        function (elemento) {
            return `<li class="flex justify-between items-center">
            <span>${elemento}</span> 
            <button class="bg-red-900 px-3 rounded-lg eliminar">x</button>
    </li>`
        }
    )
    listadoTareas.insertAdjacentHTML("beforeend", mostrar.join(""))
}


listadoTareas.addEventListener("click", function(evento){
    /*Agrego como delegacion de eventos
    Llego al hijo atravez del padre*/

    console.log("Evento:", evento.target);

    if (evento.target.tagName == "BUTTON") {
        const texto = evento.target.closest("li").querySelector("span").textContent
       console.log("revisar: ", texto);
        evento.target.closest("li").remove()
        const ee = historicoTareas.filter(function(tarea){
            return tarea != texto
        })
        console.log("+++++",ee);

        guardar("estados", JSON.stringify(historicoTareas))
    }

    if (evento.target.tagName == "SPAN") {
        alert(evento.target.textContent)
    }

})

recuperarTodo()


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







