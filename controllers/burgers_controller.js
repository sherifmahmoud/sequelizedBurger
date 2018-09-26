const express = require("express");
// Requiring our models for syncing
var db = require("../models");

const router = express.Router();

router.get("/", function (req, res) {
    db.Burger.findAll({}).then(function (burgers) {
        res.render("index", { burgers });
    });
});

router.post("/", function (req, res) {
    db.Burger.create({
        burger_name: req.body.name
    }).then(function (burger) {
        // We have access to the new burger as an argument inside of the callback function
        res.redirect('/');
    });
});

router.put("/", function (req, res) {
    db.Burger.update({
        devoured: (parseInt(req.body.devoured) === 1)
    }, {
            where: {
                id: parseInt(req.body.id)
            }
        }).then(function (burger) {
            res.redirect(303, '/');
        });

});

// Export routes for server.js to use.
module.exports = router;