import Component from "../Component/Component.js";

class AppComponent extends Component {
  public listNavigationControls: HTMLUListElement;

  constructor() {
    const parentElementTag = "header";
    const parentElement = document.createElement(parentElementTag);

    const tag = "nav";
    const className = "navbar";
    super(parentElement, tag, className);
  }

  render() {
    this.containerElement.innerHTML = `
    <header class="header">
    <header/>
    `;

    this.parentElement.append(this.element);

    const headerElement = document.querySelector(".header")!;
    headerElement.append(this.parentElement);

    this.listNavigationControls = document.createElement("ul");
    this.element.append(this.listNavigationControls);
  }
}

export default AppComponent;
