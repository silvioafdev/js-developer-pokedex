const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");

const maxRecords = 151;
const limit = 10;
let offset = 0;

let pokemons = [];

function convertPokemonToLi(pokemon) {
  return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    ${pokemon.types
                      .map((type) => `<li class="type ${type}">${type}</li>`)
                      .join("")}
                </ol>
                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `;
}

function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((newPokemons = []) => {
    pokemons = [...pokemons, ...newPokemons];

    const newHtml = newPokemons.map(convertPokemonToLi).join("");
    pokemonList.innerHTML += newHtml;

    pokemonList
      .querySelectorAll(".pokemon")
      .forEach((pokemonElement, index) => {
        pokemonElement.removeEventListener("click", () => {});
      });

    pokemons.forEach((pokemon, index) => {
      const pokemonElement = pokemonList.children[index];

      pokemonElement.addEventListener("click", () => {
        showPopup(pokemon);
      });
    });
  });
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener("click", () => {
  offset += limit;

  if (offset >= maxRecords) {
    loadMoreButton.parentElement.removeChild(loadMoreButton);
  }

  loadPokemonItens(offset, limit);
});
