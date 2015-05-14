requirejs.config({
	baseUrl: (this.jsPrefix ? this.jsPrefix : "js"),
	urlArgs: "build=" + (this.buildNumber ? this.buildNumber : "0"),

	paths: {
		jquery		: "vendor/jquery-2.1.3",
		underscore	: "vendor/underscore.1.8.2",
		bootstrap	: "vendor/bootstrap"
	},

	shim : {
		bootstrap	: { deps: ["jquery"] },
		underscore	: { deps: ["jquery"] }
	}
});