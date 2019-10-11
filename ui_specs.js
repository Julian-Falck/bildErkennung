describe('bildErkennung', function () {
    it('does the bild regocnition work', function () {
        cy.visit('')


        var input = "Merkel"
        var expected = "BILD"
        cy.get('#input_encode').type(input)

        cy.get('#encode').click()

        cy.get('#input_decode').should('be', expected)
    })
})