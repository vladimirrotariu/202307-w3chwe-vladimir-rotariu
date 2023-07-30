import NavigationElementComponent from "./NavigationElementComponent";

describe("Given a NavigationElementComponent component that will be part of the navigation bar", () => {
  describe("When given a text 'Next 8 pokemons &rArr;', and that it should be a button that changes to a new list of 8 pokemons", () => {
    test("Then it should show 'Next 8 pokemons &rArr;', and it should be a button", () => {
      const containerElement = document.createElement("div");
      const tagNavigationElement = "button";
      const textNavigationElement = "Next 8 pokemons &rArr;";

      const navigationElementComponent = new NavigationElementComponent(
        containerElement,
        tagNavigationElement,
        textNavigationElement
      );
      navigationElementComponent.render();
      const buttonElement =
        containerElement.querySelector(tagNavigationElement)!;
      const buttonText = buttonElement.textContent!;

      expect(buttonElement).toBeInstanceOf(HTMLButtonElement);
      expect(buttonText).toBe("Next 8 pokemons ⇒");
    });
  });

  describe("When given a text '&lArr; Previous 8 pokemons', and that it should be a button that changes to a new list of 8 pokemons", () => {
    test("Then it should show '&lArr; Previous 8 pokemons', and it should be a button", () => {
      const containerElement = document.createElement("div");
      const tagNavigationElement = "button";
      const textNavigationElement = "&lArr; Previous 8 pokemons";

      const navigationElementComponent = new NavigationElementComponent(
        containerElement,
        tagNavigationElement,
        textNavigationElement
      );
      navigationElementComponent.render();
      const buttonElement =
        containerElement.querySelector(tagNavigationElement)!;
      const buttonText = buttonElement.textContent!;

      expect(buttonElement).toBeInstanceOf(HTMLButtonElement);
      expect(buttonText).toBe("⇐ Previous 8 pokemons");
    });
  });

  describe("When given a text 'Return to list of pokemons', and that it should be a link to return to the list of 8 pokemons", () => {
    test("Then it should show 'Return to list of pokemons', and it should be a link", () => {
      const containerElement = document.createElement("div");
      const tagNavigationElement = "a";
      const textNavigationElement = "Return to list of pokemons";

      const navigationElementComponent = new NavigationElementComponent(
        containerElement,
        tagNavigationElement,
        textNavigationElement
      );
      navigationElementComponent.render();
      const linkElement = containerElement.querySelector(tagNavigationElement)!;
      const linkText = linkElement.textContent!;

      expect(linkElement).toBeInstanceOf(HTMLAnchorElement);
      expect(linkText).toBe("Return to list of pokemons");
    });
  });
});
