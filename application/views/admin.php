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

<div id="map"></div>
<div class="container">
    <div class="wrap" id="places">
        <div class="col-xs-6">
            <h3>Заведений: <span id="count"></span></h3>
        </div>
        <div class="col-xs-6 excel">
            <a href="http://gwctest.org/bars/bars.xlsx">Excel</a>
        </div>
    </div>
</div>

<script src="<?= base_url(); ?>public/js/app.min.js"></script>
<script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDtGSwjhnBEodc5HQBYuALvuHXBeDTKMbc&callback=initMaps">
</script>
</body>
</html>