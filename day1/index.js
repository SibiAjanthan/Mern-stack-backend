// basic script

// console.log("hello world");

// fs module
// const fs = require('fs');

// async read write append delete

// fs.writeFile('sibi.txt', 'hi sibi', (err) => {
//   if (err) throw err;
//   console.log('✅ File created and written');
// });

// fs.readFile('sibi.txt', 'utf-8', (err, data) => {
//   if (err) throw err;
//   console.log('📄 File content:' + data);
// });

// fs.appendFile('sibi.txt', 'how are you?', (err) => {
//   if (err) throw err;
//   console.log(' Text appended');
// });

// fs.unlink('sibi.txt', (err) => {
//   if (err) throw err;
//   console.log('🗑️ File "sibi.txt" deleted successfully');
// });

// sync read write append delete

// fs.writeFileSync('sibi2.txt', 'This is a sync write');
// console.log('✅ File written ');

// const data = fs.readFileSync('sibi2.txt', 'utf-8');
// console.log('file content: '+data);

// fs.appendFileSync('sibi2.txt', 'This is a sync write 1');
// console.log('✅ File written ');


// fs.unlinkSync('sibi2.txt');
// console.log('✅ File filedeleted ');
