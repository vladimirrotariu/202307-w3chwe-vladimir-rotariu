import { type PokemonLinks } from "../../types/types.js";
import Component from "../Component/Component.js";

class ListComponent extends Component {
  constructor(
    parentElement: Element,
    className: string,
    private readonly pokemonLinks: PokemonLinks
  ) {
    const tag = "ul";
    super(parentElement, tag, className);
  }

  render() {
    this.parentElement.append(this.element);

    let pokemonListElements = "";
    this.pokemonLinks.forEach((pokemonLink) => {
      const namePokemon = pokemonLink.name.toUpperCase();

      const anchorElement = `
      <li>
        <h2>${namePokemon}</h2>
        <h3>Click on the image for more!</h3>
        <a href="pokemonPage${namePokemon}.html"> 
        <img src="${pokemonLink.url}" alt="${namePokemon}">
        </a>
      </li>
      `;
      pokemonListElements += anchorElement;
    });
    this.element.innerHTML = pokemonListElements;
  }
}

export default ListComponent;
