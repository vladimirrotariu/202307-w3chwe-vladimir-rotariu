export interface Ability {
  nameAbility : string;
  visibilityAbility : boolean;
}

export interface Pokemon {
  name : string;
  abilities : Ability[];
  imageUrl : string;
  backImageUrl : string;
}


export type Pokemons = Pokemon[];
