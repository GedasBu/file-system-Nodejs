class Figura {
    static randomFiguros(amount) {
const masyvas = []
for (let i=0;i<amount;i++){
    let width = Math.floor(Math.random() * 10)+1;
    let height = Math.floor(Math.random() * 10)+1;    
    masyvas.push({width:width, height:height});    
  
    

}

return masyvas;
    }

    static size(width, height) {
      return width * height;
    }
}

module.exports = Figura;