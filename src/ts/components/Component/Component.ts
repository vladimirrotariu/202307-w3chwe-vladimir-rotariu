abstract class Component {
  readonly element: Element;
  readonly containerElement = document.querySelector(".container")!;

  constructor(
    protected readonly parentElement: Element,
    protected readonly tag: string,
    protected readonly className = ""
  ) {
    this.element = document.createElement(tag);
    this.element.className = className;
  }

  public remove(): void {
    this.element.remove();
  }

  public abstract render(): void;
}

export default Component;
