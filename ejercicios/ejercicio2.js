
const getRandomPokemonId = () => {
    return Math.floor(Math.random() * 151) + 1; 
};

const fetchPokemon = async () => {
    const pokemonId = getRandomPokemonId();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    const pokemonData = await response.json(); 
    const spriteUrl = pokemonData.sprites.other['official-artwork']['front_default'];
    const randomImage = document.querySelector('.random-image');
    randomImage.src = spriteUrl;
    randomImage.alt = pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1); 
};

fetchPokemon();
