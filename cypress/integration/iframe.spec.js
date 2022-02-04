///<reference types="cypress"/>


describe('working with iframes', ()=> {
    
//aula 36: iframe
    it('Deve preencher campo de texto', ()=>{
         cy.visit('https://wcaquino.me/cypress/componentes.html') 
        cy.get('#frame1').then(iframe =>{
            const body = iframe.contents().find('body')
            cy.wrap(body).find('#tfield')
            .type('funciona?')
            .should('have.value', 'funciona?')

        
        })
    })

    it('Deve testar o frame diretamente', ()=>{
        cy.visit('https://wcaquino.me/cypress/frame.html') 
        cy.get('#otherButton').click()
        cy.on('window:alert', msg =>{
            expect(msg).to.be.equal('Click OK!')
        })
   })
   

})