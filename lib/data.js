/*
CRUD

C - create
R - read
U - update
D - delete

*/

const data = {};

data.create = (dir, filename, content) => {
    console.group('Kuriamas failas...');
}

data.read = (dir, filename) => {
    console.group('Skaitomas failas...');
}

data.update = (dir, filename, content) => {
    console.group('Atnaujinamas failas...');
}
data.delete = (dir, filename) => {
    console.group('Trinamas failas...');
}

module.exports = data;