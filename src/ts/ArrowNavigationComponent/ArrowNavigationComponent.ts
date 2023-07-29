import Component from "../Component/Component";

class ArrowNavigationComponent extends Component {
  constructor(parentElement: Element, private readonly textArrow: string) {
    const tag = "li";
    super(parentElement, tag);
  }

  render() {
    this.parentElement.append(this.element);
    this.element.innerHTML = `
    <a>${this.textArrow}</a>
    `;
  }
}

export default ArrowNavigationComponent;
