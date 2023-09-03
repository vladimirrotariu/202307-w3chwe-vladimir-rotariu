import { type Pokemons } from "../../types/types.js";
import { removeAndRenderActionOnClick } from "../../utils/actions.js";
import Component from "../Component/Component.js";

// Define a ListComponent class that extends the generic Component class
class ListComponent extends Component {
  constructor(
    parentElement: Element,
    className: string,
    private readonly pokemons: Pokemons
  ) {
    const tag = "ul";
    super(parentElement, tag, className);
  }

  // Implement the render method to build the list component
  render() {
    this.parentElement.append(this.element);
    let pokemonListElements = "";

    // Loop through each Pokemon and create its HTML structure
    this.pokemons.forEach((pokemon) => {
      const namePokemon = pokemon.name.toUpperCase();

      const anchorElement = `
      <li>
        <h2>${namePokemon}</h2>
        <h3>Click on the image for more!</h3>
        <img src="${pokemon.imageUrl}" alt="${namePokemon}" width="125" height="125">
      </li>
      `;

      // Concatenate the current Pokemon's HTML to the existing string
      pokemonListElements += anchorElement;
    });

    this.element.innerHTML = pokemonListElements;

    // Add a click event listener to each image

    document.querySelectorAll("img").forEach((image, index) => {
      image.addEventListener("click", () => {
        // Execute removeAndRenderActionOnClick function when an image is clicked
        removeAndRenderActionOnClick(this.pokemons[index]);
      })
    });
  }
}

export default ListComponent;
