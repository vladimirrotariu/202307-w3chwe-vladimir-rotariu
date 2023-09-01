import { type Pokemons } from "../../types/types.js";
import { removeActionOnClick } from "../../utils/actions.js";
import Component from "../Component/Component.js";

class ListComponent extends Component {
  constructor(
    parentElement: Element,
    className: string,
    private readonly pokemons: Pokemons
  ) {
    const tag = "ul";
    super(parentElement, tag, className);
  }

  render() {
    this.parentElement.append(this.element);
    let pokemonListElements = "";
    this.pokemons.forEach((pokemon) => {
      const namePokemon = pokemon.name.toUpperCase();

      const anchorElement = `
      <li>
        <h2>${namePokemon}</h2>
        <h3>Click on the image for more!</h3>
        <img src="${pokemon.imageUrl}" alt="${namePokemon}">
      </li>
      `;
      pokemonListElements += anchorElement;
    });

    this.element.innerHTML = pokemonListElements;

    document.querySelectorAll("img").forEach((image, index) => {
      image.addEventListener("click", () => {
        removeActionOnClick(this.pokemons[index]);
      })
    });
  }
}

export default ListComponent;
