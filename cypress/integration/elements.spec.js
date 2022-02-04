///<reference types="cypress"/>


describe('working with basic elements', ()=> {
    //refatoração da automação
    before(()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html') 
    })

    beforeEach(()=>{
        cy.reload()
    })
    // teste de linksg
    it('Text', ()=>{
        
        cy.get('body').should('contain','Cuidado') //forma generica e muito abrangente de localizar um elemento
        cy.get('span').should('contain', 'Cuidado') //forma mais restritiva e melhor para localizar um elemento na pg
        cy.get('.facilAchar').should('contain','Cuidado')//forma inspecionada no proprio software do cypress
        cy.get('.facilAchar').should('have.text','Cuidado onde clica, muitas armadilhas...')// a correspondencia deve ser igual a da pagina se não dá erro
    })
    //teste de links
    it('Links', ()=>{
        cy.get('[href="#"]').click() // clicar no link
        cy.get('#resultado').should('have.text','Voltou!') //resultado deve ser voltou

        cy.reload() //para recarregar a pagina
        cy.get('#resultado').should('have.not.text','Voltou!') //resultado não pode encontrar texto voltou
        cy.contains('Voltar').click() // clicar no componente que tenha voltar
        cy.get('#resultado').should('have.text','Voltou!') //resultado deve ser voltou
    })
    //caixa de texto
    it('Caixa de texto',()=>{
        cy.get('#formNome').type('Saulo')//.type vai escrever dentro da caixa de texto
        cy.get('#formNome').should('have.value','Saulo')//'have.value': vai servir para encontrar o texto dentro da caixa de texto
        cy.get('[data-cy=dataSobrenome]').type('Vilela Barbosa12345{backspace}{backspace}{backspace}{backspace}{backspace}')
        cy.get('[data-cy=dataSobrenome]').should('have.value', 'Vilela Barbosa')
        cy.get('#elementosForm\\:sugestoes').type('Estou aprendendo Cypress na prática')
        cy.get('#elementosForm\\:sugestoes').should('have.value','Estou aprendendo Cypress na prática')
        

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
        .type('batata')
        .should('have.value','batata')

    })
    // Radio Buttons
    it('Radio Button',()=>{
        cy.get('#formSexoMasc')
             .click()
             .should('have.value','M')
             .should('be.checked') // acertiva para confirmar que foi selecionado

        
        cy.get('#formSexoFem')
            .should('be.not.checked') // acertiva para confirmar que não foi selecionado
        
        cy.get("[name = 'formSexo']").should('have.length', '2')
    })
    // Check box
    it('Check Box',()=>{
        cy.get('#formComidaPizza')
            .click()
            .should('be.checked')

        cy.get('[name="formComidaFavorita"]')
        .click({multiple: true}) //para clicar em mais de 1 check box de uma vez
        .should('be.checked')

        cy.get('#formComidaPizza')
            .should('be.not.checked')

         cy.get('#formComidaVegetariana')
            .should('be.checked')
    })

    //Combo Box
    it('Combo Box', ()=>{
        cy.get('[data-test=dataEscolaridade]')
        .select('Superior')
        .should('have.value','superior')

        cy.get('[data-test=dataEscolaridade]')
        .select('1graucomp')
        .should('have.value','1graucomp')

        cy.get('[data-test=dataEscolaridade] option')
        .should('have.length', 8)
        cy.get('[data-test=dataEscolaridade] option').then($arr=>{
            const values =[]
            $arr.each(function() {
                values.push(this.innerHTML)
            })
            expect(values).to.include.members(["Superior","Mestrado","Especializacao"])
        })



    })
    // Multiplos combos
     it.only('Multiplos combos', ()=>{
        cy.get('[data-testid=dataEsportes]')
        .select(['natacao','futebol']) //valores dentro do array 

        cy.get('[data-testid=dataEsportes]').then($el =>{
            expect($el.val()).to.be.deep.equal(['natacao','futebol'])
            expect($el.val()).to.have.length(2)
        })
        cy.get('[data-testid=dataEsportes]')
        .invoke('val')
        .should('eql',['natacao','futebol'])

        //combo multiplo via array eu tenho que mandar o value (inspecionar no codigo)


    })

   

})