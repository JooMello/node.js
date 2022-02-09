var http = require('http');


http.createServer(function(req, res){
    res.end("Salve, Salve Natalina... Welcome to my server!")
}).listen(8081);

console.log("Servidor rodando!");