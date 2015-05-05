requirejs.config({
	baseUrl: this.jsPrefix ? this.jsPrefix : "js",
	urlArgs: "build=" + this.buildNumber ? this.buildNumber : "1",

	paths: {
		jquery		: "vendor/jquery-2.1.3",
		underscore	: "vendor/underscore.1.8.2",
		bootstrap	: "vendor/bootstrap"
	},

	shim : {
		jquery		: { exports:"$" },
		bootstrap	: { deps: ["jquery"] },
		underscore	: { exports: "_", deps: ["jquery"] }
	}
});