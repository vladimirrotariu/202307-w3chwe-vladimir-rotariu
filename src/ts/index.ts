import AppComponent from "./components/AppComponent/AppComponent.js";
import ListComponent from "./components/ListComponent/ListComponent.js";
import NavigationElementComponent from "./components/NavigationElementComponent/NavigationElementComponent.js";
import { pokemonLinksTesting } from "./utils/testData.js";

const appComponent = new AppComponent();
appComponent.render();

const textNavigationElementNext = "NEXT 8 pokemons";
const navigationElementComponentNext = new NavigationElementComponent(
  appComponent.listNavigationControls,
  textNavigationElementNext,
  console.log
);
navigationElementComponentNext.render();

const textNavigationElementPrevious = "PREVIOUS 8 pokemons";
const navigationElementComponentPrevious = new NavigationElementComponent(
  appComponent.listNavigationControls,
  textNavigationElementPrevious,
  console.log
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
