const http = require('http');

const server = http.createServer((req, res) => {
  console.log('✅ New Request:', req.url);

  if (req.url === '/') {
    res.write('🏠 Welcome to the Home Page!');
  } else if (req.url === '/about') {
    res.write('ℹ️ About Us Page');
  } else {
    res.write('❌ 404 Page Not Found');
  }

  res.end();
});

server.listen(3000, () => {
  console.log('🚀 Server is running at http://localhost:3000');
});
