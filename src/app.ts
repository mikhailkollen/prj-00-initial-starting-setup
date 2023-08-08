class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;

 constructor() {
  this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
  this.hostElement = document.getElementById('app')! as HTMLDivElement;

  const importedNode = document.importNode(this.templateElement.content, true);
  this.hostElement.appendChild(importedNode);
  
  this.element = importedNode.firstElementChild as HTMLFormElement;
 }

 //  private attach() {
 //    this.hostElement.insertAdjacentElement('afterbegin', this.element);

 // }

}


const prjInput = new ProjectInput();


