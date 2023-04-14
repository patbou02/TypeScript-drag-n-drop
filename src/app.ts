// Code goes here!
console.log('Running App.js...');

class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;

  constructor() {
    this.templateElement = document.querySelector('#project-input')! as HTMLTemplateElement;
    this.hostElement = document.querySelector('#app')! as HTMLDivElement;

    const importedHTML = document.importNode(this.templateElement.content, true);
    this.element = importedHTML.firstElementChild as HTMLFormElement;

    this.attach();
  }

  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element);
  }
}

const projectInput = new ProjectInput();