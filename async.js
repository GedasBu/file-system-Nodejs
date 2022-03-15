const data = require('./lib/data-async.js');

(async () => {
    const part = {
        "number": 12345,
        "name": 'clutch',
    }

    const partsCreate = await data.create('parts', 'partsOrder', part);
    console.log(partsCreate);

    const parts2 = await data.read('parts', 'partsOrder');
    console.log(parts2);

    // const partsUpdate = await data.update('parts', 'partsOrder', { "number": 1234567, "name": 'clutch5' })
    const partsUpdate = await data.update('parts', 'partsOrder', { ...parts2, price: 123});
    console.log(partsUpdate);

    const parts3 = await data.read('parts', 'partsOrder');
    console.log(parts3);

    // const partsDelete = await data.delete('parts', 'parts-order-3');
    // console.log(partsDelete);



})();
