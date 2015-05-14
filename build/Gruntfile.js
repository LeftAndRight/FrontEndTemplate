// Docs: http://gruntjs.com/getting-started
module.exports = function(grunt) {

	// The web-root
	var webRoot		= "../src";
	// The build directory relative to the web-root
	var build		= "../build/";

	// Project configuration
	grunt.initConfig({
		// CSS minification, this will likely need updates as new css files are added
		cssmin : {
			main: {
				files: {
					"css-min/application.css" : [
						"css/customBootstrap.css",
						"css/application.css"
					]
				}
			}
		},
		requirejs: {
			js: {
				options: {
					// These are the basic options for the compiler: https://github.com/jrburke/r.js/blob/master/build/example.build.js
					// For some good real world examples see: https://github.com/cloudchen/requirejs-bundle-examples
					modules 	: [
						// Put all the config and the frameworks into a single file to load upfront
                        {name: "common", include:["frameworks"]},
                        // All modules that need to be combined with their dependencies need to be populated here
                        // If the dependencies can be loaded at runtime then leave them out.
						{name: "index", exclude:["frameworks"]}
					],
					baseUrl		: "js",
					dir			: "js-min",
					optimize	: "uglify2",// Change to uglify2 to use compression / none to remove
					// Load the base config file to reuse the paths and shim info
					mainConfigFile: "js/common.js"
				}
			}
		},

		// SCSS config builds all the less files into the css folder, overwrites existing files so only changes to less will persist
		sass : {
			main : {
				files: [{
					expand	: true,
					cwd		: "scss/",
					src		: ["**/*.scss"],
					dest	: "css/",
					ext		: ".css"
				}]
			}
		},
		// Image compression systems
		imagemin: {
			main : {
				options:{
					// PNG optimization level
					optimizationLevel: 7,
					// jpg progressive transformation
					progressive: false,
					// gif interlaced transformation
					interlaced: false
					// SVG options supported, see docs: https://github.com/gruntjs/grunt-contrib-imagemin
				},
				files: [{
					expand	: true,
					cwd		: "images/",
					src		: ["**/*.{png,jpg,gif}"],
					dest	: "images/"
				}]
			}
		},
		// Watch task for auto running less command on changed less files
		watch : {
			main : {
				files 	: ["scss/**/*.scss"],
				tasks	: ["sass"],
				options: {
					spawn: false
				}
			}
		},
		// Karma config used to run karma build test runner harness in the grunt environment
		karma : {
			unit : {
				options :{
					// base path that will be used to resolve all patterns (eg. files, exclude)
					basePath: "../",

					// frameworks to use
					// jasmine-ajax must come before jasmine, used to mock jasmine ajax requests
					frameworks: ["jasmine-ajax", "jasmine", "requirejs"],

					// list of files / patterns to load in the browser
					files: [
						// Include the test files and the project source files but do not include them
						// The karma-require-bootstrap.js autoloads the files for us as needed
						{pattern: "build/test/**/*.js", included: false},
						{pattern: "build/test/**/*.tpl", included: false},
						{pattern: "src/js/**/*.js", included: false},
						"build/karma-require-bootstrap.js"
					],

					// Both of reporters are custom plugins:
					// junit - used to generare an XML report that can be used by jenkins
					// karma-spec-reporter - used to generare a friendly output in the console
					reporters: ["junit", "spec"],
					junitReporter: {
						outputFile: "reports/js-unit-test-results.xml"
					},

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
					browsers: ["PhantomJS"],

					// Continuous Integration mode if true, Karma captures browsers, runs the tests and exits
					singleRun: true
				}
			}
		}
	});


	// Load the plugins
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-requirejs");
	grunt.loadNpmTasks("grunt-sass");
	grunt.loadNpmTasks("grunt-contrib-imagemin");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-karma");
	grunt.loadNpmTasks("grunt-newer");

	// Set base
	grunt.file.setBase(webRoot);

	// Define tasks that can be run
	grunt.registerTask("default", ["sass", "requirejs:js", "cssmin", "newer:imagemin"]);
	grunt.registerTask("full", ["sass", "requirejs:js", "cssmin", "newer:imagemin", "karma"]);
	grunt.registerTask("test", ["karma"]);
};