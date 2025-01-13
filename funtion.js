document.addEventListener('DOMContentLoaded', function() {
    const addNotebookButton = document.getElementById('addNotebook');
    const notebooksContainer = document.getElementById('notebooksContainer');
    const editor = document.getElementById('editor');
    const main = document.getElementById('main');
    const noteContent = document.getElementById('noteContent');
    const backToMain = document.getElementById('backToMain');
    const saveNotebook = document.getElementById('saveNotebook');

    addNotebookButton.addEventListener('click', createNotebook);
    backToMain.addEventListener('click', () => {
        editor.style.display = 'none';
        main.style.display = 'flex';
    });

    saveNotebook.addEventListener('click', saveContent);

    function createNotebook() {
        const notebookName = prompt('Ingresa el nombre del Notebook:');
        if (notebookName) {
            const colorPicker = document.createElement('input');
            colorPicker.type = 'color';
            colorPicker.value = '#b6ecff'; // Color predeterminado

            const fontColorPicker = document.createElement('input');
            fontColorPicker.type = 'color';
            fontColorPicker.value = '#000000'; // Color de fuente predeterminado
            
            const notebook = document.createElement('div');
            notebook.textContent = notebookName;
            notebook.style.backgroundColor = colorPicker.value;
            notebook.style.color = fontColorPicker.value;

            colorPicker.addEventListener('input', () => {
                notebook.style.backgroundColor = colorPicker.value;
            });

            fontColorPicker.addEventListener('input', () => {
                notebook.style.color = fontColorPicker.value;
            });

            notebook.addEventListener('click', () => {
                main.style.display = 'none';
                editor.style.display = 'flex';
                noteContent.value = ''; // Limpia el contenido para un nuevo notebook
            });

            const container = document.createElement('div');
            container.appendChild(colorPicker);
            container.appendChild(fontColorPicker);
            container.appendChild(notebook);

            notebooksContainer.appendChild(container);
        }
    }

    function saveContent() {
        alert('Contenido guardado: ' + noteContent.value);
        // Aquí puedes añadir lógica para guardar el contenido en el almacenamiento local o en un servidor
    }
});
