$(function(){


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
            const userPopup = new mapboxgl.Popup()
                .setHTML(`<p class="mx-auto" style="font-weight: bolder">Yo!</p>`);
            userMarker.setPopup(userPopup);
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

    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());

    // Initialize the GeolocateControl.
    const geolocate = new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    });
// Add the control to the map.
    map.addControl(geolocate);
// Set an event listener that fires
// when a geolocate event occurs.
    geolocate.on('geolocate', () => {
        console.log('A geolocate event has occurred.');
    });

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
                            <img src="http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png">
                            <div id="icon1" class="icon">${data.list[0].weather[0].icon}</div>
                            <div>Description: ${data.list[0].weather[0].description}</div>
                            <div>Wind: ${data.list[8].wind.speed} ${(windCardinalDirection(data.list[0].wind.deg))}</div>`)
            $('#card2').append(`<div>${formatTime(data.list[8].dt)}</div>
                            <div>Temp: ${(data.list[8].main.temp)} F</div>
                            <div>Pressure: ${data.list[8].main.pressure}</div>
                            <img src="http://openweathermap.org/img/w/${data.list[8].weather[0].icon}.png">
                            <div id="icon2" class="icon">${data.list[8].weather[0].icon}</div>
                            <div>Description: ${data.list[8].weather[0].description}</div>
                            <div>Wind: ${data.list[8].wind.speed} ${(windCardinalDirection(data.list[8].wind.deg))}</div>`)
            $('#card3').append(`<div>${formatTime(data.list[16].dt)}</div>
                            <div>Temp: ${(data.list[16].main.temp)} F</div>
                            <div>Pressure: ${data.list[16].main.pressure}</div>
                            <img src="http://openweathermap.org/img/w/${data.list[16].weather[0].icon}.png">
                            <div id="icon3" class="icon">${data.list[16].weather[0].icon}</div>
                            <div>Description: ${data.list[16].weather[0].description}</div>
                            <div>Wind: ${data.list[16].wind.speed} ${(windCardinalDirection(data.list[8].wind.deg))}</div>`)
            $('#card4').append(`<div>${formatTime(data.list[24].dt)}</div>
                            <div>Temp: ${(data.list[24].main.temp)} F</div>
                            <div>Pressure: ${data.list[24].main.pressure}</div>
                            <img src="http://openweathermap.org/img/w/${data.list[24].weather[0].icon}.png">
                            <div id="icon4" class="icon">${data.list[24].weather[0].icon}</div>
                            <div>Description: ${data.list[24].weather[0].description}</div>
                            <div>Wind: ${data.list[24].wind.speed} ${(windCardinalDirection(data.list[8].wind.deg))}</div>`)
            $('#card5').append(`<div>${formatTime(data.list[32].dt)}</div>
                            <div>Temp: ${(data.list[32].main.temp)} F</div>
                            <div>Pressure: ${data.list[32].main.pressure}</div>
                            <img src="http://openweathermap.org/img/w/${data.list[32].weather[0].icon}.png">
                            <div id="icon5" class="icon">${data.list[32].weather[0].icon}</div>
                            <div>Description: ${data.list[32].weather[0].description}</div>
                            <div>Wind: ${data.list[32].wind.speed} ${(windCardinalDirection(data.list[8].wind.deg))}</div>`)

        });


        // let iconData1 = $(document.getElementById('icon1').innerText);
        // iconData1.addEventListener('click', function (){
        //
        //     if (iconData1.innerText === '11d'){
        //         $('#card1').css().backgroundImage='img/thunderstorm-11d.jpeg';
        //     } else if (iconData1.innerText === '09d'){
        //         $('#card1').css().backgroundImage='img/drizzle-09d.jpeg';
        //     } else if (iconData1.innerText === '10d'){
        //         $('#card1').css().backgroundImage='img/rain-10d.jpeg';
        //     } else if (iconData1.innerText === '13d'){
        //         $('#card1').css().backgroundImage='img/freezing-rain-13d.jpeg';
        //     } else if (iconData1.innerText === '50d'){
        //         $('#card1').css().backgroundImage='img/atmosphere-50d.jpeg';
        //     } else if (iconData1.innerText === '01d' || '01n'){
        //         $('#card1').css().backgroundImage='img/clear-sky-01d-01n.jpeg';
        //     } else if (iconData1.innerText === '02d' || '02n'){
        //         $('#card1').css().backgroundImage='img/cloud-02d-02n.jpeg';
        //     } else if (iconData1.innerText === '03d' || '03n'){
        //         $('#card1').css().backgroundImage='img/cloud-03d-03n.jpeg';
        //     } else if (iconData1.innerText === '04d' || '04n'){
        //         $('#card1').css().backgroundImage='img/cloud-04d-04n.jpeg';
        //     }
        // })
        //
        // const iconData2 = $(document.getElementById('icon2').innerText);
        // iconData2.css('background-image', function (e){
        //     e.preventDefault();
        //     if (iconData2.innerText === '11d'){
        //         $('#card2').css().backgroundImage='img/thunderstorm-11d.jpeg';
        //     } else if (iconData2.innerText === '09d'){
        //         $('#card2').css().backgroundImage='img/drizzle-09d.jpeg';
        //     } else if (iconData2.innerText === '10d'){
        //         $('#card2').css().backgroundImage='img/rain-10d.jpeg';
        //     } else if (iconData2.innerText === '13d'){
        //         $('#card2').css().backgroundImage='img/freezing-rain-13d.jpeg';
        //     } else if (iconData2.innerText === '50d'){
        //         $('#card2').css().backgroundImage='img/atmosphere-50d.jpeg';
        //     } else if (iconData2.innerText === '01d' || '01n'){
        //         $('#card2').css().backgroundImage='img/clear-sky-01d-01n.jpeg';
        //     } else if (iconData2.innerText === '02d' || '02n'){
        //         $('#card2').css().backgroundImage='img/cloud-02d-02n.jpeg';
        //     } else if (iconData2.innerText === '03d' || '03n'){
        //         $('#card2').css().backgroundImage='img/cloud-03d-03n.jpeg';
        //     } else if (iconData2.innerText === '04d' || '04n'){
        //         $('#card2').css().backgroundImage='img/cloud-04d-04n.jpeg';
        //     }
        // })
        //
        // const iconData3 = $(document.getElementById('icon3').innerText);
        // iconData3.css('background-image', function (e){
        //     e.preventDefault();
        //     if (iconData3.innerText === '11d'){
        //         $('#card3').css().backgroundImage='img/thunderstorm-11d.jpeg';
        //     } else if (iconData3.innerText === '09d'){
        //         $('#card3').css().backgroundImage='img/drizzle-09d.jpeg';
        //     } else if (iconData3.innerText === '10d'){
        //         $('#card3').css().backgroundImage='img/rain-10d.jpeg';
        //     } else if (iconData3.innerText === '13d'){
        //         $('#card3').css().backgroundImage='img/freezing-rain-13d.jpeg';
        //     } else if (iconData3.innerText === '50d'){
        //         $('#card3').css().backgroundImage='img/atmosphere-50d.jpeg';
        //     } else if (iconData3.innerText === '01d' || '01n'){
        //         $('#card3').css().backgroundImage='img/clear-sky-01d-01n.jpeg';
        //     } else if (iconData3.innerText === '02d' || '02n'){
        //         $('#card3').css().backgroundImage='img/cloud-02d-02n.jpeg';
        //     } else if (iconData3.innerText === '03d' || '03n'){
        //         $('#card3').css().backgroundImage='img/cloud-03d-03n.jpeg';
        //     } else if (iconData3.innerText === '04d' || '04n'){
        //         $('#card3').css().backgroundImage='img/cloud-04d-04n.jpeg';
        //     }
        // })
        //
        // const iconData4 = $(document.getElementById('icon4').innerText);
        // iconData4.css('background-image', function (e){
        //     e.preventDefault();
        //     if (iconData4.innerText === '11d'){
        //         $('#card4').css().backgroundImage='img/thunderstorm-11d.jpeg';
        //     } else if (iconData4.innerText === '09d'){
        //         $('#card4').css().backgroundImage='img/drizzle-09d.jpeg';
        //     } else if (iconData4.innerText === '10d'){
        //         $('#card4').css().backgroundImage='img/rain-10d.jpeg';
        //     } else if (iconData4.innerText === '13d'){
        //         $('#card4').css().backgroundImage='img/freezing-rain-13d.jpeg';
        //     } else if (iconData4.innerText === '50d'){
        //         $('#card4').css().backgroundImage='img/atmosphere-50d.jpeg';
        //     } else if (iconData4.innerText === '01d' || '01n'){
        //         $('#card4').css().backgroundImage='img/clear-sky-01d-01n.jpeg';
        //     } else if (iconData4.innerText === '02d' || '02n'){
        //         $('#card4').css().backgroundImage='img/cloud-02d-02n.jpeg';
        //     } else if (iconData4.innerText === '03d' || '03n'){
        //         $('#card4').css().backgroundImage='img/cloud-03d-03n.jpeg';
        //     } else if (iconData4.innerText === '04d' || '04n'){
        //         $('#card4').css().backgroundImage='img/cloud-04d-04n.jpeg';
        //     }
        // })
        //
        // const iconData5 = $(document.getElementById('icon5').innerText);
        // iconData5.css('background-image', function (e){
        //     e.preventDefault();
        //     if (iconData5.innerText === '11d'){
        //         $('#card5').css().backgroundImage='img/thunderstorm-11d.jpeg';
        //     } else if (iconData5.innerText === '09d'){
        //         $('#card5').css().backgroundImage='img/drizzle-09d.jpeg';
        //     } else if (iconData5.innerText === '10d'){
        //         $('#card5').css().backgroundImage='img/rain-10d.jpeg';
        //     } else if (iconData5.innerText === '13d'){
        //         $('#card5').css().backgroundImage='img/freezing-rain-13d.jpeg';
        //     } else if (iconData5.innerText === '50d'){
        //         $('#card5').css().backgroundImage='img/atmosphere-50d.jpeg';
        //     } else if (iconData5.innerText === '01d' || '01n'){
        //         $('#card5').css().backgroundImage='img/clear-sky-01d-01n.jpeg';
        //     } else if (iconData5.innerText === '02d' || '02n'){
        //         $('#card5').css().backgroundImage='img/cloud-02d-02n.jpeg';
        //     } else if (iconData5.innerText === '03d' || '03n'){
        //         $('#card5').css().backgroundImage='img/cloud-03d-03n.jpeg';
        //     } else if (iconData5.innerText === '04d' || '04n'){
        //         $('#card5').css().backgroundImage='img/cloud-04d-04n.jpeg';
        //     }
        // })
    });

    // document.getElementById('changeCardsBtn').addEventListener('click', function (e){
    //     e.preventDefault();
    //     console.log("yo")
    //     let iconId = document.getElementsByClassName('.icon');
    //     for (let i = 0; i < iconId.length; i++){
    //         console.log(iconId[i]);
    //     }
    //     // $(".icon").each(function(index, element){
    //     //     console.log(element);
    //     // });
    //
    //     console.log(iconId);
    // });


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
                            <img src="http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png">
                            <div id="icon1" class="icon">${data.list[0].weather[0].icon}</div>
                            <div>Description: ${data.list[0].weather[0].description}</div>
                            <div>Wind: ${data.list[8].wind.speed} ${(windCardinalDirection(data.list[0].wind.deg))}</div>`)
            $('#card2').append(`<div>${formatTime(data.list[8].dt)}</div>
                            <div>Temp: ${(data.list[8].main.temp)} F</div>
                            <div>Pressure: ${data.list[8].main.pressure}</div>
                            <img src="http://openweathermap.org/img/w/${data.list[8].weather[0].icon}.png">
                            <div id="icon2" class="icon">${data.list[8].weather[0].icon}</div>
                            <div>Description: ${data.list[8].weather[0].description}</div>
                            <div>Wind: ${data.list[8].wind.speed} ${(windCardinalDirection(data.list[8].wind.deg))}</div>`)
            $('#card3').append(`<div>${formatTime(data.list[16].dt)}</div>
                            <div>Temp: ${(data.list[16].main.temp)} F</div>
                            <div>Pressure: ${data.list[16].main.pressure}</div>
                            <img src="http://openweathermap.org/img/w/${data.list[16].weather[0].icon}.png">
                            <div id="icon3" class="icon">${data.list[16].weather[0].icon}</div>
                            <div>Description: ${data.list[16].weather[0].description}</div>
                            <div>Wind: ${data.list[16].wind.speed} ${(windCardinalDirection(data.list[8].wind.deg))}</div>`)
            $('#card4').append(`<div>${formatTime(data.list[24].dt)}</div>
                            <div>Temp: ${(data.list[24].main.temp)} F</div>
                            <div>Pressure: ${data.list[24].main.pressure}</div>
                            <img src="http://openweathermap.org/img/w/${data.list[24].weather[0].icon}.png">
                            <div id="icon4" class="icon">${data.list[24].weather[0].icon}</div>
                            <div>Description: ${data.list[24].weather[0].description}</div>
                            <div>Wind: ${data.list[24].wind.speed} ${(windCardinalDirection(data.list[8].wind.deg))}</div>`)
            $('#card5').append(`<div>${formatTime(data.list[32].dt)}</div>
                            <div>Temp: ${(data.list[32].main.temp)} F</div>
                            <div>Pressure: ${data.list[32].main.pressure}</div>
                            <img src="http://openweathermap.org/img/w/${data.list[32].weather[0].icon}.png">
                            <div id="icon5" class="icon">${data.list[32].weather[0].icon}</div>
                            <div>Description: ${data.list[32].weather[0].description}</div>
                            <div>Wind: ${data.list[32].wind.speed} ${(windCardinalDirection(data.list[8].wind.deg))}</div>`)


            document.getElementById('changeCardsBtn').addEventListener('click', function (e){
                e.preventDefault();
                // console.log('yo')
                // console.log($("#icon5").text());
                // console.log("yo")
                let iconId = document.getElementsByClassName('.icon');
                for (let i = 0; i < iconId.length; i++){
                    console.log(iconId[i]);
                }
                $(".icon").each(function(index, element){
                    console.log($(this).text());
                    let code = $(this).text();
                    if (code === '11d'){
                        $(this).parent().parent().css('background-image', 'url("img/thunderstorm-11d.jpeg")');
                    } else if (code === '09d'){
                        $(this).parent().parent().css('background-image', 'url("img/drizzle-09d.jpeg")');
                    } else if (code === '10d') {
                        $(this).parent().parent().css('background-image', 'url("img/rain-10d.jpeg")');
                    } else if (code === '13d') {
                        $(this).parent().parent().css('background-image', 'url("img/freezing-rain-13d.jpeg")');
                    } else if (code === '50d'){
                        $(this).parent().parent().css('background-image', 'url("img/atmosphere-50d.jpeg")');
                    } else if (code === '01d' || '01n'){
                        $(this).parent().parent().css('background-image', 'url("img/clear-sky-01d-01n.jpeg")');
                    } else if (code === '02d' || '02n'){
                        $(this).parent().parent().css('background-image', 'url("img/cloud-02d-02n.jpeg")');
                    } else if (code === '03d' || '03n'){
                        $(this).parent().parent().css('background-image', 'url("img/cloud-03d-03n.jpeg")');
                    } else if (code === '04d' || '04n'){
                        $(this).parent().parent().css('background-image', 'url("img/cloud-04d-04n.jpeg")');
                    }
                })
            });

        });




    // })
    // iconData1.css('background-image', function (e){
    //     e.preventDefault();
    //     if (iconData1.innerText === '11d'){
    //         $('#card1').css().backgroundImage='img/thunderstorm-11d.jpeg';
    //     } else if (iconData1.innerText === '09d'){
    //         $('#card1').css().backgroundImage='img/drizzle-09d.jpeg';
    //     } else if (iconData1.innerText === '10d'){
    //         $('#card1').css().backgroundImage='img/rain-10d.jpeg';
    //     } else if (iconData1.innerText === '13d'){
    //         $('#card1').css().backgroundImage='img/freezing-rain-13d.jpeg';
    //     } else if (iconData1.innerText === '50d'){
    //         $('#card1').css().backgroundImage='img/atmosphere-50d.jpeg';
    //     } else if (iconData1.innerText === '01d' || '01n'){
    //         $('#card1').css().backgroundImage='img/clear-sky-01d-01n.jpeg';
    //     } else if (iconData1.innerText === '02d' || '02n'){
    //         $('#card1').css().backgroundImage='img/cloud-02d-02n.jpeg';
    //     } else if (iconData1.innerText === '03d' || '03n'){
    //         $('#card1').css().backgroundImage='img/cloud-03d-03n.jpeg';
    //     } else if (iconData1.innerText === '04d' || '04n'){
    //         $('#card1').css().backgroundImage='img/cloud-04d-04n.jpeg';
    //     }
    // })














})