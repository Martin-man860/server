const express = require("express");

const server = express();

const handlePage = (request,response) => {
    console.log(request);
    response.send("<h1>Hello World</h1>")
};

server.use("/",handlePage);

server.listen(3001,()=>{
    console.log("server running on port 3001")
});