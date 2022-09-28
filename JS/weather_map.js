$(function(){
    // $.get("https://api.openweathermap.org/data/2.5/onecall", {
    //     APPID: OPEN_WEATHER_APPID,
    //     lat: 29.423017,
    //     lon: -98.48527,
    //     // q:     "San Antonio, US",
    //     units: "imperial"
    // }).done(function(data) {
    //     console.log(data);
    // });

    // $.get("https://api.openweathermap.org/data/2.5/forecast", {
    //     APPID: OPEN_WEATHER_APPID,
    //     lat:    29.423017,
    //     lon:   -98.48527,
    //     units: "imperial"
    // }).done(function(data) {
    //     console.log(data);
    //     console.log(data.city.population);
    //     console.log(data.list[0].visibility);
    //     data.list.forEach((forecast, index) =>{
    //         if (index < 5){
    //             console.log(forecast);
    //         }
    //     })
    // });

    function windCardinalDirection(degrees){
        let cardinalDirection = '';
        if ((degrees > 348.75 && degrees <= 360) || (degrees >=0 && degrees <= 11.25)){
            cardinalDirection = "N";
        } else if (degrees > 11.25 && degrees  <= 33.75) {
            cardinalDirection = "NNE";
        } else if (degrees > 33.75 && degrees <= 56.25) {
            cardinalDirection = "NE";
        } else if (degrees > 56.25 && degrees <= 78.75) {
            cardinalDirection = "ENE";
        } else if (degrees > 78.75 && degrees <= 101.25) {
            cardinalDirection = "E";
        } else if (degrees > 101.25 && degrees <= 123.75) {
            cardinalDirection = "ESE";
        } else if (degrees > 123.75 && degrees <= 146.25) {
            cardinalDirection = "SE";
        } else if (degrees > 146.25 && degrees <= 168.75) {
            cardinalDirection = "SSE";
        } else if (degrees > 168.75 && degrees <= 191.25) {
            cardinalDirection = "S";
        } else  if (degrees > 191.25 && degrees <= 213.75) {
            cardinalDirection = "SSW";
        } else if (degrees > 213.75 && degrees <= 236.25)  {
            cardinalDirection = "SW";
        } else if (degrees > 236.25 && degrees <= 258.75) {
            cardinalDirection = "WSW";
        } else if (degrees > 258.75 && degrees <= 281.25) {
            cardinalDirection = "W";
        } else if (degrees > 281.25 && degrees <= 303.75) {
            cardinalDirection = "WNW";
        } else if (degrees > 303.75 && degrees <= 326.25) {
            cardinalDirection = "NW";
        } else if (degrees > 326.75 && degrees <= 348.75) {
            cardinalDirection = "NNW";
        }
        return cardinalDirection;
    }


    function appendLeadingZeroes(n){
        if(n <= 9){
            return "0" + n;
        }
        return n;
    }

    const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    let lon = -98.48527;
    let lat = 29.423017;
    function formatTime(timeStamp){
        let dateTime = new Date(timeStamp * 1000);
        let year = dateTime.getFullYear();
        let month = months[dateTime.getMonth()];
        let day = dateTime.getDate();
        let hour = appendLeadingZeroes(dateTime.getHours());
        let minutes = appendLeadingZeroes(dateTime.getMinutes());
        let seconds = appendLeadingZeroes(dateTime.getSeconds());
        let formattedDateTime = month + " " + day + " " + year + " " + hour + ":" + minutes + ":" + seconds;
        return formattedDateTime;
    }
    $.get
    $.get("http://api.openweathermap.org/data/2.5/weather", {
        APPID: OPEN_WEATHER_APPID,
        lat: 29.423017,
        lon: -98.48527,
        units: "imperial"
    }).done(function(data) {
        console.log('current weather:')
        console.log(data);
        console.log(data.main.temp);
        console.log(data.wind.speed);
        console.log(windCardinalDirection(data.wind.deg));
        // $('#card1').append(`
        //      <div>
        //             <div>Current Temp: ${data.main.temp} F</div>
        //             <div>Pressure: ${data.main.pressure}</div>
        //             <div>Description: ${data.weather[0].description}</div>
        //             <div>Wind: ${data.wind.speed} ${(windCardinalDirection(data.wind.deg))}</div>
        //     </div>`);

        // $('#card2').append(`<div>Temperature: ${}</div>`)
    });
    mapboxgl.accessToken = 'pk.eyJ1IjoidGhlY2VvMTk5OSIsImEiOiJjbDhlcHB2d2swOGhsM3VueWNuOG41dWo0In0.gpGbmu7nkA4adLY9QNfGGg';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        // 29.472187086495005, -98.47108765637668
        center: [-98.47108765637668, 29.472187086495005], // starting position [lng, lat]
        zoom: 7, // starting zoom
        projection: 'globe' // display the map as a 3D globe
    });

    map.on('style.load', () => {
        map.setFog({}); // Set the default atmosphere style
        console.log($('#map').innerHTML);
    });

    let coords;
    function getCoords(address, token) {
        geocode(address, token).then(function (coordinates) {
            console.log(coordinates);
            coords = coordinates;
        })
    }

    document.getElementById('setMarkerButton').addEventListener('click', function (e){
        e.preventDefault();
        const address = document.getElementById('setMarker').value;
        console.log(address);
        geocode(address, MAPBOX_API_TOKEN).then(function (coordinates){
            const userMarker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
            map.setCenter(coordinates);
        });
    });

    // document.querySelector('map').addEventListener('click', function (e){
    //     e.preventDefault();
    //
    // })
    //
    // document.getElementsByClassName('mapboxgl-map')[0].addEventListener('click', function (e){
    //     e.preventDefault();
    //     console.log("map:" + map);
    //     console.log("map.getMapId:" + map._getMapId())
    // })


    map.on('click', (e) => {
        console.log(e);
        console.log("e.lngLat: " + e.lngLat);
        $.get("https://api.openweathermap.org/data/2.5/forecast/", {
            APPID: OPEN_WEATHER_APPID,
            lat: e.lngLat.lat,
            lon: e.lngLat.lng,
            units: "imperial"
        }).done(function (data) {
            console.log("forecasts:")
            console.log(data)
            console.log(formatTime(data.list[0].dt));
            $('#card1').html("");
            $('#card2').html("");
            $('#card3').html("");
            $('#card4').html("");
            $('#card5').html("");

            $('#card1').append(`<div>${formatTime(data.list[0].dt)}</div>
                            <div>Current Temp: ${(data.list[0].main.temp)} F</div>
                            <div>Pressure: ${data.list[0].main.pressure}</div>
                            <div>${data.list[0].weather[0].icon}</div>
                            <div>Description: ${data.list[0].weather[0].description}</div>
                            <div>Wind: ${data.list[8].wind.speed} ${(windCardinalDirection(data.list[0].wind.deg))}</div>`)
            $('#card2').append(`<div>${formatTime(data.list[8].dt)}</div>
                            <div>Temp: ${(data.list[8].main.temp)} F</div>
                            <div>Pressure: ${data.list[8].main.pressure}</div>
                            <div>${data.list[8].weather[0].icon}</div>
                            <div>Description: ${data.list[8].weather[0].description}</div>
                            <div>Wind: ${data.list[8].wind.speed} ${(windCardinalDirection(data.list[8].wind.deg))}</div>`)
            $('#card3').append(`<div>${formatTime(data.list[16].dt)}</div>
                            <div>Temp: ${(data.list[16].main.temp)} F</div>
                            <div>Pressure: ${data.list[16].main.pressure}</div>
                            <div>${data.list[16].weather[0].icon}</div>
                            <div>Description: ${data.list[16].weather[0].description}</div>
                            <div>Wind: ${data.list[16].wind.speed} ${(windCardinalDirection(data.list[8].wind.deg))}</div>`)
            $('#card4').append(`<div>${formatTime(data.list[24].dt)}</div>
                            <div>Temp: ${(data.list[24].main.temp)} F</div>
                            <div>Pressure: ${data.list[24].main.pressure}</div>
                            <div>${data.list[24].weather[0].icon}</div>
                            <div>Description: ${data.list[24].weather[0].description}</div>
                            <div>Wind: ${data.list[24].wind.speed} ${(windCardinalDirection(data.list[8].wind.deg))}</div>`)
            $('#card5').append(`<div>${formatTime(data.list[32].dt)}</div>
                            <div>Temp: ${(data.list[32].main.temp)} F</div>
                            <div>Pressure: ${data.list[32].main.pressure}</div>
                            <div>${data.list[32].weather[0].icon}</div>
                            <div>Description: ${data.list[32].weather[0].description}</div>
                            <div>Wind: ${data.list[32].wind.speed} ${(windCardinalDirection(data.list[8].wind.deg))}</div>`)
        });
    });

        $.get("https://api.openweathermap.org/data/2.5/forecast/", {
            APPID: OPEN_WEATHER_APPID,
            lat: lat,
            lon: lon,
            units: "imperial"
        }).done(function (data) {
            console.log("forecasts:")
            console.log(data)
            console.log(formatTime(data.list[0].dt));
            $('#card1').append(`<div>${formatTime(data.list[0].dt)}</div>
                            <div>Current Temp: ${(data.list[0].main.temp)} F</div>
                            <div>Pressure: ${data.list[0].main.pressure}</div>
                            <div>${data.list[0].weather[0].icon}</div>
                            <div>Description: ${data.list[0].weather[0].description}</div>
                            <div>Wind: ${data.list[8].wind.speed} ${(windCardinalDirection(data.list[0].wind.deg))}</div>`)
            $('#card2').append(`<div>${formatTime(data.list[8].dt)}</div>
                            <div>Temp: ${(data.list[8].main.temp)} F</div>
                            <div>Pressure: ${data.list[8].main.pressure}</div>
                            <div>${data.list[8].weather[0].icon}</div>
                            <div>Description: ${data.list[8].weather[0].description}</div>
                            <div>Wind: ${data.list[8].wind.speed} ${(windCardinalDirection(data.list[8].wind.deg))}</div>`)
            $('#card3').append(`<div>${formatTime(data.list[16].dt)}</div>
                            <div>Temp: ${(data.list[16].main.temp)} F</div>
                            <div>Pressure: ${data.list[16].main.pressure}</div>
                            <div>${data.list[16].weather[0].icon}</div>
                            <div>Description: ${data.list[16].weather[0].description}</div>
                            <div>Wind: ${data.list[16].wind.speed} ${(windCardinalDirection(data.list[8].wind.deg))}</div>`)
            $('#card4').append(`<div>${formatTime(data.list[24].dt)}</div>
                            <div>Temp: ${(data.list[24].main.temp)} F</div>
                            <div>Pressure: ${data.list[24].main.pressure}</div>
                            <div>${data.list[24].weather[0].icon}</div>
                            <div>Description: ${data.list[24].weather[0].description}</div>
                            <div>Wind: ${data.list[24].wind.speed} ${(windCardinalDirection(data.list[8].wind.deg))}</div>`)
            $('#card5').append(`<div>${formatTime(data.list[32].dt)}</div>
                            <div>Temp: ${(data.list[32].main.temp)} F</div>
                            <div>Pressure: ${data.list[32].main.pressure}</div>
                            <div>${data.list[32].weather[0].icon}</div>
                            <div>Description: ${data.list[32].weather[0].description}</div>
                            <div>Wind: ${data.list[32].wind.speed} ${(windCardinalDirection(data.list[8].wind.deg))}</div>`)
        });






})