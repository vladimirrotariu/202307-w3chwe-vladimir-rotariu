import Component from "../Component/Component.js";

class NavigationElementComponent extends Component {
  constructor(
    parentElement: Element,
    private readonly textNavigationElement: string,
    private readonly actionOnClick = console.clear,
  ) {
    const tag = "li";
    const className = "controls__navigation-element";
    super(parentElement, tag, className);
  }

  render() {
    this.parentElement.append(this.element);
    this.element.innerHTML = `
    <a class="button">${this.textNavigationElement}</a>
    `;
    const buttonElement = this.element.querySelector(".button")!;
    buttonElement.addEventListener("click", () => {
      this.actionOnClick();
    });
  }
}

export default NavigationElementComponent;
