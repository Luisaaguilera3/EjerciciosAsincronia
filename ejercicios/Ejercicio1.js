
document.addEventListener("DOMContentLoaded", function() {
    const APIUrl = "https://thronesapi.com/api/v2/Characters";
    const selectElement = document.getElementById("character-list");
    const charactersImg = document.querySelector(".character-image");
    
    async function fetchCharacters (){
        try {
            const response = await fetch(APIUrl);
            const characters = await response.json();
            populateSelect (characters);
        } catch (error) {
            console.error ("Error fetching characters:", error);
        }
    }


function populateSelect (characters) {

    const defaultOption = document.createElement("option");
    defaultOption.textContent = "Select a character";
    defaultOption.value = "";
    selectElement.appendChild(defaultOption);

    characters.forEach (character => {
        const option = document.createElement("option");
        option.value =  character.imageUrl;
        option.textContent = character.fullName;
        selectElement.appendChild(option);
    });
}

selectElement.addEventListener("change", function() {
    const selectedImageUrl = this.value;
    if (selectedImageUrl) {
        charactersImg.src = selectedImageUrl;
        charactersImg.style.display = "block";
    } else {
        charactersImg.style.display = "none";
    }

});

fetchCharacters();

});