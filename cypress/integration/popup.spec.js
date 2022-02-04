///<reference types="cypress"/>

//aula 38: pop up

describe('working with pop up', ()=> {
        it('Deve testar o pop up diretamente', ()=>{
            cy.visit('https://wcaquino.me/cypress/frame.html') 
            cy.get('#otherButton').click()
            cy.on('window:alert', msg =>{
            expect(msg).to.be.equal('Click OK!')
            })
        })
        it('Deve preencher campo de texto', ()=>{
            cy.visit('https://wcaquino.me/cypress/componentes.html')
            cy.window().then(win=>{
                cy.stub(win, 'open').as('winOpen')
            }) 
            cy.get('#buttonPopUp').click()
            cy.get('@winOpen').should('be.called')
            })

describe.only('With links.....',()=>{
        beforeEach(()=>{ //<<<<<<<<<<<<<<beforeEach é o garantidor que todos os testes se reiniciaram na pagina index
            cy.visit('https://wcaquino.me/cypress/componentes.html')
        })
    
    
        it('Check popup url',()=>{
            cy.contains('Popup2')
                .should('have.prop', 'href')
                .and('equal', 'https://wcaquino.me/cypress/frame.html')
        })

        it('Should be access popup dinamically',()=>{
            cy.contains('Popup2').then($a =>{
                const href = $a.prop('href')
                cy.visit(href)
                cy.get('#tfield').type('funciona')
            })
        })
        it('Should force link on same page',()=>{
            cy.contains('Popup2')
                .invoke('removeAttr','target')
                .click()
                cy.get('#tfield').type('funciona')

        })

    })    
})
    

       
    

