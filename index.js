const http = require('http');
const PORT= 3200 || process.env.PORT
const app=require('./app')
const server=http.createServer(app);
server.listen(PORT);