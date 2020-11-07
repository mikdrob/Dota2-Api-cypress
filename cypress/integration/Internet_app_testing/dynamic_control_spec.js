describe("Dynamic Control", () => {
    before(() => {
        cy.visit("/dynamic_controls");
    });

    it('press romove Button',function(){
        cy.get('#checkbox-example > button').contains('Remove').click();
        cy.get('#checkbox').should('not.exist');

    });

    it('press Add Button',function(){
        cy.get('#checkbox-example > button').contains('Add').click()
        cy.get('#checkbox').should('exist');
    });

    it('press Enable Button',function(){
        cy.get('#input-example > button').contains('Enable').click();
        cy.get('input[type="text"]').should('not.be.disabled');
    });

    it('press Disable Button',function(){
        cy.get('#input-example > button').contains('Disable').click();
        cy.get('input[type="text"]').should('be.disabled');
    });



});