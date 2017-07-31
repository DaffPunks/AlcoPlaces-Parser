var map,
    districtArbat,
    array = [];

function initMaps() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: {lat: 55.752371, lng: 37.592595},
    });

    // Define the LatLng coordinates for the polygon's path.
    var districtCoords = [
        {lat: 55.758194, lng: 37.584223},
        {lat: 55.754255, lng: 37.605706},
        {lat: 55.756332, lng: 37.607122},
        {lat: 55.754758, lng: 37.611958},
        {lat: 55.749352, lng: 37.608452},
        {lat: 55.750584, lng: 37.604032},
        {lat: 55.748821, lng: 37.602573},
        {lat: 55.747299, lng: 37.599011},
        {lat: 55.746478, lng: 37.585621},
        {lat: 55.744304, lng: 37.587166},
        {lat: 55.743917, lng: 37.583519},
        {lat: 55.745463, lng: 37.582832},
        {lat: 55.745608, lng: 37.573906},
        {lat: 55.752861, lng: 37.574065},
        {lat: 55.755318, lng: 37.576480},
        {lat: 55.755463, lng: 37.583561}
    ];

    districtArbat = new google.maps.Polygon({paths: districtCoords});
    districtArbat.setMap(map);

    fetch('http://gwctest.org/bars/get')
        .then(
            function(response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }

                response.json().then(function(data) {
                    setMarkers(data);
                    console.log(count);
                    document.getElementById('count').innerHTML = count;
                    console.log(JSON.stringify(array));
                });
            }
        )
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });


}

var count = 0;

function setMarkers(data) {
    data.forEach(function (item) {
        var myLatlng = new google.maps.LatLng(parseFloat(item.lat),parseFloat(item.long));

        if(google.maps.geometry.poly.containsLocation(myLatlng, districtArbat)) {
            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                title: item.name
            });

            count++;




            let DOM = '<div class="col-md-4 place">' +
                '<div class="place-wrap">' +
                '<div class="title">'+item.name+'</div>' +
                '<div class="coords">Координаты: '+item.lat+','+item.long+'</div>' +
                '<div class="phone">'+item.phone+'</div>' +
                '<div class="phone">'+item.address+'</div>' +
                '<div class="phone">Рейтинг: '+item.rating+'</div>' +
                '<div class="phone">Отзывов: '+item.reviews+'</div>' +
                '<div class="website"><a href="http://'+item.website+'">'+item.website+'</a></div>' +
                '<div class="schedule">'+parseWeeksHTML(item.schedule)+'</div>' +
                '</div>' +
                '</div>';

            let DOM_IW = '<div class="place">' +
                '<div class="place-wrap">' +
                '<div class="title">'+item.name+'</div>' +
                '<div class="coords">Координаты: '+item.lat+','+item.long+'</div>' +
                '<div class="phone">'+item.phone+'</div>' +
                '<div class="phone">'+item.address+'</div>' +
                '<div class="phone">Рейтинг: '+item.rating+'</div>' +
                '<div class="phone">Отзывов: '+item.reviews+'</div>' +
                '<div class="website"><a href="http://'+item.website+'">'+item.website+'</a></div>' +
                '<div class="schedule">'+parseWeeksHTML(item.schedule)+'</div>' +
                '</div>' +
                '</div>';

            var infowindow = new google.maps.InfoWindow({
                content: DOM_IW
            });

            marker.addListener('click', function() {
                infowindow.open(map, marker);
            });

            document.getElementById('places').innerHTML += DOM;

            array.push({
                "Название": item.name,
                "Lat": item.lat,
                "Long": item.long,
                "Адрес": item.address,
                "Телефон": item.phone,
                "Сайт": item.website,
                "Расписание": parseWeeks(item.schedule),
            });
        }


    })
}


function parseWeeks(weeksJSON) {
    var result = "";
    var json = JSON.parse(weeksJSON);

    if(json.Mon !== undefined)
        result += "Понедельник: " + json.Mon.working_hours[0].from + "-" + json.Mon.working_hours[0].to + ". ";
    if(json.Tue !== undefined)
        result += "Вторник: " + json.Tue.working_hours[0].from + "-" + json.Tue.working_hours[0].to + ". ";
    if(json.Wed !== undefined)
        result += "Среда: " + json.Wed.working_hours[0].from + "-" + json.Wed.working_hours[0].to + ". ";
    if(json.Thu !== undefined)
        result += "Четверг: " + json.Thu.working_hours[0].from + "-" + json.Thu.working_hours[0].to + ". ";
    if(json.Fri !== undefined)
        result += "Пятница: " + json.Fri.working_hours[0].from + "-" + json.Fri.working_hours[0].to + ". ";
    if(json.Sat !== undefined)
        result += "Суббота: " + json.Sat.working_hours[0].from + "-" + json.Sat.working_hours[0].to + ". ";
    if(json.Sun !== undefined)
        result += "Воскресенье: " + json.Sun.working_hours[0].from + "-" + json.Sun.working_hours[0].to + ". ";
    return result;
}
function parseWeeksHTML(weeksJSON) {
    var result = "<br>";
    var json = JSON.parse(weeksJSON);

    if(json.Mon !== undefined)
        result += "Понедельник: " + json.Mon.working_hours[0].from + "-" + json.Mon.working_hours[0].to + ".<br>";
    if(json.Tue !== undefined)
        result += "Вторник: " + json.Tue.working_hours[0].from + "-" + json.Tue.working_hours[0].to + ".<br>";
    if(json.Wed !== undefined)
        result += "Среда: " + json.Wed.working_hours[0].from + "-" + json.Wed.working_hours[0].to + ".<br>";
    if(json.Thu !== undefined)
        result += "Четверг: " + json.Thu.working_hours[0].from + "-" + json.Thu.working_hours[0].to + ".<br>";
    if(json.Fri !== undefined)
        result += "Пятница: " + json.Fri.working_hours[0].from + "-" + json.Fri.working_hours[0].to + ".<br>";
    if(json.Sat !== undefined)
        result += "Суббота: " + json.Sat.working_hours[0].from + "-" + json.Sat.working_hours[0].to + ".<br>";
    if(json.Sun !== undefined)
        result += "Воскресенье: " + json.Sun.working_hours[0].from + "-" + json.Sun.working_hours[0].to + ".<br>";
    return result;
}