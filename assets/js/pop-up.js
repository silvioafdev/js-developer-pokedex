const pokemonPopup = document.getElementById("pokemon-popup");
const closeButton = document.getElementById("close-button");
const popupBackground = document.getElementById("popup-background");

function showPopup(pokemon) {
  pokemonPopup.innerHTML = `
        <div class="popup-content pokemon ${pokemon.type}">
            <button id="close-button" class="close-button">Close</button>
            <img src="${pokemon.photo}" alt="${pokemon.name}">
            <h2 class="name popup-name">${pokemon.name}</h2>
            <p class="popup-number">#${pokemon.number}</p>
            <div class="popup-stats">
              <p>HP: ${pokemon.hp}</p>
              <p>Attack: ${pokemon.atk}</p>
              <p>Defense: ${pokemon.def}</p>
              <p>Special Attack: ${pokemon.spAt}</p>
              <p>Special Defense: ${pokemon.spDf}</p>
              <p>Speed: ${pokemon.speed}</p>
            </div>
        </div>
    `;

  pokemonPopup.style.display = "block";

  const closeButton = document.getElementById("close-button");
  closeButton.addEventListener("click", () => {
    closePopup();
  });
}

function closePopup() {
  pokemonPopup.style.display = "none";
}
