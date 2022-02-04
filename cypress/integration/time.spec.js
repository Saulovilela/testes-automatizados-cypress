///<reference types="cypress"/>


describe('working with alerts', ()=> {

    before(()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html') 

    })

    it('Going back to the Past',()=>{
        cy.get('#buttonNow').click()
        cy.get('#resultado > span').should('contain','04/02/2022')

        cy.clock()
        cy.get('#buttonNow').click()
        cy.get('#resultado > span').should('contain','31/12/1969')


        const dt= new Date(2002, 3, 10, 15, 23, 53)
        cy.clock(dt.getTime())
        cy.get('#resultado > span').should('contain','31/12/1969')

    
        



    })
    it.only('Going back to the future',()=>{
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').should('contain', '1644')
    })
})