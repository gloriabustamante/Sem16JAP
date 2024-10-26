const url = 'https://rickandmortyapi.com/api/character';

    function searchCharacter() {
        const name = document.getElementById('characterName').value.trim();
        const url = `https://rickandmortyapi.com/api/character/?name=${name}`;

    fetch(url)
    .then(response => {
        if (!response.ok) throw new Error('Personaje no encontrado');
        return response.json();
    })
    .then(data => {
        if (data.results.length > 0) {
        const character = data.results[0]; 
        document.getElementById('character-image').src = character.image;
        document.getElementById('character-name').textContent = character.name;
        document.getElementById('character-status').textContent = character.status;
        document.getElementById('character-species').textContent = character.species;
        document.getElementById('character-gender').textContent = character.gender;
        document.getElementById('character-card').style.display = 'block';
        }
    })
    .catch(error => {
        alert('Personaje no encontrado');
        console.error('Error:', error);
        document.getElementById('character-card').style.display = 'none';
    });
}
