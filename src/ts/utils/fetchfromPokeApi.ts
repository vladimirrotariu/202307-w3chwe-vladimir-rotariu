const fetchPokemonsFromApi = async () => {
  const pokemonLinks = [];

  try {
    const responseGeneral = await fetch("https://pokeapi.co/api/v2/pokemon-form/?offset=0&limit=3");
     
    const {results : [{name : pokemonOneName, url: urlInfoPokemonOne},
       {name : pokemonTwoName, url: urlInfoPokemonTwo}, {name : pokemonThreeName, url: urlInfoPokemonThree}]} = 
       await responseGeneral.json() as {
        results : [
          {name : string, url : string},
          {name : string, url : string},
          {name : string, url : string}
        ]
    };

    const responsePokemonOne = await fetch(urlInfoPokemonOne);
    const {sprites : {front_default : imageUrlPokemonOne}} = await responsePokemonOne.json() as 
    {sprites : {front_default : string}};
    const pokemonOneLink = {name : pokemonOneName, url : imageUrlPokemonOne};
    pokemonLinks.push(pokemonOneLink);

    const responsePokemonTwo = await fetch(urlInfoPokemonTwo);
    const {sprites : {front_default : imageUrlPokemonTwo}} = await responsePokemonTwo.json() as 
    {sprites : {front_default : string}};
    const pokemonTwoLink = {name : pokemonTwoName, url: imageUrlPokemonTwo};
    pokemonLinks.push(pokemonTwoLink);

    const responsePokemonThree = await fetch(urlInfoPokemonThree);
    const {sprites : {front_default : imageUrlPokemonThree}} = await responsePokemonThree.json() as 
    {sprites : {front_default : string}};
    const pokemonThreeLink = {name : pokemonThreeName, url: imageUrlPokemonThree};
    pokemonLinks.push(pokemonThreeLink);

  } catch(error) {
     console.log("Fetch error: ", error);
  }

  return pokemonLinks;
}

export default fetchPokemonsFromApi;
