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
  it("Focuses on the footer link and asserts its attributes", () => {
    cy.findAllByText("Careers").focus()
    cy.focused()
      .should("have.text", "Careers")
      .should("have.attr", "href", "https://stuntcoders.careers")
      .should("not.have.css", "outline-width", "0px")
  })
})
