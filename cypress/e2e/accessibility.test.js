/// <reference types="Cypress" />

describe("Accessibility tests", () => {
  beforeEach(() => {
    cy.visit("/").get("main").injectAxe()
  })
  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y()
  })
  it("Navigates to Pricing and check for accessibility violations", () => {
    cy.findByText(/Pricing/i)
      .click()
      .checkA11y()
  })
})
