const data = require('./lib/data.js');
const initialDataPetras = { name: 'Petras', age: 99 };

// // console.log(data);
data.create('users', 'petras', initialDataPetras, (state, msg) => {
    
    data.read('users', 'petras', (err, content) => {
        const fileData = JSON.parse(content);
        console.log('READ', fileData);

        data.update('users', 'petras', { ...initialDataPetras, favoriteColor: 'blue' }, (err, msg) => {
            console.log('UPATE', err, msg);


            data.read('users', 'petras', (err, content) => {
                const fileData = JSON.parse(content);
                console.log('READ1', fileData);

                data.delete('users', 'petras', (err, msg) => {
                    console.log('DELETE1', err, msg);
                })
            });
        });
    });

});

// data.create('users', 'jonas', { name: 'Jonas', age: 69 }, (state, msg) => {

//     if (state) {
//         console.log(msg);
//     } else {
//         console.error(msg);
//     }
//     console.log('Sekantys zingzniai po bandymo sukurti faila')
// });


// data.create('books', 'pasaka', { name: 'Pasakos', puslapiai: 69 }, (state, msg) => {

//     if (state) {
//         console.log(msg);
//     } else {
//         console.error(msg);
//     }
//     console.log('Sekantys zingzniai po bandymo sukurti faila')
// });




// data.read('users', 'petras', (err, content) => {
//     const fileData = JSON.parse(content);
//     console.log('READ', fileData);

//     data.update('users', 'petras', { ...initialDataPetras, favoriteColor: 'blue' }, (err, msg) => {
//         console.log('UPATE', err, msg);


//         data.read('users', 'petras', (err, content) => {
//             const fileData = JSON.parse(content);
//             console.log('READ', fileData);

//             data.delete('users', 'petras', (err,msg) =>{
//                 console.log('DELETE1',err,msg);
//             })
//         });
//     });
// });

// data.read('books', 'pasaka',(err,content)=>{
// //    console.log(content);
//     const fileData  =JSON.parse(content);
// console.log('Knygos pavadinimas:',fileData.name);
// console.log('Puslapiai:',fileData.puslapiai);
// });








// data.delete();

// data.create('users', 'labas', {name: "Marsietis"})

