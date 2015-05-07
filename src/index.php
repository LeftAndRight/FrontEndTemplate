<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>Front End Template</title>

    <?php
	// Model parameters:
	// $environment 	- production or development
	// $version 		- (Used for production) the version of the app currently
	// $pageName 		- (Optional) the name of the js file to load for this page
	// $developmentCSS 	- (Optional) the css files to load for development
	// $productionCSS	- (Optional) the css files for load for production
	$environment	= "development";
	$version		= "0.1";
	$pageName		= "index";
	$developmentCSS	= array(
		"css/vendor/bootstrap.css",
		"css/application.css"
	);
	$productionCSS	= array(
		"css-min/application.css"
	);

	include "headerAssets.php";
	?>

</head>

<body>
    <div id="mainApp">
        <h1>Front End Template</h1>
    </div>
</body>
</html>