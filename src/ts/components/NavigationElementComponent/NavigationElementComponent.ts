import Component from "../Component/Component.js";

class NavigationElementComponent extends Component {
  constructor(
    parentElement: Element,
    public readonly textNavigationElement: string,
    private readonly actionOnClick: () => void
  ) {
    const tag = "li";
    const className = "controls__navigation-element";
    super(parentElement, tag, className);
  }

  render() {
    this.parentElement.append(this.element);
    this.element.innerHTML = `
    <button class="button">${this.textNavigationElement}</button>
    `;
    const buttonElement = this.element.querySelector(".button")!;
    buttonElement.addEventListener("click", () => {
      this.actionOnClick();
    });
  }
}

export default NavigationElementComponent;
