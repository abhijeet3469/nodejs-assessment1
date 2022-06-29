const http = require('http');
const server = http.createServer(function(req, res){
    res.write('<h1>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.</h1>');
    res.write(JSON.stringify({name : 'Abhijeet'}))
    res.end();
});
server.listen(7000)