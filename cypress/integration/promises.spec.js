///<reference types="cypress"/> 
it ('sem testes ainda...', () => {} )

const getSometing = () => {
 return new Promise((resolve, reject))
 (() => {
     resolve(13);
 
    },1000)
}

const system = async () => {
    console.log ('init');
    const some = getSomething () 
        console.log(`Something is ${some}`)
        console.log('end');
}

system();

