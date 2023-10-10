const http = require('http')
const port = 5000;

const server = http.createServer((req, res) =>
{
    if (req.url === '/') 
    {
        res.end('Home page')
    }
    else if (req.url === '/about')
    {
        //BLOCKING CODE
        for(let i = 0; i < 1000; i++){
            for(let j=0; j<1000; j++){
                console.log(`${i} ${j}`)
            }
        }
        res.end("About page")
    }
    else {
        res.end("end")
    }
})

server.listen(port, () => {
    console.log(`Port is listening port ${port}`)
})