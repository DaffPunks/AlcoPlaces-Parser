<?php

function get_xlsx() {
    $area = isset($_GET['area']) ? $_GET['area'] : 1;

    switch ($area) {
        case 1:
            return base_url()."public/arbat.xlsx";
            break;
        case 2:
            return base_url()."public/himki.xlsx";
            break;
        case 3:
            return base_url()."public/kaliningrad.xlsx";
            break;
    }
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bars</title>
    <link href="<?= base_url(); ?>public/css/bootstrap.min.css" rel="stylesheet">
    <link href="<?= base_url(); ?>public/css/style.css" rel="stylesheet">
</head>
<body>
<script>
    var region = <?= isset($_GET['area']) ? $_GET['area'] : 1 ?>;
</script>
<header>
    <div class="container">
        <div class="col-md-3">
            <a href="?area=1">Арбат</a>
        </div>
        <div class="col-md-3">
            <a href="?area=2">Химки</a>
        </div>
        <div class="col-md-3">
            <a href="?area=3">Калининград</a>
        </div>
        <div class="col-md-3">
            <a href="?area=4">Нижний Новгород</a>
        </div>
    </div>
</header>

<div id="map"></div>
<div class="container">
    <div class="wrap" id="places">
        <div class="col-xs-6">
            <h3>Заведений: <span id="count"></span></h3>
        </div>
        <div class="col-xs-6 excel">
            <a href="<?= get_xlsx() ?>">Excel</a>
        </div>
    </div>
</div>

<script src="<?= base_url(); ?>public/js/app.min.js"></script>
<script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDtGSwjhnBEodc5HQBYuALvuHXBeDTKMbc&callback=initMaps">
</script>
</body>
</html>