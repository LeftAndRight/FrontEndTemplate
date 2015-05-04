requirejs.config({
	baseUrl: jsPrefix,
	urlArgs: "build=" + buildNumber,

	paths: {
		jquery		: "vendor/jquery-2.1.3",
		underscore	: "vendor/underscore.1.8.2"
	}
});