it('nada agora', function(){}) //teste passou


//---------primeiro modo de fazer um arrow function
//function soma (a, b) {
//    return a + b;
//}

//----------segundo modo de fazer um arrow function
//const soma = function (a, b) {
//    return a + b 
//}

//----------terceiro modo de fazer um arrow function (mais basica)
//const soma = (a, b) => {
//    return a + b 
//}

//----------quarto modo de fazer um arrow function 
//const soma = (a, b) => a + b 

//----------erro comum dentro do codigo
//const soma = (a, b) => {
//    a + b 
//} é necessario o return para não dar o undefined dentro da soma pois é necessario explicitar o return para ele entender

//----------outro modo de fazer arrow function
const soma = (a) => a + a

console.log (soma (1,4)) // aqui vou imprimir no console do cypress (basta ir no teste e inspecionar e clicar na barra console e o resultado estará lá)


//-----------tipo de function test
it('a function test...', function(){
    console.log('Function', this)
})

//------------tipo de arrow test
it('a arrow test...' ,()=> {
    console.log('Arrow',this)
})