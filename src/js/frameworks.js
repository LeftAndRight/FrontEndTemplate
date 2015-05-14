/**
 * This class is a placeholder to define all the frameworks to be loaded up front.
 * Its placed here so it can be centralised and not duplicated in the config and build script
 */
define(
	[
		"jquery",
		"underscore",
		"bootstrap"
	],
	function($, _){
		$.noConflict();
		_.noConflict();
	}
);