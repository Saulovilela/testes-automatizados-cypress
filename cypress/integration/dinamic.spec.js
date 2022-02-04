///<reference types="cypress"/>

describe('DINAMIC TEST', ()=> {

    beforeEach(()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html') 
    })
    const foods= [ 'Carne','Frango','Pizza','Vegetariano']

    foods.forEach(food =>{
        it(`cadastro com comida ${food}`,()=>{
            cy.get('#formNome').type('Saulo')
            cy.get('[data-cy=dataSobrenome]').type('Vilela Barbosa')
            cy.get('#formSexoMasc').click()
            cy.xpath(`//label[contains(., '${food}')]/preceding-sibling::input`)
            cy.get('[data-test=dataEscolaridade]').select('Superior')
            cy.get('#formEsportes').select('Corrida')
            cy.get('#formCadastrar').click()
            cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')
        })

        it.only('deve selecionar todos usando o each',()=>{

            cy.get('#formNome').type('Saulo')
            cy.get('[data-cy=dataSobrenome]').type('Vilela Barbosa')
            cy.get('#formSexoMasc').click()
            cy.get('[name=formComidaFavorita]').each($el=>{
                //$el.click()
                if($el.val() !=='vegetariano')
                cy.wrap($el).click()
            })
            cy.get('[data-test=dataEscolaridade]').select('Superior')
            cy.get('#formEsportes').select('Corrida')
           // cy.get('#formCadastrar').click()
           cy.clickAlert('#formCadastrar','Tem certeza que voce eh vegetariano?')
      
        })

    })

   
})
