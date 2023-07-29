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
    this.pokemonLinks.forEach((PokemonLink) => {
      const listItemTag = "li";
      const listItemElement = document.createElement(listItemTag);
      this.element.append(listItemElement);

      const linkTag = "a";
      const linkItemElement = document.createElement(linkTag);
      listItemElement.append(linkItemElement);
      linkItemElement.href = PokemonLink.url;
      linkItemElement.text = PokemonLink.name;
    });
  }
}

export default ListComponent;
