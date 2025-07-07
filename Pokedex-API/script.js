let currentPokemonId = 1; // Initial Pokémon ID (Bulbasaur)

async function fetchData(pokemonIdentifier = currentPokemonId) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonIdentifier}`);
        if (!response.ok) throw new Error("Pokémon not found");

        const data = await response.json();
        currentPokemonId = data.id; // update the global variable

        // Extract basic info
        const pokemonSprite = data.sprites.front_default;
        const id = data.id;
        const weight = data.weight;
        const height = data.height;
        const name = data.name;
        const types = data.types.map(t => t.type.name).join(", ");

        // Fetch generation from species endpoint
        const speciesResponse = await fetch(data.species.url);
        const speciesData = await speciesResponse.json();
        const generation = speciesData.generation.name;

        // Display image
        const imageElement = document.getElementById("pokemon-sprite");
        imageElement.src = pokemonSprite;
        imageElement.style.display = "block";

        // Display info
        document.getElementById("pokemon-info").innerHTML = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>ID:</strong> ${id}</p>
            <p><strong>Type:</strong> ${types}</p>
            <p><strong>Weight:</strong> ${weight}</p>
            <p><strong>Height:</strong> ${height}</p>
            <p><strong>Generation:</strong> ${generation}</p>
        `;
    } catch (error) {
        console.error(error);
        document.getElementById("pokemon-info").innerHTML = `<p style="color:red;">Pokémon not found.</p>`;
        document.getElementById("pokemon-sprite").style.display = "none";
    }
}

// Search button
document.getElementById("fetch-button").addEventListener("click", () => {
    const nameInput = document.getElementById("pokemon-name").value.trim().toLowerCase();
    fetchData(nameInput);
});

// Next button
document.getElementById("next-button").addEventListener("click", () => {
    fetchData(currentPokemonId + 1);
});

// Previous button
document.getElementById("prev-button").addEventListener("click", () => {
    if (currentPokemonId > 1) fetchData(currentPokemonId - 1);
});


// Enter key to search
document.getElementById("pokemon-name").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        document.getElementById("fetch-button").click();
    }
});
