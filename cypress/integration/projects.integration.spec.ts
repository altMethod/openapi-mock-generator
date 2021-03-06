import { emptyProjects } from "cypress/fixtures/db/emptyProjects";
import { expectMessage } from "cypress/support/message-checker";
import { treeTestId } from "cypress/support/tree";
import { uploadFile } from "cypress/support/upload-file";
import { PAGE_TITLE } from "src/components/MyHeader";
import { DB_NAME } from "src/database/constants";
import { EMPTY_PROJECT_MSG } from "src/features/project/constants";
import {
  CREATE_PROJECT_MSG,
  EMPTY_MSG,
  NEW_PROJECT_NAME_PLACEHOLDER
} from "src/features/projects-list/constants";

const click = ($el: any) => $el.click();

describe("Projects Management", () => {
  describe("Creation", () => {
    beforeEach(() => {
      indexedDB.deleteDatabase(DB_NAME);
      cy.visit("#/");
    });

    it("should show empty data message with empty database", () => {
      cy.findByText(EMPTY_MSG).should("exist");
    });

    it("should create a new project when enter pressed and name inserted", () => {
      cy.findByText(EMPTY_MSG).should("exist");

      cy.contains(CREATE_PROJECT_MSG)
        .pipe(click)
        .should("be.disabled");

      cy.findByText(EMPTY_MSG).should("not.exist");

      cy.findByPlaceholderText(NEW_PROJECT_NAME_PLACEHOLDER).type(
        "New Project{enter}"
      );

      cy.findByText(EMPTY_MSG).should("not.exist");

      cy.findByText("New Project").should("exist");
    });

    it("should create a new project when input blurred and name inserted", () => {
      cy.findByText(EMPTY_MSG).should("exist");

      cy.contains(CREATE_PROJECT_MSG)
        .pipe(click)
        .should("be.disabled");

      cy.findByText(EMPTY_MSG).should("not.exist");

      cy.findByPlaceholderText(NEW_PROJECT_NAME_PLACEHOLDER)
        .type("New Project")
        .blur();

      cy.findByText(EMPTY_MSG).should("not.exist");

      cy.findByText("New Project").should("exist");
    });

    it("should not create a new project when enter pressed and name empty", () => {
      cy.findByText(EMPTY_MSG).should("exist");

      cy.contains(CREATE_PROJECT_MSG)
        .pipe(click)
        .should("be.disabled");

      cy.findByText(EMPTY_MSG).should("not.exist");

      cy.findByPlaceholderText(NEW_PROJECT_NAME_PLACEHOLDER).type("{enter}");

      cy.findByText(EMPTY_MSG).should("exist");

      cy.findByText("New Project").should("not.exist");
    });

    it("should not create a new project when input blurred and name empty", () => {
      cy.findByText(EMPTY_MSG).should("exist");

      cy.contains(CREATE_PROJECT_MSG)
        .pipe(click)
        .should("be.disabled");

      cy.findByText(EMPTY_MSG).should("not.exist");

      cy.findByPlaceholderText(NEW_PROJECT_NAME_PLACEHOLDER).blur();

      cy.findByText(EMPTY_MSG).should("exist");

      cy.findByText("New Project").should("not.exist");
    });

    it("should not permit to create multiple projects simultaneously", () => {
      cy.contains(CREATE_PROJECT_MSG)
        .pipe(click)
        .should("be.disabled");

      cy.findAllByPlaceholderText(NEW_PROJECT_NAME_PLACEHOLDER).should(
        "have.length",
        1
      );
    });

    it("should persists projects across page reloads", () => {
      cy.findByText(EMPTY_MSG)
        .should("exist")
        .wait(100);

      cy.contains(CREATE_PROJECT_MSG).click();

      cy.findByText(EMPTY_MSG).should("not.exist");

      cy.findByPlaceholderText(NEW_PROJECT_NAME_PLACEHOLDER).type(
        "First Project{enter}"
      );

      cy.findByText("First Project").should("exist");

      cy.contains(CREATE_PROJECT_MSG).click();
      cy.findByPlaceholderText(NEW_PROJECT_NAME_PLACEHOLDER).type(
        "Second Project{enter}"
      );

      cy.findByText("Second Project").should("exist");

      cy.reload();

      cy.findByText("First Project").should("exist");
      cy.findByText("Second Project").should("exist");
    });
  });

  describe("Editing", () => {
    beforeEach(() => {
      indexedDB.deleteDatabase(DB_NAME);
      cy.createProjects(emptyProjects).visit("#/");
    });

    it("should edit project name", () => {
      cy.contains("tr", "First Project").should("exist");

      cy.contains("tr", "Second Project").within(() => {
        cy.contains("Edit").click();
      });

      cy.findByPlaceholderText(NEW_PROJECT_NAME_PLACEHOLDER)
        .should("have.value", "Second Project")
        .clear()
        .type("Project Renamed{enter}");

      cy.findByText("Project Renamed").should("exist");

      cy.reload();

      cy.findByText("Project Renamed").should("exist");
    });

    it("should not edit project name on blur", () => {
      cy.contains("tr", "First Project").should("exist");

      cy.contains("tr", "Second Project").within(() => {
        cy.contains("Edit").click();
      });

      cy.findByPlaceholderText(NEW_PROJECT_NAME_PLACEHOLDER)
        .clear()
        .blur();

      cy.findByText("Second Project").should("exist");

      cy.reload();

      cy.findByText("Second Project").should("exist");
    });

    it("should not edit project name with empty name", () => {
      cy.contains("tr", "First Project").should("exist");

      cy.contains("tr", "Second Project").within(() => {
        cy.contains("Edit").click();
      });

      cy.findByPlaceholderText(NEW_PROJECT_NAME_PLACEHOLDER)
        .clear()
        .type("{enter}");

      cy.findByText("Second Project").should("exist");

      cy.reload();

      cy.findByText("Second Project").should("exist");
    });

    it("should not allow two simultaneus editing", () => {
      cy.contains("tr", "First Project").within(() => {
        cy.contains("Edit").click();
      });

      cy.contains("tr", "Second Project").within(() => {
        cy.contains("Edit").should("be.disabled");
      });
    });

    it("should delete project on confirm", () => {
      cy.contains("tr", "First Project").should("exist");

      cy.contains("tr", "Second Project").within(() => {
        cy.contains("Delete").click();
      });

      cy.findByRole("tooltip").within(() => {
        cy.contains("OK").click();
      });

      cy.findByText("First Project").should("exist");
      cy.findByText("Second Project").should("not.exist");

      cy.reload();

      cy.findByText("First Project").should("exist");
      cy.findByText("Second Project").should("not.exist");
    });

    it("should open empty project when name clicked and should go back to home page when title clicked", () => {
      cy.findByText("First Project").click();

      cy.findByText(EMPTY_PROJECT_MSG).should("exist");

      cy.contains("h1", PAGE_TITLE).click();

      cy.findByText(CREATE_PROJECT_MSG).should("exist");
    });

    it("should persist project data", () => {
      cy.findByText("First Project").click();

      cy.findByText(EMPTY_PROJECT_MSG).should("exist");

      uploadFile("pestore-expanded.yaml");

      expectMessage("success", /loaded.*success/i);

      cy.findByTestId(treeTestId).within(() => {
        cy.contains("li", "Paths").toggleTreeNode();
        cy.contains("li", "Schemas").toggleTreeNode();
        cy.findByText("Pet").should("exist");
      });

      cy.reload();

      cy.findByTestId(treeTestId).within(() => {
        cy.contains("li", "Paths").toggleTreeNode();
        cy.contains("li", "Schemas").toggleTreeNode();
        cy.findByText("Pet").should("exist");
      });
    });
  });
});
