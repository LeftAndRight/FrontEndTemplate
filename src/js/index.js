define(["jquery", "underscore"], function($, _){
	console.log("index page javascript loaded");

	console.log("is jquery available globally: ", $);
	console.log("is underscore available globally: ", _);
	console.log("is bootstrap available globally: ", $("<div></div>").modal);
});