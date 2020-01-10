$.get("/api/burger", function (data) {
    if (data.length !== 0) {
        for (var i = 0; i < data.length; i++) {
            var row = $("<div>");
            row.addClass("burger");

            row.append("<p>" + data[i].burgers.burger_name + "<p>");

            $("#burger-area").prepend(row);
        }
    }
})


$("#burger-submit").on("click", function (event) {
    event.preventDefault();

    const newBurger = {
        burger_name: $("#burger_name").val().trim()

    };

    console.log(newBurger);

    $.post("/api/new", newBurger)

        .then(function (res) {
            console.log(res);
            const row = $("<div>");
            row.addClass("burger");


            row.append("<p>" + newBurger.burger_name + "<p>");

            $("#burger-area").prepend(row);
        });


    $("#burger_name").val("");

})