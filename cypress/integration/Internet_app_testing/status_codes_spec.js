describe("Form authentication page", () => {
    beforeEach(() => {
        cy.visit("/status_codes");
    });

    it('should open a secure area with valid credentials', function () {
        cy.get("ul > li:nth-child(1) > a").should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            });
        cy.url().should("eq", Cypress.config().baseUrl + "status_codes/200");
    });
});