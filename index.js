const _data = require('./lib/data-async.js');
const utils = require('./lib/utils.js');
const Figura = require('./js/Figura.js');

(async () => {

    const amount = 5;
    const figuruDydziai = Figura.randomFiguros(amount);
    console.log(figuruDydziai);
   
//    const figuros =   [
//         {width: 5, height: 4},
//         {width: 2, height: 3},
//         {width: 2, height: 7},
//         {width: 1, height: 1},
//         {width: 8, height: 6},
//     ]
     

    // sukuriam failus
    for (let i = 0; i < amount; i++) {
        await _data.create('figuros', 'figura-' + i, figuruDydziai[i]);
    }

    // perskaitom failus ir atnaujiname
    for (let i = 0; i < amount; i++) {
        const textContent = await _data.read('figuros', 'figura-' + i);
        const { width, height } = utils.parseJSONtoObject(textContent);
        const plotas = Figura.size(width, height);
        const hash = utils.hash(`figura-${width}-${height}-${plotas}`);
        const updatedObj = {
            width,
            height,
            plotas,
            hash
        }
        await _data.update('figuros', 'figura-' + i, updatedObj);
    }

    // spausdiname visus failu pavadinimus
    const files = await _data.folderContent('figuros');
    console.log(files);
})();