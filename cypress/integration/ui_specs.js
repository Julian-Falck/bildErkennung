describe('BILDErkennung', function () {
    it('does the bild regocnition work', function () {
        cy.visit('')
        cy.get("h1").should('contain', 'BILDErkennung')

        var input = "Merkel"
        var expected = "It is BILD"

        cy.get('#bild').type(input)

        cy.get('#button').click()

        cy.get('body').should('be', expected)

    })
})