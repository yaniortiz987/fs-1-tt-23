console.log(valor);

const btnGuardar = document.querySelector("[data-name='btn-guardar']");
const textoTarea = document.querySelector("input¨[name='nueva-tarea']");
const listadoTareas = document.querySelector("ul");

btnGuardar.addEventListener("click", function(evento){
    console.log(textoTarea.value);
    const tarea = `<li class="flex justify-between items-center">
            <span>Sacar al perro</span> 
            <button class="bg-red-900 px-3 rounded-lg">x</button>
    </li>`
    listadoTareas.insertAdjacentHTML("afterend", tarea)



});