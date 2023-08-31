import AppComponent from "./components/AppComponent/AppComponent";
import NavigationElementComponent from "./components/NavigationElementComponent/NavigationElementComponent";

const appComponent = new AppComponent();
appComponent.render();

const textNavigationElementNext = "BACK to Pokemon page";
const navigationElementComponentNext = new NavigationElementComponent(
  appComponent.listNavigationControls,
  textNavigationElementNext,
  console.log
);
navigationElementComponentNext.render();
