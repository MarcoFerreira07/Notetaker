const noteArea = document.getElementById("noteArea");

noteArea
    .addEventListener('submit', (e) => {
        e.preventDefault();

        let noteTitle = document.getElementById('noteTitle').value;
        let noteText = docutment.getElementById('noteText').value; 
        
        const newNote = {
            noteTitle,
            noteText,
        };
        fetch('/notes', {
            method: 'POST',
            headers: {
                'Content-Type':'appication/json',
            },
            body: JSON.stringify(newNote),
        })
        .then((res) => res.json())
        .then((data) => {
            alert(data.status);
            noteTitle = '';
            noteText = '';
        });
    })
    .catch((error) => {
    console.error('Error:', error);
    });