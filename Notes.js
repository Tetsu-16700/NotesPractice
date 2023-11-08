// Crear nuevas tareas usando el formulario.
// Eliminar una tarea al hacer click en el boton "delete"


//  RESUMEN DE DESARROLLO EN HTML

//  //FORM
const form = document.querySelector('#form-container');

// // DIV
const mainContainer = document.querySelector('#li-container');

// // BUTTON DELETE
mainContainer.addEventListener('click',deleteNote)

// // BUTTON CREATE
form.addEventListener('submit', createNote);
