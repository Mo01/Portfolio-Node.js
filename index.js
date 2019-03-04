var http = require("http");
var path = require("path");
var fs = require("fs");

var server = http.createServer((req, res) =>{
    console.log(req.url);
if(req.url == "/"){
    fs.readFile(path.join(__dirname, "","index.html"),(err, content) => {
        console.log(content);
        if (err) throw err;
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.end(content);
    })

//     fs.readFile(path.join(__dirname,"assets/css", "style.css"),(err, content) => {
//         if (err) throw err;
//         res.writeHead(200,{'Content-Type': 'text/html'});
//         res.end(content);
//     })
}
});
var PORT = process.env.PORT || 5000;

server.listen(PORT, () =>console.log(`Server running on port:  ${PORT}`))