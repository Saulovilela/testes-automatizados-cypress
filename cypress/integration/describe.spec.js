/// <reference types="cypress"/> 
//serve para referenciar o cypress na hora do auto complete

//testes internos e externos = Sintaxe

it.only('external test....', ()=> { // o .only servirá para executar apenas um teste unico, não é possivel colocar 2 only sempre vai puxar o ultimo

})

describe('Should group tests...', ()=> {
    describe('Should group more specific tests....',() => {
        it.skip ('internal especific test....', ()=>{}) // o .skip servirá para não executar o teste
    })
    it ('internal test....', ()=> {

    })

})