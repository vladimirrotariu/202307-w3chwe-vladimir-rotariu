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
      const anchorElement = `
      <li>
        <a><img src="${pokemonLink.url}">${pokemonLink.name.toUpperCase()}</a>
      </li>
      `;
      pokemonListElements += anchorElement;
    });
    this.element.innerHTML = pokemonListElements;
  }
}

export default ListComponent;
