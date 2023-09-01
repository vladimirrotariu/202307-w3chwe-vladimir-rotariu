import AppComponent from "../components/AppComponent/AppComponent";
import NavigationElementComponent from "../components/NavigationElementComponent/NavigationElementComponent";
import PokemonInfoComponent from "../components/PokemonInfoComponent/PokemonInfoComponent";
import { type Pokemon } from "../types/types";

export const removeActionOnClick = (pokemon : Pokemon) => {
  const containerContent = document.querySelectorAll(".container > *")!;
  containerContent.forEach((childElement) => {
    childElement.remove();
  });

  const appComponent = new AppComponent();
  appComponent.render();

  const textNavigationElementTitle = "Back to PokeDex";
  const redirectPageUrlPokedex = "/";
  const navigationElementComponentTitle = new NavigationElementComponent(
    appComponent.listNavigationControls,
    textNavigationElementTitle,
    redirectPageUrlPokedex
  );
  navigationElementComponentTitle.render();

  const parentElementPokemonInfoComponent = document.querySelector(".container")!;
  const pokemonInfoComponent = new PokemonInfoComponent(parentElementPokemonInfoComponent, pokemon);
  pokemonInfoComponent.render();
}
