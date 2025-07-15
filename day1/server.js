//               path module
// const path = require('path');

// const filePath = 'mernstackbackend/day1/server.js';

// const fileName = path.basename(filePath);
// const directory = path.dirname(filePath);
// const extension = path.extname(filePath);
// const joinedPath = path.join('mernstackbackend', 'day1', 'server.js');
// const resolvedPath = path.resolve('mernstackbackend', 'day1', 'server.js');
// const parsedPath = path.parse(filePath)

// console.log(' File Name      :', fileName);
// console.log(' Directory      :', directory);
// console.log(' File Extension :', extension);
// console.log(' Joined Path    :', joinedPath);
// console.log(' Resolved Path  :', resolvedPath);
// console.log(' Parsed Object  :', parsedPath);


//               http server

// const http = require('http');

// const server = http.createServer((req, res) => {
//   console.log('✅ New Request:', req.url);

//   if (req.url === '/') {
//     res.write('🏠 Welcome to the Home Page!');
//   } else if (req.url === '/about') {
//     res.write('ℹ️ About Us Page');
//   } else {
//     res.write('❌ 404 Page Not Found');
//   }

//   res.end();
// });

// server.listen(3000, () => {
//   console.log('🚀 Server is running at http://localhost:3000');
// });


//                    os modules

// const os = require('os');

// console.log('🖥 Platform       :', os.platform());       
// console.log('⚙️ Architecture    :', os.arch());          
// console.log('🧠 Total Memory   :', os.totalmem());        
// console.log('💾 Free Memory    :', os.freemem());         
// console.log('⏱ Uptime         :', os.uptime(), 'seconds'); 
// console.log('🧑 User Info      :', os.userInfo());         
// console.log('🖥 Hostname       :', os.hostname());         
// console.log('🧩 CPU Cores      :', os.cpus().length); 
