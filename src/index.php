<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>Front End Template</title>

    <?php
	// Required model parameters:
	// $environment 	- production or development
	// $version 		- the version of the app currently, only used for production
	// $pageName 		- the name of the js file to load for this page
	// $developmentCSS 	- the css files to load for development
	// $productionCSS	- the css files for load for production
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
	?>


	<?php
	// From here down the header rendering should never change as it is based on the model data
	$buildNumber	= $environment == "production" ? $version : microtime(true) * 10000;
	$jsPrefix		= $environment == "production" ? "js-min" : "js";

	// Render CSS Imports
	$css			= $environment == "production" ? $productionCSS : $developmentCSS;
	foreach ($css as $file){
		echo "<link rel='stylesheet' type='text/css' href='$file?build=$buildNumber'>";
	}
    ?>

    <!-- Javascript -->
	<script type="text/javascript" src="<?php echo $jsPrefix?>/vendor/require.js?build=<?php echo $buildNumber; ?>"></script>
	<script type="text/javascript">
		var jsPrefix	= "<?php echo $jsPrefix; ?>";
		var buildNumber	= "<?php echo $buildNumber; ?>";
		// Load the common code, it will be config
		// For production it will be config plus all the frameworks defined
		require([jsPrefix + "/common.js?build=" + buildNumber], function(){
			require(["frameworks"], function(){
				require(["<?php echo $pageName; ?>"]);
			});
		});
	</script>
</head>

<body>
    <div id="mainApp">
        <h1>Front End Template</h1>
    </div>
</body>
</html>