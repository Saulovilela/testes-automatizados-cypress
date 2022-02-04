///<reference types="cypress"/>

describe('Cypress Basics',()=>{ 
    it.only('Should visit page and assert title',()=>{ 
        cy.visit('https://wcaquino.me/cypress/componentes.html')


        // metodo do cypress para conseguir o titulo da pagina
        // const title = cy.title()
        // console.log(title)

        // metodo do cypress para conseguir o titulo da pagina
       cy.title().debug()
            .should('be.equal', 'Campo de Treinamento') //encontre('seja.igual', 'Campo de Treinamento')
            .should('contain', 'Treinamento') //encontre('contem', 'Treinamento')

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo')

//aula 23 aqui
        cy.title().debug()
        let syncTitle
        cy.title().then(title=>{
            console.log(title)
//aula 28 aqui
            cy.get('#formNome').type(title)

            syncTitle=title
        })

        cy.get('[data-cy=dataSobrenome]').then($el=>{
            $el.val(syncTitle)
        })

        cy.get('#elementosForm\\:sugestoes').then($el =>{
            cy.wrap($el).type(syncTitle)
        })

        
     })

     it('Should find and interact with a element',()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.get('#buttonSimple').click() //encontre('#buttonSimple').e clique()
        cy.get('#buttonSimple').should('have.value', 'Obrigado!') //encontre('buttonSimple').e encontre ('tenha um valor', 'Obrigado!')
     })
})
