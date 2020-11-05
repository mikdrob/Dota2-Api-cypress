describe("Form authentication page", () => {
    beforeEach(() => {
        cy.visit("/login");
    });

    it('should login to secure area with valid credentials', function () {
        cy.login("tomsmith", "SuperSecretPassword!");

        cy.get(".flash.success").should("be.visible");
    });

    it('should not login to secure area with invalid credentials', function () {
        cy.login("pepsi", "asdsad");

        cy.get(".flash.error").should("be.visible");
    });
    
    it('should not login using invalid passward', function(){
        cy.login("tomsmith","Whatever")
        
        cy.get(".flash.error").should("be.visible");
    });

    it('should not login using invalid username', function(){
        cy.login("someone","SuperSecretPassword!")
        
        cy.get(".flash.error").should("be.visible");
    });

    it('should login to secure area with valid credentials', function () {
        cy.login("tomsmith", "SuperSecretPassword!");

        cy.get("a.button.secondary.radius").click()
        cy.url().should("eq", Cypress.config().baseUrl + "login")
    });



});
