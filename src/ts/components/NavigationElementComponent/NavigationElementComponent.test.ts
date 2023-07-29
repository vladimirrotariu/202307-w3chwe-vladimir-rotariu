import NavigationElementComponent from "./NavigationElementComponent";

describe("Given a NavigationElementComponent component that will be part of the navigation bar", () => {
  describe("When given a text 'Next 8 pokemons &lArr;', and that it should be a button that changes to a new list of 8 pokemons", () => {
    test("Then it should show 'Next 8 pokemons &lArr;', and it should be a button", () => {
      const containerElement = document.createElement("div");
      const tagNavigationElement = "a";
      const textNavigationElement = "Next 8 pokemons &lArr;";

      const navigationElementComponent = new NavigationElementComponent(
        containerElement,
        tagNavigationElement,
        textNavigationElement
      );

      expect(navigationElementComponent.tagNavigationElement).toBe("a");
      expect(textNavigationElement).toBe("Next 8 pokemons &lArr;");
    });
  });
});
