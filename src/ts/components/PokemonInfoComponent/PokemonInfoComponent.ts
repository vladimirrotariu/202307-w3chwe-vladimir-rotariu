import { type Pokemon } from "../../types/types.js";
import Component from "../Component/Component.js";

// Define a new class called PokemonInfoComponent that extends the generic Component class
class PokemonInfoComponent extends Component {
  constructor(parentElement: Element, private readonly pokemon: Pokemon) {
    const tag = "main";
    const className = "pokemon";
    super(parentElement, tag, className);
  }

  // Define the render method to construct the component's HTML
  render() {
    this.parentElement.append(this.element);

    // Generate a list of abilities and their visibility status
    const pokemonAbilitiesListItemElements = this.pokemon.abilities
      .map((ability) => {
        const pokemonAbilityListItemElement = `
      <li>
        <span>${ability.nameAbility.toUpperCase()} ${
          ability.visibilityAbility ? "hidden" : "visible"}
        </span>
      </li>
      `;
        return pokemonAbilityListItemElement;
      }).join("\n");
    
    // Populate the inner HTML of the component
    this.element.innerHTML = `
      <div class="pokemon">
        <div class="pokemon__picture">
          <img src="${
            this.pokemon.imageUrl
          }" alt="A picture of ${this.pokemon.name}">
        </div>
        <div class="pokemon__name">
          <h2>${this.pokemon.name.toUpperCase()}</h2>
        </div>
        <div class="pokemon__abilities">
          <h2>Abilities</h2>
          <ul>
            ${pokemonAbilitiesListItemElements}
          </ul>
        </div>
        <div class="pokemon__back">
          <h2>Back</h2>
            <img src="${
              this.pokemon.backImageUrl
            }"  alt="A picture of the back of ${
          this.pokemon.name
        }">
        </div>
      </div>
    `;
  }
}

export default PokemonInfoComponent;
