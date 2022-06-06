// dependencies

// module wrapper

const handler = {
    
};
handler.homeRouteHandler = (reqProps,cb) => {
    console.log("this is home route handler");
    cb(200, "this is home route handler");
}
// export modules

module.exports = handler;