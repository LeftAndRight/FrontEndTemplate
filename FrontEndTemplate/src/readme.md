# Front End Template

The purpose of this project is to provide a starting for a front end project that has a starting infrastructure.
The project is designed to be ported to any backend language so there is no hard dependency on the backend language.
That said, the example implementation uses php as there has to be some kind of language to render the initial index.php. This can be customised to your liking.

The infrastructure in place in this project is the following:

* Less support
* Basic [requirejs](http://requirejs.org/) implementation
* .htaccess basics ported from [boilerplate](https://github.com/h5bp/html5-boilerplate/blob/master/dist/.htaccess)
* [Grunt](http://gruntjs.com/) task runner build tool
    * [Less](http://lesscss.org/) compillation ([grunt-contrib-less](https://github.com/gruntjs/grunt-contrib-less))
    * Watch task for less compilation ([grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch))
    * CSS optimization using ([requirejs optimizer](http://requirejs.org/docs/optimization.html))
    * Requirejs optimization ([requirejs optimizer](http://requirejs.org/docs/optimization.html))
    * Javascript unit tests
        * Support to run with grunt inside the Karma platform ([grunt-karma](https://github.com/karma-runner/grunt-karma))
        * Running tests inside of PhantomJS ([karma-phantomjs-launcher](https://github.com/karma-runner/karma-phantomjs-launcher))
        * Tests written using [jasmine](http://jasmine.github.io/2.3/introduction.html)

## Dependencies
In order to run the build tools or less compilation you will need to install [nodejs](https://nodejs.org/).

Once you have nodejs installed you will need to install [grunt](http://gruntjs.com/).
Open your command line and install it globally using:

```
npm install -g grunt-cli
```

Now you will need to fetch the all the grunt task dependencies: open your command line and navigate to the 'build' directory and run:

```
npm install
```

## Running the example
The example application can be run in two modes: development and production. These are hardcoded into the top of the index.php file.

**development**
When running in development the app will load all css files one by one from the src/css folder, it will also load all javascript one file at a time using the src/js folder.
production will load one compressed css file from src/css-min, the require js library, the require a common set of javascript libraries and the main app file

To run the main build. Open your command line, navigate to the build directory and run
```
grunt less
```
This will compile the less into css, optimise the javascript, optimize the css into the 

## Development Less Compilation

https://www.jetbrains.com/idea/help/using-file-watchers.html


https://www.jetbrains.com/webstorm/help/transpiling-sass-less-and-scss-to-css.html#d177671e218

## Requirejs implementation

## .htaccess
The required modules