import AppComponent from "./components/AppComponent/AppComponent.js";
import ListComponent from "./components/ListComponent/ListComponent.js";
import NavigationElementComponent from "./components/NavigationElementComponent/NavigationElementComponent.js";
import { pokemonLinksTesting } from "./utils/testData.js";

const renderComponentsHomePage = () => {
  const appComponent = new AppComponent();
  appComponent.render();

  const textNavigationElementTitle = "PokeDex";
  const redirectPageUrlPokedex = "/";
  const navigationElementComponentTitle = new NavigationElementComponent(
    appComponent.listNavigationControls,
    textNavigationElementTitle,
    redirectPageUrlPokedex
  );
  navigationElementComponentTitle.render();

  const redirectPageUrlPokeApi = "https://pokeapi.co/";
  const textNavigationElementPrevious = "API we used";
  const navigationElementComponentPrevious = new NavigationElementComponent(
    appComponent.listNavigationControls,
    textNavigationElementPrevious,
    redirectPageUrlPokeApi
  );
  navigationElementComponentPrevious.render();

  const mainElement = document.createElement("main");
  appComponent.containerElement.append(mainElement);
  const classNameListComponent = "pokemon-list";
  const listComponent = new ListComponent(
    mainElement,
    classNameListComponent,
    pokemonLinksTesting
  );
  listComponent.render();
}

renderComponentsHomePage();
