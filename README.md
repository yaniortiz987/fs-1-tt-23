# fs-1-tt-23 📝



## 🚀 Tecnologías utilizadas

- 🟦 **HTML5**: Estructura principal de la aplicación.
- 📜 **JavaScript (ES6, módulos)**: Lógica de la aplicación, manipulación del DOM y gestión de eventos.
- 🎨 **Tailwind CSS**: Framework de utilidades para estilos rápidos y responsivos (vía CDN).
- 💾 **LocalStorage**: Persistencia de datos en el navegador para guardar el historial de tareas.


## 🌐 Dependencias externas y APIs

- 💾 **LocalStorage**: Se utiliza la API nativa del navegador para almacenar y recuperar las tareas de forma persistente.
- 🎨 **Tailwind CSS**: Se carga desde un CDN externo para los estilos, no requiere instalación local.
- 🧁 **SweetAlert2**: Se utiliza para mostrar diálogos y notificaciones visuales al usuario (confirmaciones y alertas), manteniendo la lógica de control con sentencias if para mayor claridad.
- 🚫 **No se utiliza ninguna API externa adicional** para la lógica de la aplicación.


## 🏁 Inicialización del proyecto


Este proyecto es completamente frontend y no requiere Node.js, npm ni ningún entorno de desarrollo adicional.


### 🛠️ Pasos para iniciar:
1. 📥 Descarga o clona el repositorio en tu máquina.
2. 🌍 Abre el archivo `index.html` con tu navegador preferido (Chrome, Firefox, Edge, etc.).
3. ✅ ¡Listo! Puedes comenzar a usar la aplicación de tareas.


⚡ No es necesario instalar dependencias ni ejecutar servidores locales.


## 📋 Descripción del proyecto


Esta aplicación es una lista de tareas (To-Do List) sencilla y moderna, diseñada para gestionar tareas diarias de forma eficiente desde el navegador. Permite agregar, visualizar, eliminar y limpiar tareas, manteniendo la información almacenada localmente para que persista entre sesiones.


### ✨ Funcionalidades principales

- ➕ **Agregar tarea**: El usuario puede escribir una nueva tarea y guardarla. La tarea se añade a la lista y se almacena en LocalStorage.
- 👀 **Visualizar tareas**: Al cargar la página, se muestran todas las tareas guardadas previamente.
- ❌ **Eliminar tarea individual**: Cada tarea tiene un botón para eliminarla de la lista y del almacenamiento.
- 🧹 **Limpiar todas las tareas**: Un botón permite borrar todas las tareas de la lista y del almacenamiento local.
- 🔔 **Notificación visual**: (Pendiente de implementar) Se puede agregar una notificación al crear una tarea.


### 🗂️ Estructura del proyecto

- `index.html`: Estructura HTML y carga de scripts/estilos.
- `js/app.js`: Lógica principal de la aplicación, manejo de eventos y renderizado de tareas.
- `js/auxiliar.js`: Funciones auxiliares para guardar y recuperar datos de LocalStorage.
- `tailwind.config.js`: (Opcional) Configuración de Tailwind si se desea personalizar.


### ⚙️ ¿Cómo funciona?


1. 📝 El usuario ingresa una tarea y pulsa "Guardar".
2. ➕ La tarea se añade a la lista visual y se almacena en LocalStorage.
3. 🔄 Al recargar la página, las tareas guardadas se muestran automáticamente.
4. ❌ Se pueden eliminar tareas individuales o limpiar toda la lista.


### 🧑‍💻 Uso

1. 🌍 Abre el archivo `index.html` en tu navegador.
2. 📝 Escribe una tarea y haz clic en "Guardar".
3. ✅ Gestiona tus tareas según lo necesites.

---
💡 Desarrollado como ejercicio práctico de gestión de tareas con tecnologías web modernas.
