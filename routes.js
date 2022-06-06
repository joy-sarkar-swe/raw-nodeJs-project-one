// dependencies
const { homeRouteHandler } = require("./handlers/homeRouteHandler")
const { aboutRouteHandler } = require("./handlers/aboutRouteHandler")
const { notFoundHandler } = require("./handlers/notFoundHandler")
// route obj
const routes = {
    "home":homeRouteHandler,
    "about": aboutRouteHandler,
    "notFound": notFoundHandler,
}

// module exports

module.exports = routes;