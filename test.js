import http from "http";
const server=http.createServer((require,response)=>{
    response.end("helloworld!!!!!!!");
});
const port=3000;
server.listen(port,()=>{
    console.log("server is run..");
})
