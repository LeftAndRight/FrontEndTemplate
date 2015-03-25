module.exports = function(grunt) {

	// Load the plugins
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Change to the web-root
	grunt.file.setBase("../src");

	// Project configuration.
	grunt.initConfig({
		less : {
			main : {
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
			main : {
				files 	: ["less/**/*.less"],
				tasks	: ["less"],
				options: {
					spawn: false
				}
			}
		},
		cssmin : {
			main : {
				files 	: [{
					expand	: true,
					cwd		: "css/",
					src		: ["**/*.css"],
					dest	: "css-min/",
					ext		: ".css"
				}]
			}
		},
		uglify : {
			main : {
				files 	: [{
					expand	: true,
					cwd		: "js/",
					src		: ["**/*.js"],
					dest	: "js-min/",
					ext		: ".js"
				}]
			}
		}
	});

	// Default task(s).
	grunt.registerTask("default", ["less", "cssmin", "uglify"]);
};