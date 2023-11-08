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
// DESARROLLO

// // CREAR NOTAS

function createNote(event){
    event.preventDefault();

    // // IDENTIFICA EL DIV 

    const newDiv = document.createElement("div");

    // // IDENTIFICA EL TEXTO DE CADA NOTA + ADICIONALES (NUEVO)

    const numCards = mainContainer.getElementsByClassName('text').length + 1
 
    // // FUNCION DE BOTON CREATE

    const newP = document.createElement('p');
    const textContainer = form.querySelector("#text");
    const text = textContainer.value;

    // // SI EL NUEVO CUADRO FUE CREADO EN BLANCO APARECE:

    newP.textContent = text == '' ? 'Default text' : text;

    // // FUNCION DE BOTON DELETE

    const newButton = document.createElement('button');
    newButton.className = 'delete-List ' + numCards
    newButton.type = 'button'
    newButton.textContent = 'Delete'

    // // FUNCION DE NUEVO CUADRO O NOTA

    newDiv.className = 'text ' + numCards
    newDiv.appendChild(newP);
    newDiv.appendChild(newButton);
    mainContainer.appendChild(newDiv);
}
// FUNCION DE BOTONES CREATE Y DELETE

function deleteNote(event){
    const classNames = event.target.className.split(' ')
    if ( classNames[0] === 'delete-List'){
        const noteToDelete = mainContainer.getElementsByClassName("text "+classNames[1])[0]
        mainContainer.removeChild(noteToDelete)
    }
}