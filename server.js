// CDFG Server Manager

// Day one coding --- 9/08/2021

var npmlog = require("npmlog")
//var apim = require("./apimanager")
//var gamem = require("./gamemanger")

// Temp Stuff
var fs = require("fs")
var http = require("http")

npmlog.heading = "CDFGS"

var requestListener = function (req, res) {
    npmlog.http("Server", "User sent request to", req.url)
    switch (req.url) {
        case "/":
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.end(fs.readFileSync("./CDFG/program.html"));
            break;
        case "/program.js":
            res.writeHead(200, {
                'Content-Type': 'text/javascript'
            });
            res.end(fs.readFileSync("./CDFG/program.js"));
            break;
        case "/program.html":
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.end(fs.readFileSync("./CDFG/program.html"));
            break;
        case "/program.css":
            res.writeHead(200, {
                'Content-Type': 'text/css'
            });
            res.end(fs.readFileSync("./CDFG/program.css"));
            break;
        case "/error404.css":
            res.writeHead(200, {
                'Content-Type': 'text/css'
            });
            res.end(fs.readFileSync("./CDFG/error404.css"));
            break;
        case "/error404.html":
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.end(fs.readFileSync("./CDFG/error404.html"));
            break;
        default:
            res.writeHead(404, {
                'Content-Type': 'text/html'
            });
            res.end(fs.readFileSync("./CDFG/error404.html"));
            break;
    }
}

var server = http.createServer(requestListener);
server.listen(8980);