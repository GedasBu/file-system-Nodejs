const data = require('./lib/data.js');
const initialDataPetras = { name: 'Petras', age: 99 };

// data.create('users', 'petras', initialDataPetras, (state, msg) => {
    
//     data.read('users', 'petras', (err, content) => {
//         const fileData = JSON.parse(content);
//         console.log('READ', fileData);

//         data.update('users', 'petras', { ...initialDataPetras, favoriteColor: 'blue' }, (err, msg) => {
//             console.log('UPATE', err, msg);


//             data.read('users', 'petras', (err, content) => {
//                 const fileData = JSON.parse(content);
//                 console.log('READ1', fileData);

//                 // data.delete('users', 'petras', (err, msg) => {
//                 //     console.log('DELETE1', err, msg);
//                 // })
//             });
//         });
//     });

// });




// data.create('books', 'pasaka', { name: 'Pasakos', puslapiai: 69 }, (state, msg) => {

//     if (state) {
//         console.log(msg);
//     } else {
//         console.error(msg);
//     }
//     console.log('Sekantys zingzniai po bandymo sukurti faila')
// });
// data.create('books', 'strazdas', { name: 'Strazdas', puslapiai: 69 }, (state, msg) => {

//     if (state) {
//         console.log(msg);
//     } else {
//         console.error(msg);
//     }
//     console.log('Sekantys zingzniai po bandymo sukurti faila')
// });


// data.folderContent('books',(err,content)=>{
//     console.log(err);
//     console.log(content);
//     if (!err){
//         //perskaityti sarasa
//         for (const book of content){
//           data.read('books',book,(err,bookContent) =>{
//               console.group(err,bookContent);
//           })  
//         }
        
//     }

// });
// const bookEntry = {
//     pavadinimas:'Raudonkepuraite3',
//     puslapiai:69,
//     virselis:'kietas'
// }; 

// data.appendToArray('books', 'pasaka', bookEntry,(err,content)=>{
//     console.log(err);
//     console.log(content);
// });
const pomidoras = {
    pavadinimas: "Lietuvos raudonasis",
    spalva: "red",
    dydis:{
        x:5,
        y:8,
        z:5
    }


}



// data.create('darzoves', 'pomidoras', pomidoras, (state, msg) => {
    
//     data.read('darzoves', 'pomidoras', (err, content) => {
//         const fileData = JSON.parse(content);
//         console.log('READ', fileData);

//         data.update('users', 'petras', { ...initialDatapomidoras {...initialDatapomidoras.dydis, x:8,y:8}}, favoriteColor: 'blue' }, (err, msg) => {
//             console.log('UPATE', err, msg);


//             data.read('users', 'petras', (err, content) => {
//                 const fileData = JSON.parse(content);
//                 console.log('READ1', fileData);

//                 // data.delete('users', 'petras', (err, msg) => {
//                 //     console.log('DELETE1', err, msg);
//                 // })
//             });
//         });
//     });

// });




















