var express = require("express");

var app = express();
var PORT = process.env.PORT || 8077;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("app/public"));

require("./Burger/app/routes/api-routes.js")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});