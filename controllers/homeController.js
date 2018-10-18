(function (homeController) {

    var data = require('../data');
    homeController.init = function (app) {
        // app.get("/", function (req, res) {
        //     //res.send('<html><title>FU U!</title><body>Hello there</body></html>');
        //     res.render("index", { title: 'Manish First Node page using Vash' });
        // });
        app.get("/", function (req, res) {
        data.getNoteCategories(
            function (err, results) {
                res.render("index", { title: 'Manish First Node page using Vash', error: err, categories: results });
            }

        );
    });
    }
}

)(module.exports);