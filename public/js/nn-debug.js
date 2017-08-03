'use strict';

var map,
    markers = [],
    districtArbat,
    districts = [],
    array = [],
    count = 0,
    districtCoords;

function initMaps() {

    /*
      Down Novgorod
     */
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: { lat: 56.285399, lng: 43.920782 }
    });

    // Define the LatLng coordinates for the polygon's path.
    districtCoords = [{ lat: 56.175557, lng: 43.708475 }, { lat: 56.413450, lng: 43.715824 }, { lat: 56.407577, lng: 43.864439 }, { lat: 56.340654, lng: 44.081645 }, { lat: 56.278146, lng: 44.154319 }, { lat: 56.203728, lng: 43.986107 }];

    districtArbat = new google.maps.Polygon({ paths: districtCoords });
    districts.push(districtArbat);

    map.addListener('bounds_changed', function () {
        console.log();

        deleteMarkers();

        var south = map.getBounds().toJSON().south;
        var east = map.getBounds().toJSON().east;
        var west = map.getBounds().toJSON().west;
        var north = map.getBounds().toJSON().north;

        fetch_new({
            south: south,
            east: east,
            west: west,
            north: north
        });
    });
    // districtArbat.setMap(map);

    // fetch('http://bars.dev/get_map?area=4')
    fetch('http://gwctest.org/get_map?area=4').then(function (response) {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            return;
        }

        response.json().then(function (data) {

            setMarkers(data);
            // console.log(count);
            // document.getElementById('count').innerHTML = count;
            // console.log(JSON.stringify(array));
        });
    }).catch(function (err) {
        console.log('Fetch Error :-S', err);
    });
}

function setMarkers(data) {
    data.forEach(function (item) {

        var myLatlng = new google.maps.LatLng(parseFloat(item.lat), parseFloat(item.long));

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: item.name
        });

        var DOM_IW = '<div class="place">' + '<div class="place-wrap">' + '<div class="title">' + item.name + '</div>' + '<div class="coords">Координаты: ' + item.lat + ',' + item.long + '</div>' + '<div class="phone">' + item.phone + '</div>' + '<div class="phone">' + item.address + '</div>' + '<div class="phone">' + item.category + '</div>' + '<div class="phone">Рейтинг: ' + item.rating + '</div>' + '<div class="phone">Отзывов: ' + item.reviews + '</div>' + '<div class="phone">' + item.tags + '</div>' + '<div class="website"><a href="http://' + item.website + '">' + item.website + '</a></div>' + '<div class="schedule">' + parseWeeksHTML(item.schedule) + '</div>' + '</div>' + '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: DOM_IW
        });

        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });

        //document.getElementById('places').innerHTML += DOM;

        array.push({
            "Название": item.name,
            "Lat": item.lat,
            "Long": item.long,
            "Адрес": item.address,
            "Телефон": item.phone,
            "Сайт": item.website,
            "Расписание": parseWeeks(item.schedule),
            "Категории": item.category,
            "Тэги": item.tags,
            "Tags": item.eng_tags
        });

        markers.push(marker);
    });
}

function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}

function clearMarkers() {
    setMapOnAll(null);
}

function deleteMarkers() {
    clearMarkers();
    markers = [];
}

