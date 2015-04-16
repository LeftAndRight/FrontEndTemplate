module.exports = function(grunt) {

	// Load the plugins
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-karma');

	// Change to the web-root
	grunt.file.setBase("../src");
	var build = "../build/";

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
		},
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
						// This is KEY, all the files must be referenced but never included, the bootstrap loads them
						//{pattern: build + 'node_modules/**/*.js', included: false},
						{pattern: build + 'test/*.js', included: false},
						build + 'karma-require-bootstrap.js'
					],


					// list of files to exclude
					exclude: [],


					// preprocess matching files before serving them to the browser
					// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
					preprocessors: {},


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


					// start these browsers
					// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
					browsers: ['PhantomJS'],


					// Continuous Integration mode
					// if true, Karma captures browsers, runs the tests and exits
					singleRun: true
				}
			}
		}
	});

	// Default task(s).
	grunt.registerTask("default", ["less", "cssmin", "uglify", "karma"]);
	grunt.registerTask("test", ["karma"]);
};