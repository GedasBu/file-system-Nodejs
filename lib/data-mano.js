const fs = require('fs');
const path = require('path');

/*
Failu sistemos CRUD
C - create (sukurti)
R - read (perksaityti)
U - update (atnaujinti)
D - delete (istrinti)
*/

/**
 * Darbiniu funkciju su failu sistema objektas
 */
const data = {};
data.baseDir = path.join(__dirname, '../.data/');

/**
 * Absoliutaus kelio kontravimas iki nurodyto failo esancio .data folder'yje.
 * @param {string} dir Sub-folder'is esantis .data folder'yje.
 * @param {string} file Failo pavadinimas be failo pletinio.
 * @returns {string} Absoliutus kelias iki failo.
 */
function fullPath(dir, file) {
    return `${data.baseDir}${dir}/${file}.json`;
}

/**
 * JSON failo kurimas .data folder'yje.
 * @param {string} dir Sub-folder'is esantis .data folder'yje.
 * @param {string} fileName Kuriamo failo pavadinimas be failo pletinio.
 * @param {Object} content JavaScript objektas, pvz.: `{name: "Marsietis"}`.
 * @returns {boolean} Pozymis, ar funkcija sekmingai sukure nurodyta faila.
 */
data.create = (dir, fileName, content, callback) => {
    console.log('Kuriamas failas...');

    // open - sukuriame faila ir gauname prieiga prie jo
    // writeFile - irasome turini
    // close - uzbaigiame darba su failu ir atlaisviname prieiga prie jo

    // const absPath = fullPath(dir, fileName);
    // console.log(absPath);

    fs.open(fullPath(dir, fileName), 'wx', (err, fileDescriptor) => {
        if (err || !fileDescriptor) {
            return callback(false, 'Ivyko sukurimo klaida')
        }

        const stringContent = JSON.stringify(content);
        fs.writeFile(fileDescriptor, stringContent, (err) => {
            if (err) {
                return callback(false, 'Ivyko irasymo klaida')
            }
        })
        fs.close(fileDescriptor, (err) => {
            if (err) {
                return callback('Nepavyko uzdaryti failo')
            }

        })
        return callback(true, 'Failas sukurtas ir turinys irasytas');
    })


}

/**
 * JSON failo turinio nuskaitymas.
 * @param {string} dir Sub-folder'is esantis .data folder'yje.
 * @param {string} fileName Kuriamo failo pavadinimas be failo pletinio.
 * @returns {Object} Isparsintas failo turinys.
 */
data.read = (dir, fileName, callback) => {

    fs.readFile(fullPath(dir, fileName), 'utf8', (err, fileContent) => {
        if (err) {
            return callback(true, 'Nepavyko nuskaityti');
        }
        return callback(false, fileContent);
    })

}

/**
 * JSON failo turinio atnaujinimas .data folder'yje.
 * @param {string} dir Sub-folder'is esantis .data folder'yje.
 * @param {string} fileName Kuriamo failo pavadinimas be failo pletinio.
 * @param {Object} content JavaScript objektas, pvz.: `{name: "Marsietis"}`.
 * @returns {boolean} Pozymis, ar funkcija sekmingai atnaujintas nurodyta faila.
 */
data.update = (dir, fileName, content, callback) => {
    fs.open(fullPath(dir, fileName), 'r+', (err, fileDescriptor) => {
        if (err || !fileDescriptor) {
            return callback(true, 'Negaliu redaguoti failo...');
        }
        const stringContent = JSON.stringify(content);
        fs.ftruncate(fileDescriptor, (err) => {
            if (err) {
                return callback(true, 'Nepavyko paruosti failo')
            }
            fs.writeFile(fileDescriptor, stringContent, (err) => {
                if (err) {
                    return callback(false, 'Ivyko irasymo klaida')
                }
                fs.close(fileDescriptor, (err) => {
                    if (err) {
                        return callback('Nepavyko uzdaryti failo')
                    }
                    return callback(false, 'Failas atnaujintas ir turinys irasytas');
                })
                
            })
        })


    })

}

/**
 * JSON failo istrinimas .data folder'yje.
 * @param {string} dir Sub-folder'is esantis .data folder'yje.
 * @param {string} fileName Kuriamo failo pavadinimas be failo pletinio.
 * @returns {boolean} Pozymis, ar funkcija sekmingai istrintas nurodyta faila.
 */
data.delete = (dir, fileName, callback) => {
    console.log('Trinamas failas...');
    fs.unlink(fullPath(dir, fileName), (err) => {
        if (err) {
            return callback(true, 'Nepavyko istrint');
        }
        return callback(false, 'Failas istrintas');
    })
}

data.folderContent = (dir, callback) => {
    const fullPathToFolder = data.baseDir + dir + '/';
    console.log(fullPathToFolder);
    fs.readdir(fullPathToFolder, (err, fileList) => {
        if (err || !fileList) {
            return callback(true, "Nepavyko nieko gauti");
        }
        const trimedFileNames = [];
        for (const file of fileList) {
            const trimedFile = file.split('.').slice(0, -1).join('.');

            trimedFileNames.push(trimedFile);
        }
        return callback(false, trimedFileNames);
    })
}

data.appendToArray = (dir, fileName, content, callback) => {
    // perskaitome ka turime faile
    // itraukiame i faile rasta array nauja kontenta


    fs.readFile(fullPath(dir, fileName), 'utf8', (err, fileContent) => {
        if (err) {
            return callback(true, 'Nepavyko nuskaityti');
        }
        let json = JSON.parse(fileContent);
        json.push(content);
        console.log('Nauja reiksme irasymui: ', json);



        fs.writeFile(fullPath(dir, fileName), JSON.stringify(json), (err) => {
            if (err) {
                return callback(true, 'Ivyko irasymo klaida')
            }

           
        })


        return callback(false, 'Failas atnaujintas');
    })



    // fs.open(fullPath(dir, fileName), 'r+', (err, fileDescriptor) => {
    //     if (err || !fileDescriptor) {
    //         return callback(true, 'Negaliu redaguoti failo...');
    //     }
    //     const stringContent = JSON.stringify(content);
    //     console.log('Turinys',stringContent);
    // });
    // fs.ftruncate(fileDescriptor, (err) => {
    //     if (err) {
    //         return callback(true, 'Nepavyko paruosti failo')
    //     }

    //     // })


    //     // fs.writeFile(fileDescriptor, stringContent, (err) => {
    //     //     if (err) {
    //     //         return callback(false, 'Ivyko irasymo klaida')
    //     //     }
    //     // })

    //     fs.close(fileDescriptor, (err) => {
    //         if (err) {
    //             return callback('Nepavyko uzdaryti failo')
    //         }

    //     })
    //     return callback(false, 'Failas atnaujintas ir turinys irasytas');
    // })

}

module.exports = data;