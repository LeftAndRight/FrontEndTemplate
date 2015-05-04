// Docs: http://gruntjs.com/getting-started
module.exports = function(grunt) {

	// Load the plugins
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-karma');

	// Change to the web-root
	grunt.file.setBase("../src");
	// Store prefix top the build directory
	var build = "../build/";

	// Project configuration
	grunt.initConfig({
		// Less config builds all the less files into the css folder, overwrites existing files so only changes to less will persist
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
		// Watch task for auto running less command on changed less files
		watch : {
			main : {
				files 	: ["less/**/*.less"],
				tasks	: ["less"],
				options: {
					spawn: false
				}
			}
		},
		// css min task for compressing css into a new folder css-min
		cssmin : {
			main : {
				files 	: [{
					expand	: true,
					cwd		: "css/",
					src		: ["**/*.css"],
					dest	: "css-min/"
				}]
			}
		},
		// uglify task used to compress javascript into a new folder js-min
		uglify : {
			main : {
				files 	: [{
					expand	: true,
					cwd		: "js/",
					src		: ["**/*.js"],
					dest	: "js-min/"
				}]
			}
		},
		// Karma config used to run karma build test runner harness in the grunt environment
		karma : {
			unit : {
				options :{
					// base path that will be used to resolve all patterns (eg. files, exclude)
					basePath: '',

					// frameworks to use
					// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
					frameworks: ['jasmine', 'requirejs'],


					// list of files / patterns to load in the browser
					files: [
						// Include the test files and the project source files but do not include them
						// The karma-require-bootstrap.js autoloads the files for us as needed
						{pattern: build + 'test/*.js', included: false},
						{pattern: 'js/**/*.js', included: false},
						build + 'karma-require-bootstrap.js'
					],


					// test results reporter to use
					// possible values: 'dots', 'progress'
					// available reporters: https://npmjs.org/browse/keyword/karma-reporter
					reporters: ['progress'],

					// web server port
					port: 9876,

					// enable / disable colors in the output (reporters and logs)
					colors: true,

					// level of logging
					// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
					logLevel: "INFO",

					// enable / disable watching file and executing tests whenever any file changes
					autoWatch: false,

					// start these browsers. available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
					browsers: ['PhantomJS'],

					// Continuous Integration mode if true, Karma captures browsers, runs the tests and exits
					singleRun: true
				}
			}
		}
	});

	// Define tasks that can be run
	grunt.registerTask("default", ["less", "cssmin", "uglify"]);
	grunt.registerTask("full", ["less", "cssmin", "uglify", "karma"]);
	grunt.registerTask("test", ["karma"]);
};