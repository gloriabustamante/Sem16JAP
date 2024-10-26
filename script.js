const url = 'https://rickandmortyapi.com/api/character';

function searchCharacter() {
    const input = document.getElementById('characterName').value.trim();
    let characterUrl;

    if (!isNaN(input) && input !== '') {
        characterUrl = `https://rickandmortyapi.com/api/character/${input}`;
    } else {
        characterUrl = `https://rickandmortyapi.com/api/character/?name=${input}`;
    }

    fetch(characterUrl)
        .then(response => {
            if (!response.ok) throw new Error('Personaje no encontrado');
            return response.json();
        })
        .then(data => {
            if (data.results && data.results.length > 0) {
                const character = data.results[0]; 
                
                document.getElementById('character-image').src = character.image;
                document.getElementById('character-id').textContent = character.id;
                document.getElementById('character-name').textContent = character.name;
                document.getElementById('character-status').textContent = character.status;
                document.getElementById('character-species').textContent = character.species;
                document.getElementById('character-origin').textContent = character.origin.name;
                document.getElementById('character-gender').textContent = character.gender;
                document.getElementById('character-card').style.display = 'block';
            } else if (data.id) {
                const character = data; 

                document.getElementById('character-image').src = character.image;
                document.getElementById('character-id').textContent = character.id;
                document.getElementById('character-name').textContent = character.name;
                document.getElementById('character-status').textContent = character.status;
                document.getElementById('character-species').textContent = character.species;
                document.getElementById('character-origin').textContent = character.origin.name;
                document.getElementById('character-gender').textContent = character.gender;
                document.getElementById('character-card').style.display = 'block';
            } else {
                throw new Error('Personaje no encontrado');
            }
        })
        .catch(error => {
            alert('Error: ' + error.message);
            console.error('Error:', error);
            document.getElementById('character-card').style.display = 'none';
        });
}
