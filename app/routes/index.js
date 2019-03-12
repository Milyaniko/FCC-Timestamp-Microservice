'use strict';
const { routeParser, timeStampParser } = require('../helpers');

module.exports = () => {
    const routes = {
        'get': {
            '/': (req, res, next) => res.render("main"),
            '/timestamp/': (req, res, next) => res.json(new Date),
            '/timestamp/:date': (req, res, next) => res.json(timeStampParser(req.params.date)),
        },
        'NA': (req, res, next) => res.status(404).render("404"),
    }
    return routeParser(routes);
}