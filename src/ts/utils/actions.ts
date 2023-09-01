import AppComponent from "../components/AppComponent/AppComponent";

export const removeActionOnClick = () => {
  const containerContent = document.querySelectorAll(".container > *")!;
  containerContent.forEach((childElement) => {
    childElement.remove();
  });

  const appComponent = new AppComponent();
  appComponent.render();
}
