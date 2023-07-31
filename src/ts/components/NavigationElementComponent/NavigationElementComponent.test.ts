import NavigationElementComponent from "./NavigationElementComponent";

describe("Given a NavigationElementComponent component that will be part of the navigation bar", () => {
  describe("When given a text 'Next 8 pokemons &rArr;'", () => {
    test("Then it should have a button that shows 'Next 8 pokemons &rArr;'", () => {
      const containerElement = document.createElement("div");
      const textNavigationElement = "Next 8 pokemons &rArr;";

      const navigationElementComponent = new NavigationElementComponent(
        containerElement,
        textNavigationElement,
        console.log
      );
      navigationElementComponent.render();
      const buttonElement = containerElement.querySelector(".button")!;
      const buttonText = buttonElement.textContent!;

      expect(buttonElement).toBeInstanceOf(HTMLButtonElement);
      expect(buttonText).toBe("Next 8 pokemons ⇒");
    });
  });

  describe("When given a text '&lArr; Previous 8 pokemons'", () => {
    test("Then it should have a button that shows '&lArr; Previous 8 pokemons'", () => {
      const containerElement = document.createElement("div");
      const tagNavigationElement = "button";
      const textNavigationElement = "&lArr; Previous 8 pokemons";

      const navigationElementComponent = new NavigationElementComponent(
        containerElement,
        textNavigationElement,
        console.log
      );
      navigationElementComponent.render();
      const buttonElement =
        containerElement.querySelector(tagNavigationElement)!;
      const buttonText = buttonElement.textContent!;

      expect(buttonElement).toBeInstanceOf(HTMLButtonElement);
      expect(buttonText).toBe("⇐ Previous 8 pokemons");
    });
  });
});
