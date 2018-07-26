const http=require('http');
const hostname="10.55.6.86";
const port=8288;

const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello world!\n');
});

server.listen(port,hostname,()=>{
    console.log(`Server is running at http://${hostname}:${port}/`);
});



