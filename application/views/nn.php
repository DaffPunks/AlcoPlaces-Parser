<?php

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
<header>
    <div class="container">
        <div class="col-md-3">
            <a href="<?= base_url(); ?>?area=1">Арбат</a>
        </div>
        <div class="col-md-3">
            <a href="<?= base_url(); ?>?area=2">Химки</a>
        </div>
        <div class="col-md-3">
            <a href="<?= base_url(); ?>?area=3">Калининград</a>
        </div>
        <div class="col-md-3">
            <a href="<?= base_url(); ?>nn">Нижний Новгород</a>
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
            <a href="<?= base_url()."public/nn.xlsx" ?>">Excel</a>
        </div>
    </div>
</div>

<script src="<?= base_url(); ?>public/js/nn.min.js"></script>
<script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDtGSwjhnBEodc5HQBYuALvuHXBeDTKMbc&callback=initMaps">
</script>
</body>
</html>