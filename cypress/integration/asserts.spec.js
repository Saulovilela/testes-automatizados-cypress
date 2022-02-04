///<reference types="cypress"/> 
/*servira como referencia e cabeçalho para todo projeto cypress*/

//-----------ASSERTIVAS-------------

//-----------equalidade-------------
it ('Equality(Equalidade)',()=>{
    const a =1;

    expect(a).equal(1);
    expect(a, 'deve ser igual a 1').equal(1); //espectativa de que a seja igual a 1
    expect(a).to.be.equal(1); //tipo de escrita mais fluída
    expect('a').not.to.be.equal('b') //espectativa de que a não seja igual a 2

})

//-----------veracidade-------------
it ('Truthy(verdadeiro)',()=>{
    const a =true;
    const b =null;
    const c =false;
    let d; //variavel indefinida

    expect(a).to.be.true;
    expect(b).to.be.null;
    expect(c).to.be.false;
    expect(a).not.to.be.null;
    expect(c).not.to.be.null;
    expect(b).not.to.be.true;
    expect(a).not.to.be.false;
    expect(b).not.to.be.false
    expect(d).to.be.undefined //variavel indefinida
})
//-----------Object equality----------
it ('Object Equality',()=>{
    const Obj = {
        a:1,
        b:2
    }
    expect(Object).to.be.equal(Object);
    expect(Obj).to.be.deep.equal({a:1,b:2}) // .deep será importante pois vai fazer com que a igualdade esteja certa
    expect(Obj).eql({a:1,b:2}) // será a forma mais abreviada do object equality
    expect(Obj).eql(Obj)
    expect(Obj).include({a:1}) //verifique que este objeto possui incluso a:1
    expect(Obj).to.have.property('a', 1) //verifique que este objeto possui a propriedade a e que o valor seja igual a 1
    expect(Obj).not.to.be.empty //verifique que este objeto não está vazio
    expect({}).to.be.empty //expectativa de que um objeto vazio esteja vazio
})
//------------asserts arrays-----------
it ('Array',()=>{
    const arr = [1,2,3]

    expect(arr).to.have.members([1,2,3]) //expectativa que tenha membros 1,2,3
    expect(arr).to.include.members([1,3]) //expectativa de que tenha incluido membros 1 e 3
    expect(arr).not.to.be.empty //expectativa que array nao esteja vazia
    expect([]).to.be.empty //expectativa que uma array vazia esteja vazia
})
//----------Types------------------
it('Types',()=>{
    const num =1
    const str = 'String'
    
    
    expect(num).to.be.a('number') //expectativa que (num) seja um 'numero'
    expect(str).to.be.a('String') //expectativa que (str) seja uma 'String'
    expect({}).to.be.an('Object') // expectativa que ({}) seja um objeto
})

//----------String-------------------
it ('String',()=>{
    const str ='String de teste'

    expect(str).to.be.equal('String de teste')
    expect(str).to.have.length(15) // expectativa de que a string tenha 15 caracteres
    expect(str).to.contains('de')
    expect(str).to.match(/^String/) // expectativa de que a string tenha que começar com a palavra String ^
    expect(str).to.match(/teste$/) //expectativa de que a string tenha no final a palavra teste $
    expect(str).to.match(/.{15}/) // expectativa de que a string tenha 15 caracteres
    expect(str).to.match(/\w+/) // expectativa de que a string só tenha palavras
    expect(str).to.match(/\D+/) //expectativa de que a string não tenha numeros
})

//----------Numbers-------------------
it ('Numbers', ()=>{
    const number = 4
    const floatNumber= 5.2123

    expect(number).to.be.equal(4) //expectativa de que o numero esteja igual a 4
    expect(number).to.be.above(3) //expectativa de que o numero esteja acima de 3
    expect(number).to.below(7) //expectativa de que o numero esteja abaixo de 7
    expect(floatNumber).to.be.equal(5.2123) //expectativa de que o numero flutuante seja igual a 5.2123
    expect(floatNumber).to.be.closeTo(5.2, 0.1)//expectativa de que o numero flutuante seja proximo a 5.2 com a precisão de 0.1
    expect(floatNumber).to.above(5)//expectativa de que o numero flutuante seja maior que 5
    expect(floatNumber).to.below(7)//expectativa de que o numero flutuante seja menor que 7
})