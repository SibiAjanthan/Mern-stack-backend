const os = require('os');

console.log('🖥 Platform       :', os.platform());       
console.log('⚙️ Architecture    :', os.arch());          
console.log('🧠 Total Memory   :', os.totalmem());        
console.log('💾 Free Memory    :', os.freemem());         
console.log('⏱ Uptime         :', os.uptime(), 'seconds'); 
console.log('🧑 User Info      :', os.userInfo());         
console.log('🖥 Hostname       :', os.hostname());         
console.log('🧩 CPU Cores      :', os.cpus().length);      
