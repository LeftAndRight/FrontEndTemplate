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

**NOTE: All command line references from here on assume you are in the 'build' directory.**

## Running the example
The example application can be run in two modes: development and production. These are hardcoded into the top of the index.php file.

####development
When running in development the app will load all css files one by one from the src/css folder (less files need to be compiled for this to work),
it will also load all javascript files one at a time from the src/js folder.
To make sure this works you need to run the less css compilation. To do this run:

```
grunt less
```

*See [Less Compilation](#lessCompilation)*

####production
When running in production the app will load one combined css file. The javascript will make three calls, one to fetch require.js, one to fetch common.js 
(this is the require config plus a set of initial common libraries i.e. jquery) and finally the main page module index.js.
In order to run the app in production mode you need optimise all the assets so you can run:

```
grunt
```

## Javascript Unit Tests
All the javascript unit tests are located under build/test. For them to work they must have the extension Spec.js. They are written using the jasmine framework and run using Karma.
The template has been setup so the tests use requirejs and can load any of the modules from the main application to test.

To run all the tests:

```
grunt test
```

Or to run the optimisation and all the tests:

```
grunt full
```

The config for karma is located in build/Gruntfile.js and the requirejs bootrap config system which allows the use of requirejs in the tests and holds the requirejs config is located in build/karma-require-bootstrap.js


## <a name="lessCompilation"></a>Less Compilation
There are a few ways to run and maintain the less files.

You can use the basic grunt task every time you change a less file by running ``` grunt less ```

You can use the grunt based watch task to do the above automatically by running ``` grunt watch ```. You can also run grunt tasks directly inside intellij, the latest version supports grunt as long as you have the nodejs plugin installed.

The easiest way however is to setup intellij to do this for you. This can be accomplished using a file watchers (intellij plugin) and the less compiller (already installed with the grunt dependencies).

* Install the intellij plugin - file watchers
* Go to settings, tools, file watchers and add a new one.
* Select less and update the executeable to be: <FrontEndTemplate>/build/node_modules/.bin/lessc.cmd
* This should now compile all less files into the same directory
* Now go back and edit the file watcher, add '../css/' at the beginning of the output location to compile to the right place

Helpful links if you get stuck:

* https://www.jetbrains.com/idea/help/using-file-watchers.html
* https://www.jetbrains.com/webstorm/help/transpiling-sass-less-and-scss-to-css.html


## CSS Optimisation
CSS optimization uses @import tags to reference other css files like bootstrap. These are resolved at build time into a single file. In development mode the browser loads them automatically.

## .htaccess
The .htaccess file is pulled directly from biolerplate. It has some apache modules that must be enabled for it to work correctly:

* mod_autoindex.c (autoindex_module)
* mod_deflate.c (deflate_module)
* mod_expires.c (expires_module)
* mod_filter.c (filter_module)
* mod_headers.c (headers_module)
* mod_include.c (include_module)
* mod_mime.c (mime_module)
* mod_rewrite.c (rewrite_module)
* mod_setenvif.c (setenvif_module)

Obviously this file is only needed when there is an apache server serving the files.