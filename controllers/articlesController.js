const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Article
            .find(req.query)
            .then(dbmodel => res.json(dbmodel))
            .catch(err => res.status(422).json(err))
    },

    create: function(req, res) {
        db.Article
            .create(req.body)
            .then(dbmodel => res.json(dbmodel))
            .catch(err => res.status(422).json(err));
    }
}