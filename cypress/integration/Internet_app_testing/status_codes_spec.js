describe("Form authentication page", () => {
    beforeEach(() => {
        cy.visit("/status_codes");
    });

    it('URL should show /status_codes/200', function () {
        cy.get("ul > li:nth-child(1) > a").should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            });
        cy.url().should("eq", Cypress.config().baseUrl + "status_codes/200");
    });

    it('should return a 200 status_code', function () {
        cy.get('a[href*="status_codes/200"]').click()
        cy.get('div').should(($div) => {
            const text = $div.text()

            expect(text).to.include('200')
            expect(text).not.to.include('301')
            expect(text).not.to.include('404')
            expect(text).not.to.include('500')
        })
    });

    it('should return to main page with a list of status codes', function () {
        cy.get("ul > li:nth-child(2) > a").should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            });
        cy.get("p > a").should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            });
        cy.url().should("eq", Cypress.config().baseUrl + "status_codes");
    });

    it('Testing Elemental Selenium link', function () {
      cy.get('a[href*="http://elementalselenium.com/"]').click();
      cy.get('a[href*="http://elementalselenium.com/"]').should('have.attr', 'target', '_blank');
    });

});