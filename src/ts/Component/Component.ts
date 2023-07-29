abstract class Component {
  element: Element;

  constructor(
    protected readonly parentElement: Element,
    protected readonly tag: string,
    protected readonly className = ""
  ) {
    this.element = document.createElement(tag);
    this.element.className = className;
  }

  abstract render(): void;

  protected remove(): void {
    this.element.remove();
  }
}

export default Component;
