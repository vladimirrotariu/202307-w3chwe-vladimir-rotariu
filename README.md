<div>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white&labelColor=3178C6" alt="TypeScript" />
<img src="https://img.shields.io/badge/HTML-E34F26?style=flat&logo=html5&logoColor=white&labelColor=E34F26" alt="HTML" />
  <img src="https://img.shields.io/badge/CSS-1572B6?style=flat&logo=css3&logoColor=white&labelColor=1572B6" alt="CSS" />
<img alt="Static Badge" src="https://img.shields.io/badge/Sass-%23fadadd?style=flat&logo=Sass&labelColor=%23fadadd&color=%23fadadd">
<img src="https://img.shields.io/badge/Jest-C21325?style=flat&logo=jest&logoColor=white&labelColor=C21325" alt="Jest" />
<img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white&labelColor=F05032" alt="Git" />
<img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=github-actions&logoColor=white&labelColor=2088FF" alt="GitHub Actions" />
<img src="https://img.shields.io/badge/SonarCloud-4E9BCD?style=flat&logo=sonarcloud&logoColor=white&labelColor=4E9BCD" alt="SonarCloud" />
</div>

# PokeDex Components

## Description
We created some components using solely OOP/SOLID principles, WITHOUT the help of any web framework/library, such as React, Angular etc. We took extra care for the components to have a single functionality, i.e. of showing the information passed to them, and we tested them accordingly with JEST. The information we passed has a demonstrative role, and it comes from the  [RESTful PokeApi](https://pokeapi.co/).

* Example of navbar element component
```
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

  render() {
    this.parentElement.append(this.element);
    this.element.innerHTML = `
    <a class="button" href="${this.redirectPageUrl}">${this.textNavigationElement}</a>
    `;
    const buttonElement = this.element.querySelector(".button")!;
    buttonElement.addEventListener("click", () => {
      this.actionOnClick();
    });
  }
}
``` 

* Companion website to visualize components: [OOP_components](https://oop-components-testing-ofq15ebub-vladimirrotariu.vercel.app/).

## Tech stack:
* Web: TypeScript, HTML5, Sass.
* Testing: JEST
* CI/CD: GitHub Actions, SonarCloud.
## Testing
We included here the [istanbul report](https://oop-components-testing-ofq15ebub-vladimirrotariu.vercel.app/coverage/lcov-report/index.html) for component-wise testing. If one wishes to generate the individual istanbul reports, the following script might come handy after cloning the repository and installing the node packages:
```
npm run test:coverage

```
