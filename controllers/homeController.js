(function (homeController) {
    homeController.init = function (app) {
        app.get("/", function (req, res) {
            //res.send('<html><title>FU U!</title><body>Hello there</body></html>');
            res.render("index", { title: 'Manish First Node page using Vash' });
        });
    }
}

)(module.exports);