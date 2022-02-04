///<reference types="cypress"/>

//aula 31: alert
describe('working with alerts', ()=> {

    before(()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html') 
    })

    beforeEach(()=>{
        cy.reload()
    })
    it('Alert',()=>{
       /* cy.get('#alert').click()
        cy.on('window:alert', msg =>{//cy.on:esse comando pega eventos que ocorrem na nossa tela
            console.log(msg)
            expect(msg).to.be.eq('Alert Simples')
        }) */
        cy.clickAlert('#alert','Alert Simples')
    })
    //aula 32: alert com stub
    it('Alert com mock',()=>{
        const stub = cy.stub().as('alerta') //cy.stub: armazena uma função, armazena o uso e permite controlar seu comportamento
        cy.on('window:alert', stub)
        cy.get('#alert').click().then(()=>{
            expect(stub.getCall(0)).to.be.calledWith('Alert Simples')
        })
    })
    //aula 33: confirm
    it('Confirm',()=>{
        cy.on('window:confirm', msg =>{
            expect(msg).to.be.equal('Confirm Simples')
        })
        cy.on('window:alert', msg =>{
            expect(msg).to.be.equal('Confirmado')
        })
        cy.get('#confirm').click()
    })
    it('Deny',()=>{
        cy.on('window:confirm', msg =>{
            expect(msg).to.be.equal('Confirm Simples')
            return false
        })
        cy.on('window:alert', msg =>{
            expect(msg).to.be.equal('Negado')
        })
        cy.get('#confirm').click()
    })


    //aula 34: Prompt
    it('Prompt',()=>{
        cy.window().then(win =>{
            cy.stub(win, 'prompt').returns('42')
        })
        cy.on('window:confirm', msg=>{
            expect(msg).to.be.equal('Era 42?')
        })
        cy.on('window:confirm', msg=>{
            expect(msg).to.be.equal(':D')
        })
        
        cy.get('#prompt')
      

    })
    //aula 35: Desafio: Validar mensagens

    it.only('Validando mensagens', ()=>{
        const stub = cy.stub().as('alerta')
        cy.on('window:alert', stub)
        cy.get('#formCadastrar').click()
            .then(()=> expect(stub.getCall(0)).to.be.calledWith('Nome eh obrigatorio'))

        cy.get('#formNome').type('Saulo')
        cy.get('#formCadastrar').click()
            .then(()=> expect(stub.getCall(1)).to.be.calledWith('Sobrenome eh obrigatorio'))

        cy.get('[data-cy=dataSobrenome]').type('Vilela')
        cy.get('#formCadastrar').click()
            .then(()=>expect(stub.getCall(2)).to.be.calledWith('Sexo eh obrigatorio'))

        
        cy.get('#formSexoMasc').click()
        cy.get('#formCadastrar').click()

        cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')



    })
})