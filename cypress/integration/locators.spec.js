///<reference types="cypress"/>

describe('working with basic elements', ()=> {
    //refatoração da automação
    before(()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html') 
    })

    beforeEach(()=>{
        cy.reload()
    })


    it('Usando jquery selector',()=>{
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(3) > input')


    })
})