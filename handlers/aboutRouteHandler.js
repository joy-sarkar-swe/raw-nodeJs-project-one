// dependencies

// module wrapper

const handler = {
    
};
handler.aboutRouteHandler = (reqProps,cb) => {
    console.log("this is about route handler");
    cb(200, "this is about route handler");
}
// export modules

module.exports = handler;