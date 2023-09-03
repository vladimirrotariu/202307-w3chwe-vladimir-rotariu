import Component from "../Component/Component.js";

// Define a new class called NavigationElementComponent that extends the Component class
class NavigationElementComponent extends Component {
  constructor(
    parentElement: Element,  
    private readonly textNavigationElement: string,  
    private readonly redirectPageUrl = "",  
    private readonly actionOnClick = console.clear, 
  ) {
    const tag = "li";  
    const className = "controls__navigation-element";  
    super(parentElement, tag, className);  
  }

  // Define the render method to create the actual HTML structure
  render() {
    this.parentElement.append(this.element);
    
    // Generate the inner HTML of the element
    const text = this.textNavigationElement;
    this.element.innerHTML = `
      <a class="button" href="${this.redirectPageUrl}" aria-label="${text}">${text}</a>
    `;

    // Attach an event listener for the click event on the anchor tag
    const buttonElement = this.element.querySelector(".button")!;  
    buttonElement.addEventListener("click", () => {
      /* The actionOnClick will, for example, remove an instance of PokemonInfoComponent,
       and re-render an instance of PokemonListComponent */
      this.actionOnClick();
    });
  }
}

export default NavigationElementComponent;
