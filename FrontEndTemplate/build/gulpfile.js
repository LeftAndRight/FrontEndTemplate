var gulp 		= require("gulp"),
	less 		= require("gulp-less"),
	watch 		= require('gulp-watch'),
	minifyCSS 	= require("gulp-minify-css");

// Change the directory to the web root
process.chdir("../src/");

// Run all the less compilations
gulp.task("less", function() {
	console.log(">>> Running less task");

	return gulp
		.src("less/**/*.less")
		.pipe(less())
		.on("error", errorHandler)
		.pipe(gulp.dest("css/"));
});

gulp.task("watch", function(){
	failOnError = false;
	gulp.watch("less/**/*.less", ["less"]);
});



var failOnError = true;
function errorHandler(error){
	if (failOnError){
		throw new Error(error.message);
	}
	else{
		console.error(error.message);
	}
}
gulp.task("default", ["less"]);