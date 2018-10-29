(function (notesController) {
    notesController.init = function (app) {
        app.get("/api/notes", function (req, res) {
            res.set("Content-Type", "application/json");
            res.send({ name: "Manish Nautiyal" });
        }
        );
    };
}) (module.exports);