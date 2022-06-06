// dependencies
const url = require("url");
const routes = require("../routes");
const {notFoundHandler} = require("../handlers/notFoundHandler")

//module wrapper
const handler = {};

// response and request handler
handler.reqResHandler = (req,res) => {
    const method = req.method.toLowerCase();
    const headerObj = req.headers;
    const reqUrl = url.parse(req.url, true)
    const path = reqUrl.pathname;

    //formatting path by regExp
    const formattedPath = path.replace(/^\/+|\/+$/g,"");
    const queryObj = reqUrl.query;
    const acceptableContentType = ["application/json", "text/plain"];
    let body = "";
    const reqProps = {
        method,
        headerObj,
        reqUrl,
        path,
        formattedPath,
        queryObj,
        body
}
    if (acceptableContentType.includes(headerObj["content-type"])) {

        const rawDataArray = [];
        req.on("data", (buffer) => {
            rawDataArray.push(buffer);
        });

        req.on("end", () => {
            body += Buffer.concat(rawDataArray).toString();
            const chosenHandler = routes[formattedPath
            ] ? routes[formattedPath
            ] : notFoundHandler;
            chosenHandler(reqProps, (statusCode, body)=> {
                res.writeHead(statusCode)
                res.end(body)
            });
        });

    } else {

        res.end("content type not  acceptable.")
}
}

// exporting modules
module.exports = handler;