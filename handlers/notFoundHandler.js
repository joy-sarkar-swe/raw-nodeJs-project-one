// dependencies

// module wrapper

const handler = {
    
};
handler.notFoundHandler = (reqProps,cb) => {
    console.log("Page not found");
    cb(404, "Page not found");
}
// export modules

module.exports = handler;