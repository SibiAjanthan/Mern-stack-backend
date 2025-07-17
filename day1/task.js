// Task 1: Node.js System Info Server (Using http + os)


const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
  if (req.url === '/system-info') {
    const platform = os.platform();
    const arch = os.arch();
    const totalMem = (os.totalmem() / 1024 / 1024).toFixed(2);
    const freeMem = (os.freemem() / 1024 / 1024).toFixed(2);
    const uptime = (os.uptime() / 60).toFixed(2);
    const username = os.userInfo().username;

    res.write(`System Information:\n`);
    res.write(`Platform     : ${platform}\n`);
    res.write(`Architecture : ${arch}\n`);
    res.write(`Total Memory : ${totalMem} MB\n`);
    res.write(`Free Memory  : ${freeMem} MB\n`);
    res.write(`Uptime       : ${uptime} minutes\n`);
    res.write(`User         : ${username}\n`);
  } else {
    res.write('❌ Route Not Found');
  }

  res.end();
});

server.listen(3000, () => {
  console.log(' Server running at http://localhost:3000');
});


