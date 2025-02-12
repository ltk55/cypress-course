describe("forms test", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });

  it("Test subscrible form", () => {
    cy.contains(/testing forms/i);
    cy.getDataTest("subscribe-input").find("input").type("test@test.com");
    cy.contains(/successfully subbed: test@test.com!/i).should("not.exist");

    cy.getDataTest("subscribe-button").click();
    cy.contains(/successfully subbed: test@test.com!/i).should("exist");
  });
});
