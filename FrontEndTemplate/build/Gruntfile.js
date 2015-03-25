module.exports = function(grunt) {

	// Load the plugins
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-contrib-watch");

	// Change to the web-root
	grunt.file.setBase("../src");

	// Project configuration.
	grunt.initConfig({
		less : {
			development: {
				files: [{
					expand	: true,
					cwd		: "less/",
					src		: ["**/*.less"],
					dest	: "css/",
					ext		: ".css"
				}]
			},
			production: {
				files: [{
					expand	: true,
					cwd		: "less/",
					src		: ["**/*.less"],
					dest	: "css/",
					ext		: ".css"
				}]
			}
		},
		watch : {
			files 	: ["less/**/*.less"],
			tasks	: ["less"],
			options: {
				spawn: false
			}
		}
	});

	// Default task(s).
	grunt.registerTask("default", ["less"]);
};