var connection = require("../config/connection.js");

module.exports = function (app) {
    app.get("/api/all", function (req, res) {
        connection.query("SELECT * FROM burgers", function (err, result) {
            if (err) {
                res.json(err);

            }
            res.json(result);
        });
    })


    app.post("/api/new", function (req, res) {
        const burger_name = req.body.burger_name;
        connection.query(`INSERT INTO burgers (burger_name) VALUES ('${burger_name}')`, function (err, result) {
            if (err) {
                res.json(err);
            }
        });
    })

};