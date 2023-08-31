import { type PokemonLinks } from "../../types/types";
import ListComponent from "./ListComponent.js";

describe("Given a ListComponent component", () => {
  describe("When given two pokemon names, 'bulbasaur' and 'charmander'", () => {
    test("Then it should show a list with the texts 'BULBASAUR' and 'CHARMANDER'", () => {
      const containerElement = document.createElement("div");
      const className = "";
      const namePlantPokemon = "bulbasaur";
      const nameFirePokemon = "charmander";
      const pokemonLinks: PokemonLinks = [
        {
          name: namePlantPokemon,
          url: "",
        },
        {
          name: nameFirePokemon,
          url: "",
        },
      ];

      const listComponent = new ListComponent(
        containerElement,
        className,
        pokemonLinks
      );
      listComponent.render();
      
      const linkElements = containerElement.querySelectorAll("h2");
      const linkTexts: string[] = [];
      linkElements.forEach((linkElement) => {
        const linkText = linkElement.textContent!;
        linkTexts.push(linkText);
      });

      expect(linkTexts).toStrictEqual([
        namePlantPokemon.toUpperCase(),
        nameFirePokemon.toUpperCase(),
      ]);
    });
  });

  describe("When given two pokemon images, one of bulbasaur and the other of charmander", () => {
    test("Then it should show a list with images of bulbasaur and charmander", () => {
      const containerElement = document.createElement("div");
      const className = "";
      const pictureBulbasaurUrl =
        "https://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-Pic.png";
      const pictureCharmanderUrl =
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png";
      const pokemonLinks: PokemonLinks = [
        {
          name: "",
          url: pictureBulbasaurUrl,
        },
        {
          name: "",
          url: pictureCharmanderUrl,
        },
      ];

      const listComponent = new ListComponent(
        containerElement,
        className,
        pokemonLinks
      );
      listComponent.render();
      const imageElements = containerElement.querySelectorAll("img");
      const imagesUrls: string[] = [];
      imageElements.forEach((imageElement) => {
        const imageUrl = imageElement.src;
        imagesUrls.push(imageUrl);
      });

      expect(imagesUrls).toStrictEqual([
        pictureBulbasaurUrl,
        pictureCharmanderUrl,
      ]);
    });
  });
});
