const fs = require('fs');

console.log('befor: ', process.memoryUsage().rss);

const readStream = fs.createReadStream('./big.txt');
const writeStream = fs.createWriteStream('./big3.txt');
readStream.pipe(writeStream);
readStream.on('end',()=>{
console.log('stram: ',process.memoryUsage().rss);

    
})