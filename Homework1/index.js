navigator.geolocation.getCurrentPosition(updateLocation, handleError);

function updateLocation(position) {
    var $ = function (selector) {
        return document.getElementById(selector);
    }

    $("latitude").innerHTML = position.coords.latitude;
    $("longitude").innerHTML = position.coords.longitude;
    $("accuracy").innerHTML = position.coords.accuracy;
    $("altitude").innerHTML = position.coords.altitude;
    $("altitudeAccuracy").innerHTML = position.coords.altitudeAccuracy;
    $("heading").innerHTML = position.coords.heading;
    $("speed").innerHTML = position.coords.speed;
}

function handleError(error) {
    switch (error.code) {
        case 0:
            updateStatus("При попытке определить местоположение возникала ошибка: " + error.message);
            break;
        case 1:
            updateStatus("Пользователь запретил получение данных о местоположении.");
            break;
        case 2:
            updateStatus("Браузеру не удалось определить местоположение: " + error.message);
            break;
        case 3:
            updateStatus("Истекло доступное время ожидания.");
            break;
    }
}

function updateStatus(message) {
    document.getElementById("status").innerHTML = message;
}