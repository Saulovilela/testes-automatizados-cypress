///<reference types="cypress"/>
//aula 18: entendendo a espera do cypress
describe('Esperas',()=>{
    before(()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html') 
    })

    beforeEach(()=>{
        cy.reload()
    })
   
    it('Deve aguardar o elemento estar disponível',()=>{
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('funciona')
    })
//aula 19: retentativas
    it('Deve fazer retrys',()=>{
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo')
        .should('exist')
        .type('funciona')
    })
//aula 20: cuidado com o que busca....
it('Uso do find',()=>{
    cy.get('#buttonList').click()
    cy.get('#lista li')
        .find('span')
        .should('contain','Item 1')
    cy.get('#lista li span')
        .should('contain','Item 2')
})
//aula 21: Wait e Timeout
it('Uso do timeout',()=>{
    cy.get('#buttonDelay').click()
    cy.get('#novoCampo').should('exist')

    cy.get('#buttonListDOM').click()
    cy.get('#lista li span',{timeout:30000}) //espera de 30 segundos porém não fixados, ela termina quando encontra o elemento
        .should('contain','Item 2')
})
it('Uso do wait',()=>{
    cy.get('#buttonListDOM').click()
    cy.wait(5000) //espera de 5000 milisegundos, ou seja 5segundos
    cy.get('#lista li span')
        .should('contain','Item 2')
})
it('timeout com dois elementos',()=>{
    cy.get('#buttonListDOM').click()
    cy.get('#lista li span',{timeout:30000})
            .should('have.length',1)
    cy.get('#lista li span',{timeout:30000})
            .should('have.length',2)
})
//aula 22: nem todo mundo tem retry
it('Click retry',()=>{
    cy.get('#buttonCount')
    .click()
    .click()
    .should('have.value','111')
})
//aula 23:sincronizando o titulo:ir em basic.spec.js
//--------------------------------------------------//
//aula 24: should vs then
it('Should vs Then',()=>{
    cy.get('#buttonListDOM').click()
    cy.get('#lista li span').should($el =>{ //com should
            console.log($el)
            expect($el).to.have.length(1)
            })

})
it('Should vs Then',()=>{
    cy.get('#buttonListDOM').click()
    cy.get('#lista li span').then($el =>{ //com then
            console.log($el)
            expect($el).to.have.length(1)
            })

})

it('Should vs Then',()=>{
    cy.get('#buttonListDOM').then($el =>{ //com then
       //   console.log($el)
            expect($el).to.have.length(1)
            cy.get('#buttonList')
            })

})


})

