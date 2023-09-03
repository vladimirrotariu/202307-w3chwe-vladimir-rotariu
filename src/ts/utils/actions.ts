import AppComponent from "../components/AppComponent/AppComponent";
import NavigationElementComponent from "../components/NavigationElementComponent/NavigationElementComponent";
import PokemonInfoComponent from "../components/PokemonInfoComponent/PokemonInfoComponent";
import { type Pokemon } from "../types/types";


export const removeAndRenderActionOnClick = (pokemon : Pokemon) => {
  // Get all the child elements within the ".container" element
  const containerContent = document.querySelectorAll(".container > *")!;
  
  // Loop through and remove all child elements from the container
  containerContent.forEach((childElement) => {
    childElement.remove();
  });

  // Initialize the main app component and render it
  const appComponent = new AppComponent();
  appComponent.render();

  // Setup the navigation component to navigate back to the PokeDex
  const textNavigationElementTitle = "Back to PokeDex";
  const redirectPageUrlPokedex = "/";
  const navigationElementComponentTitle = new NavigationElementComponent(
    appComponent.listNavigationControls,
    textNavigationElementTitle,
    redirectPageUrlPokedex
  );
  navigationElementComponentTitle.render();

  // Locate the container where the Pokemon info will be displayed
  const parentElementPokemonInfoComponent = document.querySelector(".container")!;
  
  // Initialize and render the PokemonInfoComponent for the given Pokemon
  const pokemonInfoComponent = new PokemonInfoComponent(parentElementPokemonInfoComponent, pokemon);
  pokemonInfoComponent.render();
}

