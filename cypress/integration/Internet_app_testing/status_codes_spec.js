describe("Form authentication page", () => {
    before(() => {
        cy.visit("/status_codes");
    });

    it('URL should show /status_codes/200', function () {
        cy.get("ul > li:nth-child(1) > a").should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            });
        cy.url().should("eq", Cypress.config().baseUrl + "status_codes/200");
    });

    it('checking content of /status_codes/200', function () {
        cy.get('div').should(($div) => {
            const text = $div.text()

            expect(text).to.include('200')
            expect(text).not.to.include('301')
            expect(text).not.to.include('404')
            expect(text).not.to.include('500')
        })
    });


    it('should return to main page with a list of status codes', function () {
        cy.get("p > a").should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            });
        cy.url().should("eq", Cypress.config().baseUrl + "status_codes");
    });

    it('should return 200 status codes', function () {
        cy.request({url: '/status_codes/200'}).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.status).to.not.eq(301)
            expect(response.status).to.not.eq(404)
            expect(response.status).to.not.eq(500)
        })
    });

    it('should return 301 status codes', function () {
        cy.request({url: '/status_codes/301'}).then((response) => {
            expect(response.status).to.eq(301)
            expect(response.status).to.not.eq(200)
            expect(response.status).to.not.eq(404)
            expect(response.status).to.not.eq(500)
        })
    });
    

    it('should return 404 status codes', function () {
        cy.request({url: 'status_codes/404', failOnStatusCode: false}).then((response) => {
            expect(response.status).to.eq(404)
            expect(response.status).to.not.eq(301)
            expect(response.status).to.not.eq(200)
            expect(response.status).to.not.eq(500)
        })
    });

    it('should return 500 status codes', function () {
        cy.request({url: '/status_codes/500', failOnStatusCode: false}).then((response) => {
            expect(response.status).to.eq(500)
            expect(response.status).to.not.eq(301)
            expect(response.status).to.not.eq(404)
            expect(response.status).to.not.eq(200)
        })
    });

});