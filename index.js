// dependencies
const http = require("http");
const {reqResHandler} = require("./helpers/reqResHandler")
//module wrapper
const app = {};

// configuration 
app.config = {
    port: 2000,
};

// creating the server
app.createServer = () => {
    const server = http.createServer(reqResHandler);
    server.listen(app.config.port, () => {
        console.log(`server is running at ${app.config.port} port`);
    })
};


// server initialize

app.createServer();