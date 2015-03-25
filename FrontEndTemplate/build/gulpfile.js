var gulp 		= require("gulp"),
	less 		= require("gulp-less"),
	minifyCSS 	= require("gulp-minify-css"),
	watch 		= require("gulp-watch");

// Change the directory to the web root
process.chdir("../src/");

// Run all the less compilations
gulp.task("less", function() {
	console.log(">>> hello there this is the default task running :)");

	gulp
		.src("less/**/*.less")
		.pipe(less())
		.pipe(gulp.dest("css/"));
});

gulp.task("watch", function(){
	watch("less/**/*.less", function () {
		gulp.run("less");
	})
});


gulp.task("default", ["less"]);