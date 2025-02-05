const fs = require('fs');

console.log('befor: ', process.memoryUsage().rss);

const data1 = fs.readFileSync('./big.txt');
fs.writeFileSync('./big2.txt',data1);
console.log('buffer: ',process.memoryUsage().rss);