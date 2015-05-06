<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>Front End Template</title>

    <?php
    // Basic switch for production vs development
    // This is a basic implementation as it will change with each language and needs to be implemented as such
	$environment	= "development";
	$buildNumber	= $environment == "production" ? "0.1" : microtime(true) * 10000;
	$pageName		= "index";
	$cssPrefix		= $environment == "production" ? "css-min" : "css";
	$jsPrefix		= $environment == "production" ? "js-min" : "js";
    ?>

	<!-- Stylesheets -->
    <link rel="stylesheet" type="text/css" href="<?php echo $cssPrefix?>/application.css">

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