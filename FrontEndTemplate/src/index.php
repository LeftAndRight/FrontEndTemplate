<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>Front End Template</title>

    <!-- Stylesheets -->
    <?php
    // Basic switch for production vs development
    // This is a basic implementation as it will change with each language and needs to be implemented as such
    $csspath = "css/";
    ?>
    <link rel="stylesheet" type="text/css" href="<?php echo $csspath?>/vendor/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="<?php echo $csspath?>/application.css">

    <!-- Javascript -->
    

</head>

<body>
    <div id="mainApp">
        <h1>Hello There</h1>
    </div>
</body>
</html>