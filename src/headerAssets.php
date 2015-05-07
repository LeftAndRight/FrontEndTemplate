<?php
// From here down the header rendering should never change as it is based on the model data
$buildNumber	= $environment == "production" ? $version : microtime(true) * 10000;
$jsPrefix		= $environment == "production" ? "js-min" : "js";

// Render CSS Imports
$css			= $environment == "production" ? (isset($productionCSS) ? $productionCSS : null) : (isset($developmentCSS) ? $developmentCSS : null);
if (!is_null($css)){
	foreach ($css as $file){
		echo "<link rel='stylesheet' type='text/css' href='$file?build=$buildNumber'>";
	}
}
?>

<!-- Javascript -->
<?php if (isset($pageName)): ?>
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
<?php endif; ?>