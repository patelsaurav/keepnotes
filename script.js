const addButton = document.getElementById("add");

const updateLSData = () => {
    const textareadata = document.querySelectorAll('textarea');
    const notes = [];
    textareadata.forEach((curr) => {
        return notes.push(curr.value);
                                   })
    localStorage.setItem('notes',JSON.stringify(notes));                              

}


const addNewNote = (text = "") => {
    // created new div Element
    const note = document.createElement('div');
    note.classList.add('note');

    const htmlData = ` 
     <div class="operation">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
</div> 
<div class="main ${text ? "" : "hidden"}"> </div> 
    <textarea name="" id="" cols="48" rows="10" class="${text ? "hidden" : " "} " ></textarea>
`;

    note.insertAdjacentHTML('afterbegin', htmlData);
    // console.log(note);

    //getting the reference
    const editButton = note.querySelector('.edit')
    const delButton = note.querySelector('.delete')
    const mainDiv = note.querySelector('.main')
    const textarea = note.querySelector('textarea')

    //deleting the node
    delButton.addEventListener('click', () => {
        note.remove();
        updateLSData();
    })
    textarea.value = text;
    mainDiv.innerHTML = text;
    //toggel using edit button
    editButton.addEventListener('click', () => {
        mainDiv.classList.toggle('hidden');
        textarea.classList.toggle('hidden');

    })
    textarea.addEventListener('change', (event) => {
        const value = event.target.value;
        mainDiv.innerHTML = value;
        updateLSData();
    })


    // inserted html data in div 
    document.body.appendChild(note); //its append child of a node



}

//getting data back from localstorage
const notes = JSON.parse(localStorage.getItem('notes'));
if(notes){ notes.forEach((note) => addNewNote(note))
};

addButton.addEventListener('click', () =>
    addNewNote()
);





























