import AppComponent from "../components/AppComponent/AppComponent";
import NavigationElementComponent from "../components/NavigationElementComponent/NavigationElementComponent";

export const removeActionOnClick = () => {
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
}
