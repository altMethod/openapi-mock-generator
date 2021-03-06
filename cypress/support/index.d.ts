/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    toggleTreeNode(): Chainable<JQuery<HTMLElement>>;
    clickTreeNode(): Chainable<JQuery<HTMLElement>>;
    getMonacoEditor(): Chainable<JQuery<HTMLElement>>;
    getMonacoValue(): Chainable<string>;
    setMonacoValue(value: string): Chainable<JQuery<HTMLElement>>;
    createProjects(projects: any[]): Chainable<void>;
    setProjectState(projectId: number, state: any): Chainable<void>;
  }
}
