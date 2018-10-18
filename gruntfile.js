module.exports = function (grunt) {
    grunt.initConfig(
        {
            nodemon: {
                all: {
                    scripts: "app.js",
                    options: {
                        watchedExtensions: ['js']
                    }
                }
            },
        }
        //install grunt-cli
        //install grunt-nodemon
    );
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.registerTask('default', ['nodemon']);
};