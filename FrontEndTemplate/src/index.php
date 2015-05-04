<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>Front End Template</title>

    <?php
    // Basic switch for production vs development
    // This is a basic implementation as it will change with each language and needs to be implemented as such
	$environment	= "development";
	$buildNumber	= $environment == "production" ? "1.0" : microtime(true) * 10000;
	$pageName		= "index";
	$cssPrefix		= $environment == "production" ? "css-min" : "css";
	$jsPrefix		= $environment == "production" ? "js-min" : "js";
    ?>

	<!-- Stylesheets -->
    <link rel="stylesheet" type="text/css" href="<?php echo $cssPrefix?>/vendor/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="<?php echo $cssPrefix?>/application.css">

    <!-- Javascript -->
	<script type="text/javascript" src="<?php echo $jsPrefix?>/vendor/require.js<?php echo '?build=' . $buildNumber?>"></script>
	<script type="text/javascript">
		var jsPrefix	= "<?php echo $jsPrefix; ?>";
		var buildNumber	= "<?php echo $buildNumber; ?>";
		require([jsPrefix + "/require_config.js?build=" + buildNumber], function(){
			require(["<?php echo $pageName; ?>"]);
		});
	</script>
</head>

<body>
    <div id="mainApp">
        <h1>Front End Template</h1>
    </div>
</body>
</html>