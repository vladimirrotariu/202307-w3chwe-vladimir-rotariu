export interface PokemonLink {
  name: string;
  url: string;
}

export type PokemonLinks = PokemonLink[];

export interface Pokemon {
  name: string;
  abilities: Ability[];
  imageUrl: string;
  backImageUrl: string;
  combatOnly: boolean;
}

export interface Ability {
  nameAbility: string;
  visibilityAbility: boolean;
}