function parseWeeks(weeksJSON) {

    var result = "";
    var json;

    try {
        json = JSON.parse(weeksJSON);

        if (json.Mon !== undefined) result += "Понедельник: " + json.Mon.working_hours[0].from + "-" + json.Mon.working_hours[0].to + ". ";
        if (json.Tue !== undefined) result += "Вторник: " + json.Tue.working_hours[0].from + "-" + json.Tue.working_hours[0].to + ". ";
        if (json.Wed !== undefined) result += "Среда: " + json.Wed.working_hours[0].from + "-" + json.Wed.working_hours[0].to + ". ";
        if (json.Thu !== undefined) result += "Четверг: " + json.Thu.working_hours[0].from + "-" + json.Thu.working_hours[0].to + ". ";
        if (json.Fri !== undefined) result += "Пятница: " + json.Fri.working_hours[0].from + "-" + json.Fri.working_hours[0].to + ". ";
        if (json.Sat !== undefined) result += "Суббота: " + json.Sat.working_hours[0].from + "-" + json.Sat.working_hours[0].to + ". ";
        if (json.Sun !== undefined) result += "Воскресенье: " + json.Sun.working_hours[0].from + "-" + json.Sun.working_hours[0].to + ". ";
        return result;
    } catch (e) {
        console.log(e); // You get an error.
        console.log(weeksJSON); // You get an error.

        return "";
    }
}
function parseWeeksHTML(weeksJSON) {
    if (weeksJSON !== null) {
        var result = "<br>";
        var json;
        try {
            json = JSON.parse(weeksJSON);

            if (json.Mon !== undefined) result += "Понедельник: " + json.Mon.working_hours[0].from + "-" + json.Mon.working_hours[0].to + ".<br>";
            if (json.Tue !== undefined) result += "Вторник: " + json.Tue.working_hours[0].from + "-" + json.Tue.working_hours[0].to + ".<br>";
            if (json.Wed !== undefined) result += "Среда: " + json.Wed.working_hours[0].from + "-" + json.Wed.working_hours[0].to + ".<br>";
            if (json.Thu !== undefined) result += "Четверг: " + json.Thu.working_hours[0].from + "-" + json.Thu.working_hours[0].to + ".<br>";
            if (json.Fri !== undefined) result += "Пятница: " + json.Fri.working_hours[0].from + "-" + json.Fri.working_hours[0].to + ".<br>";
            if (json.Sat !== undefined) result += "Суббота: " + json.Sat.working_hours[0].from + "-" + json.Sat.working_hours[0].to + ".<br>";
            if (json.Sun !== undefined) result += "Воскресенье: " + json.Sun.working_hours[0].from + "-" + json.Sun.working_hours[0].to + ".<br>";
            return result;
        } catch (e) {
            console.log(e); // You get an error.
            console.log(weeksJSON); // You get an error.

            return "";
        }
    } else {
        return "";
    }
}

function fetch_new(bounds) {
    // fetch('http://bars.dev/get_map?area=4&s='+bounds.south+'&e='+bounds.east+'&w='+bounds.west+'&n='+bounds.north)
    fetch('http://gwctest.org/get_map?area=4&s=' + bounds.south + '&e=' + bounds.east + '&w=' + bounds.west + '&n=' + bounds.north).then(function (response) {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            return;
        }

        response.json().then(function (data) {

            setMarkers(data);
            // console.log(count);
            // document.getElementById('count').innerHTML = count;
            // console.log(JSON.stringify(array));
        });
    }).catch(function (err) {
        console.log('Fetch Error :-S', err);
    });
}

/*
* Lazy load here
*/

var page = 0,
    loading = false,
    limit = false;

function getDocHeight() {
    var body = document.body,
        html = document.documentElement;

    return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
}

function needUpdate() {
    var scroll = window.innerHeight + window.pageYOffset;

    return scroll > getDocHeight() - 90;
}

function fetchNewBlocks() {
    page++;
    // fetch('http://bars.dev/get_blocks?page=' + page)
    fetch('http://gwctest.org/get_blocks?page=' + page).then(function (response) {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            return;
        }

        response.json().then(function (data) {

            console.log(data);
            limit = data.limit;
            document.getElementById('count').innerHTML = data.count;
            placeNewBlocks(data.items);

            loading = false;
        });
    }).catch(function (err) {
        console.log('Fetch Error :-S', err);
    });
}

function placeNewBlocks(items) {
    items.forEach(function (item) {
        var DOM = '<div class="col-md-4 place">' + '<div class="place-wrap">' + '<div class="title">' + item.name + '</div>' + '<div class="coords">Координаты: ' + item.lat + ',' + item.long + '</div>' + '<div class="phone">' + item.phone + '</div>' + '<div class="phone">' + item.address + '</div>' + '<div class="phone">' + item.category + '</div>' + '<div class="phone">Рейтинг: ' + item.rating + '</div>' + '<div class="phone">Отзывов: ' + item.reviews + '</div>' + '<div class="phone">' + item.tags + '</div>' + '<div class="website"><a href="http://' + item.website + '">' + item.website + '</a></div>' + '<div class="schedule">' + parseWeeksHTML(item.schedule) + '</div>' + '</div>' + '</div>';

        document.getElementById('places').innerHTML += DOM;
    });
}

window.onscroll = function () {
    console.log(needUpdate());
    if (needUpdate() && !loading && !limit) {
        loading = true;
        fetchNewBlocks();
    }
};

fetchNewBlocks();