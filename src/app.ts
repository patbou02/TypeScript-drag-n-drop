// Code goes here!
console.log('Running App.js...');

class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    this.templateElement = document.querySelector('#project-input')! as HTMLTemplateElement;
    this.hostElement = document.querySelector('#app')! as HTMLDivElement;

    const importedHTML = document.importNode(this.templateElement.content, true);
    this.element = importedHTML.firstElementChild as HTMLFormElement;

    this.element.id = 'user-input';

    this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;

    this.configure();
    this.attach();
  }

  private submitHandler(e: Event) {
    e.preventDefault();
    console.log(this.titleInputElement.value, this.descriptionInputElement.value, this.peopleInputElement.value);
  }

  private configure() {
    this.element.addEventListener('submit', this.submitHandler.bind(this));
  }

  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element);
  }
}

const projectInput = new ProjectInput();