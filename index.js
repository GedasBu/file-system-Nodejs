const data = require('./lib/data.js');

// console.log(data);
data.create('users','petras',{name: 'Petras', age: 99},(state,msg)=>{
    console.log('Kuriamas irasas')
if (state){
    console.log(msg);
} else {
    console.error(msg);
}
console.log('Sekantys zingzniai po bandymo sukurti faila')
} );

// data.read('users', 'petras');
// data.update();
// data.delete();

// data.create('users', 'labas', {name: "Marsietis"})

data.create('users','jonas',{name: 'Jonas', age: 69},(state,msg)=>{
   
    if (state){
        console.log(msg);
    } else {
        console.error(msg);
    }
    console.log('Sekantys zingzniai po bandymo sukurti faila')
    } );


data.create('books','pasaka',{name: 'Pasakos', puslapiai: 69},(state,msg)=>{
   
        if (state){
            console.log(msg);
        } else {
            console.error(msg);
        }
        console.log('Sekantys zingzniai po bandymo sukurti faila')
        } );