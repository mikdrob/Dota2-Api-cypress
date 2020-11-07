describe("Dynamic Control", () => {
    beforeEach(() => {
        cy.visit("/dynamic_controls");
    });

    it('To tic the check box',function(){
       cy.get('[type="checkbox"]').check()
       cy.get('[type="checkbox"]').uncheck() 
    });

    it('press romove Button',function(){
        cy.get('#checkbox-example > button').contains('Remove').click();
        cy.wait(5000);
        cy.get('#checkbox-example > button').contains('Add');

    });

    it('press Enable Button',function(){
        cy.get('#input-example > button').contains('Enable').click();
        cy.wait(5000);
        cy.get('#input-example > button').contains('Disable');
    });
    it('check status code',function(){
        cy.get('get').should('have.property', 'status', 200)
    });


});