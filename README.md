# fs-1-tt-23 📝



## 🚀 Tecnologías utilizadas

- 🟦 **HTML5**: Estructura principal de la aplicación.
- 📜 **JavaScript (ES6, módulos)**: Lógica de la aplicación, manipulación del DOM y gestión de eventos.
- 🎨 **Tailwind CSS**: Framework de utilidades para estilos rápidos y responsivos (vía CDN).
- 💾 **LocalStorage**: Persistencia de datos en el navegador para guardar el historial de tareas.
- 🧁 **SweetAlert2**: Librería para mostrar diálogos y confirmaciones visuales.
- 🍞 **Toastify JS**: Librería para mostrar notificaciones tipo toast al crear tareas.


## 🌐 Dependencias externas y APIs

- 💾 **LocalStorage**: API nativa del navegador para almacenar y recuperar las tareas de forma persistente.
- 🎨 **Tailwind CSS**: Se carga desde un CDN externo para los estilos, no requiere instalación local.
- 🧁 **SweetAlert2**: Para mostrar diálogos y notificaciones visuales al usuario (confirmaciones y alertas), manteniendo la lógica de control con sentencias if para mayor claridad.
- 🍞 **Toastify JS**: Para mostrar notificaciones emergentes (toast) al crear nuevas tareas.
- 🚫 **No se utiliza ninguna API externa adicional** para la lógica de la aplicación.


## 🏁 Inicialización del proyecto


Este proyecto es completamente frontend y no requiere Node.js, npm ni ningún entorno de desarrollo adicional.


### 🛠️ Pasos para iniciar:
1. 📥 Descarga o clona el repositorio en tu máquina.
2. 🌍 Abre el archivo `index.html` con tu navegador preferido (Chrome, Firefox, Edge, etc.).
3. ✅ ¡Listo! Puedes comenzar a usar la aplicación de tareas.


⚡ No es necesario instalar dependencias ni ejecutar servidores locales.


## 📋 Descripción del proyecto

Esta aplicación es una lista de tareas (To-Do List) interactiva y moderna, diseñada para gestionar tareas diarias de forma eficiente desde el navegador. Permite agregar, visualizar, eliminar y limpiar tareas, mostrando notificaciones visuales y confirmaciones para mejorar la experiencia de usuario. Toda la información se almacena localmente para que persista entre sesiones.



### ✨ Funcionalidades principales

- ➕ **Agregar tarea**: El usuario puede escribir una nueva tarea y guardarla. La tarea se añade a la lista, se almacena en LocalStorage y se muestra una notificación tipo toast.
- 👀 **Visualizar tareas**: Al cargar la página, se muestran todas las tareas guardadas previamente.
- ❌ **Eliminar tarea individual**: Cada tarea tiene un botón para eliminarla de la lista y del almacenamiento.
- 🧹 **Limpiar todas las tareas**: Un botón permite borrar todas las tareas de la lista y del almacenamiento local, con confirmación visual mediante SweetAlert2.
- 🔔 **Notificación visual**: Se muestra una notificación toast cada vez que se crea una nueva tarea.


### 🗂️ Estructura del proyecto

- `index.html`: Estructura HTML y carga de scripts/estilos.
- `js/app.js`: Lógica principal de la aplicación, manejo de eventos y renderizado de tareas.
- `js/auxiliar.js`: Funciones auxiliares para guardar y recuperar datos de LocalStorage.
- `tailwind.config.js`: (Opcional) Configuración de Tailwind si se desea personalizar.


### ⚙️ ¿Cómo funciona?

1. 📝 El usuario ingresa una tarea y pulsa "Guardar".
2. ➕ La tarea se añade a la lista visual, se almacena en LocalStorage y se muestra una notificación toast.
3. 🔄 Al recargar la página, las tareas guardadas se muestran automáticamente.
4. ❌ Se pueden eliminar tareas individuales o limpiar toda la lista (con confirmación visual).


### 🧑‍💻 Uso

1. 🌍 Abre el archivo `index.html` en tu navegador.
2. 📝 Escribe una tarea y haz clic en "Guardar".
3. ✅ Gestiona tus tareas según lo necesites.

---
💡 Desarrollado como ejercicio práctico de gestión de tareas con tecnologías web modernas.
