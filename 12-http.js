const http = require('http');

const server = http.createServer((req, res) => 
{   
    if (req.url === '/')
    {
        //console.log(req)
        res.end('Welcome to our home page')
    }
    if (req.url === '/about')
    {
        res.end("welcome to the about page")
    }
    res.end(`
        <h1> Opps! </h1>
        <p> No page found</p>
        <a href="/">back home</a>
        `
    )
        
})

server.listen(5000)