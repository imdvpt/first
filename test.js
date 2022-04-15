import http from "http";
const server=http.createServer((require,response)=>{
    response.end("helloworld!!!!!!!");
});
const port=3000;
const ip="127.0.0.1";
server.listen(port,ip,()=>{
    console.log("server is run..");
})
