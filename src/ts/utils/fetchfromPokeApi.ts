const fetchPokemonsFromApi = async () => {
  const pokemons = [];

  try {
    // Fetch general Pokemon info
    const responseGeneral = await fetch(import.meta.env.VITE_POKE_FORM_API_URL as string);

    const {
      results: [
        { name: pokemonOneName, url: urlInfoPokemonOne },
        { name: pokemonTwoName, url: urlInfoPokemonTwo },
        { name: pokemonThreeName, url: urlInfoPokemonThree }
      ]
    } = await responseGeneral.json() as {
      results: [
        { name: string, url: string },
        { name: string, url: string },
        { name: string, url: string }
      ]
    };

    // Array to store Pokémon details
    const pokemonDetails = [urlInfoPokemonOne, urlInfoPokemonTwo, urlInfoPokemonThree].map(async (url, index) => {
      const responsePokemon = await fetch(url);
      const {
        sprites: { front_default: urlImage, back_default: imageBackUrl }
      } = await responsePokemon.json() as { sprites : { front_default: string, back_default: string}};

      const pokemonName = [pokemonOneName, pokemonTwoName, pokemonThreeName][index];

      const responseAbilities = await fetch(`${import.meta.env.VITE_POKEMON_URL as string}${index + 1}`);
      const result = await responseAbilities.json() as { abilities : [{ ability : { name : string }, is_hidden : boolean }, { ability : { name : string }, is_hidden : boolean }] };

      const firstAbility = result.abilities[0];
      const secondAbility = result.abilities[1];

      const { ability : { name : nameAbilityOne }, is_hidden : visibilityAbilityOne } = firstAbility;
      const { ability : { name : nameAbilityTwo }, is_hidden : visibilityAbilityTwo } = secondAbility;

      const abilities = [{nameAbility : nameAbilityOne, visibilityAbility : visibilityAbilityOne}, {nameAbility : nameAbilityTwo, visibilityAbility : visibilityAbilityTwo}];

      return {
        name : pokemonName,
        imageUrl : urlImage,
        abilities, 
        backImageUrl : imageBackUrl
      };
    });

    // Wait for all promises to resolve and push results to pokemons
    const resolvedPokemonDetails = await Promise.all(pokemonDetails);
    pokemons.push(...resolvedPokemonDetails);
    
  } catch (error) {
    console.log("Fetch error: ", error);
  }

  return pokemons;
};

export default fetchPokemonsFromApi;
