//Estamos creando una función
function addNote(){
//Capturar el dato que se pone en el input
const noteInput = document.getElementById('noteInput');
//Comunicarnos con ul en HTML
const noteList = document.getElementById('noteList');


//Generamos una condicionales
//Condicion --> si la caja de texto es vacia
//entonces procedo a llenar una lista

    if(noteInput.value.trim() !== ""){
        const newNote = document.createElement('li');
        newNote.textContent = noteInput.value;
        noteList.appendChild(newNote);
        noteInput.value = "";
    }else{
        alert('Por favor, escriba una nota antes de agregar :)');
    }
}