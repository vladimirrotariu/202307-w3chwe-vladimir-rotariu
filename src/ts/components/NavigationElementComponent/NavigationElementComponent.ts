import Component from "../Component/Component.js";

class NavigationElementComponent extends Component {
  constructor(
    parentElement: Element,
    public readonly tagNavigationElement: string,
    public readonly textNavigationElement: string
  ) {
    const tag = "li";
    super(parentElement, tag);
  }

  render() {
    this.parentElement.append(this.element);
    this.element.innerHTML = `
    <${this.tagNavigationElement}>${this.textNavigationElement}</${this.tagNavigationElement}>
    `;
  }
}

export default NavigationElementComponent;
