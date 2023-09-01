const fetchPokemonsFromApi = async () => {
  const pokemonLinks = [];

  try {
    const responseGeneral = await fetch("https://pokeapi.co/api/v2/pokemon-form/?offset=0&limit=3");
     
    const {results : [{name : pokemonOneName, url: urlInfoPokemonOne}, {name : pokemonTwoName, url: urlInfoPokemonTwo}, {name : pokemonThreeName, url: urlInfoPokemonThree}]} = await responseGeneral.json() as {
      results: [
        {name: string, url: string},
        {name: string, url: string},
        {name: string, url: string}
      ]
    };

    const responsePokemonOne = await fetch(urlInfoPokemonOne);
    const imageUrlPokemonOne = await responsePokemonOne.json() as string;
    const pokemonOneLink = {name : pokemonOneName, url: imageUrlPokemonOne};
    pokemonLinks.push(pokemonOneLink);

    const responsePokemonTwo = await fetch(urlInfoPokemonTwo);
    const imageUrlPokemonTwo = await responsePokemonTwo.json() as string;
    const pokemonTwoLink = {name : pokemonTwoName, url: imageUrlPokemonTwo};
    pokemonLinks.push(pokemonTwoLink);

    const responsePokemonThree = await fetch(urlInfoPokemonThree);
    const imageUrlPokemonThree = await responsePokemonThree.json() as string;
    const pokemonThreeLink = {name : pokemonThreeName, url: imageUrlPokemonThree};
    pokemonLinks.push(pokemonThreeLink);

  } catch(error) {
     console.log("Fetch error: ", error);
  }

  return pokemonLinks;
}

export default fetchPokemonsFromApi;
