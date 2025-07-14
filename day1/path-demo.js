const path = require('path');

const filePath = 'mernstackbackend/day1/path-demo.js';

const fileName = path.basename(filePath);
const directory = path.dirname(filePath);
const extension = path.extname(filePath);
const joinedPath = path.join('mernstackbackend', 'day1', 'path-demo.js');
const resolvedPath = path.resolve('');
const parsed = path.parse(filePath);

console.log('File Name:', fileName);
console.log('Directory:', directory);
console.log('File extension:', extension);
console.log('Joined Path:', joinedPath);
console.log('Resolved Absolute Path:', resolvedPath);
console.log('Parsed Path Object:', parsed);
