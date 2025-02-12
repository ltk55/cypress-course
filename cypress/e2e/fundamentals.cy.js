describe("fundamentals test", () => {
  beforeEach(() => {
    cy.visit("/fundamentals");

    it("Contains correct header text", () => {
      // Use custom command "getDataTest"
      cy.getDataTest("fundamentals-header").contains(/Testing Fundamentals/i);
      // cy.get("[data-test=fundamentals-header]").contains(
      //   /Testing Fundamentals/i
      // );
    });

    it("Accordion has correct number of items", () => {
      cy.get("[data-test^=accordion-item]").should("have.length", 8);
    });

    it("Accordion works correctly", () => {
      cy.get("[data-test^=accordion-item]").each((item, index) => {
        cy.wrap(item).click();
        cy.get(`[data-test=accordion-item=${index + 1}]`).contains(
          /Fundamental [0-9]+/i
        );
      });
    });
  });
});
